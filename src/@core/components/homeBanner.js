import Image from "next/image";
import HomeOne from '../../assets/images/HomeOne.png'

export default function HomeBanner() {
    return (
        <div className="m-3 rounded gradientLeftToRight  row p-0 d-flex justify-content-between  ">
                <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                    <div className="container mt-4 d-flex flex-column align-items-start justify-content-center h-100">
                        <p className="subHeading"> Welcome To GK Association </p>
                        <h1 className="top-heading">Manage Your Assets</h1>
                        <p className="heading-description">(Your Name) - Your [City] Area Expert. Passionate about guiding clients to achieve their real estate goals.  Let's find your dream home!</p>
                        <div class="bg-white rounded-pill d-flex p-1 ps-3 justify-content-evenly w-100" >
                            <input type="email" class="border-0 w-100 m-2 " placeholder="Enter Your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <button className="w-50 rounded-pill border-0 bg-black text-white">
                                Get a Quote
                            </button>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="w-100 d-flex justify-content-end align-items-end">
                        <Image src={HomeOne} alt="Not found" width={600} height={600} className="img-fluid align-self-end" ></Image>

                    </div>
                </div>

            </div>
        // <div className="m-3 rounded gradientLeftToRight landingPageBanner  ">


            


        // </div>

    )
}