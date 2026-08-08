import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900 text-white px-6 border-t border-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Do Not Disturb Until Necessary.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/D-Bappah" className="p-3 bg-slate-800 rounded-full hover:bg-indigo-500 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/abdulrahman-abubakar" className="p-3 bg-slate-800 rounded-full hover:bg-indigo-500 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox:abdurrahmanabubakar234@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-indigo-500 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Abdul-Rahman Abubakar. All rights reserved (For Now).
        </p>
      </div>
    </section>
  );
}