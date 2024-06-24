'use client'
import { useEffect, useState } from "react"


export default function SkeletonOne() {

    const [data, setData] = useState()
    useEffect(() => {
        setTimeout(() => {
            setData({
                name: 'Manish kumawat',
                profession: 'Web developer',
                mobile: '9617826422'
            })
        }, 2000)

    }, [])
    return <div className="d-flex justify-content-center align-items-center w-100">
        <div className="border rounded-2 p-5">
            {/* <p>{data?.name ? data?.name : <Skeleton/>} </p> */}
          

        </div>
    </div>
}