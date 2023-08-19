'use client'
import {useState} from "react"
import {ToastContainer} from 'react-toastify'
import SidemenuForDesktop from "./side-menu/side-menu-desktop/SidemenuForDesktop"
import CreateAssesmentDialogBox from "./components/create-assesment-dialogbox/CreateAssesmentDialog"

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div className='flex items-center gap-x-0 md:gap-x-2'>
        <div className='w-1.5/12 h-screen px-4 py-4 bg-white text-center text-xs font-medium hidden md:block' style={{color: '#1C4980'}}>
          <SidemenuForDesktop setOpen={setOpen} />
        </div>

        <div className='w-screen md:w-11/12 h-screen scroll-smooth overflow-y-auto bg-white p-4 rounded-2xl'>
          {open && <CreateAssesmentDialogBox/>}
        </div>
      </div>
    </>
  )
}
