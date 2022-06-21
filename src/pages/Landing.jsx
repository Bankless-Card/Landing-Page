import React from "react";
import Logo from "../assests/images/logo.svg";
import left_card from "../assests/images/left_card.svg";
import right_card from "../assests/images/right_card.svg";
import iphone from "../assests/images/iPhone.svg";
import bc_container from "../assests/images/bc_containter.PNG";
import bolt from "../assests/images/bolt.svg";

const Landing = () => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between px-10 py-6">
          <img src={Logo} alt="logo" className=" w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
          <div>
            {/* <span className="font-medium text-3xl leading-[43px] mr-10">
              Sign in
            </span> */}
            <a href="https://tally.so/r/wvGj9X" target="_blank" rel="noreferrer" className="font-medium text-2xl leading-[33px] md:text-3xl md:leading-[43px] border border-1 p-4">
              Sign up
            </a>
          </div>
        </nav>
      </header>

      <section className="w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-[3rem] leading-[90px] md:text-[3.75rem] md:leading-[129.32px] text-center">
          Bankless Card
        </h1>
        <p className="font-normal text-2xl md:text-3xl leading-[33px] px-5 md:leading-[43.11px]  max-w-[59.5rem]">
          Bankless Card is an “affinity” payments platform designed to reward
          fiat spending with social and governance tokens from BanklessDAO,
          partner DAOs, and other Web3 ecosystems.
        </p>
        <button className="p-2 bg-[#D02128] h-[3rem] w-[15rem] md:h-[3.563rem] md:w-[21.75rem] mt-12">
          <a href="https://tally.so/r/wvGj9X" target="_blank" rel="noreferrer">Sign up to get started</a>
        </button>
      </section>

      <section className="mt-10 flex flex-col  md:flex-row">
        <img src={left_card} alt="bankless card" className="" />
        <img src={right_card} alt="bankless card" className="" />
      </section>

      <section className="flex flex-col justify-center items-center mt-[7rem]">
        <h1 className="font-bold text-[3rem] leading-[70px] text-center  md:text-[64px] md:leading-[91.96px]">
          Bankless Card Mobile App
        </h1>
        <img
          src={iphone}
          alt="iphone"
          className="mt-[4rem] w-[20rem] h-[28rem] md:w-[30.402rem] md:h-[44.291rem]"
        />
        <p className="font-normal  text-2xl md:text-[30px] leading-[33px] px-5 md:leading-[43.11px]  max-w-[59.5rem] mt-[6rem]">
          Bankless Card is an “affinity” payments platform designed to reward
          fiat spending with social and governance tokens from BanklessDAO,
          partner DAOs, and other Web3 ecosystems.
        </p>
      </section>

      <section className="mt-[10rem] gap-[15rem] flex flex-col md:flex-row justify-between px-[2rem] md:px-[4rem]">
        <div className="relative m-auto">
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px]  z-10"
          />
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px] absolute top-[6.5rem] left-[5.5rem] z-20 hidden md:block"
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <img src={bolt} alt="bolt" />
            <h1 className="font-bold text-[56px] leading-[67.86px] max-w-[599px]  ">
              Earn crypto back on every purchase
            </h1>
          </div>
          <p className="font-normal text-[26px] leading-[37.36px]  max-w-[695px] mt-10">
            Bankless Card is an “affinity” payments platform designed to reward
            fiat spending with social and governance tokens from BanklessDAO,
            partner DAOs, and other Web3 ecosystems.
          </p>
        </div>
      </section>

      <footer className="mt-[25rem] w-full">
        <div className="flex flex-col justify-center items-center gap-6  bg-[#4F4F4F]  h-[192px] w-full md:w-[85%] m-auto rounded-tr-[50px] rounded-tl-[50px] px-4">
          <span className="font-normal text-sm leading-[17px] md:text-base md:leading-[25.74px] ">
            Big ups to the BanklessDAO community for crafting the infrastructure
            and economy to make Bankless card possible.
          </span>
          <div className="flex justify-center items-center gap-5">
              <a href="https://discord.gg/ZVhcxnA9" target="_blank" rel="noreferrer" className="text-[#18B4C7]">Discord</a>
              <a href="https://twitter.com/BanklessCard" target="_blank" rel="noreferrer" className="text-[#18B4C7]">Github</a>
              <a href="https://twitter.com/BanklessCard" target="_blank" rel="noreferrer" className="text-[#18B4C7]">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
