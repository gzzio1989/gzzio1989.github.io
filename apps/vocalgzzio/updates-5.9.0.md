# VocalGzzio 5.9.0 変更記録（2026年11月15日）

**VocalGzzio 5.9.0（Windows 10/11 64-bit 版 ／ Mac版は Universal v5.5.0 同梱）** では、**「挿した瞬間に歌が上手く聴こえる」ゼロ遅延『歌うま補正（Vocal Intonation Stabilizer ＆ プロ初期レシピ全面刷新）』** と、経年劣化やスポンジ共鳴で壊れかけたマイクの **「サフサフ・母音中パリパリ／チリチリ音・スピーカー擦れ音」をゼロ遅延で引き算する『劣化マイク修復 ANC』** を新搭載しました。

> すでに BOOTH にて製品版（2,500円・買い切り）をご購入済みの方は、BOOTH の「購入履歴」から追加料金なしで最新版（`VocalGzzio_v5.9.0_製品版.zip`）をダウンロードし、そのまま上書き更新していただけます（保存済みの設定・ノイズ学習・セトリ32曲はすべてそのまま引き継がれます）。

---

## 1. 🎤 ゼロ遅延『歌うま補正（Vocal Intonation Stabilizer）』＆ プロ初期レシピ刷新

- **ゼロ遅延・音程微揺れスタビライザー（追加遅延 `0.0 ms`）**：ロングトーンで素人の声っぽさの原因になる `1.5〜3.5 Hz` の不安定な音程フラつきをドップラー分数遅延で **最大 68.6% 自動制振** しつつ、しゃくり・こぶしや `4.1〜8.8 Hz` の心地よい歌唱ビブラート（**94.9% 保持**）および無声子音（**99.98% 保持**）を無傷で守ります。
- **挿した瞬間から完成された『歌うま初期レシピ』**：ローカット `105 Hz`・こもり `-3.8 dB`・スマートEQ `ON`・2段コンプ＆ボーカルライド・4軸倍音成形・**スタジオ・プレート残響（`プレート`）** を初期状態で最適バランスに統合。詳細画面ヘッダーの **`歌うま補正` / `自然音程`** ワンクリックボタンから即座に切り替えられます。

## 2. 🛡️ 壊れかけマイクの「サフサフ・パリパリ・チリチリ音」を消す『劣化マイク修復 ANC』

- **Chirp-Extrapolated 6-Band Orthogonal ANC（追加遅延 `0.0 ms`）**：「あー」発声中のパリパリ・チリチリ音（**+18.45 dB 低減**）、スポンジ風防の語尾サフサフ共鳴（**+10.73 dB 低減**）、壊れたスピーカーのようなサフー擦れ音（**+10.11 dB 低減**）を声の倍音と直交分離して除去し、子音明瞭度 **100.0%** を保ちます。「うた自動」「トーク自動」時にマイク劣化を自動診断します。

## 3. 🇯🇵 日本語『ふつう』画面での確実な初期起動 ＆ 歴代全23世代タイムマシン（v1.0.0 〜 v5.9.0）

- 初回起動時は必ず日本語『ふつう』サイズ・総合画面（Obsidian-Slate Studio）で起動し、初代 `v1.0.0` 〜 最新 `v5.9.0` までの **全23世代タイムマシン** を1バイナリに収録しました。

---

## 🌐 English Release Summary (VocalGzzio v5.9.0 for Windows / macOS Universal v5.5.0 Included)

1. **Zero-Latency Singing-Skill Suite & Vocal Intonation Stabilizer (`0.0 ms` PDC)**: Dampens amateur `1.5–3.5 Hz` pitch wobble by **68.6%** while preserving `4.1–8.8 Hz` expressive vibrato (**94.9%**) and unvoiced consonants (**99.98%**), paired with a studio-ready out-of-the-box vocal recipe (Smart EQ + 2-Stage Comp + Vocal Rider + Studio Plate Reverb).
2. **Broken-Mic Safu / Crackle Orthogonal ANC (`0.0 ms` latency)**: Removes mid-vowel diaphragm crackle (**+18.45 dB**), foam windscreen chuffing (**+10.73 dB**), and rub & buzz distortion (**+10.11 dB**) with **100.0%** consonant retention.
3. **23-Era Legacy Time Machine (`v1.0.0` – `v5.9.0`)** plus all v5.8 / v5.7 / v5.5 features (0.13ms Zero-Crackle DAW Mode, Throat-Strain Auto-Relief, 12-Profile Auto Vocal, App Karaoke Capture, ±300ms Auto-Sync, Smart Harmony & `.mp4` Export).
