import React from 'react'

const About = () => {
    return (
        <div id='about' className='text-text p-5'>
            <h1 className='text-center text-accent text-3xl uppercase p-10'>About Us</h1>
            <div className='grid md:grid-cols-3' >
                
            <div className='relative flex flex-col justify-center items-center after:content-["🚩"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border border-accent text-justify p-5 '>
                    <p>
                    Our club fosters a community of innovative and passionate high school students who are dedicated to advancing their skills in Python programming, data structures, and algorithms. We value creativity, curiosity, and a passion for learning, and strive to create an inclusive and supportive environment where all members can grow and succeed. We believe in the importance of giving back to the community and using our skills to make a positive impact in the world..
                    </p>
                </div>
            <div className='relative flex flex-col justify-center items-center after:content-["🚩"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border border-accent text-justify p-5 '>
                    <p>
                    Our mission is to provide a supportive and engaging community for high school students to learn, grow, and develop their skills in Python programming, data structures, and algorithms. We organize a variety of events and activities to help our members succeed, including coding challenges, workshops, and mentorship programs. Whether you're a beginner or an advanced student, we have something for everyone.
                    </p>
                </div>
            <div className='relative flex flex-col justify-center items-center after:content-["🚩"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border border-accent text-justify p-5 '>
                    <p>
                    Our activities include weekly meetings, workshops, hackathons, guest speakers, and project showcases. Hackathons are 24-hour coding competitions where teams work together to solve complex problems. We also invite guest speakers to come and talk to us about their experiences in the tech industry and the skills and knowledge that are most important for success in that field. In addition to our technical activities, we also have a strong focus on community service and giving back to our school and community. 
                    </p>
                </div>
            <div className='relative flex flex-col justify-center items-center after:content-["🚩"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border border-accent text-justify p-5 '>
                    <p>
                    We organize our own project showcases where members can showcase their work and get feedback from their peers. These project showcases are a great way for our members to apply their skills in a real-world context and to learn from each other. We believe that giving back to our community is an important part of being a responsible member of society and we strive to make a positive impact in any way we can.

                    </p>
                </div>
            <div className='relative flex flex-col justify-center items-center after:content-["🚩"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border border-accent text-justify p-5 '>
                    <p>
                    Our club has a long and proud history of success. We are proud of our accomplishments and look forward to continuing to make a difference in the lives of our members and the world at large. We believe that our club is more than just a group of students who share a passion for IT. We are a community of like-minded individuals who are dedicated to learning, growing, and making a positive impact on the world.
                    </p>
                </div>
            <div className='relative flex flex-col justify-center items-center after:content-["🚩"] after:text-xl after:top-0  after:absolute after:-left-7  m-5 rounded-md border border-accent text-justify p-5 '>
                    <p>
                   We have a lot more to show so stay tuned!
                    </p>
                </div>
            </div>
       
        <div className='flex items-center flex-col py-10'>
            <h1 className='text-center text-4xl font-bold md:pb-12'>We Teach</h1>
            <div className='grid grid-cols-2 w-full lg:w-[50%]'>
                <p className='lg:text-xl  text-center bg-slate-700 m-2 rounded-sm py-5 hover:bg-slate-500 hover:text-[#0f200e] duration-200'>Phyton</p>
                <p className='lg:text-xl  text-center bg-slate-700 m-2 rounded-sm py-5 hover:bg-slate-500 hover:text-[#0f200e] duration-200'>Data Structure</p>
                <p className='lg:text-xl  text-center bg-slate-700 m-2 rounded-sm py-5 hover:bg-slate-500 hover:text-[#0f200e] duration-200'>Algoritms</p>
                <p className='lg:text-xl  text-center bg-slate-700 m-2 rounded-sm py-5 hover:bg-slate-500 hover:text-[#0f200e] duration-200'>More..</p>
            </div>
        </div>
    </div>
  )
}

export default About