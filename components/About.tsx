import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
            style={{ transform: "scale(0.9" }}
        >
            <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
                <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
                <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
                    EXPLORE NOW
                </p>
                <p className="text-gray-300 text-center ">
                    I am a passionate software engineer dedicated to the world
                    of React.js and Next.js. My expertise lies in crafting
                    innovative solutions through the seamless integration of
                    logic and creativity. With hands-on experience, I have
                    contributed to projects at {""}
                    <span className="font-semibold cursor-pointer hover:-translate-y-1 text-green-300">
                        <a href="https://steyp.com">Steyp</a>
                    </span>{" "}
                    , refining my skills and staying at the forefront of web
                    development.
                    <br />
                    <br />
                    With a fervor for crafting elegant solutions, I navigate the
                    ever-evolving landscape of software development. My journey
                    involves translating concepts into code, creating seamless
                    user experiences, and constantly pushing the boundaries of
                    what&#39;s possible
                </p>
            </div>
        </section>
    );
};

export default About;
