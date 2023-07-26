"use client"
import React, { useState } from 'react'
import Button from './Button'
import Submit from './Submit'
import { DM_Sans } from "next/font/google";
const dm = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
type Props = {}
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

export default function FormSection({}: Props) {
    const [Name, setName] = useState<string>("")
    const [Email, setEmail] = useState<string>("")
    const [Phone, setPhone] = useState<string>("")
    const [description, setdescription] = useState<string>("")
    const [status, setStatus] = useState<string>("default");
  const notify = (Message: string) => toast.success(Message);
  const sendEmail = (d?: any): void => {
    setStatus("Pending");
    const data ={
        name:Name,
        phone:Phone,
        description:description, 
        email:Email
    }
    setTimeout(() => {
        // setStatus("success");
        //     notify("Thank you!");
        //     setTimeout(() => {
        //       setStatus("default");
        //     }, 3500);
      emailjs
        .send("service_bmut4ji", "template_3h4n2uw", data, "A984OhkhePAb0eGFY")
        .then(
          (result) => {
            setStatus("success");
            notify("Thank you!");
            setTimeout(() => {
              setStatus("default");
            }, 3500);
          },
          (error) => {
            setStatus("error");
            notify("Something unexpected happened");
            setTimeout(() => {
              setStatus("default");
            }, 5000);
          }
        );
    }, 1500);
  };
  return (
    <div className='w-full flex flex-col items-center gap-y-14 justify-center gap-x-14 text-slate-900'>
       <div className='w-full mt-16 flex items-center justify-center'>
            <div className="z-50 my-16 md:w-3/4 max-w-[1200px] gap-y-4 text-slate-800 md:font-medium font-bold text-5xl flex flex-col items-start text-start jusitfy-start">
              <div
                className={`tracking-tight flex flex-col items-start justify-start ${dm.className}`}
              >
                <h1>Contact us</h1>
              </div>
            </div>
       </div>
        {/* Left */}
        <div className='mx-[3vw] border-[1px] border-stone-300/30  bg-white shadow-md rounded-3xl flex max-w-xl flex-col gap-y-8 items-start justify-start py-8 px-6 md:px-16 md:py-16'>
            <h2 className='text-xl font-medium md:text-2xl lg:text-3xl'>Get your complimentary agency quote today</h2>

            {/* form */}
            <form onSubmit={(e)=>{e.preventDefault(); sendEmail(e); e.currentTarget.reset()}} className='flex flex-col gap-y-4 items-start justify-start w-full'>
                <Button setter={setName} label={'Name'} placeholder={'your name'} type={'text'}/>
                <Button setter={setEmail} label={'Email'} placeholder={'your email'} type={'text'}/>
                <Button setter={setPhone} label={'Phone'} placeholder={'your phone'} type={'tel'}/>

                <div className='relative flex flex-col items-start justify-start gap-y-2 w-full'>
                    <label htmlFor={"description"} className='font-medium text-sm bg-white'>How can we help you?</label>
                    <textarea required onChange={(e)=>setdescription(e.currentTarget.value)} id={"description"} placeholder={"How can we help you?"} className='button'/>
                </div>

                <Submit status={status}/>
            </form>
        </div>

        <div className='flex flex-col items-start gap-y-8 mt-6 mx-[3vw]'>
        <div className=" transition-all duration-200 hover:shadow-md shadow-none cursor-pointer z-50 max-w-[1200px] gap-y-4 text-slate-800 md:font-medium font-bold text-4xl flex flex-col items-start text-start jusitfy-start w-full bg-slate-100 py-8 px-6 md:px-16 md:py-16 rounded-3xl" >
          <div
            className={` tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Phone</h1>
          </div>
          <div className="text-gray-600/80 text-sm font-normal max-w-[420px]">
          Our customer care is open from Mon-Fri,
10:00 am to 6:00 pm
          </div>
          <div className="text-indigo-600/80 text-2xl font-bold max-w-[420px]">
            (000) 111 222 333
          </div>
        </div>
        <div className=" transition-all duration-200 hover:shadow-md shadow-none cursor-pointer z-50 max-w-[1200px] gap-y-4 text-slate-800 md:font-medium font-bold text-4xl flex flex-col items-start text-start jusitfy-start w-full bg-slate-100 py-8 px-6 md:px-16 md:py-16 rounded-3xl" >
          <div
            className={` tracking-tight flex flex-col items-start justify-start ${dm.className}`}
          >
            <h1>Email</h1>
          </div>
          <div className="text-gray-600/80 text-sm font-normal max-w-[420px]">
          Our support team Will get back to in 48-h
during standard business hours.
          </div>
          <div className="text-indigo-600/80 text-2xl font-bold max-w-[420px]">
            info@example.com
          </div>
        </div>
        </div>
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  )
}