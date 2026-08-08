import { Terminal } from 'lucide-react';
import MyImage from '../assets/Snapchat-539724488.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white px-6">
      <div className="max-w-3xl text-center">
        <img 
          src={ MyImage } 
          alt="Abdul-Rahman Abubakar" 
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-800 shadow-xl object-cover"
        />
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Abdul-Rahman Abubakar</span>
        </h1>
        <h2 className="text-2xl text-slate-300 mb-6">
          Aspiring Full-Stack Developer, Mixed Martial Artist & Amatuer Boxer
        </h2>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
          I am a Software Engineering undergraduate at Nile University of Nigeria with 
practical experience in backend development, telecommunications operations, 
project management, and technical leadership. Experienced in designing 
RESTful APIs, database architecture, authentication systems, cloud integrations, 
and collaborative software development workflows. Strong interest in 
Cybersecurity, Backend Engineering, and Software Systems Architecture, with 
proven leadership experience managing technical teams and coordinating 
multidisciplinary projects.
        </p>
        <a
          href="#projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}