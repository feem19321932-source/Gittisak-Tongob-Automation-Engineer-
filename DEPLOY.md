# 🚀 คำแนะนำการ Deploy

เว็บไซต์นี้เป็น static website ที่ไม่ต้องใช้ backend หรือ database สามารถ deploy ได้ง่ายและรวดเร็ว

## ✅ ไฟล์ที่ต้อง Deploy

### ไฟล์หลัก (จำเป็น):
- ✅ `index.html`
- ✅ `style.css`
- ✅ `script.js`
- ✅ โฟลเดอร์ `assets/` ทั้งหมด

### ไฟล์เสริม (แนะนำ):
- `README.md` — คู่มือโปรเจค
- `robots.txt` — สำหรับ SEO
- `sitemap.xml` — สำหรับ SEO
- `netlify.toml` — config สำหรับ Netlify
- `vercel.json` — config สำหรับ Vercel

### ไฟล์ที่ไม่ต้อง Deploy:
- ❌ `.od-skills/`, `.file-versions/` — development files
- ❌ `image-*.png`, `drawing-*.png` — screenshot files
- ❌ `support.js`, `image-slot.js` — OpenDesign helpers
- ❌ `_thumbnail`, `_image-slots.state.json` — metadata

## 🎯 วิธี Deploy แบบง่าย (Drag & Drop)

### 1. Netlify Drop (ไม่ต้องใช้ GitHub)

**ขั้นตอน:**
1. สร้างโฟลเดอร์ใหม่ชื่อ `deploy/`
2. คัดลอกไฟล์เหล่านี้เข้าไป:
   - `index.html`
   - `style.css`
   - `script.js`
   - โฟลเดอร์ `assets/` ทั้งหมด
3. ไปที่ https://app.netlify.com/drop
4. ลากโฟลเดอร์ `deploy/` วางลงในหน้าเว็บ
5. รอ 1-2 นาที — เสร็จแล้ว!

**ผลลัพธ์:**
- จะได้ URL แบบ: `https://random-name-123456.netlify.app`
- สามารถเปลี่ยนชื่อได้ใน Site settings

---

## 💻 วิธี Deploy แบบใช้ GitHub

### 2. GitHub Pages (ฟรี, แนะนำสำหรับมือใหม่)

**ขั้นตอน:**

1. **สร้าง GitHub repository**
   ```bash
   git init
   git add index.html style.css script.js assets/ README.md
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **เปิดใช้ GitHub Pages**
   - ไปที่ Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / (root)
   - Save

3. **รอ 2-5 นาที**
   - เว็บจะขึ้นที่: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

**Custom Domain (ถ้ามี):**
- Settings → Pages → Custom domain
- ใส่โดเมนของคุณ เช่น `gittisak.dev`
- ตั้งค่า DNS: CNAME record ชี้ไปที่ `YOUR-USERNAME.github.io`

---

### 3. Netlify (ผ่าน GitHub)

**ขั้นตอน:**

1. Push code ไป GitHub (ตามขั้นตอนข้างบน)
2. ไปที่ https://app.netlify.com
3. เลือก "Add new site" → "Import an existing project"
4. เชื่อมต่อ GitHub → เลือก repository
5. Build settings:
   - Build command: (เว้นว่าง)
   - Publish directory: `.` หรือเว้นว่าง
6. กด "Deploy site"

**ข้อดี:**
- Auto-deploy เมื่อ push ไป GitHub
- HTTPS ฟรี
- Custom domain ฟรี
- CDN ทั่วโลก

---

### 4. Vercel (ผ่าน GitHub)

**ขั้นตอน:**

1. Push code ไป GitHub
2. ไปที่ https://vercel.com
3. Import project → เลือก repository
4. Framework preset: **Other**
5. Build settings:
   - Build Command: (เว้นว่าง)
   - Output Directory: `.` หรือเว้นว่าง
6. กด "Deploy"

**ข้อดี:**
- Deploy รวดเร็วมาก
- Analytics ในตัว
- Edge network ทั่วโลก

---

### 5. Cloudflare Pages

**ขั้นตอน:**

1. Push code ไป GitHub
2. ไปที่ https://pages.cloudflare.com
3. Create a project → Connect to Git
4. เลือก repository
5. Build settings:
   - Framework preset: None
   - Build command: (เว้นว่าง)
   - Build output directory: `/`
6. Save and Deploy

**ข้อดี:**
- Network ของ Cloudflare (เร็วมาก)
- Unlimited bandwidth ฟรี
- Analytics ฟรี

---

## 🔧 การอัปเดตเว็บไซต์

### ถ้าใช้ Netlify Drop:
- Drag & drop โฟลเดอร์ใหม่ทับ

### ถ้าใช้ GitHub + Platform:
```bash
# แก้ไขไฟล์
git add .
git commit -m "Update resume"
git push

# เว็บจะ auto-deploy ใน 1-2 นาที
```

---

## 📝 Checklist ก่อน Deploy

- [ ] ลบไฟล์ screenshot ทั้งหมด (`image-*.png`)
- [ ] ลบโฟลเดอร์ `.od-skills/`, `.file-versions/`
- [ ] ตรวจสอบว่า `assets/` มีไฟล์ครบ
- [ ] แก้ URL ใน `sitemap.xml` เป็น domain จริง
- [ ] แก้ URL ใน `robots.txt` เป็น domain จริง
- [ ] แก้ `og:url` และ `og:image` ใน `index.html` เป็น URL จริง
- [ ] ทดสอบเว็บใน local ก่อน (เปิด `index.html`)

---

## ❓ หาก Deploy แล้วมีปัญหา

### ปัญหา: ภาพไม่แสดง
- ตรวจสอบว่าโฟลเดอร์ `assets/` อัปโหลดครบ
- ตรวจสอบ path ใน code ว่าเป็น relative path (`assets/...`)

### ปัญหา: Font ไม่แสดง
- Font โหลดจาก Google Fonts (ต้องมี internet)
- ตรวจสอบ browser console มี error หรือไม่

### ปัญหา: JavaScript ไม่ทำงาน
- เปิด Browser Console (F12) ดู error
- ตรวจสอบว่า `script.js` อัปโหลดแล้ว

### ปัญหา: 404 Not Found
- ตรวจสอบว่าอัปโหลด `index.html` แล้ว
- ตรวจสอบ publish directory ตั้งค่าถูกต้อง

---

## 🎉 เสร็จแล้ว!

เมื่อ deploy สำเร็จ คุณจะได้เว็บไซต์ที่:
- ✅ เข้าถึงได้จากทุกที่ในโลก
- ✅ HTTPS ปลอดภัย
- ✅ โหลดเร็ว (CDN)
- ✅ Mobile-friendly
- ✅ SEO-ready

**อย่าลืม:** แก้ไข URL ในไฟล์ต่างๆ ให้เป็น domain จริงของคุณ!
