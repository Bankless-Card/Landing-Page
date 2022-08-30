import React from "react";
import Logo from "../assests/images/logo.svg";
import left_card from "../assests/images/left_card.svg";
import bc_container from "../assests/images/bc_containter.PNG";
import bolt from "../assests/images/bolt.svg";

const Landing = () => {
  return (
    <main className="w-full">
      <header>
        <nav className="flex items-center justify-between px-10 py-6">
          <img
            src={Logo}
            alt="logo"
            className=" w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
          />
          <div className="">
            <a
              href="https://tally.so/r/wvGj9X?source=landingpage"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xl leading-[33px] md:text-xl md:leading-[43px] p-2 md:p-4 bg-[#D02128] rounded-[4px] hover:bg-white hover:text-[#011308] transition-all duration-300"
            >
              Sign up 
            </a>
          </div>
        </nav>
      </header>

      <section className="w-full flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] text-center">
          Bankless Card
        </h1>
      </section>

      <section className="mt-[1rem] gap-[1rem] flex flex-col md:flex-row justify-center px-[2rem] md:px-[4rem] pb-4">
        <div className="text-center flex flex-col items-center"> 
          <h2 className="mt-[2rem] font-bold text-[1.5rem] md:text-[3rem]  lg:text-[3.5]">
            The card for DAO contributors <br />
            by BanklessDAO
          </h2>
          <p className="font-normal text-2xl md:text-3xl leading-[33px] px-5 md:leading-[43.11px]  max-w-[59.5rem]"></p>
          <button className="p-2 bg-[#D02128] h-[3rem] w-[15rem] md:h-[3.563rem] md:w-[21.75rem] mt-12 rounded-[4px] hover:bg-white hover:text-[#011308] transition-all duration-300">
            <a
              href="https://tally.so/r/wvGj9X?source=landingpage"
              target="_blank"
              rel="noreferrer"
            >
              Sign up for early access
            </a>
          </button>
          <div className="relative m-auto  flex flex-col md:flex-row items-center justify-center">
          <img src={left_card} alt="bankless card" className="" />
        </div>
        </div>
       
      </section>

      <section className="mt-[1.5rem] gap-[10rem] flex flex-col md:flex-row justify-between px-[2rem] md:px-[4rem] ">
        <div className="relative m-auto  flex flex-col md:flex-row items-center justify-center w-full">
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px]  z-10 w-full"
          />
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px] absolute top-[6.5rem] hidden md:block md:left-[5.5rem] z-20"
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <img src={bolt} alt="bolt" />
            <h2 className="font-bold text-[1.5rem] md:text-[2.25rem] max-w-[499px]  ">
              Support your favourite DAOs
            </h2>
          </div>
          <p className="font-normal text-[26px] leading-[37.36px]  max-w-[595px] mt-10">
            A small percentage from every payment made with your card goes to
            your DAO's treasury in the form of stable coins, helping to fund
            their mission.
          </p>
        </div>
      </section>

      <section className="mt-[10rem] gap-[10rem] flex flex-col md:flex-row justify-between px-[2rem] md:px-[4rem]">
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <img src={bolt} alt="bolt" />
            <h2 className="font-bold text-[1.5rem] md:text-[2.25rem] max-w-[499px]  ">
              Earn DAO tokens, increase token price
            </h2>
          </div>
          <p className="font-normal text-[26px] leading-[37.36px]  max-w-[595px] mt-10">
            Every purchase on your card earns you cash back in the form of your
            DAO’s tokens. Since Bankless Card buys these tokens from a DEX, you
            increase your token price with every swipe.
          </p>
        </div>
        <div className="relative m-auto  flex flex-col md:flex-row items-center justify-center w-full">
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px]  z-10"
          />
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px] absolute top-[6.5rem] hidden md:block md:left-[5.5rem] z-20"
          />
        </div>
      </section>

      <section className="mt-[10rem] gap-[10rem] flex flex-col md:flex-row justify-between px-[2rem] md:px-[4rem] w-full">
        <div className="relative m-auto  flex flex-col md:flex-row items-center justify-center w-full">
          <img
            src={bc_container}
            alt="bankless card"
            className="rounded-[10px]  z-10"
          />
          <img
            src={bc_container}
            alt="bankless"
            className="rounded-[10px] absolute top-[6.5rem] hidden md:block md:left-[5.5rem] z-20 "
          />
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <img src={bolt} alt="bolt" />
            <h2 className="font-bold text-[1.5rem] md:text-[2.25rem] max-w-[499px]  ">
              Easily onboard new DAO contributors
            </h2>
          </div>
          <p className="font-normal text-[26px] leading-[37.36px]  max-w-[595px] mt-10">
            Bankless Card’s easy-to-use mobile app allows you to onboard your
            friends to your favourite DAO without worrying about wallets, DEX’s,
            or rug pulls.
          </p>
        </div>
      </section>

      <footer className="mt-[25rem] w-full">
        <div className="flex flex-col justify-center items-center gap-6  bg-[#4F4F4F]  h-[192px] max-w-full md:w-[85%] mx-auto rounded-tr-[50px] rounded-tl-[50px] px-4">
          <span className="font-normal text-sm leading-[17px] md:text-base md:leading-[25.74px] ">
            Big ups to the BanklessDAO community for crafting the infrastructure
            and economy to make Bankless card possible.
          </span>
          <div className="flex justify-center items-center gap-5">
            <a
              href="https://discord.gg/vACf5hRk5D"
              target="_blank"
              rel="noreferrer"
              className="text-[#18B4C7] hover:underline"
            >
              Discord
            </a>
            <a
              href="https://github.com/Bankless-Card"
              target="_blank"
              rel="noreferrer"
              className="text-[#18B4C7] hover:underline"
            >
              Github
            </a>
            <a
              href="https://twitter.com/BanklessCard"
              target="_blank"
              rel="noreferrer"
              className="text-[#18B4C7]  hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Landing;
