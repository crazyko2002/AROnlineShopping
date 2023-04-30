import Image from 'next/image';
import React from 'react'
import { Item } from '../type'
import { GoPlus } from 'react-icons/go'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/arshopSlice';
import toast, { Toaster } from "react-hot-toast";

export const Products = ({productData}:any) => {
  const dispatch = useDispatch()
  return (
  <div className='py-6 px-4 grid grid-cols-4 gap-4'>
    {productData.map((item:Item)=>(
        <div key={item._id} className='border-[1px] border-gray-200 mb-6 group'>
          <div className='w-full h-[350px] overflow-hidden p-1'>
            <Image 
            className='w-full h-full object-contain scale-100 group-hover:scale-105 
            duration-300'
            width={300}
            height={250} 
            src={item.image} 
            alt="itemImage" 
            />
          </div>
          <div className='px-2 py-4 flex flex-col justify-center'>
            <div className='flex justify-between py-2'>
              <button 
                onClick = {() => 
                  dispatch(
                    addToCart({
                      _id: item._id,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                      arimage: item.arimage,
                      category: item.category,
                      quantity: 1,
                    })
                  ) && toast.success(`${item.title.substring(0,20)} is added`)
                }
              className='w-20 h-9 bg-blue text-white rounded-full flex gap-1
              items-center justify-center hover:bg-[#004f9a] duration-300'>
                <span>
                  <GoPlus />
                </span> 
                Add
                </button>
              <Link 
                href = {{
                  pathname: `product/${item._id}`,
                  query:{
                    _id: item._id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    arimage: item.arimage,
                    category: item.category,
                  },
                }}
                as={`product/${item._id}`}
                >
              <button className='w-24 h-9 bg-white border-[1px] border-black text-black 
              rounded-full flex gap-1 items-center justify-center hover:bg-black 
              hover:text-white duration-300'>
                <span>
                  <GoPlus />
                </span> 
                Details
              </button>
              </Link>
            </div>
            <div>
              <p className='font-titleFont text-lg text-green-700 font-semibold'>
                Price: ${item.price}
                </p>
            </div>
            <p className='text-lg font-semibold py-2'>
              {item.title.substring(0, 25)}
              </p>
            <div className='flex gap-2 items-center text-sm mt-2'>
              <div className='flex text-sm gap-1'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
                <p>5</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Toaster
      reverseOrder={false}
      position="top-center"
      toastOptions={{
        style: {
          borderRadius: "6px",
          background: "black",
          color: "white",
        },
      }}
      />
    </div>
    );
};
