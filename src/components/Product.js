import React,{useState} from 'react'
import Image from 'next/image'
import StarsRating from 'react-star-rate'
import Currency from 'react-currency-formatter'
import { async } from 'regenerator-runtime'

const Product = ({id, title, price, description, category, image,rating,rate}) => {
    const [hasPrime]=useState(rating.rate>4);
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />
            <h4 className="my-3">{title}</h4>
            <div className="flex justify-start flex-shrink flex-nowrap">
            <StarsRating 
                value={rating.rate}
                disabled
            />
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency 
                    quantity={(price*rate.result.NGN).toFixed()}
                    currency="NGN"
                />
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day delivery</p>
                </div>
            )}
            <button className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product

