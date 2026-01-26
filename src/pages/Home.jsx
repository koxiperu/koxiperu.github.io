import photo from '../assets/photo.jpg';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] gap-10 px-4">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
        <img 
          src={photo} 
          alt="Anna Bushueva" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Anna Bushueva
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 font-medium">
          Software Engineer / Backend Developer
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          IT professional with a master’s in applied physics and mathematics and 5+ years’
          experience in IT analysis and processes, with additional hands-on exposure to
          backend development and cloud tools.
        </p>
        <div className="pt-4 flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Download CV
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">
                Contact Me
            </button>
        </div>
      </div>
    </div>
  );
}
