import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/arshopSlice';
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    setProduct(router.query);
    setLoading(false);
  }, []);

  const _id = Number(product._id);
  
  return (
    <div className='w-full bg-white'>
      <div className='max-w-contentContainer mx-auto flex items-center py-4'>
        <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
          <img 
          src={product.image} 
          alt="productImg" 
          className='w-[80%] transform-origin-top-left cursor-move duration-500' 
          />
        </div>
        <div className='w-1/3 h-full flex flex-col gap-2'>
          <div className='px-2 py-4 border border-gray-400 rounded-md flex flex-col
          gap-6'>
            <div className='flex flex-col gap-1'>
              <p className='text-xl font-semibold text-black'>
                {product.title}
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
            <div>
              <p className='font-semibold text-2xl text-green-700'>
                Price: ${product.price}
                </p>
            </div>
            <div>
              <button onClick={() =>
              dispatch(
                addToCart({
                  _id: product._id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      arimage: product.arimage,
                      category: product.category,
                      quantity: 1,
                })
              ) && toast.success(`${product.title.substring(0,20)} is added`)
              } 
              className='w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300'>
                Add to cart
                </button>
            </div>
            
              <p className='text-base text-zinc-500'>
                Use the app to scan the QR code to see the AR image of the product
              </p>
              <img 
              src={product.arimage} 
              alt="productARImg"
              className='w-[60%] transform-origin-top-left cursor-move duration-500' />
            </div>
          </div>
        </div>
      </div>
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
  )
}

export default ProductDetails;