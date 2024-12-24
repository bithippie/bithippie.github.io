import { FaApple, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-grey py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 text-center md:text-left max-w-screen-xl">
        {/* Left section with company name and tagline */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <h3 className="text-3xl sm:text-4xl text-moss font-extrabold px-2 tracking-wide">
            BitHippie LLC
          </h3>
          <h4 className="text-base sm:text-xl text-white opacity-80 px-2 mb-6">
            At the Intersection of Sustainability, Technology, and Wellness
          </h4>
        </div>

        {/* Right section with Socials and Podcast */}
        <div className="flex flex-col justify-between items-center md:items-start">
          <h3 className="text-3xl sm:text-4xl text-moss font-extrabold mb-4 px-2 tracking-wide">
            Join the Socials!
          </h3>
          <p className="text-base sm:text-lg text-white opacity-80 px-2 mb-6">
            Check out the{" "}
            <a
              href="https://www.youtube.com/@BrainwaveExchange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-old-gold hover:text-white transition-colors duration-300 font-semibold"
            >
              Brainwave Exchange Podcast
            </a>{" "}
            where we talk to good humans making their mark on the world.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6 px-2">
            <a
              href="https://www.linkedin.com/company/bithippie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-old-gold transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.youtube.com/@BrainwaveExchange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-old-gold transition-colors duration-300"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://open.spotify.com/show/55k8tssP1aOA06aZr3MsVQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-old-gold transition-colors duration-300"
            >
              <FaSpotify size={30} />
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/brainwave-exchange/id1710255399"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-old-gold transition-colors duration-300"
            >
              <FaApple size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom, optional divider or extra content */}
      <div className="container text-center pt-8 text-white opacity-70 px-4">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} BitHippie LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
