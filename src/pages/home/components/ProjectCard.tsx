import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
}

const imagePositionMap: Record<string, string> = {
    "Sporta AI": "w-[238px]  absolute right-0 top-0 ",
    "AGROHIVE": "w-[248px] absolute right-0 bottom-0",
    "InspireCraft": "w-[294px] absolute right-0 bottom-0 ",
    "Muallim": "w-[294px] absolute right-0 bottom-0 ",
};


const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    buttonText,
    buttonLink,
    image,
}) => {
    const imageWrapperClass = imagePositionMap[title] || "w-full md:w-1/2";

    return (
        <div className=" card gap-6 pt-[40px] px-[40px] bg-[#04070D] z-40 pb-[28px] md:gap-10 mb-16 relative h-[361px]">
            {/* Text section */}
            <div className="w-full md:w-[65%]  text-left">
                <h3 className="text-[20px] font-[400] leading-[150%] mb-[95px] text-[#E4E4E6]">{title}</h3>
                <p className="text-[20px] font-[400] leading-[150%] mb-[26px] text-[#E4E4E6]">{description}</p>
                <Link
                    to="/contact"

                    className="text-[16px] font-[500] -tracking-[0.5px]  leading-[20px] view  transition-all"
                >
                    {buttonText}

                    <img src="/images/arrow1.svg" alt="arrow" className="inline-block w-[20px h-[20px]] ml-[1px]" />
                </Link>
            </div>
            {/* Image section */}
            <div className={imageWrapperClass}>
                <img src={image} alt={title} className="rounded-xl w-full" />
            </div>


        </div >
    );
};

export default ProjectCard;
