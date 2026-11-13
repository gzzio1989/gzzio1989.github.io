# VocalGzzio 5.7.0 変更記録（2026年11月11日）

**VocalGzzio 5.7.0（Windows 10/11 64-bit 版 ／ Mac版は Universal v5.5.0 同梱）** では、音声学の知見とJ-Pop／歌ってみたミキシングの実践に基づき **「うた自動」の解析エンジンを根本から再構築** し、新機能 **「✨ J-Pop 完パケ艶＆喉締めオートリリーフ」**、歌唱中でも声を痩せさせず倍音間の雑音だけを引き算する **「AI 6種ノイズ指紋識別 ＆ ピッチ同期ハーモニック声抽出」**、および省メモリ軽量化を行いました。

> すでに BOOTH にて製品版（2,500円・買い切り）をご購入済みの方は、BOOTH の「購入履歴」から追加料金なしで最新版（`VocalGzzio_v5.7.0_Windows_Full.zip`）をダウンロードし、そのまま上書き更新していただけます（保存済みの設定・ノイズ学習・セトリ32曲はすべてそのまま引き継がれます）。

---

## 1. 新機能：『✨ J-Pop 完パケ艶＆喉締めオートリリーフ』

- 総合画面「2 声をつくる」ヘッダにワンクリック切替ピル（`艶補正: OFF` ➔ `✨艶補正: 歌枠` ➔ `✨艶補正: 完パケ`）を搭載しました。
- **喉締め・耳痛帯域だけの動的緩和**：ハイトーンやサビの張り上げで突出しやすい **1.08 kHz（鼻声・イキミ帯域）** と **3.88 kHz（外耳道共鳴・喉締め刺さり帯域）** を全帯域対比でリアルタイム監視し、刺さった瞬間だけ滑らかに最大 -4.8 dB 引き算します。
- **サ行をキツくしない有声母音限定シルキー艶付与**：歯擦音（無声子音）ではゼロになり、有声母音で歌っている瞬間だけ **2.95 kHz（シンガーズ・フォルマントの抜け）** と **11.5 kHz（シルク空気感）** を自然に添えます。

## 2. 『うた自動』＆ 5秒声質診断の深層再構築（無音免疫 ＆ 12種 J-Pop 声質カルテ）

- **息継ぎ・無音休符免疫（Active-Voice Gating）**：測定中に曲間の無音や息継ぎが混ざっても、平均音量が薄まってメイクアップゲインやコンプが過大化する問題を解消しました。
- **12種類の J-Pop／歌ってみた声質カルテ自動処方**：12帯域 TPT SVF スペクトルと音声学特徴量（基本周波数・声域幅・息漏れ対声門閉鎖・HNR・3kHz抜け対4.1kHz刺さり比・箱鳴り等）を同時計測し、ウィスパー型・ミックスボイス型・ベルティング型・高速滑舌ボカロ型・イケボチェスト型など **全12タイプ** から最適なEQ・コンプ・オーブ・部屋反響カット・艶モードまで一括処方します。

## 3. AI 6種ノイズパターン指紋学習 ＆ 歌唱中ピッチ同期ハーモニック声抽出

- **6種ノイズ指紋の自動識別**：空調ファン・ハム・サー音ヒス・物音パルス・環境ノイズ等6種の指紋を識別し、声の帯域を守りながらピンポイント減衰します。
- **歌唱中でも声を殺さない『ピッチ同期ハーモニック・コム声抽出』**：3次ラグランジュ非整数遅延補間コムフィルタにより、歌声の基本波と全倍音は無傷のまま通し、倍音の間で鳴っている雑音だけを最大 -10.5 dB 純化します（バラードの消え入るロングトーン語尾を保護するピアニッシモ語尾保護ブリッジ付）。

## 4. 徹底軽量化・Grammy統合マスタリング・歴代全21世代タイムマシン（v1.0.0 〜 v5.7.0）

- 重複していた内部オーケストレータ 15 インスタンスを整理してメモリ使用量を削減し、Mastering Prism に第5モード「Grammy 統合」を追加しました。
- 初代 `v1.0.0` 〜 最新 `v5.7.0` までの **全21世代タイムマシン** と **全19テーマ WCAG 2.1 コントラスト比 4.5:1 以上** を収録しています。

---

## 🌐 English Release Summary (VocalGzzio v5.7.0 for Windows / macOS Universal v5.5.0 Included)

1. **J-Pop Master Sheen & Throat-Strain Auto-Relief (`OFF` / `Live` / `Master`)**: Dynamically tames harsh `1.08 kHz` nasal strain and `3.88 kHz` ear-canal resonance up to `-4.8 dB` while adding sibilance-safe `2.95 kHz` + `11.5 kHz` silky air strictly on voiced vowels.
2. **Rebuilt `Auto Vocal` with Active-Voice Silence Immunity & 12 J-Pop Voice Profiles**: Breath/rest pauses no longer inflate makeup gain; 12-band TPT SVF + acoustic feature analysis prescribes 1 of 12 vocal profiles automatically.
3. **AI 6-Type Noise Fingerprinting & Pitch-Synchronous Harmonic Comb Extraction**: Preserves $f_0$ and all harmonics with 0.000 dB loss while attenuating inter-harmonic noise up to `-10.5 dB` during singing, with pianissimo tail protection.
4. **Memory Optimization, Grammy Unified Mastering & 21-Era Time Machine (`v1.0.0` – `v5.7.0`)**.

- **Free Trial ($0) & Full Version (¥2,500 JPY One-Time)**: https://gzzio.booth.pm/items/8764003
- **Previous Release Notes**: [updates-5.6.0.md](updates-5.6.0.md) · [updates-5.5.0.md](updates-5.5.0.md)
