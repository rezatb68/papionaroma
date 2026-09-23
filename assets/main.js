/**
 * ==========================================================================
 * PAPION PERFUME BOUTIQUE - CORE VANILLA JAVASCRIPT
 * Ready for GitHub Pages Drag-and-Drop Deployment
 * ==========================================================================
 */

const PERFUMES_DATA = [
  {
    id: 'creed-aventus',
    slug: 'creed-aventus',
    nameFa: 'کرید اونتوس',
    nameEn: 'Creed Aventus',
    brand: 'کرید',
    brandCountry: 'فرانسه',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    gender: 'men',
    nature: 'cool',
    taste: 'تلخ و دودی میوه‌ای',
    familyFa: 'میوه‌ای چایپر و چوبی',
    concentration: 'ادو پرفیوم',
    releaseYear: 2010,
    perfumer: 'اروین و اولیویه کرید',
    descriptionFa: 'شاهکار افسانه‌ای خاندان کرید، تجسم قدرت، پیروزی و جسارت با نت‌های آناناس دودی، ترنج کالابریا و توس تاریک.',
    topNotes: ['آناناس سلطنتی', 'سیب سبز', 'ترنج سیسیلی', 'انگور سیاه'],
    heartNotes: ['چوب توس دودی', 'نعناع هندی', 'یاس مراکشی', 'رز'],
    baseNotes: ['مشک گرانبها', 'خزه بلوط', 'عنبر خاکستری', 'وانیل'],
    longevityRating: 5,
    sillageRating: 5,
    seasonSuitability: ['spring', 'summer', 'fall'],
    rating: 4.9,
    reviewsCount: 142,
    isBestSeller: true,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 290000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 680000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1290000 },
      { type: 'bottle_full', labelFa: 'شیشه کامل ۱۰۰ میل اورجینال با جعبه', volumeMl: 100, price: 21800000 }
    ]
  },
  {
    id: 'baccarat-rouge-540',
    slug: 'baccarat-rouge-540',
    nameFa: 'باکارات روژ ۵۴۰',
    nameEn: 'Baccarat Rouge 540',
    brand: 'میسون فرانسیس کورکجان',
    brandCountry: 'فرانسه',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    gender: 'unisex',
    nature: 'warm',
    taste: 'شیرین و کهربایی',
    familyFa: 'شرقی گلی و کهربایی',
    concentration: 'اکستریت د پرفیوم',
    releaseYear: 2016,
    perfumer: 'فرانسیس کورکجان',
    descriptionFa: 'درخشش کریستال سرخ باکارات با کیمیای بادام تلخ، زعفران قائنات، یاس مصری و عنبر سائل ماورایی.',
    topNotes: ['بادام تلخ مراکشی', 'زعفران ایرانی قائنات'],
    heartNotes: ['یاس گراند فلوروم', 'چوب سدر ویرجینیا'],
    baseNotes: ['عنبر سائل معدنی', 'مشک ابریشمی', 'آکوردهای چوبی'],
    longevityRating: 5,
    sillageRating: 5,
    seasonSuitability: ['fall', 'winter', 'spring'],
    rating: 4.95,
    reviewsCount: 189,
    isBestSeller: true,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 340000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 790000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1520000 },
      { type: 'bottle_full', labelFa: 'شیشه کامل ۷۰ میل اورجینال با جعبه', volumeMl: 70, price: 25200000 }
    ]
  },
  {
    id: 'tom-ford-tobacco-vanille',
    slug: 'tom-ford-tobacco-vanille',
    nameFa: 'تام فورد توباکو وانیل',
    nameEn: 'Tom Ford Tobacco Vanille',
    brand: 'تام فورد',
    brandCountry: 'ایالات متحده',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    gender: 'unisex',
    nature: 'warm',
    taste: 'شیرین، گرم و تنباکویی',
    familyFa: 'شرقی ادویه‌ای و تنباکویی',
    concentration: 'ادو پرفیوم',
    releaseYear: 2007,
    perfumer: 'اولیویه گیلوتین',
    descriptionFa: 'الهام‌گرفته از کلوپ‌های اشرافی لندن. ترکیب برگ تنباکوی مرغوب، وانیل خامه‌ای، کاکائو و میوه‌های خشک.',
    topNotes: ['برگ‌های تنباکوی طلایی', 'ادویه‌جات گرم شرقی'],
    heartNotes: ['دانه تونکا', 'شکوفه تنباکو', 'وانیل کریولوس', 'کاکائو'],
    baseNotes: ['میوه‌های خشک', 'شیره درختان و چوب جنگلی'],
    longevityRating: 5,
    sillageRating: 5,
    seasonSuitability: ['fall', 'winter'],
    rating: 4.88,
    reviewsCount: 96,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 310000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 720000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1380000 },
      { type: 'bottle_full', labelFa: 'شیشه کامل ۱۰۰ میل اورجینال با جعبه', volumeMl: 100, price: 23400000 }
    ]
  },
  {
    id: 'xerjoff-naxos',
    slug: 'xerjoff-naxos',
    nameFa: 'زرجف ۱۸۶۱ ناکسوس',
    nameEn: 'Xerjoff XJ 1861 Naxos',
    brand: 'زرجف',
    brandCountry: 'ایتالیا',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    gender: 'unisex',
    nature: 'warm',
    taste: 'شیرین با عسل و تنباکو',
    familyFa: 'آروماتیک ادویه‌ای با عسل',
    concentration: 'ادو پرفیوم',
    releaseYear: 2015,
    perfumer: 'سرجیو مومو',
    descriptionFa: 'قصیده‌ای در ستایش آفتاب سیسیلی؛ بالانس اعجاب‌انگیز عسل کوهی، برگ تنباکوی کوبایی و دارچین.',
    topNotes: ['ترنج کالابریایی', 'لیمو سیسیلی', 'اسطوخودوس'],
    heartNotes: ['عسل طبیعی کوهستان', 'دارچین سیلان', 'کشمیران'],
    baseNotes: ['برگ تنباکو', 'دانه تونکا', 'وانیل نرم'],
    longevityRating: 5,
    sillageRating: 5,
    seasonSuitability: ['fall', 'winter', 'spring'],
    rating: 4.92,
    reviewsCount: 114,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 280000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 650000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1240000 },
      { type: 'bottle_full', labelFa: 'شیشه کامل ۱۰۰ میل اورجینال مخمل', volumeMl: 100, price: 16900000 }
    ]
  },
  {
    id: 'parfums-de-marly-layton',
    slug: 'parfums-de-marly-layton',
    nameFa: 'پارفومز د مارلی لیتون',
    nameEn: 'Parfums de Marly Layton',
    brand: 'پارفومز د مارلی',
    brandCountry: 'فرانسه',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80',
    gender: 'men',
    nature: 'warm',
    taste: 'ادویه‌ای و سیب کاراملی',
    familyFa: 'شرقی گلی فوژه',
    concentration: 'ادو پرفیوم',
    releaseYear: 2016,
    perfumer: 'حمید مراتی کاشانی',
    descriptionFa: 'خلق شده توسط استاد بزرگ ایرانی-فرانسوی حمید مراتی کاشانی. بوی اشرافی سیب کاراملی، هل گواتمالا و وانیل.',
    topNotes: ['سیب ترد سبز', 'اسطوخودوس', 'ترنج', 'پرتقال'],
    heartNotes: ['شمعدانی', 'بنفشه', 'یاس سفید'],
    baseNotes: ['وانیل بوربون', 'چوب صندل', 'چوب گایاک', 'هل'],
    longevityRating: 5,
    sillageRating: 4,
    seasonSuitability: ['fall', 'winter', 'spring'],
    rating: 4.89,
    reviewsCount: 160,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 260000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 610000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1180000 },
      { type: 'bottle_full', labelFa: 'شیشه کامل ۱۲۵ میل اورجینال با جعبه', volumeMl: 125, price: 18200000 }
    ]
  },
  {
    id: 'dior-sauvage-elixir',
    slug: 'dior-sauvage-elixir',
    nameFa: 'دیور ساواژ الکسیر',
    nameEn: 'Dior Sauvage Elixir',
    brand: 'دیور',
    brandCountry: 'فرانسه',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    gender: 'men',
    nature: 'warm',
    taste: 'تند و تلخ ادویه‌ای',
    familyFa: 'آروماتیک ادویه‌ای غلیظ',
    concentration: 'اکستریت د پرفیوم',
    releaseYear: 2021,
    perfumer: 'فرانسوا دماشی',
    descriptionFa: 'نهایت غلظت ساواژ با دارچین، جوز هندی، اسطوخودوس وحشی و شیرین‌بیان. ماندگاری و خط بوی استثنایی.',
    topNotes: ['دارچین', 'جوز هندی', 'هل', 'گریپ‌فروت'],
    heartNotes: ['اسطوخودوس ناب فرانسوی'],
    baseNotes: ['شیرین‌بیان', 'چوب صندل', 'کهربا', 'پچولی'],
    longevityRating: 5,
    sillageRating: 5,
    seasonSuitability: ['fall', 'winter', 'spring'],
    rating: 4.87,
    reviewsCount: 130,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 250000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 580000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1100000 },
      { type: 'bottle_full', labelFa: 'شیشه کامل ۶۰ میل اورجینال با جعبه', volumeMl: 60, price: 15800000 }
    ]
  },
  {
    id: 'kilian-angels-share',
    slug: 'kilian-angels-share',
    nameFa: 'کیلیان آنجلز شِیر',
    nameEn: "Kilian Angels' Share",
    brand: 'بای کیلیان',
    brandCountry: 'فرانسه',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    gender: 'unisex',
    nature: 'warm',
    taste: 'شیرین، دارچین و کنیاک',
    familyFa: 'شرقی وانیلی گورماند',
    concentration: 'ادو پرفیوم',
    releaseYear: 2020,
    perfumer: 'بنوآ لاپوزا',
    descriptionFa: 'سهم فرشتگان از خمره‌های کهنسال کنیاک خاندان هنسی. بوی پای سیب گرم با دارچین، پرالین فندقی و چوب بلوط.',
    topNotes: ['عصاره کنیاک فرانسوی'],
    heartNotes: ['دارچین سیلان', 'دانه تونکا', 'چوب بلوط'],
    baseNotes: ['پرالین فندقی', 'وانیل بوربون', 'چوب صندل'],
    longevityRating: 5,
    sillageRating: 4,
    seasonSuitability: ['fall', 'winter'],
    rating: 4.94,
    reviewsCount: 105,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 330000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 770000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1480000 },
      { type: 'bottle_full', labelFa: 'شیشه کامل ۵۰ میل کریستال', volumeMl: 50, price: 18900000 }
    ]
  },
  {
    id: 'nasomatto-black-afgano',
    slug: 'nasomatto-black-afgano',
    nameFa: 'ناسوماتو بلک افغان',
    nameEn: 'Nasomatto Black Afgano',
    brand: 'ناسوماتو',
    brandCountry: 'هلند / ایتالیا',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    gender: 'unisex',
    nature: 'warm',
    taste: 'تلخ، دودی، رزینی و قهوه',
    familyFa: 'چوبی شرقی رزینی',
    concentration: 'اکستریت د پرفیوم',
    releaseYear: 2009,
    perfumer: 'الساندرو گولتیری',
    descriptionFa: 'تاریک، مرموز و مسحورکننده با بوی رزین‌های باستانی، عود سیاه، تنباکو تلخ و قهوه تیره.',
    topNotes: ['شاهدانه', 'نت‌های سبز دودی'],
    heartNotes: ['رزین گیاهی', 'چوب‌های تاریک', 'تنباکو', 'قهوه'],
    baseNotes: ['عود عمیق', 'بخور کندر'],
    longevityRating: 5,
    sillageRating: 5,
    seasonSuitability: ['fall', 'winter'],
    rating: 4.81,
    reviewsCount: 78,
    volumeOptions: [
      { type: 'decant_2ml', labelFa: 'دست‌ریز ۲ میل (تست اولیه)', volumeMl: 2, price: 320000 },
      { type: 'decant_5ml', labelFa: 'دست‌ریز ۵ میل (بصرفه)', volumeMl: 5, price: 740000 },
      { type: 'decant_10ml', labelFa: 'دست‌ریز ۱۰ میل (سفری)', volumeMl: 10, price: 1420000 },
      { type: 'bottle_full', labelFa: 'شیشه ۳۰ میل اورجینال با درپوش چوب سوخته', volumeMl: 30, price: 12900000 }
    ]
  }
];

// Utility: Persian Digits
function toPersianDigits(n) {
  if (n === null || n === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}

// Utility: Price Formatter in Tomans
function formatPrice(num) {
  if (!num) return '۰ تومان';
  const formatted = num.toLocaleString('en-US');
  return `${toPersianDigits(formatted)} تومان`;
}

// Local Storage Keys
const LS_CART = 'papion_static_cart_v1';
const LS_WISHLIST = 'papion_static_wishlist_v1';

// App State
let cart = [];
let wishlist = ['creed-aventus', 'baccarat-rouge-540'];
let appliedPromo = null;
let currentModalProduct = null;
let currentModalVolumeOption = null;

// Initialize State
function initStore() {
  try {
    const savedCart = localStorage.getItem(LS_CART);
    if (savedCart) cart = JSON.parse(savedCart);
    const savedWish = localStorage.getItem(LS_WISHLIST);
    if (savedWish) wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
  updateHeaderBadges();
}

function saveCart() {
  try {
    localStorage.setItem(LS_CART, JSON.stringify(cart));
  } catch (e) {}
  updateHeaderBadges();
  renderCartDrawer();
}

function saveWishlist() {
  try {
    localStorage.setItem(LS_WISHLIST, JSON.stringify(wishlist));
  } catch (e) {}
  updateHeaderBadges();
}

// Toast System
function showToast(title, message = '') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div>
      <div style="font-weight: 700; color: #fff;">${title}</div>
      ${message ? `<div style="font-size: 0.72rem; color: #9ca3af; margin-top: 2px;">${message}</div>` : ''}
    </div>
    <button onclick="this.parentElement.remove()" style="color: #6b7280; font-size: 1rem; cursor: pointer;">&times;</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Update Header Counts
function updateHeaderBadges() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badgeCart = document.getElementById('header-cart-badge');
  if (badgeCart) {
    badgeCart.textContent = toPersianDigits(totalItems);
    badgeCart.style.display = totalItems > 0 ? 'flex' : 'none';
  }
  const badgeWish = document.getElementById('header-wishlist-badge');
  if (badgeWish) {
    badgeWish.textContent = toPersianDigits(wishlist.length);
    badgeWish.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }

  const cartTotalAmount = getCartTotal();
  const headerCartPrice = document.getElementById('header-cart-price');
  if (headerCartPrice) {
    headerCartPrice.textContent = formatPrice(cartTotalAmount);
  }
}

// Cart Financials
function getCartSubtotal() {
  return cart.reduce((sum, item) => {
    return sum + (item.selectedOption.price * item.quantity);
  }, 0);
}

function getCartDiscount() {
  const subtotal = getCartSubtotal();
  if (appliedPromo === 'PAPION10') return Math.round(subtotal * 0.10);
  if (appliedPromo === 'NOURUZ') return Math.round(subtotal * 0.15);
  return 0;
}

function getCartShipping() {
  const subtotal = getCartSubtotal();
  if (subtotal >= 2000000 || cart.length === 0) return 0;
  return 65000;
}

function getCartTotal() {
  return Math.max(0, getCartSubtotal() - getCartDiscount() + getCartShipping());
}

// Cart Actions
function addToCart(productId, volumeType, qty = 1) {
  const product = PERFUMES_DATA.find(p => p.id === productId);
  if (!product) return;

  const option = product.volumeOptions.find(v => v.type === volumeType) || product.volumeOptions[1];
  const itemId = `${product.id}-${option.type}`;

  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: itemId,
      productId: product.id,
      nameFa: product.nameFa,
      image: product.image,
      selectedOption: option,
      quantity: qty
    });
  }

  saveCart();
  showToast('به سبد خرید افزوده شد', `${product.nameFa} (${option.labelFa})`);
}

function removeFromCart(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  saveCart();
  showToast('از سبد خرید حذف شد');
}

function updateCartQty(itemId, newQty) {
  if (newQty <= 0) {
    removeFromCart(itemId);
    return;
  }
  const item = cart.find(i => i.id === itemId);
  if (item) {
    item.quantity = newQty;
    saveCart();
  }
}

// Cart Drawer Open/Close
function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    renderCartDrawer();
  }
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
}

// Render Cart Drawer HTML
function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛍️</div>
        <p style="font-weight: 600; color: #d1d5db; margin-bottom: 0.5rem;">سبد خرید شما خالی است</p>
        <p style="font-size: 0.75rem;">دکانت‌های عطر دلخواه خود را برای تست به سبد اضافه کنید.</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div style="display: flex; gap: 0.75rem; padding: 0.85rem; background: #161924; border: 1px solid #23293a; border-radius: 14px; margin-bottom: 0.75rem;">
        <img src="${item.image}" alt="${item.nameFa}" style="width: 56px; height: 56px; border-radius: 10px; object-fit: cover; border: 1px solid #2d3448;">
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="font-size: 0.85rem; font-weight: 700; color: #fff;">${item.nameFa}</h4>
              <button onclick="removeFromCart('${item.id}')" style="color: #ef4444; font-size: 1rem; cursor: pointer;">&times;</button>
            </div>
            <div style="font-size: 0.72rem; color: #d4af37; margin-top: 2px;">${item.selectedOption.labelFa}</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
            <div style="display: flex; align-items: center; border: 1px solid #2d3448; border-radius: 6px; background: #0c0d10;">
              <button onclick="updateCartQty('${item.id}', ${item.quantity - 1})" style="padding: 2px 8px; color: #9ca3af;">-</button>
              <span style="font-size: 0.75rem; font-weight: 700; padding: 0 4px; min-width: 20px; text-align: center;">${toPersianDigits(item.quantity)}</span>
              <button onclick="updateCartQty('${item.id}', ${item.quantity + 1})" style="padding: 2px 8px; color: #9ca3af;">+</button>
            </div>
            <span style="font-size: 0.82rem; font-weight: 700; color: #f3e5ab;">${formatPrice(item.selectedOption.price * item.quantity)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Free shipping bar
  const subtotal = getCartSubtotal();
  const threshold = 2000000;
  const percent = Math.min(100, Math.round((subtotal / threshold) * 100));
  const remaining = Math.max(0, threshold - subtotal);

  const fill = document.getElementById('free-shipping-fill');
  const text = document.getElementById('free-shipping-text');
  if (fill) fill.style.width = `${percent}%`;
  if (text) {
    if (remaining === 0) {
      text.innerHTML = '<span style="color: #10b981; font-weight: 700;">✓ تبریک! سفارش شما مشمول ارسال رایگان شد</span>';
    } else {
      text.innerHTML = `تنها <strong style="color: #f3e5ab;">${formatPrice(remaining)}</strong> تا ارسال رایگان`;
    }
  }

  // Pricing summary
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const shippingEl = document.getElementById('cart-shipping');
  const totalEl = document.getElementById('cart-total');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (discountEl) {
    const d = getCartDiscount();
    discountEl.textContent = d > 0 ? `- ${formatPrice(d)}` : '۰ تومان';
  }
  if (shippingEl) {
    const s = getCartShipping();
    shippingEl.textContent = s === 0 ? 'رایگان' : formatPrice(s);
  }
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

// Promo Code Apply
function applyCoupon() {
  const input = document.getElementById('coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === 'PAPION10') {
    appliedPromo = 'PAPION10';
    showToast('کد تخفیف ۱۰٪ اعمال شد', 'کد ویژه پاپیون با موفقیت ثبت شد');
  } else if (code === 'NOURUZ') {
    appliedPromo = 'NOURUZ';
    showToast('کد تخفیف ۱۵٪ نوروز اعمال شد', '۱۵ درصد تخفیف ویژه کسر شد');
  } else {
    showToast('کد تخفیف نامعتبر است', 'کدهای نمونه: PAPION10 یا NOURUZ');
    return;
  }
  renderCartDrawer();
  input.value = '';
}

// Wishlist Toggle
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  const p = PERFUMES_DATA.find(x => x.id === productId);
  const name = p ? p.nameFa : 'عطر';

  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('از علاقه‌مندی‌ها حذف شد', name);
  } else {
    wishlist.push(productId);
    showToast('به علاقه‌مندی‌ها افزوده شد', name);
  }
  saveWishlist();

  // Update button visual
  document.querySelectorAll(`.btn-wishlist[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', wishlist.includes(productId));
  });
}

// Product Detail Modal
function openProductModal(productId) {
  const p = PERFUMES_DATA.find(x => x.id === productId);
  if (!p) return;

  currentModalProduct = p;
  currentModalVolumeOption = p.volumeOptions[1] || p.volumeOptions[0]; // default 5ml

  const modal = document.getElementById('product-modal');
  if (!modal) return;

  document.getElementById('modal-img').src = p.image;
  document.getElementById('modal-brand').textContent = `${p.brand} · ${p.brandCountry}`;
  document.getElementById('modal-concentration').textContent = p.concentration;
  document.getElementById('modal-title-fa').textContent = p.nameFa;
  document.getElementById('modal-title-en').textContent = p.nameEn;
  document.getElementById('modal-desc').textContent = p.descriptionFa;

  // Pyramid
  document.getElementById('modal-top-notes').textContent = p.topNotes.join('، ');
  document.getElementById('modal-heart-notes').textContent = p.heartNotes.join('، ');
  document.getElementById('modal-base-notes').textContent = p.baseNotes.join('، ');

  // Longevity / Sillage
  document.getElementById('modal-longevity').textContent = p.longevityRating >= 5 ? 'بسیار طولانی (۱۲+ ساعت)' : 'خوب (۶ الی ۸ ساعت)';
  document.getElementById('modal-sillage').textContent = p.sillageRating >= 5 ? 'رد بوی سنگین و قوی' : 'معتدل و شیک';

  // Volume Options Selector
  const volContainer = document.getElementById('modal-volume-options');
  if (volContainer) {
    volContainer.innerHTML = p.volumeOptions.map(opt => `
      <button 
        type="button" 
        onclick="selectModalVolume('${opt.type}')" 
        class="volume-pill ${opt.type === currentModalVolumeOption.type ? 'active' : ''}" 
        id="vol-btn-${opt.type}"
        style="padding: 0.6rem; border-radius: 10px; border: 1px solid ${opt.type === currentModalVolumeOption.type ? '#d4af37' : '#2b3248'}; background: ${opt.type === currentModalVolumeOption.type ? 'rgba(212,175,55,0.15)' : '#161925'}; color: #fff; text-align: right; cursor: pointer;"
      >
        <div style="font-size: 0.8rem; font-weight: 700;">${opt.volumeMl} میل</div>
        <div style="font-size: 0.68rem; color: #9ca3af;">${opt.labelFa}</div>
        <div style="font-size: 0.78rem; font-weight: 700; color: #f3e5ab; margin-top: 4px;">${formatPrice(opt.price)}</div>
      </button>
    `).join('');
  }

  updateModalPrice();
  modal.classList.add('open');
}

function selectModalVolume(volumeType) {
  if (!currentModalProduct) return;
  const opt = currentModalProduct.volumeOptions.find(v => v.type === volumeType);
  if (opt) {
    currentModalVolumeOption = opt;
    document.querySelectorAll('#modal-volume-options button').forEach(b => {
      b.style.borderColor = '#2b3248';
      b.style.background = '#161925';
    });
    const activeBtn = document.getElementById(`vol-btn-${volumeType}`);
    if (activeBtn) {
      activeBtn.style.borderColor = '#d4af37';
      activeBtn.style.background = 'rgba(212,175,55,0.15)';
    }
    updateModalPrice();
  }
}

function updateModalPrice() {
  if (!currentModalVolumeOption) return;
  const priceEl = document.getElementById('modal-final-price');
  if (priceEl) priceEl.textContent = formatPrice(currentModalVolumeOption.price);
}

function addModalItemToCart() {
  if (!currentModalProduct || !currentModalVolumeOption) return;
  addToCart(currentModalProduct.id, currentModalVolumeOption.type, 1);
  closeProductModal();
  openCart();
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('open');
}

// Live Search Modal
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('open');
    const input = document.getElementById('search-input');
    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.remove('open');
}

function handleSearchInput(e) {
  const val = e.target.value.trim().toLowerCase();
  const resultsContainer = document.getElementById('search-results');
  if (!resultsContainer) return;

  if (!val) {
    resultsContainer.innerHTML = '<p style="color: #6b7280; font-size: 0.8rem; text-align: center; padding: 2rem;">نام عطر، برند یا نت بویایی را وارد فرمایید.</p>';
    return;
  }

  const matches = PERFUMES_DATA.filter(p => {
    return p.nameFa.toLowerCase().includes(val) ||
           p.nameEn.toLowerCase().includes(val) ||
           p.brand.toLowerCase().includes(val) ||
           p.topNotes.some(n => n.toLowerCase().includes(val)) ||
           p.heartNotes.some(n => n.toLowerCase().includes(val)) ||
           p.baseNotes.some(n => n.toLowerCase().includes(val));
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p style="color: #9ca3af; font-size: 0.8rem; text-align: center; padding: 2rem;">عطری مطابق با «${val}» یافت نشد.</p>`;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div onclick="closeSearchModal(); openProductModal('${p.id}')" style="display: flex; gap: 0.8rem; align-items: center; padding: 0.75rem; background: #161925; border: 1px solid #23293a; border-radius: 12px; margin-bottom: 0.5rem; cursor: pointer;">
      <img src="${p.image}" alt="${p.nameFa}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
      <div style="flex: 1;">
        <h4 style="font-size: 0.88rem; font-weight: 700; color: #fff;">${p.nameFa}</h4>
        <div style="font-size: 0.72rem; color: #d4af37;">${p.brand} · ${p.nameEn}</div>
      </div>
      <span style="font-size: 0.8rem; font-weight: 700; color: #f3e5ab;">از ${formatPrice(p.volumeOptions[0].price)}</span>
    </div>
  `).join('');
}

// Scent Quiz Modal
let quizStep = 1;
let quizAnswers = { gender: 'men', vibe: 'business', nature: 'warm' };

function openQuizModal() {
  quizStep = 1;
  const modal = document.getElementById('quiz-modal');
  if (modal) {
    modal.classList.add('open');
    renderQuizStep();
  }
}

function closeQuizModal() {
  const modal = document.getElementById('quiz-modal');
  if (modal) modal.classList.remove('open');
}

function renderQuizStep() {
  const container = document.getElementById('quiz-content');
  if (!container) return;

  if (quizStep === 1) {
    container.innerHTML = `
      <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 1rem;">۱. این عطر برای چه کسی انتخاب می‌شود؟</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
        <button onclick="quizSet('gender', 'men', 2)" style="padding: 1rem; border: 1px solid #2a3144; background: #161925; color: #fff; border-radius: 12px; text-align: right; cursor: pointer;">
          <strong>آقایان</strong>
          <div style="font-size: 0.72rem; color: #9ca3af; margin-top: 4px;">چوبی، دودی، آروماتیک</div>
        </button>
        <button onclick="quizSet('gender', 'unisex', 2)" style="padding: 1rem; border: 1px solid #2a3144; background: #161925; color: #fff; border-radius: 12px; text-align: right; cursor: pointer;">
          <strong>یونیسکس / مشترک</strong>
          <div style="font-size: 0.72rem; color: #9ca3af; margin-top: 4px;">عطرهای هنری نیش</div>
        </button>
      </div>
    `;
  } else if (quizStep === 2) {
    container.innerHTML = `
      <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 1rem;">۲. در چه فضا و موقعیتی بیشتر استفاده می‌شود؟</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
        <button onclick="quizSet('vibe', 'business', 3)" style="padding: 1rem; border: 1px solid #2a3144; background: #161925; color: #fff; border-radius: 12px; text-align: right; cursor: pointer;">
          <strong>جلسات کاری و پرستیژ</strong>
          <div style="font-size: 0.72rem; color: #9ca3af; margin-top: 4px;">شیک، متین و نافذ</div>
        </button>
        <button onclick="quizSet('vibe', 'date', 3)" style="padding: 1rem; border: 1px solid #2a3144; background: #161925; color: #fff; border-radius: 12px; text-align: right; cursor: pointer;">
          <strong>قرار عاشقانه و مهمانی شب</strong>
          <div style="font-size: 0.72rem; color: #9ca3af; margin-top: 4px;">اغواگر، گرم و صمیمی</div>
        </button>
      </div>
    `;
  } else if (quizStep === 3) {
    container.innerHTML = `
      <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 1rem;">۳. چه طبع دمایی برای رایحه می‌پسندید؟</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem;">
        <button onclick="quizSet('nature', 'warm', 4)" style="padding: 1rem; border: 1px solid #2a3144; background: #161925; color: #fff; border-radius: 12px; text-align: right; cursor: pointer;">
          <strong>طبع گرم و گیرای شرقی</strong>
          <div style="font-size: 0.72rem; color: #9ca3af; margin-top: 4px;">وانیل، کهربا، تنباکو، دارچین</div>
        </button>
        <button onclick="quizSet('nature', 'cool', 4)" style="padding: 1rem; border: 1px solid #2a3144; background: #161925; color: #fff; border-radius: 12px; text-align: right; cursor: pointer;">
          <strong>طبع خنک و تازه</strong>
          <div style="font-size: 0.72rem; color: #9ca3af; margin-top: 4px;">مرکباتی، آناناس دودی، سدر</div>
        </button>
      </div>
    `;
  } else if (quizStep === 4) {
    const matched = PERFUMES_DATA.filter(p => p.nature === quizAnswers.nature).slice(0, 3);
    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <span style="color: #d4af37; font-size: 0.8rem; font-weight: 700;">نتایج هوشمند بویایی</span>
        <h3 style="font-size: 1.2rem; color: #fff; margin-top: 4px;">عطرهای پیشنهادی متناسب با سلیقه شما</h3>
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.8rem;">
        ${matched.map(p => `
          <div style="display: flex; gap: 0.8rem; align-items: center; padding: 0.85rem; background: #161925; border: 1px solid #283044; border-radius: 14px;">
            <img src="${p.image}" alt="${p.nameFa}" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;">
            <div style="flex: 1;">
              <h4 style="font-size: 0.9rem; font-weight: 700; color: #fff;">${p.nameFa}</h4>
              <div style="font-size: 0.75rem; color: #d4af37;">${p.brand}</div>
              <div style="font-size: 0.7rem; color: #9ca3af; margin-top: 2px;">دکانت ۲، ۵ و ۱۰ میل موجود است</div>
            </div>
            <button onclick="closeQuizModal(); openProductModal('${p.id}')" style="padding: 0.5rem 0.9rem; border-radius: 8px; background: #d4af37; color: #000; font-weight: 700; font-size: 0.75rem; cursor: pointer;">
              تست با دکانت
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function quizSet(key, value, nextStep) {
  quizAnswers[key] = value;
  quizStep = nextStep;
  renderQuizStep();
}

// Checkout Simulator
function handleCheckout() {
  if (cart.length === 0) {
    showToast('سبد خرید شما خالی است');
    return;
  }
  const orderNum = `PAP-${Math.floor(100000 + Math.random() * 900000)}`;
  const total = getCartTotal();

  alert(`سفارش شماره ${orderNum} به مبلغ ${formatPrice(total)} با موفقیت ثبت شد.\nاز اعتماد شما به بوتیک تخصصی عطر پاپیون سپاسگزاریم.`);
  cart = [];
  appliedPromo = null;
  saveCart();
  closeCart();
}

// Global Keyboard Handler (Ctrl+K for search)
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    openSearchModal();
  }
  if (e.key === 'Escape') {
    closeProductModal();
    closeCart();
    closeSearchModal();
    closeQuizModal();
  }
});

// Boot
document.addEventListener('DOMContentLoaded', () => {
  initStore();
});
