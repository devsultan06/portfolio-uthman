

const SVG3 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="692" height="1023" viewBox="0 0 692 1023" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_1394_3985)">
                <path d="M-11.344 814.872L202.57 763.485L291.939 698.822L265.376 528.31L89.9532 508.744L91.5612 387L-110.707 332.745L-241 364.044L-158.563 630.15L-31.2904 663.34L-11.344 814.872Z" fill="#615FFF" />
            </g>
            <defs>
                <filter id="filter0_f_1394_3985" x="-641" y="-67.2554" width="1332.94" height="1282.13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_1394_3985" />
                </filter>
            </defs>
        </svg>

    );
}


const SVG4 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="659" height="1023" viewBox="0 0 659 1023" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_1394_3987)">
                <path d="M899.47 355.667L915.985 575.047L881.76 679.911L711.296 706.783L639.004 545.755L523.589 584.528L410.06 408.554L400.001 274.932L678.568 272.013L749.1 383.032L899.47 355.667Z" fill="#00D5BE" />
            </g>
            <defs>
                <filter id="filter0_f_1394_3987" x="0" y="-127.987" width="1315.98" height="1234.77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_1394_3987" />
                </filter>
            </defs>
        </svg>

    );
}

const experiences = [
    {
        role: "UX Designer",
        company: "InspireEdge",
        date: "Apr 2025 – Present",
        description:
            "Crafted a high-converting website for an AI-powered software that helps brands recover abandoned carts using ethical intelligence and predictive analytics. Currently designing the product interface with a focus on seamless AI-driven workflows and user trust.",
        logo: "/images/google.svg",
    },
    {
        role: "UI/UX Designer",
        company: "Sporta AI",
        date: "2025 – Present",
        description:
            "Collaborating with a team to build a sports analytics platform offering real-time insights and predictive training tools for athletes and coaches. Responsible for creating an intuitive design system that merges complex data with a visual-first interface.",
        logo: "/images/sporta.svg",
    },
    {
        role: "UX Designer",
        company: "Conova",
        date: "2025 – Present",
        description:
            "Designing a smart workspace booking app with geofenced check-in/check-out systems. The interface supports real-time seat and room management for teams, helping businesses optimize space usage while enhancing employee experience.",
        logo: "/images/conova.svg",
    },
    {
        role: "Product Designer",
        company: "Muallim",
        date: "Jan 2025 – Mar 2025",
        description:
            "Led design for a global platform connecting Arabic tutors to learners based on timezone and native language. Despite existing competition, Muallim stood out for its clean, functional design and 10x better user experience, earning praise for its simplicity and accessibility.",
        logo: "/images/mualimlogo.svg",
    },
    {
        role: "Lead Designer",
        company: "ITCC, University of Ibadan",
        date: "2024 – Present",
        description:
            "Designed and continue to optimize the admin interface used by thousands of students for managing industrial training. The system significantly streamlined coordination and tracking processes, improving usability and institutional efficiency.",
        logo: "/images/itcc.png",
    },
];

const Experiences = () => {
    return (
        <div className="py-20 text-center relative bg-[#0A0A0A] text-white">
            {/* Background SVGs */}
            <div className="absolute -top-[0px] left-0 max-900:right-[0px] z-50">
                <SVG3 />
            </div>
            <div className="absolute top-[0px] right-[0px] z-50">
                <SVG4 />
            </div>

            <div className="relative z-10 mx-auto mb-12">
                <h1 className="text-[32px] font-medium leading-[48px]">Experiences</h1>
                <p className="text-[16px] font-normal leading-[24px] text-gray-300">
                    Project and case studies that proves my expertise
                </p>
            </div>

            <div className="relative z-10 max-w-[854px] mx-auto space-y-[60px] text-left px-6">
                {experiences.map((exp, idx) => (
                    <div>
                        <div key={idx} className="flex justify-between items-start">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className=""
                                />
                                <div>
                                    <h3 className="text-[22px] font-[700]">
                                        {exp.role} – <span className="text-white">{exp.company}</span>
                                    </h3>
                                </div>
                            </div>


                            <div>
                                <p className="text-[14.494px] font-[400] leading-[150%] text-[#8491A0]">{exp.date}</p>

                            </div>


                        </div>

                        <p className="mt-4 text-[14px] font-[400] leading-[22px] desc ">{exp.description}</p>
                    </div>

                ))}
            </div>
        </div>
    );
};



export default Experiences