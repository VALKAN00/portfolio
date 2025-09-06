# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and professional experience in web development and data science.

## 🌟 Live Demo

**[View Live Portfolio](https://comforting-semifreddo-ca7ac0.netlify.app/)**

## 📋 Features

- **Modern Design**: Clean, professional interface with dark theme and gradient accents
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful animations and transitions using Framer Motion
- **Interactive Sections**: 
  - Hero section with typewriter effect
  - About me with personal introduction
  - Education background
  - Professional experience timeline
  - Skills showcase with categorized technologies
  - Project portfolio with live demos and GitHub links
  - Professional certificates
  - Contact form with EmailJS integration
- **Smooth Navigation**: Scroll-to-section navigation with active section highlighting
- **Performance Optimized**: Fast loading with Vite build tool

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern UI library
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon toolkit

### Additional Libraries
- **EmailJS** - Email service for contact form
- **React Icons** - Popular icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx           # About section
│   ├── Animation.jsx       # Animation wrapper component
│   ├── BackToTop.jsx       # Back to top button
│   ├── Certificates.jsx    # Certifications display
│   ├── Contact.jsx         # Contact form
│   ├── Cursor.jsx          # Custom cursor effect
│   ├── Education.jsx       # Education background
│   ├── Experience.jsx      # Work experience timeline
│   ├── Footer.jsx          # Footer component
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Landing section
│   ├── Offers.jsx          # Services offered
│   ├── Projects.jsx        # Project showcase
│   ├── ScrollIndicator.jsx # Scroll progress indicator
│   ├── Skills.jsx          # Skills and technologies
│   ├── SmoothScroll.jsx    # Smooth scrolling behavior
│   ├── TypeEffect.jsx      # Typewriter effect
│   ├── UseActiveSection.jsx # Active section hook
│   └── Data/
│       └── Projects_Data.js # Project data
├── assets/                 # Static assets
├── App.jsx                 # Main app component
├── App.css                 # Global styles
├── index.css               # Base styles
└── main.jsx                # App entry point
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-portfolio-repo.git
   cd your-portfolio-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Personal Information
- Update personal details in `src/components/About.jsx`
- Modify hero section content in `src/components/Hero.jsx`
- Update contact information in `src/components/Contact.jsx`

### Projects
- Add your projects in `src/components/Data/Projects_Data.js`
- Update project images in the `public` directory

### Skills
- Modify skills and technologies in `src/components/Skills.jsx`

### Styling
- Customize colors and themes in Tailwind CSS classes
- Modify global styles in `src/index.css`

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the EmailJS configuration in `src/components/Contact.jsx`

## 🚀 Deployment

This project is deployed on Netlify. To deploy your own version:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

---

**⭐ Star this repository if you found it helpful!**
