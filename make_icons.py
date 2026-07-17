# -*- coding: utf-8 -*-
"""Gera os ícones do PWA — nascer do sol sobre horizonte (tema 'amanhecer')."""
from PIL import Image, ImageDraw
import os, math

OUT = os.path.join(os.path.dirname(__file__), "docs", "icons")
os.makedirs(OUT, exist_ok=True)

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i]-a[i])*t) for i in range(3))

def draw_icon(size, maskable=False):
    S = size * 4  # supersample
    img = Image.new("RGBA", (S, S), (0,0,0,0))
    d = ImageDraw.Draw(img)

    pad = int(S*0.12) if maskable else 0          # área segura p/ maskable
    r = S - 2*pad
    x0, y0 = pad, pad

    # fundo arredondado com céu do amanhecer (vertical gradient)
    sky_top = (0x2B, 0x1B, 0x36)   # roxo-noite
    sky_mid = (0xC9, 0x5B, 0x3B)   # laranja queimado
    sky_bot = (0xF2, 0xC1, 0x66)   # dourado
    radius = int(r*0.22)
    grad = Image.new("RGBA", (r, r), (0,0,0,0))
    gd = ImageDraw.Draw(grad)
    for y in range(r):
        t = y / r
        c = lerp(sky_top, sky_mid, min(t*1.6,1)) if t < 0.62 else lerp(sky_mid, sky_bot, (t-0.62)/0.38)
        gd.line([(0,y),(r,y)], fill=c+(255,))
    # máscara arredondada
    mask = Image.new("L", (r, r), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0,0,r-1,r-1], radius=radius, fill=255)
    img.paste(grad, (x0,y0), mask)

    d = ImageDraw.Draw(img)
    cx = x0 + r//2
    horizon = y0 + int(r*0.66)

    # sol
    sun_r = int(r*0.17)
    sun_c = (0xFF, 0xE3, 0x9B)
    for i in range(sun_r, 0, -1):
        t = i/sun_r
        col = lerp((0xFF,0xF2,0xCC), (0xFF,0xB4,0x4D), t)
        d.ellipse([cx-i, horizon-i, cx+i, horizon+i], fill=col+(255,))

    # reflexo/raios sutis (linhas do horizonte)
    line_col = (0xF2, 0xC1, 0x66, 120)
    for k, yy in enumerate([horizon+int(r*0.06), horizon+int(r*0.12), horizon+int(r*0.19)]):
        w = int(r*(0.30 - k*0.06))
        d.rounded_rectangle([cx-w, yy, cx+w, yy+int(r*0.02)], radius=int(r*0.01), fill=line_col)

    # recorta tudo ao retângulo arredondado (para raios não vazarem)
    full_mask = Image.new("L", (S, S), 0)
    ImageDraw.Draw(full_mask).rounded_rectangle([x0,y0,x0+r-1,y0+r-1], radius=radius, fill=255)
    if maskable:
        # maskable: preenche o fundo todo (sem cantos transparentes)
        bg = Image.new("RGBA", (S,S), sky_bot+(255,))
        bg.paste(img, (0,0), img)
        img = bg
    else:
        out = Image.new("RGBA", (S,S), (0,0,0,0))
        out.paste(img, (0,0), full_mask)
        img = out

    return img.resize((size, size), Image.LANCZOS)

draw_icon(192).save(os.path.join(OUT, "icon-192.png"))
draw_icon(512).save(os.path.join(OUT, "icon-512.png"))
draw_icon(512, maskable=True).save(os.path.join(OUT, "icon-maskable-512.png"))
print("icons:", os.listdir(OUT))
