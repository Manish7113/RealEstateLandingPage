import Image from 'next/image'
import HomeOne from '../../assets/images/HomeOne.png'
import { Icon } from '@iconify/react'
export default function Features(){
    return(
       <div className="container row p-0 m-0">
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
            <div className='gradientLeftToRight rounded-4'>

            <Image src={HomeOne} alt='Not found' className='img-fluid'></Image>
            </div>
            

        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5">
       <div className='d-flex flex-column align-items-start'>
       <p className="secondarySubHeading p-0 m-0">Our best services </p>
       <p className="component-heading text-center">And here's how ? We do insurance Better.</p>
       <div className='ms-3 d-flex flex-column gap-4'>
       <p className='d-flex gap-2 checkPoints m-0 p-0 align-items-center'><Icon icon="solar:check-circle-broken" className='checkIcons' /> Save an average of $250 per year</p>
       <p className='d-flex gap-2 checkPoints m-0 p-0 align-items-center'><Icon icon="solar:check-circle-broken" className='checkIcons' /> File a claim in 3 minutes</p>
       <p className='d-flex gap-2 checkPoints m-0 p-0 align-items-center'><Icon icon="solar:check-circle-broken" className='checkIcons' /> Easily manage your privacy online</p>
       <p className='d-flex gap-2 checkPoints m-0 p-0 align-items-center'><Icon icon="solar:check-circle-broken" className='checkIcons' /> Skip the faxing, long paperwork, and unnecessary phome calls</p>
       <p className='d-flex gap-2 checkPoints m-0 p-0 align-items-center'><Icon icon="solar:check-circle-broken" className='checkIcons' /> Get support from an American-based team</p>

       </div>
       </div>

        </div>

       </div>
    )
}