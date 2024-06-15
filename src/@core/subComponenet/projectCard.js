import Image from "next/image";

export default function ProjectCard(props) {
    const { data } = props
  
    return (
        <div className=" m-3 productCard rounded-3 ">

            <Image className="product-img rounded-3 " src={data?.image} alt="Not found" width={100} height={100}></Image>
            <div className="p-3 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between gap-3">
                    <p className="cardHeading">
                      {data?.heading}
                    </p>
                    <p className=" rating">{data?.rating}</p>

                </div>
                <div >
                    <p className="card-descritption">{data?.description}</p>

                </div>
                <div className="d-flex justify-content-between align-items-end gap-3 flex-wrap">
                    <p className="price">${data?.price} <span className="text-black-50">{data?.available}</span></p>
                    <button className="border-0 bg-dark text-white rounded-pill px-4 py-2 ">
                        Book Now
                    </button>

                </div>

            </div>
        </div>


    )
}