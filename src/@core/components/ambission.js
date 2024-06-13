import Image from "next/image";
import officeMetting from '../../assets/images/OfficeMetting.png'

export default function Ambission() {
    return <div className="container">
        {/* upper  */}
        <div className="d-flex flex-column justify-content-center align-items-center" >
            <p className="secondarySubHeading p-0 m-0">Who we are?</p>
            <p className="component-heading w-75 text-center">We are a global, boutique real estate brokerge</p>

        </div>
        {/* lower */}
        <div className=" row d-flex justify-content-center">
            <div className="col-12 col-xl-6 col-lg-6 col-md-12  col-sm-12  col-xs-12">
               <div className="container">
               <p className="block-heading mt-2">
                  In the United States, The transfer acquistion of real estate
                </p>
                <p className="card-descritption" >Charming 2-bedroom bungalow seeks new owner! Bright living space with hardwood floors, updated kitchen with stainless steel appliances. Relax on the private patio overlooking a peaceful garden. Perfect for first-time buyers or those seeking a cozy retreat. Move-in ready! </p>

                <div className="d-flex gap-4">
                    <button className="bg-dark text-white border-0 rounded-pill p-1 px-3">
                        Contact Us 
                    </button>
                    <button className="bg-light border border-dark  border-0 rounded-pill p-1 px-3">
                        Read more
                    </button>
                </div>
                <div className="d-flex justify-content-between mt-5 ">
                   <div className="d-flex flex-column">
                   <h1 className="m-0 p-0">50+</h1>
                   <h6 className="card-descritption">Employees</h6>
                   </div>
                   <div className="d-flex flex-column">
                   <h1 className="m-0 p-0">10+</h1>
                   <h6 className="card-descritption">Countries</h6>
                   </div>
                   <div className="d-flex flex-column">
                   <h1 className="m-0 p-0">21+</h1>
                   <h6 className="card-descritption">Offices</h6>
                   </div>
                </div>

               </div>

            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                <Image src={officeMetting} alt="not found" className="img-fluid "></Image>

            </div>

        </div>
    </div>

}