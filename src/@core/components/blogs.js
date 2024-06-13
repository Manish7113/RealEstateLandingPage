import ProjectCard from "../subComponenet/projectCard"
import HomeOne from '../../assets/images/HomeOne.png'
import Image from "next/image"
import BlogCard from "../subComponenet/blogCard"


export default function Blogs(){
    return (
        <div className="d-flex flex-column projects">
            <div className="container d-flex flex-column ">
            <p className="secondarySubHeading p-0 m-0">Ore trending blogs</p>
            <p className="component-heading">Read our latest blogs.</p>

            </div>
            <div className="d-flex  flex-wrap">
                <BlogCard valueImage={{HomeOne}}></BlogCard>
                <BlogCard valueImage={{HomeOne}}></BlogCard>
                <BlogCard valueImage={{HomeOne}}></BlogCard>
                {/* <Image src={HomeOne} alt='not found'></Image> */}

            </div>

        </div>
    )
}