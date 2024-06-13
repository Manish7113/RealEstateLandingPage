import HomeBanner from '../../@core/components/homeBanner.js'
import AboutUs from '../../@core/components/aboutUs.js'
import Projects from '../../@core/components/projects.js'
import Features from '@/@core/components/features.js'
import Ambission from '@/@core/components/ambission.js'
import Blogs from '@/@core/components/blogs.js'

export default function LandingPage() {
    return (<>

        <HomeBanner></HomeBanner>
        <AboutUs></AboutUs>
        <div className='my-5'></div>
        <Projects></Projects>
        <div className='my-5'></div>
        <Features></Features>
        <div className='my-5'></div>
        <Ambission></Ambission>
        <div className='my-5'></div>
        <Blogs></Blogs>
        <div className='my-5'></div>
        <HomeBanner></HomeBanner>


    </>)
}