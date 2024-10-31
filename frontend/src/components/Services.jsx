import { useEffect, useState } from 'react'

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

                <div className="w-full border-gray-300 bg-gradient-to-b from-gray-200 to-transparent border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
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

                <div className="w-full border-b md:w-1/2 border-gray-300 bg-gradient-to-b from-gray-200 to-transparent md:border-r lg:w-1/3 lg:border-r-0 p-8">
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

                <div className="w-full border-b md:w-1/2 border-gray-300 bg-gradient-to-b from-gray-200 to-transparent md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
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

            </div>
            </div>
     
    )
}

export default Services