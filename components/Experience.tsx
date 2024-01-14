import React from "react";

const Experience = () => {
    return (
        <section id="experience">
            <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
                EXPERIENCE
            </h1>
            <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
                EXPLORE NOW
            </p>
            <div className=" container mx-auto 2xl ">
                <div className="flex  flex-row justify-between pt-5">
                    <p className="text-gray-300 ">
                        <span className="font-semibold">STEYP /</span> Software
                        Engineer
                    </p>
                    <p className="text-gray-300">OCT 2022 - PRESENT, KOCHI</p>
                </div>
                <p className="text-gray-300 pt-5">
                    Currently, I am working on Full-Stack Developer ,{" "}
                    <span className="font-semibold cursor-pointer hover:-translate-y-1 text-green-300">
                        <a
                            href="https://steyp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            STEYP
                        </a>
                    </span>{" "}
                    is a is a Digital University for students to learn and
                    become Computer Engineers and Tech Scientists irrespective
                    of their age or educational background., As a React.js
                    developer with 1.2 year of experience, I have a strong
                    foundation in creating dynamic and responsive mobile and web
                    applications.
                    <br />
                    <br />
                    My expertise in React.js and Next.js has empowered me to
                    craft dynamic and responsive web applications. As a React.js
                    developer, I&apos;ve mastered the art of creating fast,
                    scalable and engaging web pages with a focus on delivering
                    exceptional user experiences. My proficiency extends to
                    component-based architecture and effective state management.
                    In the realm of Next.js, I&apos;ve honed my skills to
                    develop cutting-edge web applications with seamless
                    server-side rendering and optimized performance. This
                    includes creating efficient and intuitive user interfaces
                    that enhance the overall user journey. Moreover, my
                    experience as a React.js and Next.js developer has given me
                    a solid foundation in navigating the latest trends and
                    technologies in the ever-evolving field of web development.
                    I am passionate about leveraging these skills to build
                    innovative and cross-platform solutions that excel on both
                    the web and mobile platforms.
                </p>
                <div className="flex-col flex sm:flex-row ">
                    <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        React
                    </div>
                    <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Next JS
                    </div>
                    <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        JavaScript
                    </div>
                    <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Typescript
                    </div>
                    <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
                        Git
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
