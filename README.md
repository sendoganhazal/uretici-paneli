# 🏭 Üretici & Tedarikçi Platformu - Mini Task

Bu proje, bir üretici/tedarikçi platformunda alıcıların üretici listelerini inceleyebildiği, detaylı profillere bakabildiği ve hızlıca talep oluşturabildiği bir frontend arayüz simülasyonudur.

## 🎯 Proje Amacı
Adayın; React/TypeScript yetkinliğini, bileşen mimarisi (Atomic Design) yaklaşımını, responsive (uyumlu) tasarım kalitesini ve API veri yönetim becerisini ölçmek amacıyla geliştirilmiştir.

## 🚀 Başlangıç

Projeyi yerel ortamınızda ayağa kaldırmak için aşağıdaki adımları izleyebilirsiniz:

### 1. Gereksinimler
- **Node.js** (v18+)
- **npm** veya **yarn**

### 2. Kurulum
```bash
# Depoyu klonlayın
git clone <repo-url>

# Proje dizinine gidin
cd frontend-assessment-task

# Paketleri yükleyin
npm install

```

### 3. Çalıştırma
```
npm run dev

```

## 🛠 Teknik Stack & Yaklaşımlar
**Vite + React + TypeScript:**  Modern ve hızlı geliştirme deneyimi ile tip güvenliği.

**Atomic Design Metodolojisi:**  Proje; Atoms, Molecules, Organisms ve Templates olarak katmanlandırılmıştır. Bu sayede kodun tekrar kullanılabilirliği ve sürdürülebilirliği maksimize edilmiştir.

**CSS Grid & Flexbox:**  Herhangi bir UI kütüphanesine (Bootstrap/MUI) bağımlı kalmadan, saf CSS ile responsive panel yapısı kurulmuştur.

**Data Mapping:**  DummyJSON API'sinden gelen ürün verileri, bir "Üretici" modeline maplenerek; şehir, termin süresi ve sertifika gibi alanlarla zenginleştirilmiştir.

**Custom Hooks:**  API çağrıları ve veri yönetimi için temiz bir soyutlama yapılmıştır.

## 📂 Klasör Yapısı
```
src/
├── components/
│   ├── atoms/       # Button, Badge, Input, Typography
│   ├── molecules/   # FormField, InfoTabs, ProductGallery
│   ├── organisms/   # ManufacturerCard, RequestForm
│   └── templates/   # PageLayout (Main Container)
├── services/        # api.ts (Data Fetching & Transformation)
├── types/           # TypeScript Interfaces & Types
├── pages/           # Manufacturers (List) & ManufacturerDetail
├── App.tsx          # Routing Configuration
└── index.css        # Global Styles (MUI Colors & Typography)
```


## ✨ Öne Çıkan Özellikler
**Responsive Design:** Tüm ekran boyutları (Mobil, Tablet, Desktop) için optimize edilmiş CSS Grid yapısı.

**Üretici Detay Sayfası:**

İnteraktif galeri/carousel alanı.

**Tab Yapısı:** Üretici açıklaması ve sertifikalar arasında hızlı geçiş.

**Talep Formu:** - Material UI ve Bootstrap stillerinden ilham alınarak oluşturulmuş modern form elemanları.

Loading state, başarılı/hatalı gönderim geri bildirimleri ve temel validation.

## Teslim Notları
**Süre:** Proje belirlenen süre içerisinde tamamlanmıştır.

**Görsel Özen:** Tipografi için Google Fonts (Nunito) kullanılmış, renk paleti Material UI standartlarına göre seçilmiştir.
