# YouTube Clone (Home Page)

كلون لصفحة يوتيوب الرئيسية (Home Page) باستخدام React + TypeScript + Vite.
بيعرض 12 فيديو حقيقي من يوتيوب (thumbnails وعناوين ومشاهدات حقيقية)، وبتضغط على أي كارت بيوديك على الفيديو الأصلي على يوتيوب في تاب جديد.

## المميزات (Features)

- 🎨 Header فيه Search bar + Dark/Light mode toggle
- 📂 Sidebar بروابط Home / Explore / Subscriptions / Library... إلخ
- 🏷️ Category pills بتفلتر الفيديوهات (Pop, Dance/Pop, K-Pop, Kids, Classic Rock)
- 🎬 Video grid responsive بـ 12 فيديو حقيقي (thumbnails جايه من يوتيوب مباشرة)
- 🌙 Dark / Light theme كامل عبر CSS variables
- 📱 Responsive لحد الموبايل

## التشغيل (Getting Started)

المتطلبات: Node.js 18+ مثبت عندك.

```bash
npm install
npm run dev
```

هيفتحلك على `http://localhost:5173`.

### أوامر تانية

```bash
npm run build     # production build → مجلد dist/
npm run preview   # يشغل الـ build اللي عملته لوكال
npm run lint      # ESLint check
```

## الستراكشر (Project Structure)

```
src/
├── components/
│   ├── Header.tsx / Header.css        # الشريط العلوي: logo, search, actions
│   ├── sidebar.tsx / sidebar.css      # القائمة الجانبية
│   ├── Layout.tsx / Layout.css        # بيلف Header + Sidebar + <Outlet/>
│   ├── CategoryPills.tsx / .css       # أزرار فلترة الكاتيجوريز
│   ├── videocard.tsx / .css           # كارت الفيديو الواحد
│   └── videogrid.tsx / .css           # الشبكة اللي بتعرض الكروت
├── pages/
│   ├── Home.tsx                       # الصفحة الرئيسية (الفوكس بتاع المشروع)
│   └── Watch.tsx / Watch.css          # placeholder بس - مش مستخدمة حاليًا
├── data/
│   └── video.ts                       # بيانات الـ 12 فيديو + الكاتيجوريز
├── types/
│   └── video.ts                       # TypeScript interfaces (Video, Category)
├── App.tsx                            # React Router setup
├── main.tsx                           # نقطة الدخول
└── index.css                          # CSS variables + resets عامة بس
```

كل component له ملف CSS منفصل جنبه بنفس الاسم، بدل ملف styles واحد كبير.

## البيانات (Data)

الفيديوهات في `src/data/video.ts` — كل فيديو له:
- `youtubeId` — الـ ID الحقيقي بتاعه على يوتيوب (بيتحول لينك للـ thumbnail وللفيديو نفسه)
- `title`, `channelName`, `views`, `duration`, `category`

لو عايز تضيف/تغيّر فيديوهات، عدّل مصفوفة `raw` في نفس الملف.

## ملاحظات

- الـ avatars بتاعة القنوات متولدة تلقائيًا (initials) عبر `ui-avatars.com` — مش صور القنوات الحقيقية.
- Watch page مش شغالة فعليًا؛ الضغط على أي فيديو بيوديك مباشرة ليوتيوب الحقيقي.
- المشروع لأغراض تعليمية فقط، ومش مرتبط بيوتيوب رسميًا.
