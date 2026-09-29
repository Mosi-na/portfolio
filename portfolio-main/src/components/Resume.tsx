import { Download, Eye, GraduationCap, Briefcase, FolderOpen, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const resumeUrl = "/profile-document.pdf";

const Resume = () => {
  const fetchResumeBlob = async () => {
    const response = await fetch(resumeUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Resume could not be loaded");
    }
    const blob = await response.blob();
    if (blob.type !== "application/pdf") {
      throw new Error("Resume response was not a PDF");
    }
    return blob;
  };

  const viewResume = async () => {
    const previewWindow = window.open("", "_blank");

    try {
      const blob = await fetchResumeBlob();
      const blobUrl = URL.createObjectURL(blob);

      if (previewWindow) {
        previewWindow.location.href = blobUrl;
      } else {
        window.location.href = blobUrl;
      }

      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 60_000);
    } catch {
      previewWindow?.close();
      window.alert("The resume could not be opened. Please try the download button instead.");
    }
  };

  const downloadResume = async () => {
    try {
      const blob = await fetchResumeBlob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Moshina_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1_000);
    } catch {
      window.alert("The resume could not be downloaded. Please try again.");
    }
  };

  const education = {
    degree: "B.Tech - Information Technology",
    institution: "Annai Mira College Of Engineering And Technology",
    period: "2023 - Present",
    cgpa: "8.4",
  };

  const workExperience = [
    {
      title: "Software Developer",
      company: "ADIC (Annai Mira College)",
      period: "2026 - Present",
      location: "Tamil Nadu, India",
      description: "Joined as a Software Developer, contributing to college-driven technology initiatives.",
    },
    {
      title: "Gen AI Consultant",
      company: "Annai Mira College of Engineering & Technology",
      period: "2024 - Present",
      location: "Tamil Nadu, India",
      description: "Led academic AI projects exploring Generative AI applications for real-world problems. Developed proof-of-concept prototypes using OpenAI API, LangChain, and Python.",
    },
    {

      title: "Campus Ambassador",
      company: "Infomatics Project Service",
      period: "12/2024 - 06/2025",
      location: "India",
      description: "Acted as a liaison between the company and students on campus, driving engagement and awareness.",
    },
    {
      title: "Full Stack Intern",
      company: "Infomatics Project Service",
      period: "01/2024 - 12/2024",
      location: "India",
      description: "Completed an intensive 15-day full stack development program covering frontend and backend fundamentals.",
    },
  ];

  const projects = [
    {
      title: "Intelligent Shopping Cart",
      year: "2024 - Present",
      description: "Designed a smart trolley system to automate billing and reduce supermarket checkout time.",
    },
    {
      title: "Generative AI Chatbot Assistant",
      year: "2025",
      description: "Built a conversational AI chatbot using OpenAI API and Python with prompt engineering. Hands-on with LangChain, Langgraph, and RAG architectures.",
    },
    {
      title: "Perfume Web App",
      year: "2024",
      description: "Product discovery web app using RAG (Retrieval-Augmented Generation) for smart recommendations.",
    },
    {
      title: "Pharmacy Web App",
      year: "2024",
      description: "Responsive app to manage medicine inventory and sales — HTML, CSS, JavaScript, Backend Basics.",
    },
    {
      title: "Other Web Apps",
      year: "2024",
      description: "Watch Web App, Food Delivery App, Fresh Fruits App — built with HTML, CSS, JS, JSON and Python.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="resume" className="py-24 lg:py-32 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-body tracking-widest uppercase text-sm mb-4">
              My Resume
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              A detailed overview of my education, experience, and key projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="gold-outline"
                   onClick={viewResume}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gold hover:bg-gold/90 text-background font-semibold"
                   onClick={downloadResume}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Mail, text: "moshinathabasum@gmail.com" },
              { icon: Phone, text: "9384146198" },
              { icon: MapPin, text: "Tamil Nadu, India" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
                variants={fadeInUp}
                transition={{ duration: 0.4 }}
              >
                <item.icon size={16} className="text-gold" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="text-gold" size={24} />
              </motion.div>
              <h3 className="font-display text-2xl font-bold">Education</h3>
            </div>
            <motion.div 
              className="card-gradient rounded-xl p-6 border border-border/50"
              variants={scaleIn}
              whileHover={{ borderColor: "hsl(var(--gold) / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-display text-xl font-semibold mb-2">{education.degree}</h4>
              <p className="text-gold mb-2">{education.institution}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>{education.period}</span>
                <span>•</span>
                <span>CGPA: {education.cgpa}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Work Experience */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-8"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center"
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Briefcase className="text-gold" size={24} />
              </motion.div>
              <h3 className="font-display text-2xl font-bold">Work Experience</h3>
            </motion.div>
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
            >
              {workExperience.map((job, index) => (
                <motion.div 
                  key={index}
                  className="card-gradient rounded-xl p-6 border border-border/50 hover:border-gold/30 transition-colors duration-300"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                  whileHover={{ x: 10, boxShadow: "0 10px 40px -15px hsl(var(--gold) / 0.2)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="font-display text-xl font-semibold">{job.title}</h4>
                      <p className="text-gold">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Key Projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-8"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FolderOpen className="text-gold" size={24} />
              </motion.div>
              <h3 className="font-display text-2xl font-bold">Key Projects</h3>
            </motion.div>
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="card-gradient rounded-xl p-6 border border-border/50 hover:border-gold/30 transition-colors duration-300"
                  variants={scaleIn}
                  transition={{ duration: 0.4 }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 40px -15px hsl(var(--gold) / 0.15)" 
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-display text-lg font-semibold">{project.title}</h4>
                    <motion.span 
                      className="text-xs text-gold bg-gold/10 px-2 py-1 rounded"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.year}
                    </motion.span>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
