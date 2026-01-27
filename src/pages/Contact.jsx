import { useState } from 'react';

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
        const result = await response.json();
        if (result.errors) {
            // handle errors if needed, for now just generic error
            setStatus("error");
        } else {
            setStatus("error");
        }
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
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contact Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out through any of the channels below!
          </p>
          
          <div className="grid gap-4">
            {contactInfo.map((info, index) => (
              <a 
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-brand-dark rounded-xl border border-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] no-star-interaction transition-all group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-white/5 group-hover:bg-brand-purple/20 transition-colors`}>
                  <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-brand-purple shadow-[0_0_8px_rgba(155,81,224,0.8)]' : 'bg-brand-orange shadow-[0_0_8px_rgba(242,153,74,0.8)]'}`}></div>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{info.label}</div>
                  <div className="text-gray-200 font-semibold group-hover:text-white transition-colors">{info.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-brand-dark rounded-2xl p-8 border border-white/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] no-star-interaction relative overflow-hidden">
          <h3 className="text-xl font-bold text-white mb-6">Send a Quick Message</h3>
          
          {status === "success" ? (
            <div className="absolute inset-0 bg-brand-dark flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
               <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               </div>
               <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
               <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
               <button onClick={() => setStatus("")} className="mt-6 text-brand-purple font-medium hover:text-white transition-colors">Send another message</button>
            </div>
          ) : (
             <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" name="name" className="w-full px-4 py-2 bg-brand-dark border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition" placeholder="Your Name" required disabled={status === "submitting"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" name="email" className="w-full px-4 py-2 bg-brand-dark border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition" placeholder="your@email.com" required disabled={status === "submitting"} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea name="message" rows="4" className="w-full px-4 py-2 bg-brand-dark border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition resize-none" placeholder="How can I help you?" required disabled={status === "submitting"}></textarea>
                </div>
                
                {status === "error" && (
                  <div className="text-brand-pink text-sm text-center">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button type="submit" disabled={status === "submitting"} className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-pink text-white rounded-lg font-bold hover:opacity-90 transition shadow-lg shadow-brand-purple/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center">
                  {status === "submitting" ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Send Message"}
                </button>
             </form>
          )}
        </div>
      </div>
    </div>
  );
}