export default function Footer() {
  return (
    <footer className="bg-dark-grey pb-14 pt-2 sm:pt-0 md:pt-0 lg:pt-0">
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-8 p-8">
        <div className="col-span-7">
          <h3 className="text-4xl text-moss">BitHippie LLC</h3>
          <h4 className="text-xl text-white">
            At the Intersection of Sustainability, Technology, and Wellness
          </h4>
        </div>
        <div className="col-span-5">
          <h3 className="text-4xl text-moss">Join the Socials!</h3>
          <p className="text-white">
            Check out the{" "}
            <a
              href="https://www.youtube.com/@BrainwaveExchange"
              target="_blank"
            >
              <span className="text-old-gold">Brainwave Exchange Podcast</span>
            </a>{" "}
            where we talk to good humans making their mark on the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
