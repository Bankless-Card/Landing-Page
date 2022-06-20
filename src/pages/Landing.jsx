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
        <nav className="flex item-center justify-between px-10 py-6">
          <img src={Logo} alt="logo" className="w-[70px] h-[70px]" />
          <div>
            {/* <span className="font-medium text-3xl leading-[43px] mr-10">
              Sign in
            </span> */}
            <span className="font-medium text-3xl leading-[43px] ">
              Sign up
            </span>
          </div>
        </nav>
      </header>

      <section className="w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-[3.75rem] leading-[129.32px] text-center">
          Bankless Card
        </h1>
        <p className="font-normal text-3xl leading-[43.11px]  max-w-[59.5rem]">
          Bankless Card is an “affinity” payments platform designed to reward
          fiat spending with social and governance tokens from BanklessDAO,
          partner DAOs, and other Web3 ecosystems.
        </p>
        <button className="p-2 bg-[#D02128] h-[3.563rem] w-[21.75rem] mt-4">
          Sign up to get started
        </button>
      </section>

      <section className="mt-10 flex flex-col  md:flex-row">
        <img src={left_card} alt="bankless card" className="" />
        <img src={right_card} alt="bankless card" className="" />
      </section>

      <section className="flex flex-col justify-center items-center mt-[7rem]">
        <h1 className="font-bold text-[64px] leading-[91.96px]">
          Bankless Card Mobile App
        </h1>
        <img
          src={iphone}
          alt="iphone"
          className="mt-[4rem] w-[33.402rem] h-[47.291rem]"
        />
        <p className="font-normal text-[30px] leading-[43.11px]  max-w-[59.5rem] mt-[6rem]">
          Bankless Card is an “affinity” payments platform designed to reward
          fiat spending with social and governance tokens from BanklessDAO,
          partner DAOs, and other Web3 ecosystems.
        </p>
      </section>

      <section className="mt-[10rem] flex flex-col md:flex-row justify-between px-[4rem]">
        <div className="relative">
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px]  z-10"
          />
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px] absolute top-[8.5rem] left-[5.5rem] z-20"
          />
        </div>
        <div>
          <div className="flex justify-center items-center gap-8">
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
        <div className="flex flex-col justify-center items-center gap-6  bg-[#4F4F4F]  h-[192px] w-[85%] m-auto rounded-tr-[50px] rounded-tl-[50px]">
          <span className="font-normal text-base leading-[25.74px] ">
            Big ups to the BanklessDAO community for crafting the infrastructure
            and economy to make Bankless card possible.
          </span>
          <div className="flex justify-center items-center gap-5">
              <a href="https://google.com" target="_blank" rel="noreferrer" className="text-[#18B4C7]">Discord</a>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="text-[#18B4C7]">Github</a>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="text-[#18B4C7]">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
