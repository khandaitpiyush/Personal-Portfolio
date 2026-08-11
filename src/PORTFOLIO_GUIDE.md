# 🎓 MERN Stack Portfolio - Customization Guide

## 📋 Overview

This is a production-grade, recruiter-ready portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. It showcases your skills as a MERN Stack Developer with clean, professional design and modern engineering practices.

---

## 🎯 Key Features

✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile  
✅ **Dark Mode** - Toggle between light and dark themes  
✅ **Smooth Animations** - Subtle Motion animations for professional feel  
✅ **Type-Safe** - Built with TypeScript for better code quality  
✅ **Production-Ready** - Clean, scalable, component-driven architecture  
✅ **SEO-Friendly** - Optimized structure for better visibility  

---

## 🛠️ How to Customize

### 1️⃣ Personal Information

**File**: `/components/Hero.tsx`

Replace these placeholders:
- **Line 31**: `Your Name` → Your actual name
- **Line 46-47**: Update college name if different
- **Line 53-73**: Update social media links (GitHub, LinkedIn, Email)

**File**: `/components/Footer.tsx`

- **Line 10**: `Your Name` → Your actual name
- **Lines 35-55**: Update social media links

---

### 2️⃣ Projects

**File**: `/data/portfolio-data.ts`

Update the `projects` array (Lines 5-87) with your actual projects:

```typescript
{
  id: '1',
  name: 'Your Project Name',
  description: 'Brief description of your project',
  techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript'],
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  githubUrl: 'https://github.com/yourusername/project-name',
  liveUrl: 'https://your-project-demo.com' // Optional
}
```

**Tips**:
- Add 3-5 best projects
- Highlight MERN stack projects
- Include real GitHub repository links
- Add live demo links if available

---

### 3️⃣ Skills

**File**: `/data/portfolio-data.ts`

The `skillCategories` object (Lines 89-126) is already set up with MERN stack focus.

**To modify**:
- Add/remove skills from each category
- The "Core Stack" category is highlighted with special styling
- Keep skills relevant to your experience

---

### 4️⃣ Experience

**File**: `/data/portfolio-data.ts`

Update the `experiences` array (Lines 128-172) with your actual experience:

```typescript
{
  id: '1',
  title: 'Position Title',
  organization: 'Company/Organization Name',
  type: 'internship', // Options: internship, workshop, hackathon, certification, freelance
  duration: 'Jun 2024 - Aug 2024',
  description: 'What you did and achieved',
  skills: ['React', 'Node.js', 'MongoDB']
}
```

---

### 5️⃣ Currently Learning

**File**: `/data/portfolio-data.ts`

Update the `currentLearning` array (Lines 174-181) with topics you're currently studying.

---

### 6️⃣ About Section

**File**: `/components/About.tsx`

- **Line 28**: Replace with your professional photo URL (or keep the placeholder)
- **Lines 40-78**: Update education details, location, and professional summary

---

### 7️⃣ Contact Information

**File**: `/components/Contact.tsx`

Update contact details (Lines 35-56):
- Email address
- LinkedIn URL
- GitHub URL
- Location

---

### 8️⃣ Resume

**File**: `/components/Resume.tsx`

To add an actual resume download:

Replace line 10-13:
```typescript
const handleDownload = () => {
  // Create a link to your actual resume PDF
  window.open('/path-to-your-resume.pdf', '_blank');
};
```

Or upload your resume to Google Drive/Dropbox and link to it.

---

## 🎨 Customizing Colors

The portfolio uses an Indigo/Blue accent color scheme. To change:

**File**: `/styles/globals.css`

- Lines 195-202: Update the gradient colors in the scrollbar
- Search for `indigo-600` and `blue-600` throughout the components to change accent colors

Common replacements:
- `indigo-600` → `emerald-600` (green theme)
- `indigo-600` → `purple-600` (purple theme)
- `indigo-600` → `rose-600` (pink/red theme)

---

## 📱 Sections Overview

1. **Hero** - Landing section with name, title, and CTAs
2. **About** - Personal information, education, and professional summary
3. **Skills** - Technical skills organized by category (MERN stack highlighted)
4. **Projects** - Featured projects with tech stack and links
5. **Experience** - Work experience, internships, workshops, certifications
6. **Resume** - Download resume section
7. **Contact** - Contact form and social links
8. **Footer** - Quick links and social icons

---

## 🚀 Deployment Tips

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect React and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy

---

## ✅ Before You Deploy - Checklist

- [ ] Update all personal information (name, email, social links)
- [ ] Add your real projects with GitHub links
- [ ] Update experience section with your background
- [ ] Replace placeholder photo in About section
- [ ] Add your actual resume PDF
- [ ] Test all links (GitHub, LinkedIn, Live Demos)
- [ ] Test on mobile and desktop
- [ ] Check both light and dark modes
- [ ] Proofread all text for typos

---

## 📊 File Structure

```
/
├── App.tsx                    # Main application component
├── components/
│   ├── Navbar.tsx            # Navigation with theme toggle
│   ├── Hero.tsx              # Landing section
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skills section
│   ├── Projects.tsx          # Projects showcase
│   ├── Experience.tsx        # Experience timeline
│   ├── Resume.tsx            # Resume download section
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer
│   ├── ScrollProgress.tsx    # Scroll progress bar
│   └── ScrollToTop.tsx       # Back to top button
├── data/
│   └── portfolio-data.ts     # All portfolio content data
├── types/
│   └── index.ts              # TypeScript type definitions
├── hooks/
│   └── useInView.ts          # Custom hook for scroll animations
└── styles/
    └── globals.css           # Global styles and theme
```

---

## 🎓 Learning Points

This portfolio demonstrates:

1. **Component-Driven Architecture** - Reusable, modular components
2. **TypeScript** - Strong typing for better code quality
3. **State Management** - React hooks (useState, useEffect)
4. **Custom Hooks** - useInView for scroll animations
5. **Responsive Design** - Mobile-first approach with Tailwind
6. **Theme Management** - Dark mode implementation
7. **Type Safety** - Interfaces for all data structures
8. **Performance** - Optimized animations and scroll behavior

---

## 💡 Tips for Placement Success

1. **Keep it Updated** - Add new projects regularly
2. **Real Projects** - Showcase actual working applications
3. **Clean Code** - Recruiters may review your GitHub
4. **Live Demos** - Deploy projects and add live links
5. **Metrics** - Add numbers (users, performance improvements, etc.)
6. **Keywords** - Include relevant tech keywords for ATS systems
7. **Professional Photo** - Use a clear, professional headshot
8. **Proofread** - Check grammar and spelling carefully

---

## 🆘 Need Help?

If you encounter issues:

1. Check the browser console for errors
2. Ensure all imports are correct
3. Verify all data in `portfolio-data.ts` is valid
4. Check that social links start with `https://`

---

## 🔥 Next Steps

After customizing:

1. **Test Thoroughly** - Check all sections and links
2. **Get Feedback** - Ask friends/mentors to review
3. **Deploy** - Make it live on Vercel/Netlify
4. **Share** - Add the link to your resume and LinkedIn
5. **Monitor** - Track visitors with Google Analytics (optional)

---

**Built with ❤️ for DBIT Students**

Good luck with your placements! 🚀
