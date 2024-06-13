'use client'
import HomeBanner from '../../@core/components/homeBanner.js'
import AboutUs from '../../@core/components/aboutUs.js'
import Projects from '../../@core/components/projects.js'
import Features from '@/@core/components/features.js'
import Ambission from '@/@core/components/ambission.js'
import Blogs from '@/@core/components/blogs.js'
import Footer from '@/@core/components/footer.js'
import BrickLoader from '@/@core/components/brickLoader.js'
import { useEffect, useState } from 'react'

export default function LandingPage() {

    const [isLoading, setIsloading] = useState(true)


    useEffect(() => {
        const activeTheme = localStorage.getItem('data-theme')
        document.querySelector('body').setAttribute('data-theme', activeTheme)
        setTimeout(setIsloading(false), 1000000);
        

    }, [])


    const handleTheme = (theme) =>{
        if(theme==='dark')
            {
                document.querySelector('body').setAttribute('data-theme', 'dark')
                localStorage.setItem('data-theme' , 'dark')
            }
        else if(theme==='primary')
            {
                document.querySelector('body').setAttribute('data-theme', 'primary')
                localStorage.setItem('data-theme' , 'primary')
            }
        else  {
            document.querySelector('body').setAttribute('data-theme', 'light')
            localStorage.setItem('data-theme' , 'light')
        }

    }
    return (<>
        {isLoading ? <BrickLoader></BrickLoader> : <div className=''>
            {/* <div>
            <div className='testingBox'>
                Hello ji

            </div>
            <button onClick={()=>{
                handleTheme('dark')
            }}>
                Dark
            </button>
            <button onClick={()=>{
                handleTheme('light')
            }}>
                light
            </button>
            <button onClick={()=>{
                handleTheme('primary')
            }}>
                Primary
            </button>
            


            </div> */}

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
            <div className='my-5'></div>
            <Footer></Footer>
        </div>}




    </>)
}