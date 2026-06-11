export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 sm:px-12 md:px-24 py-12">
      
      {/* 1. TOP NAVIGATION */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-24">
        <div className="font-bold text-xl tracking-tighter">Alex.dev</div>
        
        {/* Desktop Links (Hidden on small screens) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#works" className="hover:text-black transition-colors">Works</a>
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      {/* 2. THE HERO GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Bold Typography & Call to Action */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Building digital <br className="hidden md:block" />
            products, brands <br className="hidden md:block" />
            <span className="text-blue-700">& experience.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            I build digital experiences from the database to the pixel. 
            Based in Nairobi, I am a Full-Stack Software Engineer, UI/UX Designer and Quantitative Researcher specializing in robust backend architecture and intuitive user interfaces.
          </p>

          {/* Email Input & Button (Matched to the design) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-6 py-4 bg-gray-50 rounded-md outline-none focus:ring-2 focus:ring-blue-700 w-full sm:w-64 border border-gray-100"
            />
            <button className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition-colors w-full sm:w-auto shadow-lg shadow-blue-700/20">
              Connect With Me
            </button>
          </div>
        </div>

        {/* Right Column: The Tech Photo */}
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 shadow-inner">
           {/* We will drop your real photo in here later */}
           <div className="text-gray-400 font-medium flex flex-col items-center gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>High-End Tech Photo Placeholder</span>
           </div>
        </div>

      </section>
    </main>
  );
}