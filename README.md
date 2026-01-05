# Markdown Converter App

このプロジェクトは、Markdownテキストをリッチテキストに変換し、またその逆も行うことができるアプリケーションです。ユーザーはMarkdown形式でテキストを入力し、リアルタイムでリッチテキストとして表示されるのを確認できます。

## 機能

- MarkdownからHTMLへの変換
- HTMLからMarkdownへの変換
- リアルタイムプレビュー
- コピー機能

## ファイル構成

- `public/index.html`: アプリケーションのHTMLエントリーポイント
- `src/components/Converter.tsx`: Markdown入力とリッチテキスト出力を管理するコンポーネント
- `src/components/MarkdownInput.tsx`: Markdownテキストを入力するためのコンポーネント
- `src/components/RichTextOutput.tsx`: 変換されたリッチテキストを表示するコンポーネント
- `src/components/Toolbar.tsx`: 操作ボタンを提供するツールバーコンポーネント
- `src/utils/markdownToHtml.ts`: MarkdownをHTMLに変換するユーティリティ
- `src/utils/htmlToMarkdown.ts`: HTMLをMarkdownに変換するユーティリティ
- `src/App.tsx`: アプリケーションのメインコンポーネント
- `src/index.tsx`: アプリケーションのエントリーポイント
- `src/styles.css`: アプリケーションのスタイルシート
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