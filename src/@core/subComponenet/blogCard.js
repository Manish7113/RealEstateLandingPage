import Image from "next/image";
import HomeOne from '../../assets/images/HomeOne.png'
import HomeThree from '../../assets/images/HomeSix.jpg'
import { Icon } from "@iconify/react";

export default function BlogCard(props) {
  
    const {data} = props;
  
    return (
        <div className=" m-3 productCard rounded-3 ">
            <Image className="product-img rounded-3 " src={data?.image} alt="Not ofund" width={100} height={100}></Image>
            <div className="p-3 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between gap-3">
                   {(data?.heading || data?.date )&&  <p className="card-descritption"> {data?.heading} {data.date ? <> • {data?.date} </> : null}</p>}
                    {data?.timing && <p className="text-muted p-nine-rem d-flex justify-content-center align-items-center gap-1"> <Icon icon="lets-icons:time-light" />{data?.timing}</p>}

                </div>
                <div >
                    {data?.mainHeading && <p className="cardHeading">{data?.mainHeading}</p>}

                </div>
                <div className="d-flex justify-content-between align-items-end gap-3 flex-wrap">
                  {data?.by && <p className="card-descritption"> by - {data?.by}</p>}
                   {data?.readMore && <button className="border-0 bg-dark text-white rounded-pill px-4 py-1 ">
                        Read More
                    </button>}

                </div>

            </div>
        </div>


    )
}