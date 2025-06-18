import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hello from "./components/Hello";

const SVG = () => {
    return (
        <img src="/images/Green.png" alt="svg2" className="" />

    );
}


const SVG2 = () => {
    return (
        <img src="/images/Blue.png" alt="svg2" className="" />

    );
}

const SVG3 = () => {
    return (
        <img src="/images/Green2.png" alt="svg2" className="" />

    );
}


const SVG4 = () => {
    return (
        <img src="/images/Blue2.png" alt="svg2" className="" />

    );
}


const Home = () => {

    useEffect(() => {
        document.title = "home - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div className="font-firacode relative overflow-hidden">
            <Navbar />

            <div className="absolute -top-[40px] right-0 max-900:right-[0px]  z-30">
                <SVG />
            </div>

            <div className="absolute top-[80px] right-[0px]  z-30">
                <SVG2 />
            </div>


            <div className="absolute -top-[0px] left-0 max-900:right-[0px]  z-30">
                <SVG3 />
            </div>

            <div className="absolute top-[0px] -left-[50px]  z-30">
                <SVG4 />
            </div>



            <Hello />

            <Footer />

        </div>
    )
}

export default Home