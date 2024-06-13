import Image from "next/image";
import HomeOne from '../../assets/images/HomeOne.png'
import HomeThree from '../../assets/images/HomeThree.jpg'
import ghar1 from '../../assets/images/ghar1.jpg'

export default function ProjectCard(props){
    const {valueImage, heading} = props
    console.log(valueImage , 'images')
    return (
        <div className=" m-3 productCard rounded-3 ">
        
              <Image className="product-img rounded-3 " src={ghar1} alt="Not mmmmmmmmmmmmm" ></Image>
              <div className="p-3 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between gap-3">
                <p className="cardHeading"> 
                    {heading}
                </p>
                <p className=" rating"> 4.83</p>

                </div>
                <div >
                <p className="card-descritption">(Your Name) - Your [City] Area Expert. Passionate about guiding clients to achieve their real estate goals.  Let's find your dream home!</p>

                </div>
                <div className="d-flex justify-content-between align-items-end gap-3 flex-wrap">
                <p className="price"> $886 <span className="text-black-50">Night</span></p>
                <button className="border-0 bg-dark text-white rounded-pill px-4 py-2 ">
                    Book Now
                </button>

                </div>

              </div>
        </div>
      
        
    )
}