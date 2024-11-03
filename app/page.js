import { Avatar, Blockquote } from "flowbite-react";

import Navbar from '../components/navbar';
import ScheduleConsultation from '../components/schedule_consultation';
import EngagementAccordion from '../components/engagement_accordion';
import FAQ from '../components/faq';
import Testimonials from '../components/testimonials';


export default function Home() {
  return (
    <div id="root">
      <main>
        <Navbar />
        <section id="hero" className="h-screen bg-hero bg-center bg-fill flex">
          <div className="container place-content-center flex flex-col items-center">
            <h1 className="text-platinum text-6xl text-center">
              Helping good humans <span className="text-moss">sustainably</span> deliver digital products customers <span className="text-old-gold">love</span> 
            </h1>
            <h2 className="text-platinum text-4xl text-center my-8">
              Burst Capacity Software, Data, and Cloud Engineering Professionals 
              Specializing in Rapid Product Development, Data Platform Design, and Internal Tooling 
            </h2>
            <ScheduleConsultation/>
          </div>
        </section>

        <section id="what-we-do" className="bg-platinum">
          <div className="container py-8 flex flex-col items-center">
            <h2 className="text-4xl text-moss w-full">How we work together</h2>
            <div className="grid grid-cols-3 gap-8 my-8 text-center">
              <div>
                <img src="/idea.png"/>
                <h3 className="text-2xl text-moss my-6">Delivery in 1 Month</h3>
                <p className="text-justify">
                  Get the first version of your digital product into your customer’s hands so fast you won’t believe it. 
                  <br/><br/>
                  Timing is critical: Don’t guess what the market wants - Build, test, measure, and iterate!
                </p>
              </div>
              <div>
                <img src="/science.png"/>
                <h3 className="text-2xl text-moss my-6">A Tech Backbone that Scales</h3>
                <p className="text-justify">
                  Whether you’re a startup founder bootstrapping your business, or a mature business processing volumes of data in the cloud - we know how to design systems for where you are today with a growth plan for how to get where you’re going. 
                </p>
              </div>
              <div>
                <img src="/community.png"/>
                <h3 className="text-2xl text-moss my-6">On Demand Resource Pool</h3>
                <p className="text-justify">
                  Why pay for what you don’t need? Our team of Software, Data, and Cloud Engineers are available when you need for as long as you need, keeping your operating expenses as low as possible.
                </p>
              </div>
            </div>
            <ScheduleConsultation/>
          </div>
        </section>

        <section id="how-we-work" className="bg-white">
          <div className="container grid grid-cols-2 gap-8 py-8">
            
            <EngagementAccordion />

            <div>
              <h2 className="text-5xl mb-8">A tried and true process</h2>
              <h3 className="text-3xl">Let our clients will be the first to tell you…</h3>
              
              <Blockquote className="mt-8">
                <Avatar className="float-right" rounded size="lg" img="/alex.jpeg" alt="profile picture" />
                “We were able to go from initial product idea to a demo with stakeholders in just a couple of weeks. This enabled rapid iteration, and minimized the chances of building something that nobody would want. ”
              </Blockquote>
              
              <figcaption className="my-6 flex items-center space-x-3">
                <cite>— Alex Greenfield // Chief Scientist & Founder // Fresnel.bio</cite>
              </figcaption>

              <ScheduleConsultation />
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-moss">
          <div className="container py-8">
            <h2 className="text-5xl text-white text-center my-8">Why people love working with BitHippie.</h2>
            <Testimonials />
          </div>
        </section>

        <section id="schedule" className="bg-platinum">
          <div className="container grid grid-cols-12 gap-8 py-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-4xl text-moss mt-3 mb-8">Schedule My Free Consultation</h2>
              <p className='text-xl mb-8'>
              We love speaking with entrepreneurs, founders, and good humans who strive to leave the world better than they found it.
              </p>
              <p className='text-xl mb-8'>
              If you’re ready to take action then do schedule a time to speak with us.
              </p>
              <p className='text-xl'>
              In as little as 1 Month you and your customers will see the manifestation of your idea. You’ll collect valuable data from your users, and you’ll move forward with an informed opinion about how best to proceed!
              </p>

              <FAQ />
            </div>
            <div className="col-span-12 md:col-span-7">
              <iframe className="w-full h-[1200px] xl:h-[750px]"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ30HK2RiO6pCj8Uol07xqWiU14qAi3SgveSUNA71At4MPz0Yo3VQZbTPn2eyAfR94LS1vM3oW08?gv=true">
              </iframe>
            </div>
          </div>
        </section>
        <section id="about" className="bg-white">
          <div className="container grid grid-cols-12 gap-8 py-8">
            <div className="col-span-7"> 
              <img className="pr-12" src="/globe.png" />
            </div>
            <div className="col-span-5 text-justify flex flex-col items-center">
              <h2 className="text-5xl text-moss mb-12">About Our Company</h2>
              <p className='mb-6'>
                BitHippie was started by Founder and serial entrepreneur, Anthony Torres, when he came to the realization that mission and the people impacted matter much more than maximizing shareholder value.
              </p>
              <p className='mb-6'>
                The best way to stay true to that ethos is by aligning his efforts with the kind of people who care about the Earth and its inhabitants.
              </p>
              <p className='mb-6'>
                Rather than do this work alone, Anthony combined his passions for making things, personal development, and service into a one-of-a-kind community, a force for good.
              </p>
              <p className='mb-6'>
                Together he, and the friends made along the way, work together to make real change in the world, hold one another accountable, improve and maintain our health, and constantly remind one another that “together we go far.”
              </p>
              <p className='mb-6'>
                If you would like to learn more about the community, please reach out on LinkedIn and we can see if you’d be a good fit.
              </p>
              <button className="bg-transparent text-moss border border-moss rounded py-4 px-32 hover:text-white hover:bg-moss hover:border-moss-800">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dark-grey">
        <div className="container grid grid-cols-12 gap-8 py-8">
          <div className="col-span-7">
            <h3 className="text-4xl text-moss">BitHippie LLC</h3>
            <h4 className="text-xl text-white">At the Intersection of Sustainability, Technology, and Wellness</h4>
          </div>
          <div className="col-span-5">
            <h3 className="text-4xl text-moss">Join the Socials!</h3>
            <p className="text-white">
            Check out the <span className="text-old-gold">Brainwave Exchange Podcast</span> where we talk to good humans making their mark on the world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
