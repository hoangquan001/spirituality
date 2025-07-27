# Project Structure - Tamlinh Client

```
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
structure.md
tailwind.config.ts
tsconfig.json
public/
	file.svg
	globe.svg
	next.svg
	vercel.svg
	window.svg
src/
	app/
		favicon.ico
		globals.css
		layout.tsx
		page.tsx
		about/
			page.tsx
		birthday-match/
			page.tsx
		blog/
			page.tsx
			admin/
				page.tsx
			[slug]/
				page.tsx
		calendar/
			page.tsx
		dream/
			page.tsx
		events/
			page.tsx
		feng-shui/
			page.tsx
		lunar-convert/
			page.tsx
		than-so-hoc/phan-tich-ten/
			page.tsx
		than-so-hoc/
			page.tsx
		zodiac/
			page.tsx
			[sign]/
				page.tsx
	components/
		BlogCard.tsx
		BlogSection.tsx
		Footer.tsx
		FortuneCard.tsx
		Header.tsx
		Loading.tsx
		LoadingBar.tsx
		MysticStats.tsx
		NumerologyForm.tsx
		ResultCard.tsx
	contexts/
		LoadingContext.tsx
	lib/
		birthdayMatch.ts
		blogData.ts
		dreamDictionary.ts
		lunarCalendar.ts
		nameAnalysis.ts
		numerology.ts
		spiritualEvents.ts
		utils.ts
		zodiacData.ts
	types/
		blog.ts
```

## Tính năng chính

### 1. Blog System
- **Trang chính**: `/blog` - Danh sách bài viết với tìm kiếm và lọc
- **Chi tiết bài viết**: `/blog/[slug]` - Hiển thị nội dung đầy đủ
- **Quản trị**: `/blog/admin` - Tạo và quản lý bài viết
- **Components**: BlogCard, BlogSection
- **Data**: blogData.ts, types/blog.ts

### 2. Header & Navigation
- **Component**: Header.tsx với dropdown menu
- **Tính năng**: Navigation grouped, mobile responsive, CTA buttons

### 3. Loading System
- **Context**: LoadingContext.tsx - Global state management
- **Components**: 
  - LoadingBar.tsx - Progress bar cho navigation
  - Loading.tsx - Various loading components (overlay, spinner, dots)

### 4. Spiritual Features (Mới)
- **Birthday Match** (`/birthday-match`): Bói tình yêu, hợp tuổi vợ chồng
  - Library: birthdayMatch.ts - Tính toán compatibility
- **Lunar Convert** (`/lunar-convert`): Chuyển đổi dương ⇄ âm lịch
  - Library: lunarCalendar.ts - Conversion algorithms
- **Events** (`/events`): Các Ngày Lễ  Việt Nam
  - Library: spiritualEvents.ts - Event data and management

### 5. Original Features
- **Zodiac** (`/cung-hoang-dao`): Cung hoàng đạo và tính cách
- **Numerology** (`/than-so-hoc`): Thần số học và phân tích số
- **Dream** (`/giai-ma-giac-mo`): Giải mã giấc mơ
- **Name Analysis** (`/than-so-hoc/phan-tich-ten`): Phân tích tên theo phong thủy
- **Feng Shui** (`/feng-shui`): Tư vấn phong thủy
- **Calendar** (`/calendar`): Lịch tâm linh và ngày tốt xấu
- **About** (`/about`): Giới thiệu về website

## Công nghệ sử dụng
- **Next.js 15.4.2**: App Router, Server Components
- **React 19.1.0**: Context API, Hooks
- **TypeScript 5**: Type safety
- **Tailwind CSS 4**: Styling với custom gradient themes
- **Responsive Design**: Mobile-first approach
