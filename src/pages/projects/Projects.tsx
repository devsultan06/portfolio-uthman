import { useEffect } from "react"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProjectsPanel from "./components/ProjectsPanel";

const Projects = () => {

    useEffect(() => {
        document.title = "projects - devsultan06";

        return () => {
            document.title = "Portfolio";
        }

    }, []);
    return (
        <div className="font-firacode">
            <Navbar />

            <div className="h-[663px] max-900:h-[700px] flex max-900:flex-col">

                <div className="flex-[3] max-900:p-[20px] p-[64px] overflow-y-auto custom-scrollbar2 bg-slate900  overflow-hidden relative">
                    <ProjectsPanel

                    />

                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Projects