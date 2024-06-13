import Image from "next/image";
import HomeOne from '../../assets/images/HomeOne.png'
import HomeThree from '../../assets/images/HomeSix.jpg'
import { Icon } from "@iconify/react";

export default function BlogCard(props) {
    // const {valueImage} = props
    // console.log(valueImage , 'images')
    return (
        <div className=" m-3 productCard rounded-3 ">
            <Image className="product-img rounded-3 " src={HomeThree} alt="Not ofund" ></Image>
            <div className="p-3 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between gap-3">
                    <p className="card-descritption"> Real estate News • Nov 20, 2023 </p>
                    <p className="text-muted p-nine-rem d-flex justify-content-center align-items-center gap-1"> <Icon icon="lets-icons:time-light" /> 4.83</p>

                </div>
                <div >
                    <p className="cardHeading">How well did property experts forecaset singapore's</p>

                </div>
                <div className="d-flex justify-content-between align-items-end gap-3 flex-wrap">
                    <p className="card-descritption"> by - Astin Bravo</p>
                    <button className="border-0 bg-dark text-white rounded-pill px-4 py-1 ">
                        Read More
                    </button>

                </div>

            </div>
        </div>


    )
}