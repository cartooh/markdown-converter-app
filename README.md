# Markdown Converter App

このプロジェクトは、Markdownテキストをリッチテキストに変換し、またその逆も行うことができるアプリケーションです。ユーザーはMarkdown形式でテキストを入力し、リアルタイムでリッチテキストとして表示されるのを確認できます。

## 機能

- **双方向変換**:
  - Markdownからリッチテキスト(HTML)への変換
  - リッチテキスト(HTML)からMarkdownへの変換
- **高度な編集機能**:
  - Markdown入力用ツールバー（太字、斜体、リスト、コード、リンク、表など）
  - リッチテキスト編集用ツールバー（太字、斜体、リスト、リンク、HRなど）
  - Excel等から貼り付けられた表のMarkdown変換サポート
- **UI/UX**:
  - リアルタイムプレビュー
  - 左右パネルの幅リサイズ機能（ドラッグで調整可能）
  - 表示幅の切り替え（全幅 / 中央揃え）
  - クリップボードへのコピー機能（Markdown / HTML）

## ファイル構成

- `public/index.html`: アプリケーションのHTMLエントリーポイント
- `src/components/Converter.tsx`: Markdown入力とリッチテキスト出力を管理するコンポーネント
- `src/components/MarkdownInput.tsx`: Markdownテキストを入力するためのコンポーネント（編集ツールバー付き）
- `src/components/RichTextOutput.tsx`: 変換されたリッチテキストを表示・編集するコンポーネント（編集ツールバー付き）
- `src/components/Toolbar.tsx`: メインツールバー（コピー、幅切替など）を提供するコンポーネント
- `src/utils/markdownToHtml.ts`: MarkdownをHTMLに変換するユーティリティ
- `src/utils/htmlToMarkdown.ts`: HTMLをMarkdownに変換するユーティリティ（高度なテーブル変換ロジックを含む）
- `src/App.tsx`: アプリケーションのメインコンポーネント
- `src/index.tsx`: アプリケーションのエントリーポイント
- `src/styles.css`: アプリケーションのスタイルシート
- `src/react-app-env.d.ts`: TypeScriptの型定義拡張
- `tsconfig.json`: TypeScriptの設定ファイル
- `package.json`: npmの設定ファイル

## 使用方法

1. リポジトリをクローンします。
2. 依存関係をインストールします。
   ```
   npm install
   ```
3. アプリケーションを起動します。
   ```
   npm start
   ```
4. ブラウザで `http://localhost:3000` にアクセスします。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。