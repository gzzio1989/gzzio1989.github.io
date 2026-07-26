#!/usr/bin/env python3
# -*- coding: utf-8 -*-
r"""
make_site_font.py — assets/MochiyPopOne.ttf を作り直す。

このサイトの HTML に出てくる文字だけを残した軽量フォントを生成します。
新しい漢字を本文に足したときに実行してください（やらないと、その字だけ
別のフォントで表示されます）。

  pip install fonttools
  python tools/make_site_font.py <MochiyPopOne-Regular.ttf のパス>

フル版フォント: https://github.com/google/fonts/tree/main/ofl/mochiypopone
(SIL OFL 1.1 / 再配布時は assets/MochiyPopOne_OFL.txt も一緒に残すこと)
"""
import glob, os, sys
from fontTools import subset

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def collect():
    need = set()
    for p in glob.glob(os.path.join(ROOT, '**', '*.html'), recursive=True):
        with open(p, encoding='utf-8') as f:
            for ch in f.read():
                if ord(ch) > 0x7e:
                    need.add(ord(ch))
    return {c for c in need if c >= 0xA0}

def base_keep():
    keep = set(range(0x20, 0x7F))
    keep |= set(range(0x3040, 0x3100))        # かな
    keep |= set(range(0xFF01, 0xFFA0))        # 全角英数・半角カナ
    keep |= {0x3000, 0x3001, 0x3002, 0x300C, 0x300D, 0x300E, 0x300F, 0x3005, 0x301C,
             0x2018, 0x2019, 0x201C, 0x201D, 0x2026, 0x2010, 0x2013, 0x2014, 0x2015,
             0x00B7, 0x00D7, 0x00B0, 0x2190, 0x2192, 0x2212,
             0x2605, 0x2606, 0x266A, 0x2713, 0x26A0, 0x203B}
    return keep

if __name__ == '__main__':
    full = sys.argv[1] if len(sys.argv) > 1 else 'MochiyPopOne-Regular.ttf'
    if not os.path.exists(full):
        sys.exit('フル版フォントが見つかりません: ' + full)

    keep = base_keep() | collect()
    opts = subset.Options()
    opts.layout_features = ['*']
    opts.name_IDs = ['*']
    opts.notdef_outline = True
    opts.drop_tables += ['DSIG']

    font = subset.load_font(full, opts)
    ss = subset.Subsetter(opts)
    ss.populate(unicodes=keep)
    ss.subset(font)

    out = os.path.join(ROOT, 'assets', 'MochiyPopOne.ttf')
    font.save(out)
    print('%s: %d KB / %d 文字' % (out, os.path.getsize(out) // 1024, len(keep)))
