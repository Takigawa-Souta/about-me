/**
 * 画像アセットの一元管理ファイル
 * 
 * 全ての画像ファイルをカテゴリ別に整理し、
 * 型安全なインポートを提供します。
 * 
 * @example
 * ```typescript
 * // カテゴリ別インポート
 * import { umaMusumeImages, kamenRiderImages } from '../assets/images';
 * 
 * // 個別インポート
 * import { tama, speed, dzia } from '../assets/images';
 * 
 * // 統一インポート
 * import { images } from '../assets/images';
 * const umaImage = images.umaMusume.tama;
 * ```
 */

// ウマ娘関連画像
import uma1 from "../../images/uma1.png";
import uma2 from "../../images/uma2.png";
import uma3 from "../../images/uma3.png";
import uma4 from "../../images/uma4.png";
import uma5 from "../../images/uma5.png";
import uma6 from "../../images/uma6.png";
import uma7 from "../../images/uma7.png";
import uma8 from "../../images/uma8.png";
import uma9 from "../../images/uma9.png";
import uma10 from "../../images/uma10.png";

// 本関連画像
import book1 from "../../images/book1.png";
import book2 from "../../images/book2.png";

// 仮面ライダー関連画像
import dzia from "../../images/dzia.jpg";
import rizb from "../../images/rizb.jpg";
import rizb2 from "../../images/rizb2.jpg";
import zron from "../../images/zron.jpg";
import gzron from "../../images/gzron.jpg";
import zku from "../../images/zku.jpg";
import oum from "../../images/oum.jpg";
import sun from "../../images/sun.jpg";
import moon from "../../images/moon.jpg";
import sngk from "../../images/sngk.jpg";
import gnss from "../../images/gnss.jpg";
import oz from "../../images/oz.jpg";
import kbt_bath from "../../images/kbt&bath.jpg";
import dbr from "../../images/dbr.jpg";
import x_f from "../../images/x&f.jpg";
import skr from "../../images/skr.jpg";
import ac from "../../images/ac.jpg";
import denoue from "../../images/denoue.jpg";
import zrns from "../../images/zrns.jpg";
import mpd from "../../images/mpd.jpg";
import diend from "../../images/diend.jpg";
import breid from "../../images/breid.jpg";
import faizedge from "../../images/faizedge.jpg";
import krsar from "../../images/krsar.jpg";
import garren from "../../images/garren.jpg";
import krs from "../../images/krs.jpg";

// その他の画像
import intj from "../../images/intj.jpg";
import aistudy from "../../images/aistudy.jpg";
import contact from "../../images/contact.jpg";

// ウマ娘画像のエクスポート
export const umaMusumeImages = {
  tama: uma1,
  speed: uma2,
  fuji: uma3,
  stay: uma4,
  orufe: uma5,
  dream: uma6,
  gold: uma7,
  meno: uma8,
  nakayama: uma9,
  tachyon: uma10,
} as const;

// 本の画像のエクスポート
export const bookImages = {
  ameku_book: book1,
  ameku_book_good: book2,
} as const;

// 仮面ライダー画像のエクスポート
export const kamenRiderImages = {
  dzia,
  rizb,
  rizb2,
  zron,
  gzron,
  zku,
  oum,
  sun,
  moon,
  sngk,
  gnss,
  oz,
  kbt_bath,
  dbr,
  x_f,
  skr,
  ac,
  denoue,
  zrns,
  mpd,
  diend,
  breid,
  faizedge,
  krsar,
  garren,
  krs,
} as const;

// その他の画像のエクスポート
export const otherImages = {
  intj,
  aistudy,
  contact,
} as const;

// 全画像の統一エクスポート
export const images = {
  umaMusume: umaMusumeImages,
  books: bookImages,
  kamenRider: kamenRiderImages,
  others: otherImages,
} as const;

// 個別エクスポート（後方互換性のため）
export {
  // ウマ娘
  uma1 as tama,
  uma2 as speed,
  uma3 as fuji,
  uma4 as stay,
  uma5 as orufe,
  uma6 as dream,
  uma7 as gold,
  uma8 as meno,
  uma9 as nakayama,
  uma10 as tachyon,
  
  // 本
  book1 as ameku_book,
  book2 as ameku_book_good,
  
  // 仮面ライダー
  dzia,
  rizb,
  rizb2,
  zron,
  gzron,
  zku,
  oum,
  sun,
  moon,
  sngk,
  gnss as gnssdriver,
  oz,
  kbt_bath,
  dbr,
  x_f,
  skr as skrdriver,
  ac,
  denoue,
  zrns,
  mpd,
  diend,
  breid,
  faizedge,
  krsar,
  garren,
  krs,
  
  // その他
  intj as mbti,
  aistudy,
  contact,
};
