export default function About({ backgroundColor }) {
  return (
    <section
      id="about"
      className={`bg-${backgroundColor} pb-16 sm:pb-[14rem] md:pb-[16rem] lg:pb-[18rem] mb-[-3px] sm:mb-[-2px] lg:mb-[-2px] 2xl:mb-[-1px]`}
    >
      <div className="container grid md:grid-cols-12 gap-8 p-8">
        <div className="col-span-12 md:col-span-7">
          <img className="w-full h-auto md:pr-12" src="/globe.png" />
        </div>
        <div className="col-span-12 md:col-span-5 text-justify flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl text-moss mb-12">
            About Our Company
          </h2>
          <p className="mb-6">
            BitHippie was started by Founder and serial entrepreneur, Anthony
            Torres, when he came to the realization that mission and the people
            impacted matter much more than maximizing shareholder value.
          </p>
          <p className="mb-6">
            The best way to stay true to that ethos is by aligning his efforts
            with the kind of people who care about the Earth and its
            inhabitants.
          </p>
          <p className="mb-6">
            Rather than do this work alone, Anthony combined his passions for
            making things, personal development, and service into a
            one-of-a-kind community, a force for good.
          </p>
          <p className="mb-6">
            Together he, and the friends made along the way, work together to
            make real change in the world, hold one another accountable, improve
            and maintain our health, and constantly remind one another that
            “together we go far.”
          </p>
          <p className="mb-6">
            If you would like to learn more about the community, please reach
            out on LinkedIn and we can see if you’d be a good fit.
          </p>
          <a href="https://www.linkedin.com/in/bithippie" target="_blank">
            <button className="bg-transparent text-moss border border-moss rounded py-4 px-32 hover:text-white hover:bg-moss hover:border-moss-800">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
