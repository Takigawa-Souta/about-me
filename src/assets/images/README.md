# 画像アセット管理

このディレクトリは、プロジェクト内で使用される全ての画像アセットを一元管理します。

## 📁 ディレクトリ構造

```
src/
├── assets/
│   └── images/
│       └── index.ts          # 画像インポートの統一管理
└── images/                   # 実際の画像ファイル
    ├── uma1.png - uma10.png  # ウマ娘関連画像
    ├── book1.png - book2.png # 本関連画像
    ├── *.jpg                 # 仮面ライダー関連画像
    └── intj.jpg, aistudy.jpg # その他の画像
```

## 🎯 使用方法

### 基本的なインポート
```typescript
// 個別インポート
import { tama, speed, dzia } from '../assets/images';

// カテゴリ別インポート
import { umaMusumeImages, kamenRiderImages } from '../assets/images';

// 統一インポート
import { images } from '../assets/images';
```

### カテゴリ別アクセス
```typescript
// ウマ娘画像
const tamaImage = images.umaMusume.tama;
const speedImage = images.umaMusume.speed;

// 仮面ライダー画像
const dziaImage = images.kamenRider.dzia;
const rizbImage = images.kamenRider.rizb;

// 本の画像
const bookImage = images.books.ameku_book;
```

## 📋 画像カテゴリ

### 🐎 ウマ娘 (umaMusume)
- tama (タマモクロス)
- speed (スピードシンボル)
- fuji (フジキセキ)
- stay (ステイゴールド)
- orufe (オルフェーヴル)
- dream (ドリームジャーニー)
- gold (ゴールドシップ)
- meno (フェノーメノ)
- nakayama (ナカヤマフェスタ)
- tachyon (アグネスタキオン)

### 📚 本 (books)
- ameku_book (雨宮さん本)
- ameku_book_good (雨宮さん本 良い版)

### 🦸 仮面ライダー (kamenRider)
- dzia, rizb, zron, gzron など多数

### 🔧 その他 (others)
- mbti (INTJ画像)
- aistudy (AI学習画像)
- contact (お問い合わせ画像)

## ✅ 利点

1. **一元管理**: 全ての画像インポートが一箇所に集約
2. **型安全性**: TypeScriptによる型チェック
3. **保守性**: 画像パスの変更が容易
4. **可読性**: カテゴリ別に整理された構造
5. **再利用性**: 複数のコンポーネントで簡単に共有

## 🔄 新しい画像の追加手順

1. 画像ファイルを `src/images/` に配置
2. `src/assets/images/index.ts` に適切なカテゴリでインポートを追加
3. エクスポートセクションに追加
4. 必要に応じて新しいカテゴリを作成

## 🚀 パフォーマンス

- Tree shaking により未使用の画像は最終バンドルに含まれません
- 遅延読み込みやコード分割に対応
- Viteの最適化により効率的なバンドリング
