export default function Contact() {
  const contactInfo = [
    {
      label: "Email",
      value: "anna@bushueva.lu",
      link: "mailto:anna@bushueva.lu"
    },
    {
      label: "Phone",
      value: "+352 621 275 568",
      link: "tel:+352621275568"
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
                className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-brand-purple/30 hover:bg-white/10 transition-all group"
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

        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-6">Send a Quick Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 bg-brand-dark border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 bg-brand-dark border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 bg-brand-dark border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-pink text-white rounded-lg font-bold hover:opacity-90 transition shadow-lg shadow-brand-purple/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}