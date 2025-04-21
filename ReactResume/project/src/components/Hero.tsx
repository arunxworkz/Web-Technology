import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Java Developer', 'Portfolio Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    
    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-around items-center min-h-[450px] text-white py-12 px-4">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-5xl font-bold">Hi</h1>
        <div className="text-4xl">
          I am a <span ref={el} className="text-gradient"></span>
        </div>
        <div className="max-w-xl">
          <p className="text-xl leading-relaxed">
            "Self-motivated Web Developer with a strong portfolio of personal and freelance projects.
            Passionate about creating clean, functional, and aesthetically pleasing websites that provide real value to users."
          </p>
        </div>
      </div>
      
      <div className="md:w-2/5 mt-8 md:mt-0">
        <div className="rounded-lg overflow-hidden shadow-[0_0_30px_rgba(19,106,141,0.5)]">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full rounded-lg"
          >
            <source src="images/AdobeStock_1138463659_Video_HD_Preview.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}