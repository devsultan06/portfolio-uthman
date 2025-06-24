import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Sporta AI",
        description:
            "A platform that helps athletes and coaches track performance, get smart insights, and improve faster through AI-powered analytics.",
        buttonText: "View case study",
        buttonLink: "#",
        image: "/images/sporta.png",
    },
    {
        title: "AGROHIVE",
        description:
            "AgroHive helps farmers connect, learn, and access affordable tools — making modern agriculture more collaborative and accessible.",
        buttonText: "View case study",
        buttonLink: "#",
        image: "/images/agrohive.png",
    },
    {
        title: "InspireCraft",
        description:
            "InspireEdge is an AI-powered software that helps businesses recover abandoned carts and boost sales with smart predictions.",
        buttonText: "View website",
        buttonLink: "#",
        image: "/images/inspire.png",
    },
    {
        title: "Muallim",
        description:
            "Muallim is a global platform that connects Arabic tutors with students, matching them by timezone and preferred language for seamless learning.",
        buttonText: "View website",
        buttonLink: "#",
        image: "/images/mualim.png",
    },
];


const SVG3 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="757" height="1147" viewBox="0 0 757 1147" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_1394_3642)">
                <path d="M-142.779 395.667L-159.293 615.046L-125.068 719.911L45.3956 746.783L117.687 585.755L233.102 624.528L346.632 448.553L356.69 314.931L78.1236 312.013L7.59111 423.031L-142.779 395.667Z" fill="#00D5BE" />
            </g>
            <defs>
                <filter id="filter0_f_1394_3642" x="-559.293" y="-87.9873" width="1315.98" height="1234.77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_1394_3642" />
                </filter>
            </defs>
        </svg>

    );
}


const SVG4 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="597" height="1183" viewBox="0 0 597 1183" fill="none">
            <g opacity="0.4" filter="url(#filter0_f_1394_3640)">
                <path d="M703.949 782.704L490.035 731.317L400.667 666.654L427.229 496.142L602.652 476.576L601.044 354.832L803.312 300.577L933.606 331.876L851.169 597.982L723.896 631.172L703.949 782.704Z" fill="#615FFF" />
            </g>
            <defs>
                <filter id="filter0_f_1394_3640" x="0.666016" y="-99.4233" width="1332.94" height="1282.13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_1394_3640" />
                </filter>
            </defs>
        </svg>

    );
}


const Featured = () => {
    return (
        <div className=" py-20  text-center relative">

            <div className="absolute -top-[0px] left-0 max-900:right-[0px]  z-50">
                <SVG3 />
            </div>

            <div className="absolute top-[0px] right-[0px]  z-50">
                <SVG4 />
            </div>
            <div className=" mx-auto mb-12">
                <h1 className="text-white text-[32px] font-[500] leading-[48px]">Featured Project</h1>
                <p className="featuredp text-[16px] font-[400] leading-[24px]">Project and case stuides that proves my expertise</p>
            </div>

            <div className="max-w-[854px] mx-auto space-y-[32px]">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Featured