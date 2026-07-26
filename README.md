# gzzio1989.github.io — G'zzio の入口サイト

`https://gzzio1989.github.io/` として公開される、製品一覧（ポータル）と製品ページのリポジトリです。

## 公開のしかた（最初の1回だけ）

1. GitHub で **`gzzio1989.github.io`** という名前のリポジトリを新規作成（この名前でないとルート公開になりません）
2. このフォルダの中身をそのまま push
3. **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** を選ぶ
4. 数分で `https://gzzio1989.github.io/` が開きます

> `.nojekyll` を置いてあるので、GitHub 側の Jekyll 処理はスキップされます（`assets` フォルダがそのまま配信されます）。

## 中身

```
index.html                     入口ページ（製品カードを並べたもの）
apps/vocalgzzio/index.html     ボーカルグッジオ
apps/bandfixgzzio/index.html   バンドフィックスグッジオ
apps/honyakubridge/index.html  ほんやくブリッジ
apps/diskgzzio/index.html      ディスクグッジオ
assets/site.css                共通スタイル（配色・カード・ボタン）
assets/site.js                 共通スクリプト（日英切替・出現アニメ）
assets/MochiyPopOne.ttf        表示用フォント（サイトの文字だけのサブセット）
assets/icon.png                ファビコン・ヘッダーのアイコン
assets/puniguji.png            マスコット（ぷにぐじ）
```

### ボーカルグッジオのページについて（重要）

もともと `https://gzzio1989.github.io/`（＝このリポジトリのルート `index.html`）が
ボーカルグッジオの製品ページでした。入口ページを作るにあたり、
**製品ページは `apps/vocalgzzio/index.html` へ移動**し、ルートは入口ページになっています。

- 旧URL `https://gzzio1989.github.io/` を開いた人は、入口ページに着きます（404にはならず、カードから1クリックで製品ページへ）。
- 新しい製品ページの URL は `https://gzzio1989.github.io/apps/vocalgzzio/` です。

製品ページの**原本は `gzzio1989/VocalGzzio` リポジトリの `docs/index.html`** です。
リリースのたびにそちらを更新し、**このリポジトリの `apps/vocalgzzio/index.html` へコピー**してください
（1ファイル完結・外部ファイル参照ゼロなので、コピーするだけで動きます）。

## 製品を追加するとき

1. `apps/<小文字の製品名>/index.html` を作る
   → いちばん近い既存ページ（例: `apps/diskgzzio/index.html`）をコピーして中身を書き換えるのが早いです
2. `index.html` の `<div class="cards">` の中に `<article class="card">` を1つ足す
   → `style="--accent:var(--◯◯)"` で色が変わります。使える色は
   `--mint` / `--grape` / `--soda` / `--mango` / `--straw` / `--peach` / `--melon`
3. 新しい漢字を使ったら、フォントのサブセットを作り直す（下記）

`assets/site.css` と `assets/site.js` は触らなくて大丈夫です。

## フォントのサブセットを作り直す

`assets/MochiyPopOne.ttf` は**このサイトに出てくる文字だけ**を残した軽量版です。
新しい漢字を使うと、その字だけ別のフォントで表示されてしまうので、追加したら作り直してください。

```bash
pip install fonttools
python tools/make_site_font.py <MochiyPopOne-Regular.ttf のパス>
```

フル版フォントは https://github.com/google/fonts/tree/main/ofl/mochiypopone から取得できます（SIL OFL 1.1）。
再配布するときは `assets/MochiyPopOne_OFL.txt` を必ず一緒に残してください。

## ダウンロードリンクについて

各製品の「ダウンロード」ボタンは `https://github.com/gzzio1989/<製品名>/releases/latest` を指しています。
リポジトリ名が違う場合や、まだリリースが無い場合は、各 HTML の該当箇所を直してください
（`releases/latest` で検索すると見つかります）。

## 日本語 / English の切替

本文は `<span class="ja">日本語</span><span class="en">English</span>` の形で並べて書き、
CSS で片方を隠しています。ヘッダーの切替ボタンは選択をブラウザに憶えさせるので、
次に開いたときも同じ言語で表示されます。初回はブラウザの言語設定から推測します。
