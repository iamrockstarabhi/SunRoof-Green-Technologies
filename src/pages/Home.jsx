import React, { useEffect, useState } from 'react'
import Base from '../component/Base'
import { image } from '../assets/ImageObject'
import { ProductData } from '../assets/ProductData'

const Home = () => {

  const [savedTrees, setSavedTrees] = useState(0);
  const target = 1600000; // Target value
  const duration = 30; // Total animation duration in milliseconds
  const intervalSpeed = 0.1; // Interval speed in milliseconds

  useEffect(() => {
    let current = 0; // Start from 0
    const step = Math.ceil(target / (duration / intervalSpeed)); // Increment per interval

    const interval = setInterval(() => {
      if (current < target) {
        // Simulate changing digits
        const randomOffset = Math.floor(Math.random() * step);
        const newValue = Math.min(current + randomOffset, target); // Avoid overshooting
        setSavedTrees(newValue);
        current = newValue;
      } else {
        // Stop the interval when the target is reached
        setSavedTrees(target);
        clearInterval(interval);
      }
    }, intervalSpeed);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [target, duration, intervalSpeed]);

  return (
    <>
      <Base>

        <div className='w-3/4 m-auto pt-[100px]'>

          {/* Home */}
          <section>

            <div className='flex flex-col lg:flex-row items-center justify-center'>

              <div className='text-center'>

                <h1 className='text-lg font-bold'>पीएम सूर्य घर मुफ्त बिजली योजना !!</h1>

                <h1 className='text-2xl text-green-600 font-bold'>REDUCE ELECTRICITY BILL UPTO 80%</h1>

                <h1 className='text-7xl text-orange-500 font-bold'>GET SUBSIDY UPTO ₹108000/-</h1>

              </div>

              <div>

                <img src={image.PM} alt="BrandAmbassador" className='rounded-lg h-[385px] w-[540px] ' />

              </div>

            </div>

          </section>

          {/* Products */}
          <section>

            <div className='flex flex-wrap justify-center gap-10 my-[50px]'>

              {ProductData.map((curEle, index) => {
                const { image, description } = curEle;

                return (

                  <div key={index} className='bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 h-[380px] w-[350px]'>

                    <img src={image} alt={description} className='m-auto h-[300px] w-[300px]' />

                    <h1 className='text-lg text-center font-bold mt-5'>{description}</h1>

                  </div>

                );

              })}

            </div>

          </section>

          {/* About Us */}
          <section>

            <div>

              <h1 className='text-4xl text-center font-serif font-bold mb-8'>Why SunRoof Green Technologies</h1>

              <p className='text-blue-600 italic text-center text-xl my-4'>SunRoof Green Technologies is a leading solar company and Solar Energy service provider established in 2013. We are recognized by startup India and customer best choice award 2022.</p>

              <div className='w-[700px] m-auto'>
                <h1 className='text-2xl text-center text-white mb-4 bg-blue-600'>Get best solar solutions and consultation with our Solar expert.</h1>
              </div>

              <p className='text-center text-lg font-serif'>SunRoof Green Technologies provides you world class solar energy services, We take care of your aspects from beginning to end of solar system installation. Our Solar Experts suggest you best solar system according to your current need and future need.  We have experience of Solar System installations on Home, Industries, Hospitals, Petrol Pumps, Government Building, Schools, Showrooms, Solar Water Pump, Solar Atta Chakki, Solar Street Lights, Solar Drinking Water Projects.</p>

              <p className='my-4 text-center text-lg font-serif'>With the rise in the cost of electricity, and given the availability of rebates and incentives for solar installation, it is the best time to go solar. At <span className='font-semibold'>SunRoof Green Technologies</span>, we ensure the best value for your money and complete satisfaction with your <span className='font-semibold'>solar panel</span> installation. Call or email us today to see what a difference our experience and quality can make to your next project.</p>

            </div>

          </section>

          {/* Achievements */}
          <section>

            <div className='flex flex-wrap justify-between mx-60 mt-10'>

              <div className='flex flex-col items-center'>

                <img src={image.TreesSaved} alt="TreesSaved" className='h-28 w-28 items-center' />

                <h1 className='text-4xl font-bold text-center text-green-600'>{savedTrees}+</h1>

                <h1 className='text-lg font-semibold text-center'>SAVED TREE</h1>

              </div>

              <div className='flex flex-col items-center'>

                <img src={image.HappyCustomer} alt="HappyCustomer" className='h-28 w-28' />

                <h1 className='text-4xl font-bold text-center text-green-600'>50,000+</h1>

                <h1 className='text-lg font-semibold text-center'>HAPPY CUSTOMER</h1>

              </div>

            </div>

            <div className='my-10 flex items-center gap-8'>

              <div>

                <img src={image.PresenceInIndia} alt="Presence in India" className='h-80 w-60 flex-shrink-0' />

              </div>

              <div className='flex-1'>

                <div>

                  <h1 className='text-2xl font-serif font-semibold'>Trusted by 50000+ Customers</h1>

                  <p className='mt-4'>SunRoof Green Technologies is a leading solar company and Solar Energy service provider established in 2013. We are recognized by startup India and customer best choice award 2022.</p>

                </div>

                <div>

                  <h1 className='text-2xl font-serif font-semibold mt-8'>Our Achievements :</h1>

                  <ul className='mt-4 list-disc pl-8'>

                    <li>Recognized by Startup India.</li>
                    <li>Purvanchal's first solar company to operate exclusively with solar products.</li>
                    <li>Certified by well-known institutions such as MSME, IndiaMart, and Just Dial and many more.</li>
                    <li>Winner of the Best Customer Choice Award 2022.</li>
                    <li>Over 50,000 happy customers across India.</li>

                  </ul>

                </div>

              </div>

            </div>

            <div>



            </div>

          </section>



        </div>

      </Base>

    </>
  )
}

export default Home