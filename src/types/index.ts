// 共通の基本型定義

// ページタイプ
export type PageType = 'home' | 'about' | 'hobby' | 'projects' | 'contact' | 'favorites';

// 共通のページプロパティ
export interface BasePageProps {
  isEnglish: boolean;
}

// ナビゲーション機能付きページプロパティ
export interface NavigatablePageProps extends BasePageProps {
  onNavigate: (page: PageType) => void;
}

// フォーム関連の型
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 画像データの型
export interface ImageData {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

// スライダー関連の型
export interface SliderProps {
  images: ImageData[];
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (index: number) => void;
  isEnglish: boolean;
}

// ウマ娘画像データの型
export interface UmaMusumeImageData {
  src: string;
  alt: string;
}

// プロジェクト/学習項目の型
export interface StudyItem {
  title: string;
  description: string;
  category?: 'current' | 'future' | 'certification';
}

// 画像カテゴリの型
export type ImageCategory = 'umaMusume' | 'books' | 'kamenRider' | 'others';

// 画像アセットの型
export interface ImageAsset {
  src: string;
  category: ImageCategory;
  filename: string;
}

// 画像コレクションの型
export interface ImageCollection {
  [key: string]: string;
}
