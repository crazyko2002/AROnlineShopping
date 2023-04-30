import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { emptyCart } from "../public/assets/images";
import { StoreProduct } from '../type';
import Image from 'next/image';
import { HiMinusSmall } from 'react-icons/hi2'
import { MdOutlineAdd } from "react-icons/md"
import FormatePrice from './FormatePrice';
import { deleteItem, minusQuantity, plusQuantity, resetCart } from '../redux/arshopSlice';

const CartPage = () => {
    const dispatch = useDispatch()
    const productData = useSelector((state:any) => state.arshop.productData);
    const [totalAmt, setTotalAmt] = useState(0);
    useEffect(() => {
        let amt = 0;
        productData.map((item:StoreProduct)=>{
            amt += item.price * item.quantity;
            return
        });
        setTotalAmt(amt);
    },[productData]);
  return (
    <div className='w-full py-10'>
        <div className='w-full flex gap-10'>
            <div className='w-2/3 flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-black'>
                    Cart{""}
                    <span className='text-lightText font-normal'>
                        ({productData.length} items)
                    </span>
                </h1>
                {/*Cart Product*/}
                <div className='w-full p-5 border-[1px] border-zinc-400 rounded-md flex
                flex-col gap-4'>
                    <div>
                        {
                            productData.map((item:StoreProduct) =>(
                                <div
                                    key={item._id}
                                    className='flex item-center justify-between gap-4 border-b-[1px]
                                    border-b-zinc-200 pb-4'
                                    >
                                        <div className='w-3/4 flex items-center gap-10'>
                                            <Image
                                                className="w-32"
                                                width={500}
                                                height={500}
                                                src={item.image}
                                                alt="productImg"
                                            />
                                            <div>
                                                <h2 className='text-base text-zinc-900'>{item.title}</h2>
                                                <div className='mt-2 flex items-center gap-6'>
                                                <button onClick={() => dispatch(deleteItem(item._id))} className='text-sm underline underline-offset-2 
                                                decoration-[1px] text-zinc-600 hover:no-underline 
                                                hover:text-blue duration-300'>
                                                    Remove
                                                </button>
                                                <div className='w-28 h-9 border border-zinc-400 rounded-full
                                                text-base font-semibold text-black flex items-center
                                                justify-between px-3'>
                                                    <button 
                                                        onClick = {()=>
                                                            dispatch(
                                                                minusQuantity({
                                                                    _id: item._id,
                                                                    title: item.title,
                                                                    price: item.price,
                                                                    image: item.image,
                                                                    arimage: item.arimage,
                                                                    category: item.category,
                                                                    quantity: 1,
                                                                })
                                                    )} 
                                                    className='text-base w-5 h-5 text-zinc-600 hover:bg-black
                                                    hover:text-white rounded-full flex items-center
                                                    justify-center cursor-pointer duration-200'>
                                                        <HiMinusSmall />
                                                    </button >
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => dispatch(plusQuantity({
                                                        _id: item._id,
                                                        title: item.title,
                                                        price: item.price,
                                                        image: item.image,
                                                        arimage: item.arimage,
                                                        category: item.category,
                                                        quantity: 1,
                                                    }))} className='text-base w-5 h-5 text-zinc-600 hover:bg-black
                                                    hover:text-white rounded-full flex items-center
                                                    justify-center cursor-pointer duration-200'>
                                                        <MdOutlineAdd />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Button */}
                                            
                                            </div>
                                        </div>
                                        <div className='w-1/4 text-right flex flex-col items-end gap-1'>
                                            <p className='font-semibold text-xl text-black'>
                                                <FormatePrice amount={item.price * item.quantity} />
                                            </p>
                                        </div>
                                    </div>
                            ))}
                    </div>
                    <button onClick={()=>dispatch(resetCart())} className='w-44 bg-red-500 text-white h-10 rounded-full text-base
                    font-semibold hover:bg-red-800 duration-300'>
                        Clear Cart
                    </button>
                </div>
            </div>
            <div className='w-1/3 flex flex-col gap-5 p-4 mt-24 
            h-[500px] border-[1px] border-zinc-400 rounded-md'>
                <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                <button className='bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-md
                flex flex-col justify-center gap-4 items-center'>Continue your Payment</button>
                <p className='text-sm text-center text-red-500 mt-4 font-semibold'>
                    Please sign in for payment
                </p>
                <p className='text-sm text-center'>
                    To get a better shopping experience, {" "}
                    <span className='underline underline-offset-2 decoration-[1px]'>
                        sign in
                    </span>
                </p>
                </div>
                <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm flex justify-between'>
                            <p className='font-semibold'>
                                Subtotal <span>({productData.length} items)</span>
                            </p>
                            <p>
                                <FormatePrice amount={totalAmt} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm flex justify-between'>
                            <p>Shipping</p>
                            <p>$100</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Order Total</p>
                        <p className='text-zic-800 font-bold text-lg'>
                            <FormatePrice amount={totalAmt+100} />
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage