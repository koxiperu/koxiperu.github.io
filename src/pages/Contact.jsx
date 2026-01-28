import { useState } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Contact() {
  const [status, setStatus] = useState(""); // "", "submitting", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mvzadkdr", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "web@bushueva.lu",
      link: "mailto:web@bushueva.lu"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/annbushuev",
      link: "https://linkedin.com/in/annbushuev"
    },
    {
      label: "GitHub",
      value: "github.com/koxiperu",
      link: "https://github.com/koxiperu"
    },
    {
      label: "Location",
      value: "Betzdorf (Luxembourg)",
      link: "https://www.google.com/maps/search/Betzdorf+Luxembourg"
    }
  ];

  return (
    <Section>
      <Container className="max-w-5xl">
        <header className="mb-16 no-star-interaction">
          <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-3">
            Get In Touch
          </h2>
          <div className="flex items-center gap-6">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Contact
            </h3>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10 no-star-interaction">
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              I'm currently open to new opportunities and technical collaborations. 
              Let's connect and discuss your project or vision.
            </p>
            
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-white/[0.02] rounded-xl border border-white/[0.05] transition-all duration-300 group hover:bg-white/[0.05] hover:border-brand-accent/30"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-5 bg-white/5 group-hover:bg-brand-accent/10 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(56,189,248,0.6)]"></div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</div>
                    <div className="text-slate-200 font-semibold group-hover:text-white transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card variant="glass" className="no-star-interaction relative overflow-hidden border-white/[0.03]">
            <h3 className="text-xl font-bold text-white mb-8">Send a Message</h3>
            
            {status === "success" ? (
              <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                 <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-6">
                   <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-2">Message Received</h4>
                 <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                 <button onClick={() => setStatus("")} className="mt-8 text-brand-accent text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">Send Another</button>
              </div>
            ) : (
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Name</label>
                    <input type="text" name="name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder:text-slate-700" placeholder="Your Name" required disabled={status === "submitting"} />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                    <input type="email" name="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all placeholder:text-slate-700" placeholder="your@email.com" required disabled={status === "submitting"} />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                    <textarea name="message" rows="4" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all resize-none placeholder:text-slate-700" placeholder="How can I help you?" required disabled={status === "submitting"}></textarea>
                  </div>
                  
                  {status === "error" && (
                    <div className="text-red-400 text-xs font-medium text-center italic">
                      Transmission failed. Please try again.
                    </div>
                  )}

                  <Button type="submit" disabled={status === "submitting"} variant="accent" className="w-full py-4 uppercase tracking-widest text-xs">
                    {status === "submitting" ? "Transmitting..." : "Send Message"}
                  </Button>
               </form>
            )}
          </Card>
        </div>
      </Container>
    </Section>
  );
}