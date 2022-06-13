import React from 'react'
import Logo from "../assests/images/logo.svg"

const Landing = () => {
  return (
    <>
        <header>
            <nav className='flex justify-between px-10 py-6'>
                <img  src={Logo} alt="logo" className='w-[70px] h-[70px]'/>
                <div>
                    <span className='font-medium text-3xl leading-[43px] mr-10'>Sign in</span>
                    <span className='font-medium text-3xl leading-[43px] '>Sign up</span>
                </div>
            </nav>
        </header>

        <section className='w-full flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[3.75rem] leading-[129.32px] text-center'>Bankless Card</h1>
            <p className='font-normal text-3xl leading-[43.11px]  max-w-[59.5rem]'>Bankless Card is an “affinity” payments platform designed to reward fiat spending with social and governance tokens from BanklessDAO, partner DAOs, and other Web3 ecosystems.</p>
            <button className='p-2 bg-[#D02128] h-[3.563rem] w-[21.75rem] mt-4'>Sign up to get started</button>
        </section>
    </>
  )
}

export default Landing