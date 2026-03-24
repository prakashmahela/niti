import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Monitor, Award, Users, ArrowRight, Phone, Mail, MapPin, CheckCircle2, GraduationCap, Code, Cpu, ArrowLeft, Brain, TrendingUp, PenTool, Layers, Globe, Database, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { CircularTestimonials } from './components/ui/circular-testimonials';
import { MeshBackground } from './components/ui/mesh-background';
import { Pricing, type PricingPlan } from "./components/ui/pricing";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Computer Centre', href: '#computer' },
    { name: 'NEET-JEE Academy', href: '#academy' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            scale: isScrolled ? 0.98 : 1
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={`
            pointer-events-auto
            mx-auto transition-all duration-500 ease-in-out
            ${isScrolled || isMenuOpen 
              ? 'bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40 rounded-2xl py-2 px-6' 
              : 'bg-transparent py-4 px-0'
            }
            flex justify-between items-center relative
          `}
          style={{
            boxShadow: isScrolled 
              ? '0 10px 30px -10px rgba(0,0,0,0.1), 0 1px 1px rgba(255,255,255,0.8) inset, 0 -1px 1px rgba(0,0,0,0.05) inset' 
              : 'none'
          }}
        >
          <div className="flex items-center">
            <img 
              src="https://i.ibb.co/BHmxFsGB/NITI-LOGO-removebg-preview-1.png" 
              alt="NITI Logo" 
              className={`transition-all duration-500 ${isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'} w-auto object-contain`} 
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-700 hover:text-blue-600 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-900 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden md:hidden"
              >
                <div className="flex flex-col p-6 gap-4 text-base font-medium">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="hover:text-blue-600 transition-colors py-2 border-b border-slate-50 last:border-0"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a 
                    href="#contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-center mt-2 shadow-lg shadow-blue-100"
                  >
                    Enquire Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
};

const Hero = ({ onViewChange }: { onViewChange: (view: 'computer' | 'academy') => void }) => {
  return (
    <MeshBackground 
      speed={0.5} 
      distortion={0.8} 
      colors={["#f8fafc", "#f1f5f9", "#e2e8f0", "#eff6ff", "#f0fdf4", "#ffffff"]}
      veilOpacity="bg-white/40"
    >
      <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-20 md:pb-0 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h1 className="text-5xl md:text-7xl font-anton uppercase tracking-wider leading-[1.1] mb-6 color-flow-text">
              26 years of quality education
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
              Whether you're mastering the digital world or aiming for top medical and engineering colleges, NITI provides the guidance you need to excel.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onViewChange('academy')}
                className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200 text-sm md:text-base"
              >
                NEET-JEE Academy <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onViewChange('computer')}
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2 text-sm md:text-base"
              >
                Computer Courses <Monitor className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/4RXfb4kN/Whats-App-Image-2025-10-27-at-8-21-48-AM-1.jpg" 
                alt="Students studying" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-1.5 rounded-lg">
                  <GraduationCap className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-bold leading-none mb-0.5">Experienced</p>
                  <p className="text-[8px] text-slate-500 font-medium uppercase tracking-wider leading-none">Faculty Mentors</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-xl z-20 border border-slate-100 scale-90 origin-right md:scale-100">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded-lg">
                  <Users className="text-green-600 w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-bold leading-none mb-0.5">5000+</p>
                  <p className="text-[8px] text-slate-500 font-medium uppercase tracking-wider leading-none">Students Guided</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MeshBackground>
  );
};

const ComputerSection = ({ onSelectCourse }: { onSelectCourse: (course: any) => void }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const courses = [
    {
      title: "DCA",
      desc: "Diploma in Computer Applications covering essential software and tools.",
      icon: <Monitor className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#F59E0B] via-[#D97706] to-[#B45309]",
      details: {
        duration: "6 Months",
        modules: ["Computer Fundamentals", "MS Office Suite", "Internet & Web Browsing", "Tally Prime Basics", "Operating Systems"],
        outcomes: ["Data Entry Operator", "Office Assistant", "Computer Operator", "Front Desk Executive"],
        stats: { "Software Covered": "10+", "Practical Hours": "120+", "Certification": "ISO Certified" }
      }
    },
    {
      title: "Tally",
      desc: "Master accounting, GST billing and financial management with Tally Prime.",
      icon: <Database className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#0EA5E9] via-[#0284C7] to-[#0369A1]",
      details: {
        duration: "2-3 Months",
        modules: ["Tally Prime Basics", "Accounting Entries", "GST Configuration", "Payroll Management", "MIS Reports"],
        outcomes: ["Accountant", "GST Practitioner", "Finance Executive", "Billing Operator"],
        stats: { "Topics": "20+", "Practical Hours": "60+", "Industry Use": "Widespread" }
      }
    },
    {
      title: "Power BI",
      desc: "Data visualization and business intelligence using Microsoft Power BI.",
      icon: <TrendingUp className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#F59E0B] via-[#B45309] to-[#78350F]",
      details: {
        duration: "1-2 Months",
        modules: ["Power BI Desktop", "Data Modelling", "DAX Formulas", "Dashboard Creation", "Power Query"],
        outcomes: ["BI Analyst", "Data Analyst", "MIS Executive", "Reporting Specialist"],
        stats: { "Dashboards Built": "5+", "Data Sources": "10+", "Industry Demand": "High" }
      }
    },
    {
      title: "SQL",
      desc: "Structured Query Language for database creation, management and querying.",
      icon: <Database className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#10B981] via-[#059669] to-[#047857]",
      details: {
        duration: "1-2 Months",
        modules: ["SQL Basics & Syntax", "DDL & DML Commands", "Joins & Subqueries", "Stored Procedures", "Database Design"],
        outcomes: ["Database Administrator", "Backend Developer", "Data Analyst", "SQL Developer"],
        stats: { "Queries Practiced": "100+", "DB Platforms": "MySQL/MSSQL", "Eligibility": "Any Graduate" }
      }
    },
    {
      title: "Steno",
      desc: "Professional shorthand and typing skills for administrative roles.",
      icon: <PenTool className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#6366F1] via-[#4F46E5] to-[#4338CA]",
      details: {
        duration: "6-12 Months",
        modules: ["Shorthand Theory", "Speed Development", "Transcription", "Office Procedures", "Typing Skills"],
        outcomes: ["Court Reporter", "Personal Assistant", "Stenographer in Govt. Sector", "Secretary"],
        stats: { "Avg. Speed": "80-120 WPM", "Job Growth": "15% YoY", "Placement Rate": "92%" }
      }
    },
    {
      title: "AI",
      desc: "Artificial Intelligence fundamentals, machine learning and real-world applications.",
      icon: <Brain className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
      details: {
        duration: "2-3 Months",
        modules: ["Introduction to AI", "Machine Learning Basics", "Deep Learning Concepts", "AI for Business & Healthcare", "Programming & Case Studies"],
        outcomes: ["AI Analyst", "ML Engineer", "Data Scientist", "AI Product Manager"],
        stats: { "Projects": "3+", "Tools": "Python/TF", "Industry Demand": "Very High" }
      }
    },
    {
      title: "AutoCAD",
      desc: "Industry-standard 2D and 3D computer-aided design training.",
      icon: <Layers className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#F97316] via-[#EA580C] to-[#C2410C]",
      details: {
        duration: "2 Months",
        modules: ["2D Drafting", "3D Modeling", "Rendering", "Architectural Design", "Mechanical Drafting"],
        outcomes: ["CAD Designer", "Draftsman", "Project Coordinator", "Interior Designer"],
        stats: { "Drawings": "20+", "Industry Standard": "v2024", "Certification": "Autodesk Style" }
      }
    },
    {
      title: "SketchUp",
      desc: "3D modelling for architecture, interior design and construction projects.",
      icon: <Layers className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#EC4899] via-[#DB2777] to-[#BE185D]",
      details: {
        duration: "1-2 Months",
        modules: ["SketchUp Interface", "3D Modelling Basics", "Components & Groups", "Textures & Materials", "Export & Rendering"],
        outcomes: ["3D Designer", "Interior Designer", "Architect", "Construction Visualizer"],
        stats: { "Models Created": "10+", "Plugins": "5+", "Eligibility": "Any" }
      }
    },
    {
      title: "Lumion",
      desc: "Architectural visualization and real-time 3D rendering software.",
      icon: <Globe className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#14B8A6] via-[#0D9488] to-[#0F766E]",
      details: {
        duration: "1 Month",
        modules: ["Lumion Interface", "Importing 3D Models", "Scene Building", "Lighting & Weather", "Animation & Video Export"],
        outcomes: ["Architectural Visualizer", "3D Artist", "Presentation Designer", "Real Estate Marketer"],
        stats: { "Renders": "10+", "Scene Types": "5+", "Output": "4K Video/Image" }
      }
    },
    {
      title: "PGDCA",
      desc: "Advanced post-graduate diploma for specialized computer expertise.",
      icon: <GraduationCap className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#10B981] via-[#047857] to-[#064E3B]",
      details: {
        duration: "1 Year",
        modules: ["Programming in C/C++", "Database Management (SQL)", "Web Development (HTML/CSS)", "System Analysis", "Software Engineering"],
        outcomes: ["Software Developer", "System Administrator", "IT Consultant", "Database Manager"],
        stats: { "Projects": "4 Major", "Advanced Modules": "8", "Eligibility": "Graduate" }
      }
    },
    {
      title: "Cyber Security",
      desc: "Ethical hacking, network security and cyber threat management.",
      icon: <Cpu className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#EF4444] via-[#DC2626] to-[#B91C1C]",
      details: {
        duration: "2-3 Months",
        modules: ["Network Security Basics", "Ethical Hacking", "Penetration Testing", "Cyber Laws", "Incident Response"],
        outcomes: ["Cyber Security Analyst", "Ethical Hacker", "Network Security Engineer", "IT Auditor"],
        stats: { "Tools": "Kali Linux/Wireshark", "Certifications": "Prep Included", "Demand": "Critical" }
      }
    },
    {
      title: "Digital Marketing",
      desc: "Master SEO, SEM, and social media to grow businesses online.",
      icon: <Globe className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#F43F5E] via-[#E11D48] to-[#BE123C]",
      details: {
        duration: "3-4 Months",
        modules: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Google Analytics", "Email Marketing"],
        outcomes: ["SEO Specialist", "Social Media Manager", "Digital Strategist", "Content Marketer"],
        stats: { "Tools Mastered": "15+", "Live Campaigns": "3", "Industry Demand": "High" }
      }
    },
    {
      title: "Hardware Networking",
      desc: "Computer hardware assembly, troubleshooting and network configuration.",
      icon: <Cpu className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#64748B] via-[#475569] to-[#334155]",
      details: {
        duration: "3-6 Months",
        modules: ["Computer Assembly", "OS Installation", "LAN/WAN Setup", "Router & Switch Config", "Troubleshooting"],
        outcomes: ["Hardware Engineer", "Network Administrator", "IT Support Technician", "System Engineer"],
        stats: { "Practical Labs": "20+", "Certifications": "A+/N+ Prep", "Job Openings": "High" }
      }
    },
    {
      title: "Video Editing",
      desc: "Professional video editing, colour grading and post-production skills.",
      icon: <Monitor className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#0EA5E9] via-[#7C3AED] to-[#6D28D9]",
      details: {
        duration: "2-3 Months",
        modules: ["Premiere Pro Basics", "Timeline Editing", "Colour Grading", "Motion Graphics", "Audio Mixing"],
        outcomes: ["Video Editor", "Content Creator", "YouTuber", "Post-Production Artist"],
        stats: { "Software": "Premiere/DaVinci", "Projects": "5+", "Output": "4K Ready" }
      }
    },
    {
      title: "Stock Market",
      desc: "Learn technical analysis and trading strategies for financial markets.",
      icon: <TrendingUp className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
      details: {
        duration: "2-3 Months",
        modules: ["Fundamental Analysis", "Technical Analysis", "Options & Futures", "Risk Management", "Trading Psychology"],
        outcomes: ["Equity Trader", "Financial Analyst", "Portfolio Manager", "Investment Advisor"],
        stats: { "Strategies": "12+", "Live Trading": "Yes", "Market Focus": "NSE/BSE" }
      }
    },
    {
      title: "Graphic Designing",
      desc: "Creative visual communication using modern design tools.",
      icon: <Award className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#D946EF] via-[#C026D3] to-[#A21CAF]",
      details: {
        duration: "4-6 Months",
        modules: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "UI/UX Basics", "Typography & Layout"],
        outcomes: ["Graphic Designer", "Brand Identity Designer", "Visual Artist", "Creative Director"],
        stats: { "Portfolio Pieces": "10+", "Design Tools": "5", "Creative Focus": "100%" }
      }
    },
    {
      title: "HTML",
      desc: "Web development fundamentals with HTML, CSS and basic JavaScript.",
      icon: <Code className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#F97316] via-[#EA580C] to-[#9A3412]",
      details: {
        duration: "1-2 Months",
        modules: ["HTML5 Structure", "CSS3 Styling", "Responsive Design", "Basic JavaScript", "Web Page Projects"],
        outcomes: ["Junior Web Developer", "Front-End Trainee", "Blogger", "Web Designer"],
        stats: { "Projects": "5+", "Languages": "HTML/CSS/JS", "Certification": "Included" }
      }
    },
    {
      title: "GST",
      desc: "Goods & Services Tax filing, compliance and accounting procedures.",
      icon: <BookOpen className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#10B981] via-[#0D9488] to-[#0369A1]",
      details: {
        duration: "1 Month",
        modules: ["GST Basics & Structure", "Registration Process", "Return Filing (GSTR-1/3B)", "Input Tax Credit", "E-Way Bill"],
        outcomes: ["GST Practitioner", "Tax Consultant", "Accounts Executive", "Compliance Officer"],
        stats: { "Forms Covered": "10+", "Practical Filing": "Yes", "Industry": "Finance/Tax" }
      }
    },
    {
      title: "C++",
      desc: "Object-oriented programming with C++ for software and system development.",
      icon: <Code className="w-5 h-5 md:w-6 h-6" />,
      gradient: "from-[#6366F1] via-[#4F46E5] to-[#312E81]",
      details: {
        duration: "2-3 Months",
        modules: ["C++ Syntax & Basics", "OOP Concepts", "Pointers & Memory", "Data Structures", "File Handling"],
        outcomes: ["Software Developer", "Game Developer", "Systems Programmer", "Competitive Coder"],
        stats: { "Programs": "50+", "Concepts": "OOP/DSA", "Eligibility": "Any" }
      }
    },
  ];

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const displayedCourses = courses.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section id="computer" className="py-24 bg-white text-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-anton uppercase tracking-wider mb-4 color-flow-text">Computer Centre</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Equipping you with industry-standard digital skills to thrive in the modern workforce. Click on any course to view details.
          </p>
        </div>

        <div className="relative group/section">
          {/* Navigation Arrows - Desktop Side Position */}
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full border transition-all bg-white/90 backdrop-blur-sm hidden md:block ${currentPage === 0 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover/section:opacity-100 text-slate-600 border-slate-200 hover:bg-white hover:border-blue-200 hover:text-blue-600 shadow-lg'}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full border transition-all bg-white/90 backdrop-blur-sm hidden md:block ${currentPage === totalPages - 1 ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover/section:opacity-100 text-slate-600 border-slate-200 hover:bg-white hover:border-blue-200 hover:text-blue-600 shadow-lg'}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto"
            >
              {displayedCourses.map((course, idx) => {
                const isLastAndOdd = idx === displayedCourses.length - 1 && displayedCourses.length % 2 !== 0;
                return (
                  <motion.div 
                    key={course.title}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      delay: idx * 0.2 
                    }}
                    whileHover={{ scale: 1.06, y: -10 }}
                    onClick={() => onSelectCourse(course)}
                    className={`diamond-card-wrap relative cursor-pointer ${isLastAndOdd ? 'col-span-2 md:col-span-1 w-full max-w-[calc(50%-6px)] mx-auto md:max-w-none' : ''}`}
                    style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.28))' }}
                  >
                    {/* Outer glow border */}
                    <div
                      className={`diamond-card bg-gradient-to-br ${course.gradient} p-4 md:p-6 text-white relative`}
                      style={{
                        boxShadow: '0 0 0 1.5px rgba(255,255,255,0.25) inset, 0 2px 40px rgba(0,0,0,0.3)',
                      }}
                    >
                      {/* Prismatic shimmer sweep */}
                      <div className="diamond-shimmer" />
                      {/* Top-left facet glint */}
                      <div className="facet-line" />
                      {/* Bottom-right shadow facet */}
                      <div className="facet-shadow" />

                      <div className="relative z-10">
                        <div className="bg-white/15 backdrop-blur-xl p-2 md:p-3 rounded-lg md:rounded-xl mb-3 md:mb-4 text-white border border-white/30 shadow-[0_2px_12px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.3)_inset] group-hover:bg-white/25 transition-colors duration-300 w-fit">
                          {course.icon}
                        </div>
                        <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2 font-display tracking-tight leading-tight" style={{textShadow:'0 1px 8px rgba(0,0,0,0.4),0 0 20px rgba(255,255,255,0.2)'}}>{course.title}</h3>
                        <p className="text-white/85 text-[10px] md:text-xs leading-relaxed font-medium line-clamp-2 md:line-clamp-none" style={{textShadow:'0 1px 4px rgba(0,0,0,0.3)'}}>
                          {course.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden justify-center items-center gap-6 mt-8">
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-3 rounded-full border transition-all bg-white shadow-sm ${currentPage === 0 ? 'text-slate-200 border-slate-100' : 'text-slate-600 border-slate-200 active:bg-slate-50 active:scale-95'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`p-3 rounded-full border transition-all bg-white shadow-sm ${currentPage === totalPages - 1 ? 'text-slate-200 border-slate-100' : 'text-slate-600 border-slate-200 active:bg-slate-50 active:scale-95'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-6 mt-8 md:mt-12">
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === i ? 'bg-blue-600 w-8' : 'bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Page {currentPage + 1} of {totalPages}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AcademySection = ({ onViewBatchSchedule }: { onViewBatchSchedule: () => void }) => {
  const features = [
    "IITian Faculty from Top Institutions",
    "Comprehensive Study Material",
    "Regular Mock Tests & Analysis",
    "Personalized Doubt Solving Sessions",
    "Modern Classroom Infrastructure",
    "Focus on Concept Clarity"
  ];

  return (
    <section id="academy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img 
            src="https://i.ibb.co/N2BVD6QX/494485337-10161805121693375-8693694471762243027-n.jpg" 
            alt="Academy Classroom" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
            Competitive Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-anton uppercase tracking-wider mb-6 color-flow-text">NEET & JEE Academy</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our academy is dedicated to nurturing the next generation of doctors and engineers. We provide a rigorous yet supportive environment to help students crack the toughest competitive exams.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-center">
            <button onClick={onViewBatchSchedule} className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all text-sm">
              View Batch Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "At NITI, our mission is to provide quality education and skill development to every student, ensuring they are ready for the global workforce.",
      name: "Ajay Sethi",
      designation: "Managing Director",
      src: "https://i.ibb.co/rRV0k7gj/Whats-App-Image-2025-06-24-at-10-52-52-AM-1.jpg"
    },
    {
      quote: "Innovation and excellence are the pillars of NITI. We strive to create an environment where students can explore their full potential.",
      name: "Rishav Sethi",
      designation: "CEO",
      src: "https://i.ibb.co/Fq5XswtK/Whats-App-Image-2025-11-23-at-10-16-24-AM.jpg"
    },
    {
      quote: "As Academic Director and Physics Faculty at NITI NEET-JEE Academy, Dimapur, my vision is to build strong fundamentals and conceptual clarity in every student. Through disciplined, concept-based learning, we aim to develop not just rank holders, but confident, future-ready individuals.",
      name: "Jaydeep Kumar",
      designation: "Academic Director",
      src: "https://i.ibb.co/7xLWTHQw/jaydeep.png"
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-anton uppercase tracking-wider mb-4 color-flow-text">Our Leadership Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Meet the visionaries behind NITI who are dedicated to transforming the educational landscape.
          </p>
        </div>
        <div className="flex justify-center">
          <CircularTestimonials 
            testimonials={testimonials}
            colors={{
              name: "#0f172a",
              designation: "#3b82f6",
              testimony: "#475569",
              arrowHoverBackground: "#2563eb"
            }}
          />
        </div>
      </div>
    </section>
  );
};

const CoursePricingSection = () => {
  const coursePlans: PricingPlan[] = [
    {
      name: "Stock Market Crash Course",
      price: "15000",
      yearlyPrice: "13500",
      period: "course",
      features: [
        "Introduction: NSE and BSE",
        "Demat Account and Zerodha Interface Overview",
        "Technical Analysis",
        "Fundamental Analysis",
        "Equity Indices",
        "Mutual Funds",
        "Small Case",
        "Small Case over Mutual Funds",
        "Candlestick Chart Patterns"
      ],
      description: "Master the stock market from basics to advanced trading strategies.",
      buttonText: "Enroll Now",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "Diploma in Ethical Hacking",
      price: "15000",
      yearlyPrice: "13500",
      period: "course",
      features: [
        "System Administration",
        "Command Prompt",
        "Brute Force Attacks",
        "SQL Injection",
        "Kali Linux Overview",
        "VirtualBox",
        "Sockets",
        "Identifying Web Technologies",
        "Credential Stuffing & Password Spraying"
      ],
      description: "Learn professional ethical hacking and cyber security skills.",
      buttonText: "Enroll Now",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "Stenography and Typing",
      price: "18000",
      yearlyPrice: "16200",
      period: "course",
      features: [
        "Introduction to Shorthand, Consonants and Vowels",
        "Computer Keyboard Functions and its Operations",
        "Computer Speed Typing",
        "Halving Principles | Doubling Principles",
        "Professional Skill (Trade Practical)",
        "Professional Knowledge (Trade Theory)"
      ],
      description: "Professional shorthand and typing for government and private sectors.",
      buttonText: "Enroll Now",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "Diploma in Computer Application",
      price: "10000",
      yearlyPrice: "9000",
      period: "course",
      features: [
        "Fundamentals of IT",
        "MS Office",
        "Operating System",
        "Tally ERP9",
        "HTML"
      ],
      description: "Comprehensive foundation in computer applications and IT basics.",
      buttonText: "Enroll Now",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "Diploma in Graphical Designing",
      price: "15000",
      yearlyPrice: "13500",
      period: "course",
      features: [
        "Adobe PageMaker",
        "Adobe Photoshop",
        "CorelDRAW",
        "Adobe Illustrator",
        "Adobe InDesign"
      ],
      description: "Master professional graphic design tools and creative techniques.",
      buttonText: "Enroll Now",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "Diploma in Digital Marketing",
      price: "15000",
      yearlyPrice: "13500",
      period: "course",
      features: [
        "Search Engine Optimisation (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Marketing (SMM)",
        "Email Marketing",
        "Adsense, Blogging and Affiliate Marketing",
        "Campaign Management – Facebook and Instagram"
      ],
      description: "Comprehensive digital marketing training for modern businesses.",
      buttonText: "Enroll Now",
      href: "#contact",
      isPopular: false,
    },
    {
      name: "Post Graduate Diploma in Computer Application",
      price: "15000",
      yearlyPrice: "13500",
      period: "course",
      features: [
        "Fundamentals of IT",
        "Python",
        "Web Programming – HTML, CSS, Javascript and Bootstrap",
        "Structured Query Language",
        "Tally ERP9",
        "Adobe Photoshop",
        "Microsoft Visual Basic",
        "Data Structures"
      ],
      description: "Advanced post-graduate training for specialized IT expertise.",
      buttonText: "Enroll Now",
      href: "#contact",
      isPopular: true,
    },
  ];

  return (
    <section className="bg-slate-50">
      <Pricing 
        plans={coursePlans}
        title="Affordable Excellence"
        description="Invest in your future with our industry-leading courses. Choose the program that fits your career goals. (Prices are without GST)"
      />
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Computer Courses',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, interest, message } = formData;
    const text = `*New Enquiry from NITI Website*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interested In:* ${interest}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919436012641?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
          <div className="bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Get in Touch</h2>
            <p className="text-blue-100 mb-10 text-lg">
              Have questions about our courses or admission process? Our team is here to help you.
            </p>
            
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-blue-200" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg mb-0.5">Visit Us</p>
                  <p className="text-blue-100 text-sm leading-relaxed">Opp. Ram Janki Higher Secondary School, Marwari Patti, Dimapur</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-blue-200" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg mb-0.5">Call Us</p>
                  <p className="text-blue-100 text-sm leading-relaxed">94360 12641 / 70052 91593</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-blue-200" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg mb-0.5">Email Us</p>
                  <p className="text-blue-100 text-sm leading-relaxed">nitidimapurcentre@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50" 
                    placeholder="+91 00000 00000" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Interested In</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50"
                >
                  <option>Computer Courses</option>
                  <option>NEET Coaching</option>
                  <option>JEE Coaching</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-slate-50" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-10">
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/BHmxFsGB/NITI-LOGO-removebg-preview-1.png" 
            alt="NITI Logo" 
            className="h-24 w-auto object-contain brightness-0 invert opacity-80" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
        </div>
        
        <div className="w-full max-w-xs h-px bg-slate-800"></div>
        
        <p className="text-sm leading-relaxed">
          © {new Date().getFullYear()} NITI Academy & Computer Centre. <br className="md:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const ScrollGallery = () => {
  const row1 = [
    "https://i.ibb.co/q3Q1JHBh/Whats-App-Image-2026-03-23-at-12-30-21-PM-1.jpg",
    "https://i.ibb.co/VcWLBXM3/Whats-App-Image-2026-03-23-at-12-30-21-PM.jpg",
    "https://i.ibb.co/TqW0HmVb/Whats-App-Image-2026-03-23-at-12-30-20-PM-2.jpg",
    "https://i.ibb.co/WWJDvJL6/Whats-App-Image-2026-03-23-at-12-30-20-PM-1.jpg",
    "https://i.ibb.co/bMcjhHDn/Whats-App-Image-2026-03-23-at-12-30-20-PM.jpg",
    "https://i.ibb.co/Q3WQqP9W/Whats-App-Image-2026-03-23-at-12-30-19-PM-2.jpg",
  ];
  const row2 = [
    "https://i.ibb.co/G4J1Sb4L/Whats-App-Image-2026-03-23-at-12-30-19-PM-1.jpg",
    "https://i.ibb.co/0RtRvWj1/Whats-App-Image-2026-03-23-at-12-30-19-PM.jpg",
    "https://i.ibb.co/R4Mrt7PV/Whats-App-Image-2026-03-23-at-12-30-16-PM.jpg",
    "https://i.ibb.co/h14x9zm8/Whats-App-Image-2025-06-23-at-6-25-26-PM.jpg",
    "https://i.ibb.co/VYmXm04r/508650252-10161996521998375-8302662078765476454-n.jpg",
    "https://i.ibb.co/q3Q1JHBh/Whats-App-Image-2026-03-23-at-12-30-21-PM-1.jpg", // Adding one more to keep it balanced or just use 5
  ];

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-anton uppercase tracking-wider mb-2 color-flow-text">Life at NITI</h2>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          Glimpses of our vibrant campus, modern labs, and successful student events.
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {[...row1, ...row1].map((src, i) => (
              <div key={i} className="w-[200px] md:w-[300px] h-[140px] md:h-[180px] rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [-1920, 0] }}
            transition={{ 
              duration: 45, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-4 whitespace-nowrap"
          >
            {[...row2, ...row2].map((src, i) => (
              <div key={i} className="w-[200px] md:w-[300px] h-[140px] md:h-[180px] rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSubpage = ({ reason, onBack }: { reason: any, onBack: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 md:px-6"
    >
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className={`h-2 w-full bg-gradient-to-r ${reason.headerGradient}`} />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-5 mb-8">
              <div className={`${reason.bg} w-16 h-16 rounded-2xl flex items-center justify-center ${reason.color} shadow-sm border border-white flex-shrink-0`}>
                {reason.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900">{reason.title}</h1>
                <p className="text-slate-500 text-sm mt-1">{reason.desc}</p>
              </div>
            </div>

            <div className="space-y-6">
              {reason.details.map((section: any, i: number) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${reason.dotColor}`} />
                    {section.heading}
                  </h3>
                  <ul className="space-y-2">
                    {section.points.map((pt: string, j: number) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = ({ onSelectReason }: { onSelectReason: (reason: any) => void }) => {
  const reasons = [
    {
      title: "Experienced Mentors",
      desc: "Learn from industry experts and veteran educators.",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      headerGradient: "from-blue-400 to-blue-600",
      dotColor: "bg-blue-500",
      glowFrom: "#3b82f6",
      glowTo: "#6366f1",
      shadowColor: "rgba(59,130,246,0.2)",
      details: [
        {
          heading: "Who are our mentors?",
          points: [
            "IIT and NIT alumni with years of teaching experience",
            "Industry professionals with real-world expertise",
            "Subject specialists in Physics, Chemistry, Biology & Maths",
            "Certified computer trainers for all digital courses",
          ]
        },
        {
          heading: "What makes them special?",
          points: [
            "Personalized attention to each student's learning pace",
            "Regular one-on-one doubt clearing sessions",
            "Structured feedback and performance tracking",
            "Mentorship beyond academics — career and life guidance",
          ]
        }
      ]
    },
    {
      title: "Practical Learning",
      desc: "Hands-on projects and real-world problem solving.",
      icon: <Code className="w-6 h-6" />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      headerGradient: "from-emerald-400 to-emerald-600",
      dotColor: "bg-emerald-500",
      glowFrom: "#10b981",
      glowTo: "#059669",
      shadowColor: "rgba(16,185,129,0.2)",
      details: [
        {
          heading: "Hands-on approach",
          points: [
            "Live projects and assignments for every course",
            "Computer lab sessions with real software tools",
            "Case studies from actual industry scenarios",
            "Group projects that simulate workplace environments",
          ]
        },
        {
          heading: "What students build",
          points: [
            "Portfolios, design projects, and coding assignments",
            "Financial models, trading simulations and stock analysis",
            "Digital marketing campaigns and SEO audits",
            "CAD drawings, 3D models and architectural renders",
          ]
        }
      ]
    },
    {
      title: "Proven Results",
      desc: "Consistent track record of top ranks and placements.",
      icon: <Award className="w-6 h-6" />,
      color: "text-amber-600",
      bg: "bg-amber-50",
      headerGradient: "from-amber-400 to-amber-600",
      dotColor: "bg-amber-500",
      glowFrom: "#f59e0b",
      glowTo: "#d97706",
      shadowColor: "rgba(245,158,11,0.2)",
      details: [
        {
          heading: "Our achievements",
          points: [
            "5000+ students successfully trained over 26 years",
            "Consistent top ranks in NEET & JEE from our students",
            "High placement rates in government and private sectors",
            "Award-winning institute recognized across Nagaland",
          ]
        },
        {
          heading: "Student success stories",
          points: [
            "Doctors and engineers who started their journey at NITI",
            "Government stenographers and computer operators",
            "Entrepreneurs running digital marketing agencies",
            "Designers and stock traders with thriving careers",
          ]
        }
      ]
    },
    {
      title: "Modern Facilities",
      desc: "State-of-the-art labs and digital classrooms.",
      icon: <Monitor className="w-6 h-6" />,
      color: "text-rose-600",
      bg: "bg-rose-50",
      headerGradient: "from-rose-400 to-rose-600",
      dotColor: "bg-rose-500",
      glowFrom: "#f43f5e",
      glowTo: "#e11d48",
      shadowColor: "rgba(244,63,94,0.2)",
      details: [
        {
          heading: "Infrastructure highlights",
          points: [
            "Fully equipped computer lab with latest hardware",
            "High-speed internet and licensed software tools",
            "Smart classrooms with projectors and whiteboards",
            "Dedicated library with study and reference materials",
          ]
        },
        {
          heading: "Learning environment",
          points: [
            "AC classrooms for comfortable year-round learning",
            "Separate batches for individual course focus",
            "Online learning support via Learning Management System",
            "Safe and welcoming campus for all students",
          ]
        }
      ]
    },
  ];

  return (
    <section id="about" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-anton uppercase tracking-wider mb-4 color-flow-text">Why Choose NITI?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine traditional teaching excellence with modern technology to provide a holistic learning experience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              animate={{ y: [0, -6, 0] }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectReason(reason)}
              className="relative text-center p-4 md:p-6 rounded-2xl cursor-pointer group overflow-hidden"
              style={{
                background: 'white',
                boxShadow: `0 4px 20px ${reason.shadowColor}, 0 0 0 1px rgba(0,0,0,0.04)`,
              }}
            >
              {/* Always-on gradient border that breathes */}
              <motion.div
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${reason.glowFrom}, ${reason.glowTo})`,
                  padding: '1.5px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Always-on glow bloom behind icon — pulses */}
              <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                className={`absolute top-3 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full blur-2xl pointer-events-none ${reason.bg}`}
              />

              {/* Always-on shimmer sweep on loop */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <motion.div
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 + idx * 0.6 }}
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)',
                  }}
                />
              </div>

              {/* Icon with always-on pulse ring + rock */}
              <div className="relative inline-block mb-5">
                {/* Pulsing glow ring always visible */}
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.35 }}
                  className={`absolute inset-0 rounded-2xl blur-sm pointer-events-none ${reason.bg}`}
                />
                <motion.div
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                  className={`relative ${reason.bg} w-16 h-16 rounded-2xl flex items-center justify-center ${reason.color} border border-white/80`}
                  style={{ boxShadow: `0 4px 20px ${reason.shadowColor}` }}
                >
                  {reason.icon}
                </motion.div>
              </div>

              <h3 className="text-sm md:text-base font-bold mb-2 font-display text-slate-900">{reason.title}</h3>
              <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed line-clamp-2 md:line-clamp-none">{reason.desc}</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-blue-500 text-xs font-semibold">
                Learn more
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                >
                  <ArrowRight className="w-3 h-3" />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComputerCoursesSubpage = ({ onBack }: { onBack: () => void }) => {
  const categories = [
    {
      title: "DCA – Diploma in Computer Applications",
      icon: <Monitor className="w-6 h-6" />,
      items: ["Computer Fundamentals", "MS Office Suite", "Internet & Web Browsing", "Tally Prime Basics", "Operating Systems"]
    },
    {
      title: "Tally",
      icon: <Database className="w-6 h-6" />,
      items: ["Tally Prime Basics", "Accounting Entries", "GST Configuration", "Payroll Management", "MIS Reports"]
    },
    {
      title: "Power BI",
      icon: <TrendingUp className="w-6 h-6" />,
      items: ["Power BI Desktop", "Data Modelling", "DAX Formulas", "Dashboard Creation", "Power Query"]
    },
    {
      title: "SQL",
      icon: <Database className="w-6 h-6" />,
      items: ["SQL Basics & Syntax", "DDL & DML Commands", "Joins & Subqueries", "Stored Procedures", "Database Design"]
    },
    {
      title: "Stenography & Typing",
      icon: <PenTool className="w-6 h-6" />,
      items: ["Shorthand Theory", "Speed Development", "Transcription", "Office Procedures", "Typing Skills"]
    },
    {
      title: "Artificial Intelligence (AI)",
      icon: <Brain className="w-6 h-6" />,
      items: ["Introduction to AI", "Machine Learning Basics", "Deep Learning Concepts", "AI for Business & Healthcare", "Programming & Case Studies"]
    },
    {
      title: "AutoCAD",
      icon: <Layers className="w-6 h-6" />,
      items: ["2D Drafting", "3D Modeling", "Rendering", "Architectural Design", "Mechanical Drafting"]
    },
    {
      title: "SketchUp",
      icon: <Layers className="w-6 h-6" />,
      items: ["SketchUp Interface", "3D Modelling Basics", "Components & Groups", "Textures & Materials", "Export & Rendering"]
    },
    {
      title: "Lumion",
      icon: <Globe className="w-6 h-6" />,
      items: ["Lumion Interface", "Importing 3D Models", "Scene Building", "Lighting & Weather", "Animation & Video Export"]
    },
    {
      title: "PGDCA – PG Diploma in Computer Applications",
      icon: <GraduationCap className="w-6 h-6" />,
      items: ["Programming in C/C++", "Database Management (SQL)", "Web Development (HTML/CSS)", "System Analysis", "Software Engineering"]
    },
    {
      title: "Cyber Security",
      icon: <Cpu className="w-6 h-6" />,
      items: ["Network Security Basics", "Ethical Hacking", "Penetration Testing", "Cyber Laws", "Incident Response"]
    },
    {
      title: "Digital Marketing",
      icon: <Globe className="w-6 h-6" />,
      items: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Google Analytics", "Email Marketing"]
    },
    {
      title: "Hardware Networking",
      icon: <Cpu className="w-6 h-6" />,
      items: ["Computer Assembly", "OS Installation", "LAN/WAN Setup", "Router & Switch Config", "Troubleshooting"]
    },
    {
      title: "Video Editing",
      icon: <Monitor className="w-6 h-6" />,
      items: ["Premiere Pro Basics", "Timeline Editing", "Colour Grading", "Motion Graphics", "Audio Mixing"]
    },
    {
      title: "Stock Market Trading",
      icon: <TrendingUp className="w-6 h-6" />,
      items: ["Fundamental Analysis", "Technical Analysis", "Options & Futures", "Risk Management", "Trading Psychology"]
    },
    {
      title: "Graphic Designing",
      icon: <PenTool className="w-6 h-6" />,
      items: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "UI/UX Basics", "Typography & Layout"]
    },
    {
      title: "HTML / Web Development",
      icon: <Code className="w-6 h-6" />,
      items: ["HTML5 Structure", "CSS3 Styling", "Responsive Design", "Basic JavaScript", "Web Page Projects"]
    },
    {
      title: "GST",
      icon: <BookOpen className="w-6 h-6" />,
      items: ["GST Basics & Structure", "Registration Process", "Return Filing (GSTR-1/3B)", "Input Tax Credit", "E-Way Bill"]
    },
    {
      title: "C++",
      icon: <Code className="w-6 h-6" />,
      items: ["C++ Syntax & Basics", "OOP Concepts", "Pointers & Memory", "Data Structures", "File Handling"]
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="mb-10">
          <h2 className="text-4xl font-bold font-display mb-3">Computer Courses Offered</h2>
          <p className="text-slate-600">Master in-demand tech skills. Click any course card to learn more.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[1.5rem] shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 premium-card-anim group">
              <div className="relative z-10">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-xl w-fit mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 font-display tracking-tight text-slate-900">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const NeetJeeSubpage = ({ onBack }: { onBack: () => void }) => {
  const subjects = [
    {
      title: "Physics",
      items: ["Mechanics & Properties of Matter", "Electrodynamics & Magnetism", "Optics & Wave Motion", "Modern Physics & Nuclear Physics", "Thermodynamics & Heat"]
    },
    {
      title: "Chemistry",
      items: ["Physical Chemistry & Energetics", "Organic Chemistry & Mechanisms", "Inorganic Chemistry & Periodicity", "Environmental Chemistry", "Biomolecules & Polymers"]
    },
    {
      title: "Biology (NEET)",
      items: ["Botany: Plant Physiology & Genetics", "Zoology: Human Physiology & Evolution", "Cell Biology & Biomolecules", "Ecology & Environment", "Reproduction & Health"]
    },
    {
      title: "Mathematics (JEE)",
      items: ["Calculus: Differential & Integral", "Algebra: Matrices & Determinants", "Coordinate Geometry", "Trigonometry & Vectors", "Probability & Statistics"]
    }
  ];

  const highlights = [
    { title: "IITian Faculty", desc: "Learn directly from mentors who have cracked JEE and graduated from top IITs.", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Structured Curriculum", desc: "NCERT-aligned syllabus covering every topic from basics to advanced competitive levels.", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Personalized Mentorship", desc: "One-on-one guidance sessions to track progress and overcome individual weaknesses.", icon: <Users className="w-6 h-6" /> },
    { title: "Test Series", desc: "All-India level mock tests with detailed performance analytics and rank prediction.", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-slate-50 pt-28 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold font-display mb-4">NEET & JEE Excellence Program</h2>
          <p className="text-slate-600 max-w-3xl">
            Our NEET & JEE Excellence Program is a meticulously designed coaching module aimed at providing students with the competitive edge required to succeed in India's most prestigious medical and engineering entrance exams. We focus on building a strong conceptual foundation followed by rigorous application-based training.
          </p>
        </div>

        {/* Faculty & Highlights Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
            <Award className="text-blue-600" /> Why NITI for NEET-JEE?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 shimmer-surface">
                <div className="relative z-10">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl w-fit mb-4">
                    {h.icon}
                  </div>
                  <h4 className="font-bold mb-2 font-display">{h.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IITian Faculty Special Mention */}
        <div className="mb-16 bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-display mb-4">Mentorship by IITians</h3>
            <p className="text-slate-400 max-w-2xl mb-6">
              Success in JEE and NEET requires more than just hard work; it requires the right strategy. Our core faculty consists of IIT graduates and subject matter experts who bring years of experience in cracking these exams. They don't just teach; they mentor you through the journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium">Physics: IIT Guwahati Alumni</div>
              <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium">Maths: IIT Bombay Alumni</div>
              <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium">Chemistry: PhD Scholars</div>
              <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium">Biology: Expert Faculty</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold font-display mb-6">Subject-Wise Focus</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((sub, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 premium-card-anim group">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 font-display text-slate-900 flex items-center gap-4">
                  <span className="w-12 h-1 bg-blue-600 rounded-full" />
                  {sub.title}
                </h3>
                <div className="grid sm:grid-cols-1 gap-4">
                  {sub.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <span className="text-base font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 text-white p-10 rounded-3xl shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold mb-1">Daily</p>
              <p className="text-blue-100 text-sm">Practice Problems (DPP)</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">Weekly</p>
              <p className="text-blue-100 text-sm">Full-Length Mock Tests</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-blue-100 text-sm">Doubt Solving Support</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BatchSchedulePage = ({ onBack }: { onBack: () => void }) => {
  const batches = [
    {
      name: "School Integrated Program (SIP)",
      subtitle: "For Class XI (Science) 2026",
      faculty: "physics: iit guwahati alumni | biology",
      tag: "NEW",
      tagColor: "bg-yellow-400 text-yellow-900",
      startDate: "1st April, 2026",
      location: "Pilgrim Hr. Secondary, Dimapur, Nagaland",
      collaboration: "In collaboration with Pilgrim Hr. Secondary",
      timing: "Integrated with School Hours",
      seats: "Limited Seats",
      highlight: true,
      features: [
        "IIT Alumni as Faculty",
        "Cost Effective Program",
        "Time Saving / No Duplicity",
        "No Extra Travel-Time / Cost",
        "Strategic Time Management",
        "Daily Practice Paper (DPP)",
        "All India Test Series (AITS)",
        "Learning Management System",
        "Seamless Integration with Board Curriculum",
        "Hostel Facility Available (Priority for XI Science)",
      ],
      contact: ["8787663589", "9436012641"],
      tagline: "SCHOOL + SIP = SUCCESS",
      website: "www.nitinagaland.com",
    },
    {
      name: "Foundation Course",
      subtitle: "For Class VIII to X 2026",
      faculty: "physics: iit guwahati alumni | biology",
      tag: "ENROLLING",
      tagColor: "bg-blue-100 text-blue-700",
      startDate: "10th of February",
      location: "Pilgrim Hr. Secondary, Dimapur, Nagaland",
      collaboration: "In collaboration with Pilgrim Hr. Secondary",
      timing: "Integrated with School Schedule",
      seats: "Limited Seats",
      highlight: false,
      features: [
        "Build Strong Concepts",
        "Head Start for NEET / JEE",
        "Olympiads Participation",
        "Strong Foundation by Class X",
      ],
      contact: ["8787663589", "9436012641"],
      tagline: "Build your base early",
      website: "www.nitinagaland.com",
    },
    {
      name: "School Integrated Program (SIP)",
      subtitle: "For Class XI (Science) 2026",
      faculty: "physics: iit guwahati alumni | biology",
      tag: "NEW",
      tagColor: "bg-yellow-400 text-yellow-900",
      startDate: "Coming Soon",
      location: "Libemo Memorial School, Wokha, Nagaland",
      collaboration: "In collaboration with Libemo Memorial School",
      timing: "After School Hours",
      seats: "Limited Seats",
      highlight: true,
      features: [
        "IIT Alumni as Faculty",
        "Cost Effective Program",
        "Time Saving / No Duplicity",
        "No Extra Travel-Time / Cost",
        "Strategic Time Management",
        "Daily Practice Paper (DPP)",
        "All India Test Series (AITS)",
        "Learning Management System",
        "Seamless Integration with Board Curriculum",
      ],
      contact: ["9366606072", "9436012641"],
      tagline: "SCHOOL + SIP = SUCCESS",
      website: "www.nitinagaland.com",
    },
    {
      name: "Foundation Course",
      subtitle: "For Class VIII to X 2026",
      faculty: "physics: iit guwahati alumni | biology",
      tag: "ENROLLING",
      tagColor: "bg-blue-100 text-blue-700",
      startDate: "Coming Soon",
      location: "Libemo Memorial School, Wokha, Nagaland",
      collaboration: "In collaboration with Libemo Memorial School",
      timing: "Integrated with School Schedule",
      seats: "Limited Seats",
      highlight: false,
      features: [
        "Build Strong Concepts",
        "Head Start for NEET / JEE",
        "Olympiads Participation",
        "Strong Foundation by Class X",
      ],
      contact: ["9366606072", "9436012641"],
      tagline: "Build your base early",
      website: "www.nitinagaland.com",
    },
  ];

  const whyChoose = [
    { icon: <GraduationCap className="w-5 h-5" />, label: "IIT Alumni Faculty" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "All India Test Series" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Learning Management System" },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Board Curriculum Aligned" },
    { icon: <Users className="w-5 h-5" />, label: "Daily Practice Papers" },
    { icon: <Award className="w-5 h-5" />, label: "Proven Track Record" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 md:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" /> Batch Schedule 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-anton uppercase mb-3 color-flow-text">Upcoming Batches</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Enroll now for our 2026 batches. Limited seats available. Classes starting from 1st April, 2026.
          </p>
        </div>

        {/* Collaboration Banner */}
        <div className="bg-[#0d3a5c] text-white rounded-3xl p-6 md:p-8 mb-10 shadow-xl text-center">
          {/* Logo row */}
          <div className="flex flex-col items-center gap-4 mb-5">
            <img
              src="https://i.ibb.co/BHmxFsGB/NITI-LOGO-removebg-preview-1.png"
              alt="NITI Logo"
              className="h-12 w-auto object-contain brightness-0 invert mx-auto"
              referrerPolicy="no-referrer"
            />
            <div className="text-slate-400 font-semibold text-xs uppercase tracking-widest">In Collaboration With Our Partner Schools</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p className="text-white font-bold text-base leading-tight">Pilgrim Hr. Secondary</p>
                <p className="text-yellow-300 text-xs font-medium mt-0.5">Dimapur, Nagaland · Est. 1987</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p className="text-white font-bold text-base leading-tight">Libemo Memorial School</p>
                <p className="text-yellow-300 text-xs font-medium mt-0.5">Wokha, Nagaland · Est. 1999</p>
              </div>
            </div>
          </div>
          {/* Tagline row */}
          <div className="border-t border-white/10 pt-4">
            <p className="text-yellow-300 font-bold text-lg md:text-xl tracking-wide uppercase">SCHOOL + SIP = SUCCESS</p>
            <p className="text-slate-300 text-xs mt-1">Classes Starting: 1st April, 2026</p>
          </div>
        </div>

        {/* Batch Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-12">
          {batches.map((batch, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-[2rem] shadow-xl border overflow-hidden ${batch.highlight ? 'border-blue-200 shadow-blue-100' : 'border-slate-100'}`}
            >
              {/* Top accent */}
              <div className={`h-1.5 w-full ${batch.highlight ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-slate-300 to-slate-400'}`} />

              <div className="p-4 md:p-8">
                <div className="flex items-start justify-between gap-2 mb-3 md:mb-4">
                  <div>
                    <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 md:px-2.5 md:py-1 rounded-full ${batch.tagColor}`}>
                      {batch.tag}
                    </span>
                    <h2 className="text-sm md:text-xl font-bold font-display text-slate-900 mt-1.5 md:mt-2 leading-tight">{batch.name}</h2>
                    <p className="text-blue-600 font-semibold text-[10px] md:text-sm mt-0.5">{batch.subtitle}</p>
                    {batch.faculty && (
                      <p className="text-slate-500 font-medium text-[9px] md:text-xs mt-1 italic">{batch.faculty}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-5 text-[10px] md:text-sm text-slate-600">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Award className="w-3 h-3 md:w-4 md:h-4 text-blue-400 flex-shrink-0" />
                    <span><strong>Start:</strong> {batch.startDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-400 flex-shrink-0" />
                    <span className="line-clamp-1">{batch.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-400 flex-shrink-0" />
                    <span>{batch.timing}</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl md:rounded-2xl p-3 md:p-4 mb-4 md:mb-5">
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-3">Highlights</p>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {batch.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-sm text-slate-700">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-500 flex-shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 mb-2 md:mb-4">
                  {batch.contact.map((num, i) => (
                    <a
                      key={i}
                      href={`tel:+91${num}`}
                      className="flex items-center justify-center gap-1 px-2 py-2 bg-blue-600 text-white rounded-lg text-[10px] md:text-sm font-semibold hover:bg-blue-700 transition-colors w-full"
                    >
                      <Phone className="w-3 h-3" /> {num}
                    </a>
                  ))}
                </div>

                <p className="text-[11px] text-slate-400 text-center font-medium mt-2">{batch.website}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 mb-10">
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-6 text-center">Why Choose NITI's SIP?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {whyChoose.map((w, i) => (
              <div key={i} className="flex items-center gap-3 bg-blue-50 rounded-2xl px-4 py-3">
                <div className="text-blue-600 flex-shrink-0">{w.icon}</div>
                <span className="text-sm font-semibold text-slate-700 leading-tight">{w.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0d3a5c] text-white rounded-3xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Secure Your Seat Today</h3>
          <p className="text-slate-300 text-sm mb-6">Limited seats available for April 2026 batch. Early enrollment recommended.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+919366606072"
              className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-yellow-900 rounded-xl font-bold hover:bg-yellow-300 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> 9366606072
            </a>
            <a
              href="tel:+919436012641"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors text-sm border border-white/20"
            >
              <Phone className="w-4 h-4" /> 9436012641
            </a>
          </div>
          <p className="text-slate-400 text-xs mt-4">Visit: www.nitinagaland.com</p>
        </div>
      </div>
    </motion.div>
  );
};

const CourseDetailSubpage = ({ course, onBack }: { course: any, onBack: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-slate-50 pt-28 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-10 text-sm font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Courses
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100">
          <div className={`h-4 bg-gradient-to-r ${course.gradient}`} />
          
          <div className="p-10 md:p-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-anton uppercase mb-4 text-slate-900">{course.title}</h2>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
                    Duration: {course.details.duration}
                  </span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-widest">
                    Certified Program
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Course Modules</h3>
                <div className="space-y-3">
                  {course.details.modules.map((module: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-slate-700 font-medium">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Career Outcomes</h3>
                <div className="space-y-3">
                  {course.details.outcomes.map((outcome: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {Object.entries(course.details.stats).map(([key, value]: [string, any]) => (
                  <div key={key} className="bg-slate-900 text-white p-6 rounded-3xl text-center">
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">{key}</p>
                    <p className="text-2xl font-anton uppercase">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'computer' | 'academy' | 'batch'>('home');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedReason, setSelectedReason] = useState<any>(null);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Scroll to top when opening a subpage
  useEffect(() => {
    if (selectedCourse || selectedReason || view !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [view, selectedCourse, selectedReason]);

  // After returning home, scroll to the saved section
  useEffect(() => {
    if (scrollTarget && view === 'home' && !selectedCourse && !selectedReason) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
      setScrollTarget(null);
    }
  }, [scrollTarget, view, selectedCourse, selectedReason]);

  const goBack = (section: string) => {
    setScrollTarget(section);
    setSelectedCourse(null);
    setSelectedReason(null);
    setView('home');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        {selectedReason ? (
          <WhyChooseUsSubpage
            key="why-subpage"
            reason={selectedReason}
            onBack={() => goBack('about')}
          />
        ) : selectedCourse ? (
          <CourseDetailSubpage 
            key="course-detail" 
            course={selectedCourse} 
            onBack={() => goBack('computer')} 
          />
        ) : (
          <>
            {view === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero onViewChange={setView} />
                <ComputerSection onSelectCourse={setSelectedCourse} />
                <AcademySection onViewBatchSchedule={() => setView('batch')} />
                <ScrollGallery />
                <WhyChooseUs onSelectReason={setSelectedReason} />
                <TestimonialsSection />
                <CoursePricingSection />
                <ContactSection />
                <Footer />
              </motion.div>
            )}
            {view === 'computer' && (
              <ComputerCoursesSubpage key="computer" onBack={() => goBack('computer')} />
            )}
            {view === 'academy' && (
              <NeetJeeSubpage key="academy" onBack={() => goBack('academy')} />
            )}
            {view === 'batch' && (
              <BatchSchedulePage key="batch" onBack={() => goBack('academy')} />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}