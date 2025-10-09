import React from 'react';
import googlePlay from '../assets/googleplay.png'
import appStore from '../assets/appstore.png'
import heroImage from '../assets/hero.png'

const Banner = () => {
    return (
            <div className="h-[1300px] bg-[#f5f5f5]">
      <div className="pt-15">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl text-center font-bold">
            We Build <br />
            <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] bg-clip-text text-transparent font-semibold">
              Productive
            </span>{" "}
            Apps{" "}
          </h1>
        </div>
        <p className="text-center text-[#7a8794] pt-5">
          At Appoza, We craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br></br>Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-5 p-10">
          <button
            onClick={() =>
              window.open("https://play.google.com/store/games?hl=en", "_blank")
            }
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl flex items-center gap-2">
            <img src={googlePlay} alt="Google Play" className="w-5 h-5" />
            Google Play
          </button>
          <button
            onClick={() =>
              window.open("https://www.apple.com/app-store/", "_blank")
            }
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl flex items-center gap-2">
            <img src={appStore} alt="App Store" className="w-5 h-5" />
            App Store
          </button>
        </div>
        <div className="flex justify-center">
          <img src={heroImage} alt="banner" className="w-[1000px] h-auto" />
        </div>

        <div className="w-full h-[610] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] justify-center p-20">
          <h2 className="text-white text-[42px] text-center font-semibold">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex justify-around pt-10 px-35">
            <div className="text-center">
              <p className="text-[#e4d9fb]">Total Downloads</p>
              <h1 className="text-white text-[64px] font-bold">29.6M</h1>
              <p className="text-[#e4d9fb]">21% more than last month</p>
            </div>
            <div className="text-center">
              <p className="text-[#e4d9fb]">Total Reviews</p>
              <h1 className="text-white text-[64px] font-bold">906K</h1>
              <p className="text-[#e4d9fb]">46% more than last month</p>
            </div>
            <div className="text-center">
              <p className="text-[#e4d9fb]">Active Apps</p>
              <h1 className="text-white text-[64px] font-bold">132+</h1>
              <p className="text-[#e4d9fb]">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;