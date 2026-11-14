let currentLang = localStorage.getItem('lang') || 'th';

const content = {
  th: {
    navAbout: 'About',
    navSkills: 'Skills',
    navWork: 'Work',
    navProjects: 'Projects',
    projectsTitle: 'Projects',
    projEyebrow: 'MY DESIGN · MACHINE DESIGN',
    projDesc: 'ออกแบบเครื่องประกอบท่อเข้ากับเซ็นเตอร์ พร้อมภาพจำลอง 3D จากโมเดล CAD จริง แสดงลำดับการทำงานของ Robot, Jig, Cylinder และ Sensor ตาม Time chart และวิเคราะห์รอบเวลาด้วย Monte Carlo',
    projCta: 'เปิดดู 3D Simulation →',
    proj2Eyebrow: 'MY DESIGN · MECHANICAL DESIGN',
    proj2Desc: 'ออกแบบ Roller Conveyor 3 แถว (1650 × 700 mm) พร้อมถาดรองน้ำมันใต้ชุดลูกกลิ้ง การ์ดป้องกัน และ Stopper ออกแบบด้วย Fusion 360 พร้อม Assembly Drawing ครบชุด — ดูโมเดล 3D แบบหมุนได้และซ่อน/แสดงแต่ละส่วน',
    proj2Cta: 'เปิดดูโมเดล 3D →',
    navCerts: 'Certifications',
    navBack: '← Back Home',
    navContact: 'Contact Me',
    name: 'กิตติศักดิ์ ตองอบ',
    role: 'Automation Engineer',
    bio: 'จบการศึกษาระดับปริญญาตรี คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมเมคคาทรอนิกส์และหุ่นยนต์ ผ่านการฝึกงานด้านการซ่อมประกอบคอมพิวเตอร์ ระบบเครือข่าย IoT และระบบอัตโนมัติ สนใจงานด้านระบบอัตโนมัติและ Smart Factory',
    stat1Label: 'เริ่มทำงานเป็น Automation Engineer',
    stat2Label: 'Internship Experiences',
    stat3Label: 'Certifications & Trainings',
    marquee: ['AUTOMATION ENGINEER', 'PLC & SCADA', 'ROBOTICS', 'SMART FACTORY'],
    expTitle: 'Experience',
    internshipTitle: 'Internship Experience',
    skillsTitle: 'Skills',
    eduTitle: 'Education',
    featuredCerts: 'Featured Certifications',
    viewAll: 'View All →',
    collaborate: "Let's Collaborate",
    downloadPDF: 'Download PDF',
    contactName: 'ชื่อของคุณ',
    contactEmail: 'you@email.com',
    contactMessage: 'ข้อความของคุณ',
    sendMessage: 'Send Message',
    email: 'Email',
    phone: 'Phone',
    footer: '© 2026 Gittisak Tongob',
    certsTitle: 'Certifications & Projects',
    thesisTitle: "Bachelor's Thesis Project",
    thesisTh: 'ประเมินความสามารถของกระบวนการ Laser Weld Housing & Inlet Disc และ Diffuser & Bottle',
    thesisEn: 'Evaluate the Capabilities of the Laser Weld Housing & Inlet Disc and Diffuser & Bottle (Laser Welding) Processes',
    viewThesis: 'View Full Thesis (PDF)',
    backToResume: '← Back to Resume',
    viewPDF: 'View PDF Certificate',
    hours30: '30 ชั่วโมง',
    hours2: '2 วัน'
  },
  en: {
    navAbout: 'About',
    navSkills: 'Skills',
    navWork: 'Work',
    navProjects: 'Projects',
    projectsTitle: 'Projects',
    projEyebrow: 'MY DESIGN · MACHINE DESIGN',
    projDesc: 'Designed a machine that assembles hoses onto centers, with an interactive 3D simulation built from the real CAD model — showing the Robot, Jig, Cylinder and Sensor sequence from the time chart, plus Monte Carlo cycle-time analysis.',
    projCta: 'Open 3D Simulation →',
    proj2Eyebrow: 'MY DESIGN · MECHANICAL DESIGN',
    proj2Desc: 'Designed a 3-lane roller conveyor (1650 × 700 mm) with an oil tray beneath the rollers, a safety guard and a stopper — modeled in Fusion 360 with a full assembly drawing set. Explore the interactive 3D model and toggle each part.',
    proj2Cta: 'Open 3D Model →',
    navCerts: 'Certifications',
    navBack: '← Back Home',
    navContact: 'Contact Me',
    name: 'Gittisak Tongob',
    role: 'Automation Engineer',
    bio: 'Graduated with a Bachelor\'s degree in Mechatronics and Robotics Engineering. Experienced in computer repair and assembly, networking, IoT, and automation systems. Interested in automation systems and Smart Factory.',
    stat1Label: 'Started as Automation Engineer',
    stat2Label: 'Internship Experiences',
    stat3Label: 'Certifications & Trainings',
    marquee: ['AUTOMATION ENGINEER', 'PLC & SCADA', 'ROBOTICS', 'SMART FACTORY'],
    expTitle: 'Experience',
    internshipTitle: 'Internship Experience',
    skillsTitle: 'Skills',
    eduTitle: 'Education',
    featuredCerts: 'Featured Certifications',
    viewAll: 'View All →',
    collaborate: "Let's Collaborate",
    downloadPDF: 'Download PDF',
    contactName: 'Your name',
    contactEmail: 'you@email.com',
    contactMessage: 'Your message',
    sendMessage: 'Send Message',
    email: 'Email',
    phone: 'Phone',
    footer: '© 2026 Gittisak Tongob',
    certsTitle: 'Certifications & Projects',
    thesisTitle: "Bachelor's Thesis Project",
    thesisTh: 'ประเมินความสามารถของกระบวนการ Laser Weld Housing & Inlet Disc และ Diffuser & Bottle',
    thesisEn: 'Evaluate the Capabilities of the Laser Weld Housing & Inlet Disc and Diffuser & Bottle (Laser Welding) Processes',
    viewThesis: 'View Full Thesis (PDF)',
    backToResume: '← Back to Resume',
    viewPDF: 'View PDF Certificate',
    hours30: '30 hours',
    hours2: '2 days'
  }
};

const certifications = [
  { code: 'PLC', issuer: 'DEPARTMENT OF SKILL DEVELOPMENT', titleTh: 'การใช้โปรแกรมพีแอลซีขั้นพื้นฐาน GxWork 2 (Mitsubishi)', titleEn: 'Basic PLC GxWork 2 (Mitsubishi)', hours: '30 ชั่วโมง', hoursEn: '30 hours', date: 'ธ.ค. 2568', dateEn: 'Dec 2025', pdfUrl: 'assets/cert-plc.pdf', image: 'assets/cert-plc.png' },
  { code: 'AUTO', issuer: 'DEPARTMENT OF SKILL DEVELOPMENT', titleTh: 'การเขียนโปรแกรมควบคุมระบบอัตโนมัติ', titleEn: 'Programing for Automation Systems', hours: '30 ชั่วโมง', hoursEn: '30 hours', date: 'พ.ค. 2569', dateEn: 'May 2026', pdfUrl: 'assets/cert-auto.pdf', image: 'assets/cert-auto.png' },
  { code: 'SCADA', issuer: 'MANUFACTURING AUTOMATION & ROBOTICS ACADEMY', titleTh: 'ระบบควบคุมและเก็บข้อมูล SCADA Genesis64 รุ่นที่ 4', titleEn: 'Supervisory Control and Data Acquisition (SCADA Genesis64)', hours: '2 วัน', hoursEn: '2 days', date: 'มิ.ย. 2569', dateEn: 'Jun 2026', pdfUrl: 'assets/cert-scada.pdf', image: 'assets/cert-scada.png' }
];

const experience = [
  {
    period: { th: '2025 — ปัจจุบัน', en: '2025 — Present' },
    location: { th: 'ประเทศไทย', en: 'Thailand' },
    role: 'Automation Engineer',
    company: 'Eishin Engineering and Supplies Co., Ltd.',
    bullets: {
      th: [
        'ควบคุมดูแล Project Automation ตั้งแต่เริ่มต้นจนส่งมอบ',
        'เสนอคอนเซปต์และออกแบบระบบอัตโนมัติให้ตรงกับความต้องการลูกค้า',
        'ดูแลและตรวจสอบงานติดตั้งระบบอัตโนมัติหน้าไซต์งาน'
      ],
      en: [
        'Manage Automation Projects from start to delivery',
        'Propose concepts and design automation systems to meet customer needs',
        'Supervise and inspect automation system installation on-site'
      ]
    }
  }
];

const internships = [
  {
    period: { th: 'มิ.ย. 2565 - ก.ย. 2565', en: 'Jun 2022 - Sep 2022' },
    location: { th: 'ประเทศไทย', en: 'Thailand' },
    role: { th: 'นักศึกษาฝึกงาน', en: 'Intern' },
    department: 'Process Development',
    company: { th: 'ไดเซล เซฟตี้ ซีสเต็มส์ (ประเทศไทย) จำกัด', en: 'Diesel Safety Systems (Thailand) Co., Ltd.' },
    bullets: {
      th: [
        'ควบคุมค่าพารามิเตอร์ของเครื่องจักร',
        'ควบคุมผลิตภัณฑ์ใหม่',
        'การพัฒนาผลิตภัณฑ์ใหม่',
        'การทดสอบผลิตภัณฑ์ใหม่'
      ],
      en: [
        'Control machine parameters',
        'Control new products',
        'Develop new products',
        'Test new products'
      ]
    }
  },
  {
    period: { th: 'มิ.ย. 2565 - ก.ย. 2565', en: 'Jun 2022 - Sep 2022' },
    location: { th: 'ประเทศไทย', en: 'Thailand' },
    role: { th: 'นักศึกษาฝึกงาน', en: 'Intern' },
    department: 'Material Control',
    company: { th: 'มิตซูบิชิ อีเล็กทริค คอนซูมเมอร์ โปรดักส์ (ประเทศไทย) จำกัด', en: 'Mitsubishi Electric Consumer Products (Thailand) Co., Ltd.' },
    bullets: {
      th: [
        'ควบคุมการเบิกจ่าย Part ชิ้นงาน',
        'เบิกจ่าย Part ให้ไลน์ผลิต',
        'ใช้ Part ให้โรงงานผลิต'
      ],
      en: [
        'Control part distribution',
        'Distribute parts to production lines',
        'Supply parts to manufacturing plant'
      ]
    }
  },
  {
    period: { th: 'ต.ค. 2562 - มี.ค. 2563', en: 'Oct 2019 - Mar 2020' },
    location: { th: 'ประเทศไทย', en: 'Thailand' },
    role: { th: 'นักศึกษาฝึกงาน', en: 'Intern' },
    department: { th: 'นักศึกษาฝึกงาน', en: 'Student Internship' },
    company: { th: 'แอคโคไวร์มินส์ จำกัด', en: 'Acquiremines Co., Ltd.' },
    bullets: {
      th: [
        'ซ่อมคอมพิวเตอร์และปริ้นเตอร์',
        'บริการรับส่งมายคอมพิวเตอร์และอุปกรณ์ต่างๆ'
      ],
      en: [
        'Repair computers and printers',
        'Provide computer and equipment delivery services'
      ]
    }
  }
];

const marqueeItems = content[currentLang].marquee;

function renderCertCard(cert, lang) {
  const c = content[lang];
  const mediaHtml = cert.image
    ? `<div class="cert-media has-image"><img src="${cert.image}" alt="${cert.code} certificate"></div>`
    : `<div class="cert-media"><span class="cert-code">${cert.code}</span></div>`;
  const title = lang === 'th' ? cert.titleTh : cert.titleEn;
  const hours = lang === 'th' ? cert.hours : cert.hoursEn;
  const date = lang === 'th' ? cert.date : cert.dateEn;
  return `
    <div class="cert-card">
      ${mediaHtml}
      <div class="cert-body">
        <div class="cert-issuer">${cert.issuer}</div>
        <h3 class="cert-title">${title}</h3>
        <div class="cert-en">${lang === 'th' ? cert.titleEn : cert.titleTh}</div>
        <div class="cert-meta with-border"><span>${hours}</span><span>${date}</span></div>
        <a href="${cert.pdfUrl}" target="_blank" class="btn-outline-pill" style="display:block;text-align:center;">${c.viewPDF}</a>
      </div>
    </div>`;
}

function renderCertCardHome(cert, lang) {
  const mediaHtml = cert.image
    ? `<div class="cert-media has-image"><img src="${cert.image}" alt="${cert.code} certificate"></div>`
    : `<div class="cert-media"><span class="cert-code">${cert.code}</span></div>`;
  const title = lang === 'th' ? cert.titleTh : cert.titleEn;
  const hours = lang === 'th' ? cert.hours : cert.hoursEn;
  const date = lang === 'th' ? cert.date : cert.dateEn;
  return `
    <div class="cert-card">
      ${mediaHtml}
      <div class="cert-body">
        <div class="cert-issuer">${cert.issuer}</div>
        <h3 class="cert-title">${title}</h3>
        <div class="cert-meta"><span>${hours} &middot; ${date}</span></div>
      </div>
    </div>`;
}

function goHome() {
  document.getElementById('page-home').style.display = '';
  document.getElementById('page-certs').style.display = 'none';
  document.getElementById('nav-links-home').style.display = 'flex';
  document.getElementById('nav-links-certs').style.display = 'none';
  window.scrollTo(0, 0);
}

function goToCerts() {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-certs').style.display = '';
  document.getElementById('nav-links-home').style.display = 'none';
  document.getElementById('nav-links-certs').style.display = 'flex';
  window.scrollTo(0, 0);
}

function sendMail() {
  const name = document.getElementById('f-name').value;
  const email = document.getElementById('f-email').value;
  const message = document.getElementById('f-message').value;
  const subject = encodeURIComponent('ติดต่อจากเว็บ Resume — ' + (name || 'ผู้ติดต่อ'));
  const body = encodeURIComponent('ชื่อ: ' + name + '\nอีเมล: ' + email + '\n\n' + message);
  window.location.href = 'mailto:Feem19321932@gmail.com?subject=' + subject + '&body=' + body;
}

function toggleLanguage() {
  currentLang = currentLang === 'th' ? 'en' : 'th';
  localStorage.setItem('lang', currentLang);
  updateContent();
}

function updateContent() {
  const c = content[currentLang];

  // Update language toggle button
  document.getElementById('lang-toggle').textContent = currentLang === 'th' ? 'EN' : 'TH';

  // Update navigation
  const navLinksHome = document.getElementById('nav-links-home');
  navLinksHome.innerHTML = `
    <a href="#about">${c.navAbout}</a>
    <a href="#skills">${c.navSkills}</a>
    <a href="#projects">${c.navProjects}</a>
    <a href="#work">${c.navWork}</a>
    <a href="javascript:void(0)" onclick="goToCerts()">${c.navCerts}</a>
  `;

  const navLinksCerts = document.getElementById('nav-links-certs');
  navLinksCerts.innerHTML = `<a href="javascript:void(0)" onclick="goHome()">${c.navBack}</a>`;

  document.getElementById('nav-contact').textContent = c.navContact;

  // Update hero section
  document.querySelector('.hero-text h1').textContent = c.name;
  document.querySelector('.hero-role').textContent = c.role;
  document.querySelector('.hero-bio').textContent = c.bio;

  // Update stats
  const stats = document.querySelectorAll('.stat-label');
  stats[0].textContent = c.stat1Label;
  stats[1].textContent = c.stat2Label;
  stats[2].textContent = c.stat3Label;

  // Update marquee
  document.getElementById('marquee-track').innerHTML = c.marquee.concat(c.marquee, c.marquee)
    .map(t => `<span class="tag">${t} <span>✦</span></span>`).join('');

  // Update section titles
  document.querySelector('#about .h2').textContent = c.expTitle;
  document.querySelector('#internship .h2').textContent = c.internshipTitle;

  // Render experience and internships
  renderExperience();
  renderInternships();

  document.querySelector('#skills .h2').textContent = c.skillsTitle;
  document.querySelector('#projects .h2').textContent = c.projectsTitle;
  document.getElementById('proj-eyebrow').textContent = c.projEyebrow;
  document.getElementById('proj-desc').textContent = c.projDesc;
  document.getElementById('proj-cta').textContent = c.projCta;
  document.getElementById('proj2-eyebrow').textContent = c.proj2Eyebrow;
  document.getElementById('proj2-desc').textContent = c.proj2Desc;
  document.getElementById('proj2-cta').textContent = c.proj2Cta;
  document.querySelector('#work .h2').textContent = c.eduTitle;
  document.querySelector('.section-head-row .h2').textContent = c.featuredCerts;
  document.querySelector('.section-head-row .btn-outline-pill').textContent = c.viewAll;

  // Update contact section
  document.querySelector('.h2-center').textContent = c.collaborate;
  document.querySelector('.contact-actions button').textContent = c.downloadPDF;
  document.getElementById('f-name').placeholder = c.contactName;
  document.getElementById('f-email').placeholder = c.contactEmail;
  document.getElementById('f-message').placeholder = c.contactMessage;
  document.querySelector('.contact-form button').textContent = c.sendMessage;

  document.querySelector('.footer').textContent = c.footer;

  // Update certifications page
  document.querySelector('#page-certs .h1').textContent = c.certsTitle;
  document.querySelector('#page-certs .h2').textContent = c.thesisTitle;
  document.querySelector('.thesis-card h3').textContent = c.thesisTh;
  document.querySelector('.thesis-en').textContent = c.thesisEn;
  document.querySelector('.thesis-card .btn-outline-pill').textContent = c.viewThesis;
  document.querySelector('.back-home .btn-outline-pill').textContent = c.backToResume;

  // Re-render certification cards
  renderCertCards();
}

function renderExperience() {
  const html = experience.map(job => {
    const period = typeof job.period === 'object' ? job.period[currentLang] : job.period;
    const location = typeof job.location === 'object' ? job.location[currentLang] : job.location;
    const role = typeof job.role === 'object' ? job.role[currentLang] : job.role;
    const company = typeof job.company === 'object' ? job.company[currentLang] : job.company;
    const bullets = typeof job.bullets === 'object' ? job.bullets[currentLang] : job.bullets;
    const dept = job.department ? `<div class="job-department">${typeof job.department === 'object' ? job.department[currentLang] : job.department}</div>` : '';

    return `
      <div class="job">
        <div class="job-meta">
          <div class="job-period">${period}</div>
          <div class="job-location">${location}</div>
        </div>
        <div class="job-body">
          <h3 class="job-role">${role}</h3>
          <div class="job-company">${company}</div>
          ${dept}
          <ul class="bullets">
            ${bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>`;
  }).join('');
  document.getElementById('experience-list').innerHTML = html;
}

function renderInternships() {
  const html = internships.map(job => {
    const period = typeof job.period === 'object' ? job.period[currentLang] : job.period;
    const location = typeof job.location === 'object' ? job.location[currentLang] : job.location;
    const role = typeof job.role === 'object' ? job.role[currentLang] : job.role;
    const company = typeof job.company === 'object' ? job.company[currentLang] : job.company;
    const bullets = typeof job.bullets === 'object' ? job.bullets[currentLang] : job.bullets;
    const dept = job.department ? `<div class="job-department">${typeof job.department === 'object' ? job.department[currentLang] : job.department}</div>` : '';

    return `
      <div class="job">
        <div class="job-meta">
          <div class="job-period">${period}</div>
          <div class="job-location">${location}</div>
        </div>
        <div class="job-body">
          <h3 class="job-role">${role}</h3>
          <div class="job-company">${company}</div>
          ${dept}
          <ul class="bullets">
            ${bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>`;
  }).join('');
  document.getElementById('internship-list').innerHTML = html;
}

function renderCertCards() {
  document.getElementById('cert-grid-home').innerHTML = certifications.map(cert => renderCertCardHome(cert, currentLang)).join('');
  document.getElementById('cert-grid-page').innerHTML = certifications.map(cert => renderCertCard(cert, currentLang)).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initial render
  renderExperience();
  renderInternships();
  document.getElementById('cert-grid-home').innerHTML = certifications.map(cert => renderCertCardHome(cert, currentLang)).join('');
  document.getElementById('cert-grid-page').innerHTML = certifications.map(cert => renderCertCard(cert, currentLang)).join('');
  document.getElementById('marquee-track').innerHTML = marqueeItems.concat(marqueeItems, marqueeItems)
    .map(t => `<span class="tag">${t} <span>✦</span></span>`).join('');

  // Update content if language is not Thai
  if (currentLang !== 'th') {
    updateContent();
  }
});
