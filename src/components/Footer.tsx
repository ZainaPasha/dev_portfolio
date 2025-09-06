import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/ZainaPasha", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/zaina-pasha-34a875227/", 
    label: "LinkedIn" 
  },
  { 
    icon: Mail, 
    href: "mailto:zaina.bint.pasha@gmail.com", 
    label: "Email" 
  },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border relative overflow-hidden" data-testid="footer">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-slate-200 via-indigo-300 to-purple-300 bg-clip-text text-transparent tracking-wide"
              data-testid="footer-brand"
            >
              ZAINA PASHA
            </h3>
            <p
              className="text-gray-400 mt-2 italic"
              data-testid="footer-tagline"
            >
              Designing code, crafting ideas, building tomorrow.
            </p>
          </div>

          {/* Social Links with glow + pop effect */}
          <div className="flex space-x-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center"
                aria-label={social.label}
                data-testid={`social-${social.label.toLowerCase()}`}
              >
                {/* Glow behind icon */}
                <span className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-r from-slate-200 via-indigo-300 to-purple-300 opacity-0 group-hover:opacity-30 transition duration-500 scale-75 group-hover:scale-125 blur-lg -z-10"></span>
                
                {/* Icon (always visible, just pops on hover) */}
                <social.icon className="relative z-10 h-6 w-6 text-gray-300 transition-all duration-300 transform group-hover:scale-125 group-hover:text-slate-100" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm" data-testid="footer-copyright">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-slate-200 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Zaina Pasha
            </span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
