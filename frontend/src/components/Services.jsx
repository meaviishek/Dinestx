import { useEffect, useState } from 'react'
import Reveal from './Reveal';
import Lottie from 'react-lottie';
import anim from '../assets/Animation - 1724698260582.json'
import { GiThreePointedShuriken } from "react-icons/gi";

import { app, graphics, graphics1, seo, social, web, Website } from '.'
function Services() {

  const [state, setState] = useState(false)


  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, [])
  const images = [
    { src: graphics1, alt: "Image 1" },
    { src: web, alt: "Image 2" },
    { src: social, alt: "Image 3" },
    { src: seo, alt: "Image 4" },
    { src: app, alt: "Image 5" }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(slideInterval);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (

    <div className='relative  lg:py-12'>

      <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
      <div className='relative'>
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">

          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <Reveal>
              <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                Take Your Online Presence to the <span className='text-indigo-600'>Next Level</span>
              </h1></Reveal><Reveal>
              <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                Discover our comprehensive range of services designed to boost your visibility, enhance user experience, and drive growth. From website optimization to customized digital strategies, we’re here to support your brand’s journey to success.
              </p></Reveal><Reveal>
              <p className="text-slate-700 py-3">
                Explore our expertise in SEO, web development, design, and more to ensure your business stands out in today’s digital landscape.
              </p>
            </Reveal>
          </div>


          <div className="relative max-w-2xl md:ml-24 mx-auto overflow-hidden rounded-lg">
            <Reveal>
              <div className="flex transition-transform duration-500 ease-in-out transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                  <div key={index} className="min-w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-100 h-70 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>


        </section>













        <Reveal>
          <section className=" pb-6">

            <div className="max-w-7xl mx-auto p-2 sm:p-6 lg:p-8">
              <div className="container mx-auto px-1 lg:px-6">
                <div className="mb-8 text-center">

                  <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">What We Provide</h4>
                </div>

                <div className="grid lg:grid-cols-3 my-6">

                  <div className="w-full border-gray-300 bg-gradient-to-b from-gray-200 to-transparent hover:from-gray-300 transition-all duration-1000 border-b  md:border-r  p-8">
                    <div className="flex items-center mb-6">

                      <div className="ml-4 text-xl">Customized Web Solutions</div>
                    </div>
                    <p className="leading-loose text-gray-500">We develop tailored websites and applications that are designed to engage your target audience and achieve your business goals with unique features and functionalities.</p>
                  </div>


                  <div className="w-full border-b  lg:border-r p-8">
                    <div className="flex items-center mb-6">

                      <div className="ml-4 text-xl">Enterprise-ready Infrastructure</div>
                    </div>
                    <p className="leading-loose text-gray-500">Built on scalable architecture, our solutions cater to businesses of all sizes, ensuring high performance, security, and reliability as your business grows.</p>
                  </div>

                  <div className="w-full border-b  border-gray-300 bg-gradient-to-b from-gray-200 to-transparent hover:from-gray-300 transition-all duration-1000 md:border-r  lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">

                      <div className="ml-4 text-xl">Influencer Engagement</div>
                    </div>
                    <p className="leading-loose text-gray-500">Our platform connects influencers and brands, facilitating advertising campaigns that resonate with audiences for maximum impact.</p>
                  </div>

                  <div className="w-full border-b  lg:border-r lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">

                      <div className="ml-4 text-xl">Expert-approved Designs</div>
                    </div>
                    <p className="leading-loose text-gray-500">Our design team creates user-friendly and visually appealing interfaces that adhere to the latest UX/UI principles and best practices.</p>
                  </div>

                  <div className="w-full border-b  border-gray-300 bg-gradient-to-b from-gray-200 to-transparent hover:from-gray-300 transition-all duration-1000 md:border-r md:border-b-0  lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">

                      <div className="ml-4 text-xl">Client-focused Solutions</div>
                    </div>
                    <p className="leading-loose text-gray-500">Our client-centric approach allows us to craft solutions that align closely with your business objectives and improve user experience.</p>
                  </div>

                  <div className="w-full border-gray-300 bg-gradient-to-b    transition-all duration-1000  p-8">
                    <div className="flex items-center mb-6">

                      <div className="ml-4 text-xl">Performance-driven Strategies</div>
                    </div>
                    <p className="leading-loose text-gray-500">We prioritize efficiency and scalability in our strategies, enabling robust, long-term growth for your digital assets and campaigns.</p>
                  </div>

                </div>
              </div>
            </div>
          </section>

        </Reveal>




        <section className="relative py-16 isolate overflow-hidden bg-gray-900">
          <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">

            <div>
              <Reveal>
                <h2 className="text-3xl font-bold text-center sm:text-5xl text-gray-200">Website & App Development</h2>
                <p className="max-w-3xl mx-auto mt-4 text-md text-center text-gray-400">
                  Discover our comprehensive services that elevate your digital presence through custom, responsive, and performance-optimized solutions.
                </p></Reveal>
            </div>

            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mt-4 space-y-12">
                  <Reveal>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-rocket"
                          >
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-200">Custom & Responsive Designs</h4>
                        <p className="mt-2 text-gray-400">
                          Tailored designs crafted to match your brand identity, ensuring a responsive and seamless user experience across all devices.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-bookmark-plus"
                          >
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                            <line x1="12" x2="12" y1="7" y2="13" />
                            <line x1="15" x2="9" y1="10" y2="10" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-200">SEO Optimization</h4>
                        <p className="mt-2 text-gray-400">
                          Increase visibility with SEO-focused development, optimizing site structure, speed, and content for higher rankings and user engagement.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-video"
                          >
                            <path d="m22 8-6 4 6 4V8Z" />
                            <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-200">Native & Cross-Platform App Development</h4>
                        <p className="mt-2 text-gray-400">
                          Delivering native and cross-platform apps with intuitive interfaces, optimized for both iOS and Android.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-file-question"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
                            <path d="M12 17h.01" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-200">Wide Range of Development Tools & Languages</h4>
                        <p className="mt-2 text-gray-400">
                          Proficiency in modern tech stacks like React, Vue, Node.js, and Python, ensuring robust, scalable, and high-performance solutions.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
              <Reveal>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    width="600"
                    height="600"
                    src={Website}
                    className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
                    alt="New Features Illustration"
                  />
                </div>
              </Reveal>
            </div>

          </div>

          <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        </section>




        <section className="bg-gray-50">
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-2xl flex flex-col justify-center">
            <div className="flex flex-col">
              <Reveal>
                <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
                  <div>
                    <h2 className="text-3xl font-bold text-center sm:text-5xl text-gray-800">Graphic Design & Creative Editing</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-md text-center text-gray-600">
                      Elevate your brand's visual appeal with our expert design and editing services, tailored to create captivating, memorable content that leaves a lasting impression.
                    </p>
                  </div>
                </div>
              </Reveal>
              {/* Starts component */}
              <div className="mt-6 border-t pt-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center">
                  <div>
                    <Reveal>
                      <span className="text-gray-600 uppercase text-xs font-medium"> Creativity Meets Precision </span>
                      <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> Stunning visuals that drive engagement and brand recognition </p>
                      <p className="text-sm mt-4 text-gray-700 text-balance"> From social media content to brand identity, our designs are crafted to resonate with your audience and communicate your message effectively. </p>
                    </Reveal>
                    <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                      <Reveal>
                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                          <GiThreePointedShuriken />
                          <span className="text-gray-950 font-medium text-lg"> Poster, Banner and Thumbnails </span>
                        </div>
                      </Reveal>
                      <Reveal>
                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                          <GiThreePointedShuriken />
                          <span className="text-gray-950 font-medium text-lg"> Custom, Impactful Logos </span>
                        </div>
                      </Reveal>
                      <Reveal>
                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                          <GiThreePointedShuriken />
                          <span className="text-gray-950 font-medium text-lg"> High-Quality Photo & Video Editing </span>
                        </div>
                      </Reveal>
                      <Reveal>
                        <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                          <GiThreePointedShuriken />
                          <span className="text-gray-950 font-medium text-lg"> Social Media-Optimized Content </span>
                        </div>
                      </Reveal>
                    </div>

                  </div>
                  <Reveal>
                    <div className="h-full md:order-first">
                      {/* <Spline scene="https://prod.spline.design/7RuOHDkfwGAC9Wf2/scene.splinecode" /> */}
                      <Lottie options={defaultOptions}
                        height={350}
                        width={350}
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Additional content can be added here */}

              </div>
            </div>
          </div>
        </section>


        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
                  Effective Social Media Solutions
                </p>
                <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Amplify Your Brand's Reach and Engagement
                </h2>
              </div>
            </Reveal>

            <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
              <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <Reveal>
                  <div className="flex items-start">
                    <svg
                      className="flex-shrink-0 text-green-500 w-9 h-9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 8l3 3-3 3m10 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-black">Targeted Content Strategy</h3>
                      <p className="mt-3 text-base text-gray-600">
                        Build a unique content strategy tailored to resonate with your audience and maximize brand awareness.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="flex items-start">
                    <svg
                      className="flex-shrink-0 text-blue-600 w-9 h-9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8 10l3 3-3 3m5-3h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-black">Enhanced Engagement</h3>
                      <p className="mt-3 text-base text-gray-600">
                        Foster meaningful interactions that strengthen brand loyalty and encourage followers to take action.
                      </p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="flex items-start">
                    <svg
                      className="flex-shrink-0 text-red-500 w-9 h-9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 4v6l4 4"
                      />
                    </svg>
                    <div className="ml-5">
                      <h3 className="text-xl font-semibold text-black">Data-Driven Insights</h3>
                      <p className="mt-3 text-base text-gray-600">
                        Track key metrics to measure performance, optimize strategies, and improve social ROI with in-depth analytics.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-3">
                <Reveal>
                  <img
                    className="w-full rounded-lg shadow-xl"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
                    alt="Social media management dashboard preview"
                  />    </Reveal>
              </div>

            </div>
          </div>
        </section>




      </div>

    </div>


  )
}

export default Services