import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Monitor, Award, Users, ArrowRight, Phone, Mail, MapPin, CheckCircle2, GraduationCap, Code, Cpu, ArrowLeft, Brain, TrendingUp, PenTool, Layers, Globe, Database, Menu, X, ChevronLeft, ChevronRight, Smartphone, Lightbulb, Rocket, Zap, Shield, Star, Building2, FlaskConical, Network, HeartHandshake, ExternalLink } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { CircularTestimonials } from './components/ui/circular-testimonials';
import { MeshBackground } from './components/ui/mesh-background';
import { Pricing, type PricingPlan } from "./components/ui/pricing";
import { cn } from "./lib/utils";

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
    { name: 'NITI Technologies', href: '#technologies' },
    { name: 'Incubation Centre', href: '#incubation' },
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
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all mb-8 font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm"
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
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all mb-8 font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm"
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
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all mb-8 font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm"
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
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all mb-8 font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm"
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
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all mb-10 font-semibold text-sm px-4 py-2.5 rounded-xl shadow-sm"
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

// ─── NITI Technologies Section ─────────────────────────────────────────────
const NitiTechnologiesSection = ({ onSelectApp }: { onSelectApp: (app: any) => void }) => {
  const apps = [
    {
      name: "Hornbill Festival",
      category: "Tourism & Culture",
      description: "Official app for Nagaland's iconic Festival of Festivals. Book homestays, hire cabs, explore destinations, find eateries, and get festival schedules — all in one place.",
      color: "bg-[#0A0F1E]",
      accent: "gold-accent",
      glow: "shadow-orange-500/20",
      icon: "🦜",
      badge: "Official Govt App",
      tags: ["Tourism", "Culture", "Nagaland"],
      downloads: "10K+",
      details: {
        features: ["Real-time event schedules", "Interactive festival map", "Homestay & Cab booking", "Local eatery guide"],
        impact: "Digitized Nagaland's biggest tourism event, improving visitor experience and local business visibility.",
        techStack: ["React Native", "Firebase", "Google Maps API"],
        status: "Active & Updated Yearly"
      }
    },
    {
      name: "NBSE Connect",
      category: "Education Management",
      description: "Connects schools, teachers, and the Nagaland Board of School Education. Features AI face recognition attendance, geo-tagged question paper tracking, and circular distribution.",
      color: "bg-[#0A0F1E]",
      accent: "silver-accent",
      glow: "shadow-blue-500/20",
      icon: "🎓",
      badge: "NBSE Official",
      tags: ["Education", "AI", "Government"],
      downloads: "5K+",
      details: {
        features: ["AI Face Recognition Attendance", "Geo-tagged Question Paper Tracking", "Digital Circular Distribution", "School Performance Analytics"],
        impact: "Streamlined administrative communication between NBSE and hundreds of schools across the state.",
        techStack: ["React Native", "Python (AI)", "Node.js", "PostgreSQL"],
        status: "Live & Operational"
      }
    },
    {
      name: "Samagra Shiksha",
      category: "School Management",
      description: "Digitizes school management for Nagaland's Department of School Education. Handles teacher profiling, circulars, school activities, and inclusive education journaling.",
      color: "bg-orange-500 shadow-xl shadow-orange-500/20",
      accent: "text-white/90",
      glow: "shadow-emerald-500/20",
      icon: "📚",
      badge: "Dept. of Education",
      tags: ["SchoolEd", "Digital India", "Govt"],
      downloads: "1K+",
      details: {
        features: ["Teacher Profile Management", "School Activity Logging", "Inclusive Education Journaling", "Real-time Circular Updates"],
        impact: "Improved data accuracy and administrative efficiency for the Department of School Education.",
        techStack: ["React Native", "Firebase", "Cloud Functions"],
        status: "Live"
      }
    },
    {
      name: "DYRS Nagaland",
      category: "Attendance & HR",
      description: "Attendance tracking system for the Department of Youth Resources & Sports, Nagaland. Real-time circulars, IN/OUT tracking, and event management for officials.",
      color: "bg-cyan-500 shadow-xl shadow-cyan-500/20",
      accent: "text-white/90",
      glow: "shadow-violet-500/20",
      icon: "🏆",
      badge: "DYRS Official",
      tags: ["Sports", "Govt HR", "Attendance"],
      downloads: "500+",
      details: {
        features: ["Biometric/Geo-fenced Attendance", "Internal Circular System", "Event Management Module", "Official Leave Tracking"],
        impact: "Enhanced accountability and communication within the Department of Youth Resources & Sports.",
        techStack: ["Flutter", "Node.js", "MongoDB"],
        status: "Active"
      }
    },
    {
      name: "Blood Connect",
      category: "Healthcare",
      description: "Life-saving blood donor network app connecting blood donors with patients in need across Nagaland.",
      color: "from-indigo-600 to-blue-700",
      accent: "text-white",
      glow: "shadow-indigo-500/40",
      icon: "🩸",
      badge: "Life-Saving",
      tags: ["Healthcare", "Emergency"],
      downloads: "2K+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-[2.5rem] rounded-tr-none",
      details: {
        features: ["Emergency SOS Requests", "Real-time Donor Matching", "Donor Availability Status", "Blood Bank Directory"],
        impact: "Reduced response time for emergency blood requirements across major districts of Nagaland.",
        techStack: ["React Native", "Firebase Realtime DB", "Push Notifications"],
        status: "Community Driven"
      }
    },
    {
      name: "Pulse",
      category: "Health",
      description: "A modern health and wellness tracking platform helping users monitor vital health parameters.",
      color: "from-fuchsia-600 to-pink-700",
      accent: "text-white",
      glow: "shadow-fuchsia-500/40",
      icon: "💗",
      badge: "Wellness",
      tags: ["Fitness", "Health"],
      downloads: "1K+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-full rounded-bl-3xl",
      details: {
        features: ["Vital Signs Logging", "Personalized Wellness Goals", "Daily Fitness Tracker", "Health Insight Reports"],
        impact: "Empowering individuals to take control of their health through data-driven insights.",
        techStack: ["React Native", "HealthKit/Google Fit Integration", "Node.js"],
        status: "Public Beta"
      }
    },
    {
      name: "Faith Hospital",
      category: "Medical",
      description: "Digital patient management and appointment scheduling platform.",
      color: "from-emerald-500 to-teal-700",
      accent: "text-white",
      glow: "shadow-emerald-500/40",
      icon: "🏥",
      badge: "Hospital",
      tags: ["Medical", "Appointments"],
      downloads: "500+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-3xl rounded-tr-[3rem]",
      details: {
        features: ["Online Appointment Booking", "Patient Record Access", "Lab Report Notifications", "Hospital News & Updates"],
        impact: "Reduced waiting times and improved patient experience at Faith Hospital.",
        techStack: ["Flutter", "Firebase", "Hospital Management System Integration"],
        status: "Operational"
      }
    },
    {
      name: "NEISSR",
      category: "Research",
      description: "North East India Social Science Research app connecting researchers.",
      color: "from-cyan-500 to-blue-600",
      accent: "text-white",
      glow: "shadow-cyan-500/40",
      icon: "🔬",
      badge: "Research",
      tags: ["Research", "Academia"],
      downloads: "300+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-3xl rounded-bl-[3rem]",
      details: {
        features: ["Research Paper Repository", "Academic Collaboration Tools", "Event & Seminar Updates", "Institutional Directory"],
        impact: "Fostering a collaborative research ecosystem for social sciences in Northeast India.",
        techStack: ["React Native", "Node.js", "AWS S3"],
        status: "Active"
      }
    },
    {
      name: "HEART",
      category: "Education",
      description: "Platform for the Department of Higher Education, Nagaland.",
      color: "from-rose-500 to-red-600",
      accent: "text-white",
      glow: "shadow-rose-500/40",
      icon: "🎯",
      badge: "Higher Ed",
      tags: ["College", "Govt"],
      downloads: "500+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-[2rem] rounded-br-none",
      details: {
        features: ["College Resource Distribution", "Administrative Circulars", "Student Scholarship Tracking", "Institutional Performance Monitoring"],
        impact: "Digitized the administrative workflow for the Department of Higher Education.",
        techStack: ["React Native", "PostgreSQL", "Node.js"],
        status: "Live"
      }
    },
    {
      name: "Peace Channel",
      category: "Community",
      description: "A community-driven communication platform promoting peace.",
      color: "from-blue-500 to-indigo-600",
      accent: "text-white",
      glow: "shadow-blue-500/40",
      icon: "☮️",
      badge: "Civic Tech",
      tags: ["Community", "Social"],
      downloads: "200+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-3xl",
      details: {
        features: ["Community Dialogue Forums", "Peace Event Management", "Resource Sharing for Peacebuilders", "Civic Engagement Tools"],
        impact: "Strengthening community bonds and promoting peaceful dialogue through digital connectivity.",
        techStack: ["React Native", "Firebase", "Socket.io"],
        status: "Active"
      }
    },
    {
      name: "Kohima Science",
      category: "College",
      description: "Smart digital portal for Kohima Science College.",
      color: "from-violet-600 to-purple-800",
      accent: "text-white",
      glow: "shadow-violet-500/40",
      icon: "⚗️",
      badge: "Portal",
      tags: ["Science", "Campus"],
      downloads: "300+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-3xl rounded-tl-[3rem]",
      details: {
        features: ["Academic Notice Board", "Student Resource Repository", "Faculty Communication Channel", "Exam Schedule & Results"],
        impact: "Centralized digital communication for one of Nagaland's premier science institutions.",
        techStack: ["React Native", "Firebase", "Cloud Storage"],
        status: "Active"
      }
    },
    {
      name: "StateSync",
      category: "Government",
      description: "Centralized data synchronization platform for state departments.",
      color: "from-slate-800 to-slate-950",
      accent: "text-white",
      glow: "shadow-slate-500/40",
      icon: "🏛️",
      badge: "Gov. Platform",
      tags: ["Governance", "Sync"],
      downloads: "200+",
      layout: "col-span-1 row-span-1",
      shape: "rounded-[2.5rem]",
      details: {
        features: ["Inter-departmental Data Sync", "Secure Governance API", "Real-time Reporting Dashboard", "Audit Logging"],
        impact: "Improving governance efficiency through data-driven inter-departmental collaboration.",
        techStack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        status: "Internal Govt Use"
      }
    },
  ];

  const stats = [
    { value: "15+", label: "Apps Deployed", color: "bg-amber-500 shadow-lg shadow-amber-500/20", accent: "text-white" },
    { value: "8", label: "Govt. Partners", color: "bg-emerald-500 shadow-lg shadow-emerald-500/20", accent: "text-white" },
    { value: "20K+", label: "Active Users", color: "bg-rose-500 shadow-lg shadow-rose-500/20", accent: "text-white" },
    { value: "5", label: "Years Building", color: "bg-violet-500 shadow-lg shadow-violet-500/20", accent: "text-white" },
  ];

  return (
    <section id="technologies" className="relative py-24 overflow-hidden bg-[#0A0F1E] rounded-[4rem] mx-4 md:mx-8 my-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
            <Smartphone className="w-3 h-3" />
            Digital Innovation Lab
          </div>
          <h2 className="text-6xl md:text-9xl font-anton uppercase tracking-tighter mb-8 text-white drop-shadow-2xl">
            NITI Technologies
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Building the digital infrastructure of Northeast India — one powerful app at a time. From government platforms to civic tech, we code for impact.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24"
        >
          {stats.map((s, i) => (
            <div key={i} className={cn(
              "relative group rounded-3xl p-6 md:p-10 text-center overflow-hidden transition-all duration-500",
              "bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-2",
              "shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)]"
            )}>
              <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 blur-xl opacity-50", s.color)} />
              <p className={cn("text-4xl md:text-7xl font-anton mb-2 tracking-tighter drop-shadow-2xl", s.accent)}>{s.value}</p>
              <p className="text-[9px] md:text-[11px] text-white/40 uppercase tracking-[0.4em] font-black">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Apps Grid — Compact Glossy Bento Layout */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 px-1 md:px-0"
          style={{ 
            perspective: '2000px',
          }}
        >
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => onSelectApp(app)}
              className={cn(
                "group relative overflow-hidden transition-all duration-700 cursor-pointer",
                "bg-gradient-to-br border border-white/30",
                app.layout,
                app.shape,
                app.color,
                app.glow,
                "hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]",
                "shadow-[inset_0_0_20px_rgba(255,255,255,0.15)]"
              )}
            >
              {/* Premium Glossy Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
              
              {/* High-End Moving Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12" />
              </div>

              {/* Top Glass Highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white/40 via-transparent to-transparent" />

              <div className="relative p-5 md:p-6 z-10 h-full flex flex-col justify-between gap-3">
                <div>
                  {/* Top Row */}
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-white/20 backdrop-blur-2xl border border-white/40 flex items-center justify-center text-lg md:text-2xl shadow-xl flex-shrink-0"
                    >
                      {app.icon}
                    </motion.div>
                    <span className={cn(
                      "text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] px-2 py-1 rounded-lg bg-black/40 backdrop-blur-3xl border border-white/30 shadow-sm text-right leading-tight",
                      "text-white"
                    )}>
                      {app.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="text-[8px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-black mb-1">{app.category}</p>
                  <h3 className="text-white font-anton text-[15px] md:text-xl mb-1.5 leading-[1.15] tracking-tight drop-shadow-2xl break-words hyphens-auto">{app.name}</h3>
                  <p className="text-white/70 text-[9px] md:text-xs leading-relaxed font-medium line-clamp-2 group-hover:text-white transition-colors duration-300">
                    {app.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-2 flex items-end justify-between">
                  <div className="flex flex-wrap gap-1">
                    {app.tags.slice(0, 2).map((tag, j) => (
                      <span key={j} className="text-[8px] md:text-[9px] px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-white/80 font-bold backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[7px] text-white/30 uppercase font-black tracking-widest mb-0.5">DLs</p>
                    <span className="text-white text-xs md:text-sm font-anton tracking-tighter">{app.downloads}</span>
                  </div>
                </div>
              </div>

              {/* Glass Edge Highlight */}
              <div className="absolute inset-0 border border-white/10 pointer-events-none rounded-[inherit]" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://nititechnologies.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white text-base font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900/20 hover:-translate-y-1 group"
          >
            Visit NITI Technologies <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// ─── NITI Incubation Centre Section ─────────────────────────────────────────
const NitiIncubationSection = () => {

  // AI-integrated sectors specific to Nagaland's economy & opportunities
  const sectors = [
    {
      emoji: "🧵",
      title: "Handloom & Handicrafts",
      headline: "AI-Powered Artisan Commerce",
      desc: "Nagaland's GI-tagged textiles and tribal handicrafts are world-class. We incubate startups building AI-driven e-commerce platforms, pattern recognition for quality control, and digital marketplaces connecting Naga artisans to global buyers.",
      tags: ["Computer Vision", "E-Commerce", "GI Products"],
      color: "from-orange-400 to-amber-600",
      bg: "bg-[#0A0F1E]/60 backdrop-blur-md",
      border: "border-orange-500/30",
    },
    {
      emoji: "🌾",
      title: "Agriculture & Food Processing",
      headline: "Smart Farming for Northeast India",
      desc: "With GI-certified products like Naga tree tomato and Naga cucumber, the opportunity is enormous. We support startups using AI for pest detection, crop monitoring, smart irrigation, and agri-supply chain digitization.",
      tags: ["Precision Farming", "IoT Sensors", "Supply Chain"],
      color: "from-emerald-500 to-green-700",
      bg: "bg-[#0A0F1E]/60 backdrop-blur-md",
      border: "border-emerald-500/30",
    },
    {
      emoji: "🏥",
      title: "Healthcare & Telemedicine",
      headline: "Bridging Rural Health Gaps with AI",
      desc: "Nagaland's remote terrain makes healthcare access a challenge. We incubate startups building AI-assisted diagnosis tools, telemedicine platforms, community health monitoring apps, and medical supply logistics systems.",
      tags: ["Telehealth", "AI Diagnosis", "Health Logistics"],
      color: "from-rose-500 to-red-700",
      bg: "bg-[#0A0F1E]/60 backdrop-blur-md",
      border: "border-rose-500/30",
    },
    {
      emoji: "🦜",
      title: "Tourism & Cultural Tech",
      headline: "Digitalizing Nagaland's Heritage",
      desc: "Home to the iconic Hornbill Festival, Nagaland's tourism sector is rapidly growing. We back startups building AI-driven travel platforms, AR/VR cultural experiences, smart tour guides, and homestay management systems.",
      tags: ["AR/VR", "Travel Tech", "Cultural Preservation"],
      color: "from-violet-500 to-purple-700",
      bg: "bg-[#0A0F1E]/60 backdrop-blur-md",
      border: "border-violet-500/30",
    },
    {
      emoji: "🏛️",
      title: "GovTech & Civic Solutions",
      headline: "AI for Better Governance",
      desc: "Building on NITI Technologies' track record of official government apps, we incubate startups creating AI-powered public service delivery tools, data platforms for state departments, and civic engagement solutions for Northeast India.",
      tags: ["Public Services", "Data Analytics", "e-Governance"],
      color: "from-blue-500 to-indigo-700",
      bg: "bg-[#0A0F1E]/60 backdrop-blur-md",
      border: "border-blue-500/30",
    },
    {
      emoji: "📚",
      title: "EdTech & Skill Development",
      headline: "AI-Personalized Learning for Nagaland",
      desc: "Aligned with national skilling missions and Nagaland's youth-heavy demographics, we incubate startups building adaptive learning platforms, AI tutors for regional languages, and vocational training tools for the gig economy.",
      tags: ["Adaptive Learning", "Vernacular AI", "Vocational Skills"],
      color: "from-cyan-500 to-teal-700",
      bg: "bg-[#0A0F1E]/60 backdrop-blur-md",
      border: "border-cyan-500/30",
    },
  ];

  const support = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Tech Co-Building",
      desc: "NITI Technologies' in-house dev team helps you build your MVP — from app development to AI model integration — so you focus on the problem, not the code.",
      accent: "text-white",
      color: "bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Mentor Network",
      desc: "Connect with experienced mentors from the Nagaland startup ecosystem, NIELIT, Nagaland Innovation Society, and industry professionals from Northeast India.",
      accent: "text-slate-900",
      color: "bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-500/30",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Startup India Registration",
      desc: "Get recognized under the Startup Nagaland policy — access seed grants, GST reimbursements, broadband subsidies, and patent filing cost support from the Govt. of Nagaland.",
      accent: "text-white",
      color: "bg-gradient-to-br from-pink-500 to-pink-700 shadow-lg shadow-pink-500/30",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Investor Access",
      desc: "Get introduced to the Nagaland Investor Network, angel investors, and government-backed funding bodies supporting startups in Northeast India.",
      accent: "text-white",
      color: "bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/30",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Market Connections",
      desc: "Leverage NITI's existing relationships with 8+ government departments and institutions to pilot and validate your product in a real-world setting.",
      accent: "text-white",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg shadow-indigo-500/30",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI Integration Support",
      desc: "Our team helps you identify where AI adds real value in your business — whether it's a simple recommendation engine or a computer vision pipeline — and builds it with you.",
      accent: "text-slate-900",
      color: "bg-gradient-to-br from-amber-300 to-amber-500 shadow-lg shadow-amber-500/30",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="incubation" className="relative py-24 overflow-hidden bg-white rounded-[3rem] mx-4 md:mx-8 my-12 shadow-2xl border border-slate-100">

      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-violet-200 bg-violet-50 text-violet-600 text-[11px] md:text-xs font-bold uppercase tracking-wide mb-6">
            <Lightbulb className="w-3 h-3 text-violet-500 flex-shrink-0" /> AI-Integrated Startup Incubator
          </div>
          <h2 className="text-2xl md:text-4xl font-anton uppercase tracking-wider leading-tight mb-4 text-slate-900">
            NITI Incubation Centre
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We incubate startups building businesses in Nagaland's core sectors — <strong>with AI as a smart component</strong>, not the whole product. If you're solving a real problem in agriculture, healthcare, handloom, tourism, or governance and want to use AI to do it better, this is your home.
          </p>
        </motion.div>

        {/* ── What "AI-integrated" means — explainer strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-slate-50 rounded-3xl p-8 md:p-10 grid md:grid-cols-3 gap-6 border border-slate-100"
        >
          <div className="md:col-span-1 flex flex-col items-center text-center justify-center">
            <p className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-3">Our Philosophy</p>
            <h3 className="text-slate-900 text-2xl font-bold leading-snug">You don't need to be an AI company. You need AI <em>in</em> your company.</h3>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
            {[
              { label: "Not just a chatbot", desc: "We focus on AI that solves a real local problem — crop disease detection, quality sorting, tourist recommendations, health triaging." },
              { label: "Real sector, real impact", desc: "Your business must be rooted in a Nagaland sector. AI is the tool, not the product. E.g. a handloom export startup that uses AI for demand forecasting." },
              { label: "Built alongside NITI Tech", desc: "You don't need a tech team on day one. NITI Technologies co-builds your MVP, integrates AI models, and trains your team." },
              { label: "Aligned with Govt. vision", desc: "Our focus sectors mirror the AI skilling priorities identified by NITI Aayog for Nagaland: handloom, agriculture, healthcare, tourism, and EV/clean tech." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center">
                <p className="text-violet-600 text-xs font-bold mb-1">✦ {item.label}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Focus Sectors — Interactive Cards ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-2 tracking-wider">Focus Sectors</h3>
            <p className="text-slate-500">Click a sector to learn what kinds of startups we're looking for.</p>
          </motion.div>

          {/* Sector Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {sectors.map((s, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIdx(i)}
                className={`px-4 py-2 rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 border ${
                  activeIdx === i
                    ? 'bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-600/20'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-200'
                }`}
              >
                {s.emoji} {s.title}
              </motion.button>
            ))}
          </div>

          {/* Active Sector Detail */}
          <div style={{ perspective: '1200px' }}>
            <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 16, rotateX: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.35 }}
              className={cn(
                "rounded-3xl border p-6 md:p-10 relative overflow-hidden bg-white shadow-2xl border-slate-100 card-3d shine-effect transition-all duration-500 hover:shadow-violet-500/20 cursor-default",
                sectors[activeIdx].border
              )}
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="texture-overlay opacity-[0.03]" />
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5, z: 50 }}
                  className="flex-shrink-0 text-5xl md:text-6xl drop-shadow-2xl cursor-default select-none"
                >
                  {sectors[activeIdx].emoji}
                </motion.div>
                <div className="flex-1" style={{ transform: 'translateZ(30px)' }}>
                  <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 bg-gradient-to-r ${sectors[activeIdx].color} bg-clip-text`}
                    style={{ WebkitTextFillColor: 'transparent' }}>
                    {sectors[activeIdx].title}
                  </p>
                  <h4 className="text-xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">{sectors[activeIdx].headline}</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-light">{sectors[activeIdx].desc}</p>
                  <div className="flex flex-wrap gap-2" style={{ transform: 'translateZ(50px)' }}>
                    {sectors[activeIdx].tags.map((t, j) => (
                      <motion.span 
                        key={j} 
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-2.5 md:px-3 py-1 rounded-full text-[9px] md:text-xs font-bold text-white bg-gradient-to-r ${sectors[activeIdx].color} shadow-lg shadow-black/10 cursor-default`}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>

        {/* ── What We Provide ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-2 tracking-wider">What We Provide</h3>
            <p className="text-slate-500 max-w-lg">End-to-end support from idea to launch and beyond.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {support.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={cn(
                  "group relative rounded-3xl p-4 md:p-6 transition-all duration-500 card-3d shine-effect bevel-shadow animated-border overflow-hidden cursor-default",
                  item.color
                )}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <div className="texture-overlay" />
                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-3 md:mb-4 shadow-inner",
                    item.accent === "text-white" ? "text-white" : "text-slate-900"
                  )} style={{ transform: 'translateZ(20px)' }}>
                    {item.icon}
                  </div>
                  <h4 className={cn("font-bold text-sm md:text-lg mb-1 md:mb-2 leading-tight drop-shadow-md", item.accent)} style={{ transform: 'translateZ(40px)' }}>{item.title}</h4>
                  <p className={cn(
                    "text-[10px] md:text-sm leading-relaxed font-medium line-clamp-3 md:line-clamp-none",
                    item.accent === "text-white" ? "text-white/90" : "text-slate-800"
                  )} style={{ transform: 'translateZ(20px)' }}>{item.desc}</p>
                </div>
                
                {/* Bottom accent line */}
                <div className={cn(
                  "absolute bottom-0 left-0 h-0.5 md:h-1 w-full opacity-40 bg-gradient-to-r from-transparent to-transparent",
                  item.accent === "text-white" ? "via-white" : "via-slate-900"
                )} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Eligibility & How to Apply ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-10"
          style={{ perspective: '1200px' }}
        >
          <motion.div 
            whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-200 cursor-default"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2" style={{ transform: 'translateZ(20px)' }}>
              <CheckCircle2 className="w-5 h-5 text-violet-600" /> Who Should Apply
            </h4>
            <ul className="space-y-3" style={{ transform: 'translateZ(10px)' }}>
              {[
                "Entrepreneurs with a startup idea in any Nagaland sector (agriculture, healthcare, tourism, handloom, education, GovTech)",
                "Founders who want to use AI/ML as a tool — not necessarily an AI-first company",
                "Students, recent graduates, or working professionals from Nagaland and Northeast India",
                "Small businesses looking to digitize and add an intelligent layer to their operations",
                "Teams of 1–4 co-founders at idea or early MVP stage",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-violet-600 mt-0.5 flex-shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, rotateX: 1, rotateY: 1 }}
            className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl cursor-default"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full -translate-y-12 translate-x-12 pointer-events-none" />
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10" style={{ transform: 'translateZ(20px)' }}>
              <Rocket className="w-5 h-5 text-violet-400" /> How to Get Started
            </h4>
            <ol className="space-y-4 relative z-10" style={{ transform: 'translateZ(10px)' }}>
              {[
                { step: "01", text: "Reach out to NITI via phone or walk into our centre at Kohima/Dimapur" },
                { step: "02", text: "Present your idea — what problem you're solving, who benefits, and how AI fits in" },
                { step: "03", text: "NITI's team evaluates fit with Nagaland's sector needs and your readiness" },
                { step: "04", text: "Selected startups begin co-building with NITI Technologies and receive mentorship access" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-violet-400 font-bold font-anton text-lg flex-shrink-0">{item.step}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #eff6ff 50%, #f5f3ff 100%)' }}
        >
          <div className="px-8 py-12 md:py-14 text-left md:text-center">
            <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3">Now Accepting Applications</p>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4 tracking-wider">
              Ready to build something meaningful for Nagaland?
            </h3>
            <p className="text-slate-500 max-w-xl md:mx-auto mb-8 leading-relaxed">
              You bring the idea and the drive. NITI brings the technology, the network, and 26+ years of roots in Nagaland. Let's build together.
            </p>
            <div className="flex flex-wrap gap-4 justify-start md:justify-center">
              <a href="#contact" className="px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-700 transition-all shadow-lg hover:-translate-y-0.5">
                Apply for Incubation
              </a>
              <a href="tel:+919811862846" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-white transition-colors">
                <Phone className="w-4 h-4" /> +91 98118 62846
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const NitiAppSubpage = ({ app, onBack }: { app: any, onBack: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-screen bg-[#0A0F1E] pt-28 pb-20 px-6 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all mb-12 font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Technologies
        </button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className={cn(
              "w-32 h-32 rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl mb-8 relative overflow-hidden bg-gradient-to-br border border-white/30",
              app.color
            )}>
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-60" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40" />
              <div className="relative z-10">{app.icon}</div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Category</p>
                <p className="text-white font-bold">{app.category}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Status</p>
                <p className="text-white font-bold">{app.details.status}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-1">Downloads</p>
                <p className="text-white font-bold">{app.downloads}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-7xl font-anton uppercase tracking-tight mb-6 text-white drop-shadow-2xl">{app.name}</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 font-medium">{app.description}</p>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {app.details.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm font-bold text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  Impact & Reach
                </h3>
                <p className="text-slate-400 leading-relaxed bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 italic font-medium">
                  "{app.details.impact}"
                </p>
              </div>

              <div>
                <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {app.details.techStack.map((tech: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-white/60 uppercase tracking-widest backdrop-blur-md">
                      {tech}
                    </span>
                  ))}
                </div>
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
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Scroll to top when opening a subpage
  useEffect(() => {
    if (selectedCourse || selectedReason || selectedApp || view !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [view, selectedCourse, selectedReason, selectedApp]);

  // After returning home, scroll to the saved section
  useEffect(() => {
    if (scrollTarget && view === 'home' && !selectedCourse && !selectedReason && !selectedApp) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
      setScrollTarget(null);
    }
  }, [scrollTarget, view, selectedCourse, selectedReason, selectedApp]);

  const goBack = (section: string) => {
    setScrollTarget(section);
    setSelectedCourse(null);
    setSelectedReason(null);
    setSelectedApp(null);
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
        ) : selectedApp ? (
          <NitiAppSubpage
            key="app-detail"
            app={selectedApp}
            onBack={() => goBack('technologies')}
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
                <NitiTechnologiesSection onSelectApp={setSelectedApp} />
                <NitiIncubationSection />
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