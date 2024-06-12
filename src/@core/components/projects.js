import ProjectCard from "../subComponenet/projectCard"
import HomeOne from '../../assets/images/HomeOne.png'
import Image from "next/image"


export default function Projects(){
    return (
        <div className="d-flex flex-column projects">
            <div className="container d-flex flex-column ">
            <p className="secondarySubHeading p-0 m-0">Three steps. Three minutes</p>
            <p className="component-heading">Everything should be this easy.</p>

            </div>
            <div className="d-flex  ">
                <ProjectCard valueImage={{HomeOne}}></ProjectCard>
                <ProjectCard valueImage={{HomeOne}}></ProjectCard>
                <ProjectCard valueImage={{HomeOne}}></ProjectCard>
                {/* <Image src={HomeOne} alt='not found'></Image> */}

            </div>

        </div>
    )
}