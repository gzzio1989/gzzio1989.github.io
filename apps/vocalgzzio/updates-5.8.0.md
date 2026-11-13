# VocalGzzio 5.8.0 変更記録（2026年11月14日）

**VocalGzzio 5.8.0（Windows 10/11 64-bit 版 ／ Mac版は Universal v5.5.0 同梱）** では、REAPER などの DAW や長時間ライブ配信における **「プツプツ音（オーディオドロップアウト）・処理落ち」の徹底排除と超低負荷化**、および **プロスタジオ・クリーンUI ＆ 全21テーマ配色の全面刷新** を行いました。

> すでに BOOTH にて製品版（2,500円・買い切り）をご購入済みの方は、BOOTH の「購入履歴」から追加料金なしで最新版（`VocalGzzio_v5.8.0_Windows_Full.zip`）をダウンロードし、そのまま上書き更新していただけます（保存済みの設定・ノイズ学習・セトリ32曲はすべてそのまま引き継がれます）。

---

## 1. REAPER / DAW 歌唱時のプツプツ音根絶 ＆ 超低負荷ライブモード（平均 0.13 ms）

- **2タップ位相ロック静止 Hermite ピッチ同期コム純化**：ピッチ変動時に起きやすかったサンプル境界の不連続ノイズを排除し、倍音間の雑音だけを滑らかに除去します。
- **無音復帰クリック防止 ＆ 完全整数分割 YIN ホップ（約2.7倍軽量化）**：息継ぎ明け・歌い出しのクリックノイズをゼロに抑え、ピッチ検出の計算負荷を約 2.7 倍軽量化しました。
- **『DAW ライブ超低負荷モード』新搭載**：`128 samples @ 48 kHz`（許容時間 2.67 ms）に対して **平均約 0.13 ms（CPU時間比 約5%）** で動作し、重いオケプロジェクトやOBS同時起動中でも音途切れを防ぎます。
- **『REAPER / DAW 音途切れ切り分け診断』新搭載**：バッファ不足・サンプルレート不一致・他プラグイン遅延・排他競合のどこに原因があるかをワンクリックで切り分け表示します。

## 2. プロスタジオ・クリーンUI ＆ 全21テーマ配色刷新（文字切れゼロ）

- **信号経路と効いているノブが一目で分かる端正なスタジオUI**：視認性を最優先したクリーンレイアウトを標準化しました（従来の風景アート装飾も「文字・見た目」からいつでも1クリックで復元できます）。
- **全21テーマ WCAG 2.1 高コントラスト厳守 ＆ 71%〜150% 全スケール文字切れゼロ**：新テーマを含む **全21種類のカラーテーマ** でコントラスト比 4.5:1 以上を確保し、ノートPCから4Kモニタまでどの表示倍率でも文字切れしないよう再設計しました。

## 3. 歴代全22世代タイムマシン対応（v1.0.0 〜 v5.8.0）＆ v5.7 / v5.6 / v5.5 全機能統合

- 初代 `v1.0.0` 〜 最新 `v5.8.0` までの **全22世代タイムマシン** を1バイナリに収録しました。
- v5.7.0 の「J-Pop 完パケ艶＆喉締めオートリリーフ」「無音免疫・12種声質カルテ『うた自動』」、v5.6.0 の「内蔵スタジオライブSE 4種」、v5.5.0 の「アプリ別カラオケ音声取込（仮想ケーブル不要）」「音ズレ1クリック自動計測（±300ms）」「伴奏コード追従ハモリ」「SNS動画（.mp4）保存」「配信ミニバー（520×115px）」もすべてそのままお使いいただけます。

---

## 🌐 English Release Summary (VocalGzzio v5.8.0 for Windows / macOS Universal v5.5.0 Included)

1. **Zero-Crackle DAW Engine & Ultra-Low-CPU Live Mode (`~0.13 ms` avg at `128 samples @ 48 kHz`)**: 2-tap phase-locked stationary Hermite pitch-sync comb filtering, silence-return anti-click guard, 2.7x lighter integer-subdivided YIN pitch tracking, and built-in **REAPER / DAW Dropout Diagnostics**.
2. **Pro-Studio Clean UI & 21 Refreshed WCAG High-Contrast Themes**: Signal-flow-first studio layout (with 1-click decorative art toggle under `Text & Look`) and zero text clipping across `71%–150%` UI scaling.
3. **22-Era Legacy Time Machine (`v1.0.0` – `v5.8.0`)** plus all v5.7 / v5.6 / v5.5 features (Throat-Strain Auto-Relief, 12-Profile Auto Vocal, 4 Studio SEs, Driverless App Karaoke Capture, ±300ms Auto-Sync, Smart Harmony & `.mp4` Export).

- **Free Trial ($0) & Full Version (¥2,500 JPY One-Time)**: https://gzzio.booth.pm/items/8764003
- **Previous Release Notes**: [updates-5.7.0.md](updates-5.7.0.md) · [updates-5.6.0.md](updates-5.6.0.md) · [updates-5.5.0.md](updates-5.5.0.md)
