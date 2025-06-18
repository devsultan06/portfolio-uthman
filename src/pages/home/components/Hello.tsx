import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const words = ["UX Designer", "UI Enthusiast", "Product Thinker"];

const Hello = () => {
    const [showLine1, setShowLine1] = useState(false);
    const [showLine2, setShowLine2] = useState(false);
    const [showLine3, setShowLine3] = useState(false);

    const [isTyping, setIsTyping] = useState(true);
    const [index, setIndex] = useState(0);
    const [showWord, setShowWord] = useState(true);

    useEffect(() => {
        const timeout1 = setTimeout(() => setShowLine1(true), 500);
        const timeout2 = setTimeout(() => setShowLine2(true), 2300);
        const timeout3 = setTimeout(() => setShowLine3(true), 1800);



        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);

        };
    }, []);

    useEffect(() => {
        if (isTyping) {
            const typingDuration = words[0].length * 70 + 4000;
            const timer = setTimeout(() => setIsTyping(false), typingDuration);
            return () => clearTimeout(timer);
        } else {
            const interval = setTimeout(() => {
                setShowWord(false);
                setTimeout(() => {
                    setIndex((prev) => (prev + 1) % words.length);
                    setShowWord(true);
                }, 300); // duration of exit
            }, 3000); // duration before changing word

            return () => clearTimeout(interval);
        }
    }, [isTyping, showWord]);

    return (
        <div className="py-[144px] bg-[#04070D] mt-[94px] z-10 font-[450] w-full relative flex flex-col mx-auto justify-center items-center">
            <div>
                <img
                    src="/images/vector1.png"
                    alt="svg1"
                    className="absolute top-[-95px] left-1/2 transform -translate-x-1/2 z-0"
                />
            </div>

            <div className="relative z-30 flex flex-col mx-auto w-full justify-center items-center mt-[0px]">
                <img src="/images/img.svg" alt="svg2" />

                {showLine1 && (
                    <div className="flex h-[70px] mt-[40px] items-center gap-3">
                        {isTyping ? (
                            <h1 className="text-[55px] font-[700] leading-[70px] text-white">
                                <span className="text-[#0FB492]">
                                    <Typewriter words={[words[0]]} typeSpeed={70} cursor={false} />
                                </span>
                            </h1>
                        ) : (
                            <div className="relative h-[70px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {showWord && (
                                        <motion.h1
                                            key={index}
                                            initial={{ y: 70, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -70, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-[55px] font-[700] leading-[70px] text-[#0FB492]"
                                        >
                                            {words[index]}
                                        </motion.h1>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        {showLine3 && (
                            <h1 className="text-[55px] font-[700] leading-[70px] text-white">
                                <Typewriter
                                    words={[" Who Codes"]}
                                    typeSpeed={70}
                                    cursor={false}
                                />
                            </h1>
                        )}


                    </div>
                )}

                {showLine2 && (
                    <h1 className="text-white font-[700] text-[55px] max-600:text-[40px] mb-[4px]">
                        <Typewriter words={[" in Flutter"]} typeSpeed={70} cursor cursorStyle="_" />
                    </h1>
                )}

                <p className="about w-[1000px] font-[100] text-[16px] leading-[24px] mt-4">
                    I'm Uthman, a UX designer with over 3 years experience crafting user-centered digital
                    experiences. With a background in Flutter development, I approach design with both empathy
                    and technical awareness, ensuring that every interface is not only beautiful but
                    functional. I’m driven by a desire to solve real problems through intuitive design and am
                    always exploring new ways to elevate user experience.
                </p>

                <div className="mt-[31px] flex gap-[12px]">
                    <Link to="/contact" className="text-[16px] font-[500] leading-[20px] button transition-all">
                        Hire me
                    </Link>

                    <Link to="/contact" className="text-[16px] font-[500] leading-[20px] button2 transition-all">
                        Download CV
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hello;
