import Image from 'next/image'
import LoaderImage from '../../assets/images/LoaderImage.gif'
import waiting from '../../assets/images/waiting.svg'
export default function BrickLoader() {
    return (
        <div className="loaderAnimation d-flex justify-content-center align-items-center w-100 conatiner flex-column">
            <Image src={waiting} alt='image not found ' width={300} height={300}></Image>
            <p className='heading'>GK Associate</p>
            <Image src={LoaderImage} alt='image not found ' width={100} height={100}></Image>

        </div>
    )
}