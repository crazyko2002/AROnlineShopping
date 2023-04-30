import Image from "next/image";
import {logo} from "../public/assets/images/index";
import {FcSearch} from "react-icons/fc"
import {BsCardList} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
import {BiCartAlt} from "react-icons/bi"
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { addUser, removeUser } from "../redux/arshopSlice";

const Navbar = () => {
    const {data: session} = useSession();
    const dispatch = useDispatch()
    console.log(session);
    const productData = useSelector((state: any) =>state.arshop.productData);
    const userInfo = useSelector((state: any) => state.arshop.userInfo);
    useEffect(() => {
        if (session) {
            dispatch(
                addUser({
                    name: session.user?.name,
                    email: session.user?.email,
                    image: session.user?.image,
                })
            );
        } else {
            dispatch(removeUser());
        }
    }, [session, dispatch]);

    return (
        <div className="w-full bg-blue text-white sticky top-0 z-50"> 
            <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between
             gap-2">
                {/* ---------------------------------------------------*/}
                {/* ================== Logo Start here ================*/}
                <Link href = "/">
                    <div className="navBarHover" >
                        <Image src = {logo} className="w-44" alt = "logo" />
                    </div>
                </Link>
                
                {/* ================== Logo End here ==================*/}
                {/* ================== Departments Start here =========*/}
                <div className="navBarHover">
                    <div className="w-4 grid grid-cols-2 gap-[2px]">
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                        <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
                    </div>
                    <p className="text-base font-semibold">Departments</p>
                </div>
                {/* ================== Departments End here ============*/}
                {/* ================== Services Start here =============*/}
                <div>
                    <div className="navBarHover">
                        <p className="text-base font-semibold">Services</p>
                    </div>
                </div>
                {/* ================== Services End here ===============*/}
                {/* ================== SearchBox Start here ============*/}
                <div className="h-10 flex flex-1 relative">
                    <input 
                        className="h-full w-full rounded-full px-4 text-black text-base outline-none
                        border-[1px] border-transparent focus-visible:border-black duration-200"
                        type="text" 
                        placeholder="Search your favourite furniture"
                    />
                    <span className="absolute w-8 h-8 rounded-full flex items-center justify-center
                    top-1 right-1 bg-yellow text-black text-xl"> 
                        <FcSearch />
                    </span>
                </div>
                {/* ================== SearchBox End here ==============*/}
                {/* ================== Accounts Start here ==============*/}
                {userInfo ? (
                    <div onClick={()=>signOut()} className="navBarHover">

                    <div>
                        <p className="text-xs">Sign Out</p>

                    </div>
                </div>
                ) : (
                    <div onClick={()=>signIn()} className="navBarHover">
                    <AiOutlineUser className="text-lg" />
                    <div>
                        <p className="text-xs">Hello, Sign In</p>
                        <h2 className="text-base font-semiboldv -mt-1">Account</h2>
                    </div>
                </div>
                )}
                {/* ================== Accounts End here ==============*/}
                {/* ================== MyItems Start here =============*/}
                <div className="navBarHover">
                    <BsCardList />
                    <div>
                        <p className="text-base font-semibold">Your orders</p>
                    </div>
                </div>
                {/* ================== MyItems End here ================*/}
                {/* ================== Cart Start here =================*/}
                <Link href="/cart">
                    <div className="flex justify-center items-center gap-2 h-12 px-5
                    rounded-full bg-transparent hover:bg-hoverBg duration-300 relative cursor-pointer">
                        <BiCartAlt className="text-2xl"/> 
                        <p>Cart</p>
                        <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-12
                        rounded-full flex items-center justify-center font-bodyFont text-xs">
                            {productData.length > 0 ? productData.length : 0}
                        </span>
                    </div>
                </Link>
            
                {/* ================== Cart End here ===================*/}
                
                
            </div>
    </div>
    );
};

export default Navbar;