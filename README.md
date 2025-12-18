# Frontend Developer Portfolio

Modern və animasiyalı portfolio saytı React, Next.js və Tailwind CSS ilə hazırlanıb.

## Xüsusiyyətler

- Next.js 16 ilə yaradılıb
- Tailwind CSS v4 ilə stilizasiya
- 3D animasiyalar React Three Fiber ilə
- Tam responsive dizayn
- Dark mode dəstəyi
- Terminal üslubunda dizayn
- Smooth scroll animasiyaları

## Quraşdırma

```bash
# Dependencies yüklə
npm install

# Development server başlat
npm run dev

# Build et
npm run build

# Production serveri başlat
npm start
```

## Struktur

```
├── app/
│   ├── page.tsx          # Ana səhifə
│   ├── layout.tsx        # Layout
│   └── globals.css       # Global stillər
├── components/
│   ├── hero-section.tsx      # Hero bölməsi
│   ├── about-section.tsx     # Haqqında bölməsi
│   ├── projects-section.tsx  # Layihələr bölməsi
│   ├── skills-section.tsx    # Bacarıqlar bölməsi
│   ├── contact-section.tsx   # Əlaqə bölməsi
│   └── navigation.tsx        # Naviqasiya
└── public/               # Statik fayllar
```

## Fərdiləşdirmə

Öz məlumatlarınızı əlavə etmək üçün:

1. `components/hero-section.tsx` - Adınızı və başlığınızı dəyişin
2. `components/about-section.tsx` - Özünüz haqqında mətn əlavə edin
3. `components/projects-section.tsx` - Öz layihələrinizi əlavə edin
4. `components/skills-section.tsx` - Bacarıqlarınızı yeniləyin
5. `components/contact-section.tsx` - Əlaqə məlumatlarınızı dəyişin

## Texnologiyalar

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- React Three Fiber
- Three.js
- Framer Motion
- React Type Animation

## Deploy

Vercel-də deploy etmək çox asandır:

```bash
vercel deploy
```

## Lisenziya

MIT
