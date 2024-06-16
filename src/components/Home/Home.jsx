import React from 'react'
import "../Home/Home.css"
import { TypeAnimation } from 'react-type-animation'
import Row1 from './Icon1.json'
import Row2 from './Icon2.json'

function Home() {
  return (
    <>
      <div className="bg-black h-screen w-full sm:overflow-hidden mt-0 -z-10 absolute top-0 overscroll-y-auto">
        <div className="grid sm:grid-cols-12 w-full h-fit place-content-center outer gap-20 sm:gap-0 body overflow-hidden sm:mt-32 mt-28 ">
          <div className="sm:col-span-9 flex flex-col justify-start items-center">
            <div className="sm:mt-36 mt-14 lg:mt-16">
              <TypeAnimation
                sequence={[

                  'Track',
                  1000,
                  'Trace',
                  1000,
                  'Navigate',
                  1000
                ]}
                wrapper="span"
                speed={1}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
                className="text-[#fca311] tracking-wide font-black md:text-[5rem] lg:text-[6rem] mt-0 text-[3rem]"
              />
            </div>

            <div className="inline-block h-fit">
              <h1 className="text-[#e5e5e5] tracking-wide font-black md:text-[5rem] lg:text-[6rem] text-[3rem]">Crypto</h1>
            </div>

            <div className="inline-block h-fit max-w-lg">
              <p className="text-gray-600 sm:text-lg text-center sm:mt-5 p-10 sm:p-0">Discover the power of live data and in-depth analytics with CryptoVoyage. Keep your finger on the pulse of the crypto market and make informed decisions.</p>
            </div>

            <button className="border-2 sm:mt-14 md:p-3 md:px-4 rounded-full border-solid border-[#fca311] text-[#e5e5e5] font-extrabold md:block p-2 hover:bg-[#fca311] hover:text-[#14213d] hover:transition-all hover:duration-[0.3s]"><span className="text-xs md:text-sm p-2">Get Started</span></button>



          </div>


          <div className="flex flex-col sm:grid sm:grid-cols-2 wrapper lg:gap-10 sm:gap-6 w-fit sm:col-span-3 gap-5 mb-14 overflow-hidden">
            <div className="marquee flex sm:flex-col gap-5">
              <div className="marquee-group flex sm:flex-col gap-5 justify-center items-center">
                {
                  Row1 && Row1.map((img) => {
                    return (
                      <div className="lg:w-24 sm:w-20 2xl:w-46 w-12">
                        <img className="lg:w-24 sm:w-20 2xl:w-46 image-group" src={img.image} />

                      </div>
                    )
                  })
                }
              </div>

              <div className="marquee-group flex sm:flex-col flex-row gap-5 justify-center items-center">
                {
                  Row1 && Row1.map((img) => {
                    return (
                      <div className="lg:w-24 sm:w-20 2xl:w-46 w-12">
                        <img className="lg:w-24 sm:w-20 2xl:w-46 image-group" src={img.image} />

                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div className="marquee flex sm:flex-col gap-5">
              <div className="marquee-group2 flex sm:flex-col gap-5 justify-center items-center">
                {
                  Row2 && Row2.map((img) => {
                    return (
                      <div className="lg:w-24 sm:w-20 2xl:w-46 w-12">
                        <img className="lg:w-24 sm:w-20 2xl:w-46 image-group" src={img.image} />

                      </div>
                    )
                  })
                }
              </div>
              <div className="marquee-group2 flex sm:flex-col gap-5 justify-center items-center">
                {
                  Row2 && Row2.map((img) => {
                    return (
                      <div className="lg:w-24 sm:w-20 2xl:w-46 w-12">
                        <img className="lg:w-24 sm:w-20 2xl:w-46 image-group" src={img.image} />

                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home