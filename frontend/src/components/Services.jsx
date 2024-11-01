import { useEffect, useState } from 'react'
import Logo from '../assets/test.svg'
function Services(){

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Features", path: "javascript:void(0)" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])


    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <img
                    src="https://www.floatui.com/logo.svg"
                    width={120}
                    height={50}
                    alt="Float UI logo"
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

    return (
        <div className='relative py-32 sm:py-48 lg:py-36'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
            <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                        Optimize your website for
                         <span className="text-indigo-600"> Search engine</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                    <div>
                        <p className="text-gray-800 py-3">
                            Subscribe to our newsletter and we'll save your time
                        </p>
                        <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                            />
                            <button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                                Subscribe 
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/kgd4WhyS/container.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
            <section className=" pb-6">





    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6  ">

            <div className="mb-8 text-center">
                <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">What We Provide</h4>
             
            </div>

            <div className="flex flex-wrap my-6">

                <div className="w-full border-gray-300 bg-gradient-to-b from-gray-200 to-transparent hover:from-gray-300 transition-all duration-1000 border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                             fill="currentColor" className="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">Increase sales</div>
                    </div>
                    <p className="leading-loose text-gray-500">Consectetur pariatur irure exercitation sit amet id
                        consectetur consectetur magna et Lorem labore qui velit.
                    </p>
                </div>

                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                             fill="currentColor" className="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">Enterprise-ready</div>
                    </div>
                    <p className="leading-loose text-gray-500">Labore duis pariatur est exercitation laboris cupidatat amet
                        cillum. Amet nisi ullamco.
                    </p>
                </div>

                <div className="w-full border-b md:w-1/2 border-gray-300 bg-gradient-to-b from-gray-200 to-transparent hover:from-gray-300 transition-all duration-1000 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                             fill="currentColor" className="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">Unlimited growth</div>
                    </div>
                    <p className="leading-loose text-gray-500">Elit deserunt nisi esse duis cupidatat proident sit minim
                        mollit officia pariatur incididunt in tempor.
                    </p>
                </div>

                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                             fill="currentColor" className="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">Recommended by experts</div>
                    </div>
                    <p className="leading-loose text-gray-500">Velit sit tempor pariatur quis pariatur incididunt culpa
                        dolor voluptate officia incididunt velit dolore.
                    </p>
                </div>

                <div className="w-full border-b md:w-1/2 border-gray-300 bg-gradient-to-b from-gray-200 to-transparent hover:from-gray-300 transition-all duration-1000 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                             fill="currentColor" className="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">Future-proof technology</div>
                    </div>
                    <p className="leading-loose text-gray-500">Amet tempor occaecat ullamco pariatur anim in excepteur
                        sit eu occaecat laboris pariatur elit.
                    </p>
                </div>

                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-b-0 lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                             fill="currentColor" className="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">User-friendly design</div>
                    </div>
                    <p className="leading-loose text-gray-500">Occaecat consectetur elit exercitation est duis irure
                        reprehenderit ut minim laboris eiusmod qui.
                    </p>
                </div>

            </div>
        </div>
    </div>
</section>






  <section className="">
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl">New Features</h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
        Explore the latest features that enhance your learning experience and make it even more exciting.
      </p>
    </div>
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="mt-4 space-y-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
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
              <h4 className="text-lg font-medium">Advanced Learning Algorithms</h4>
              <p className="mt-2">
                Discover our improved learning algorithms that adapt to your preferences and provide even more
                personalized learning suggestions.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
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
              <h4 className="text-lg font-medium">Interactive Learning Resources</h4>
              <p className="mt-2">
                Access an extensive library of interactive resources that make your learning journey engaging and
                interactive.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
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
              <h4 className="text-lg font-medium">Enhanced Video Streaming</h4>
              <p className="mt-2">
                Experience seamless video integration with enhanced streaming capabilities, providing a better and more
                uninterrupted learning experience.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-md">
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
              <h4 className="text-lg font-medium">Advanced Quiz Generation</h4>
              <p className="mt-2">
                Take your knowledge testing to the next level with advanced quiz generation, providing more customization
                options for your quizzes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0">
        <img
          width="600"
          height="600"
          src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
          className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
          alt="New Features Illustration"
        />
      </div>
    </div>
  </div>
</section>











<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          130+ Handcoded Blocks
        </p>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Celebration helps you build beautiful website
        </h2>
      </div>

      <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
        <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Simply Copy & Paste</h3>
              <p className="mt-3 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>

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
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Easy to Customize</h3>
              <p className="mt-3 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>

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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <div className="ml-5">
              <h3 className="text-xl font-semibold text-black">Made with TailwindCSS</h3>
              <p className="mt-3 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <img
            className="w-full rounded-lg shadow-xl"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>






  <section>  
  <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">   
    <div className="flex flex-col ">    
      <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">     
        <div>      
          <h1>Simplified markup</h1>      
          <p className="text-balance">       
            See the code for this page to see how you can use Astro to simplify your markup.      
          </p>     
        </div>    
      </div> 
      
      {/* Starts component */}
      <div className="mt-6 border-t pt-12">     
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">      
          <div> 
            <span className="text-gray-600 uppercase text-xs font-medium"> Because why not </span>       
            <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance"> Innovative financial solutions for every situation </p>       
            <p className="text-sm mt-4 text-gray-700 text-balance"> Discover a variety of tools, services, and expert guidance tailored to your unique financial needs. </p>       
            
            <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">        
              <div className="inline-flex items-center gap-2 text-xs text-gray-700"> 
                <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-360" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">          
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>          
                  <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>          
                  <path d="M9 13l3 3l-3 3"></path>         
                </svg> 
                <span className="text-gray-950 font-medium text-sm"> Clear data visibility </span> 
              </div>        
              <div className="inline-flex items-center gap-2 text-xs text-gray-700"> 
                <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-antenna-bars-3" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">          
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>          
                  <path d="M6 18l0 -3"></path>          
                  <path d="M10 18l0 -6"></path>          
                  <path d="M14 18l0 .01"></path>          
                  <path d="M18 18l0 .01"></path>         
                </svg> 
                <span className="text-gray-950 font-medium text-sm"> Reduced external factors </span> 
              </div>        
              <div className="inline-flex items-center gap-2 text-xs text-gray-700"> 
                <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-load-balancer" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">          
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>          
                  <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>          
                  <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>          
                  <path d="M12 16v3"></path>          
                  <path d="M12 10v-7"></path>          
                  <path d="M9 6l3 -3l3 3"></path>         
                </svg> 
                <span className="text-gray-950 font-medium text-sm"> enhanced stability </span> 
              </div>        
              <div className="inline-flex items-center gap-2 text-xs text-gray-700"> 
                <svg className="icon icon-tabler text-gray-700 size-4 icon-tabler-brand-speedtest" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">          
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>          
                  <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>          
                  <path d="M16 9l-4 4"></path>         
                </svg> 
                <span className="text-gray-950 font-medium text-sm"> accelerated times </span> 
              </div>       
            </div>      
          </div>      
          <div className="h-full md:order-first"> 
            <img src="https://i.pinimg.com/564x/59/41/a0/5941a02c048f6226031a0487451c2651.jpg" alt="#_" className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"/> 
          </div>     
        </div>    
        
        {/* Add more content as needed */}
        
      </div>  
    </div>  
  </div> 
</section>



  
            </div>
         
            </div>
            
     
    )
}

export default Services