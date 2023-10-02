import React from 'react'
import { useState } from 'react'

const FAQ = () => {
    const [plus,setPlus] = useState(false)
    const [plus2,setPlus2] = useState(false)
    const [plus3,setPlus3] = useState(false)
    const handlePlus = () =>{
        setPlus(!plus)
    }
    const handlePlus2 = () =>{
        setPlus2(!plus2)
    }
    const handlePlus3 = () =>{
        setPlus3(!plus3)
    }
  return (
<div id='FAQ' className='p-5 py-20 md:flex md:justify-between md:px-10  w-full '>
        <div className='px-4 md:flex-4 w-full'>
            <h1 className='text-3xl'>
              FAQ  
            </h1>
            <p className='py-2'>Answers to some questions you might have.</p>
        </div>
        <div className='flex flex-col gap-5 md:flex-3 w-full'>
            <div className='bg-secondary rounded-md p-2 px-4 '>
                <div className=' flex  justify-between items-center'>
                    <h1 className='text-lg font-[500]'>When will registration start?</h1>
                    <button className={plus ? 'text-3xl rotate-[45deg]': 'text-3xl ' } onClick={handlePlus}>+</button>
                </div>
                {plus ? <div className='p-3'>
                    <h1>🏳️ Registration is open now for 2023/2024 members.</h1>
                </div>: <></>}
            </div>
            <div className='bg-secondary rounded-md p-2 px-4 '>
                <div className=' flex  justify-between items-center'>
                    <h1 className='text-lg font-[500]'>where can I register?</h1>
                    <button className={plus2 ? 'text-3xl rotate-[45deg]': 'text-3xl ' } onClick={handlePlus2}>+</button>
                </div>
                {plus2 ? <div className='p-3'>
                    <h1>🏳️ You can register using this link <code className='text-primary'><a target="_blank" href="https://t.me/it_club_ssc_bot">registration Link</a></code></h1>
                </div>: <></>}
            </div>
            <div className='bg-secondary rounded-md p-2 px-4 '>
                <div className=' flex  justify-between items-center'>
                    <h1 className='text-lg font-[500]'>How can i contact the club leaders?</h1>
                    <button className={plus3 ? 'text-3xl rotate-[45deg]': 'text-3xl ' } onClick={handlePlus3}>+</button>
                </div>
                {plus3 ? <div className='p-3'>
                    <h1>🏳️ You can reach out to us using our email <code className='text-accent'><a href="">itclubscc@gmail.com </a></code></h1>
                </div>: <></>}
            </div>
        </div>
    </div>
  )
}

export default FAQ