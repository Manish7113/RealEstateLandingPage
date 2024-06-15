import Image from "next/image";
import HomeOne from '../../assets/images/HomeOne.png'

export default function HomeBanner({data}) {
    
    return (
        <div className="m-3 rounded gradientLeftToRight  row p-0 d-flex justify-content-between  ">
                <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                    <div className="container mt-4 d-flex flex-column align-items-start justify-content-center h-100">
                        {data?.subHeading && <p className="subHeading"> {data?.subHeading} </p>}
                        {data?.MainHeading && <h1 className="top-heading">{data?.MainHeading}</h1>}
                       {data?.description && <p className="heading-description">{data?.description}</p>}
                        <div class="bg-white rounded-pill d-flex p-1 ps-3 justify-content-evenly w-100" >
                            {data?.placeHolder &&  <input type="email" class="border-0 w-100 m-2 inputField" placeholder={data?.placeHolder} aria-label="Recipient's username" aria-describedby="basic-addon2" />}
                           {data?.buttonHeading && <button className="w-50 rounded-pill border-0 bg-black text-white">
                                {data?.buttonHeading}
                            </button>}
                        </div>

                    </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="w-100 d-flex justify-content-end align-items-end">
                        <Image src={HomeOne} alt="Not found" width={600} height={600} className="img-fluid align-self-end" ></Image>

                    </div>
                </div>

            </div>
      

    )
}