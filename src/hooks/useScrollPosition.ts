import { useEffect } from 'react';

/**
 * ページのスクロール位置を保持するカスタムフック
 * @param pageKey - ページを識別するためのユニークなキー
 */
export const useScrollPosition = (pageKey: string) => {
  useEffect(() => {
    // ページ読み込み時にセッションストレージからスクロール位置を取得して復元
    const savedPosition = sessionStorage.getItem(`scrollPosition-${pageKey}`);
    if (savedPosition) {
      // 少し遅延させてDOM要素が完全に読み込まれてから実行
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 100);
    }

    // スクロール位置を保存する関数
    const saveScrollPosition = () => {
      sessionStorage.setItem(`scrollPosition-${pageKey}`, String(window.scrollY));
    };

    // ページをリロードする直前に現在のスクロール位置を保存
    const handleBeforeUnload = () => {
      saveScrollPosition();
    };

    // スクロール中にも定期的に位置を保存（オプション：より確実な保存のため）
    const handleScroll = () => {
      saveScrollPosition();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll);

    // コンポーネントがアンマウントされるときにイベントリスナーを削除
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageKey]);
};
