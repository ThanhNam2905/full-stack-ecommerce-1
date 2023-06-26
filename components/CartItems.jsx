import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { RiDeleteBinLine } from "react-icons/ri";
import { removeCartItem, updateCartItem } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const CartItems = ({ data, idItemCart }) => {

    const product = data?.attributes;

    const dispatch = useDispatch();

    // Handler onChange value for select
    const handlerUpdateCartItem = (e, key) => {
        let payload = {
            key, 
            value: key === "quantity" ? parseInt(e.target.value): e.target.value,
            id: idItemCart
        };
        dispatch(updateCartItem(payload))
    };
    const notify = () => {
        toast.success('Remove item successfully', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    return (
        <div className='w-full flex py-5 gap-3 md:gap-5 border-b'>
            <div className='aspect-square shrink-0 w-[70px] md:w-[120px]'>
                <Image
                    src={product.thumbnailProduct.data.attributes.url}
                    alt={product.thumbnailProduct.data.attributes.name}
                    width={120}
                    height={120}
                />
            </div>
            <div className='w-full flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Product Name */}
                    <Link href={`/product/${product.slug}`}>
                        <span className='text-lg md:text-[22px] font-semibold hover:underline text-black/[0.9]'>
                            {product.nameProduct}
                        </span>
                    </Link>
                    {/* Product Price */}
                    <div className='text-sm md:text-base text-black/[0.5] font-semibold hidden md:flex md:items-center'>
                        {new Intl.NumberFormat('en-IN', { 
                                currencySign: 'accounting',            
                            }).format(data.totalPriceCartItem)
                        }.00
                        <BsCurrencyDollar size={15}/>
                    </div>
                </div>
                <div className='text-sm md:text-[15px] font-medium mt-0 md:mt-1.5 text-black/[0.5]'>
                    {product.subTitle}
                </div>
                <div className='flex items-center text-sm md:text-[15px] font-medium mt-0 md:mt-1 text-black/[0.5]'>
                    <span>Price:</span>
                    <div className='flex items-center ml-1.5 text-black/[0.9] font-semibold'>
                        {new Intl.NumberFormat('en-IN', { 
                                currencySign: 'accounting',            
                            }).format(product.priceProduct)
                        }.00
                        <BsCurrencyDollar size={15}/>
                    </div>
                </div>
                {/* Product Price */}
                <div className='text-sm md:text-base text-black/[0.5] font-semibold flex items-center md:hidden'>
                    {new Intl.NumberFormat('en-IN', {
                            currencySign: 'accounting',
                        })
                        .format(data.totalPriceCartItem)
                    }.00
                    <BsCurrencyDollar size={15}/>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-2 text-black/[0.5] text-sm md:text-base'>
                            <div className='font-semibold'>Size:</div>
                            <select 
                                id="select-sizes" 
                                className='transition-all text-black/[0.8] font-bold ease-linear duration-300 hover:text-black'
                                onChange={(e) => handlerUpdateCartItem(e, "selectedSize")}
                            >
                                { product?.sizes.data.map((x, index) => (
                                        <option 
                                            key={index}
                                            value={x.size}
                                            disabled={!x.enabled ? true : false}
                                            selected={x.size === data.selectedSize}
                                        >
                                            {x.size}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='flex items-center gap-2 text-black/[0.5] text-sm md:text-base'>
                            <div className='font-semibold'>Quantity:</div>
                            <select
                                className='transition-all text-black/[0.8] font-bold ease-linear duration-300 hover:text-black'
                                onChange={(e) => handlerUpdateCartItem(e, "quantity")}
                            >
                                { Array.from({ length: 15 }, (_, i) => i + 1).map((qty, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={qty}
                                                selected={qty === data.quantity} 
                                            >
                                                {qty}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <RiDeleteBinLine 
                        title='Remove Item' 
                        className='text-[16px] md:text-[20px] cursor-pointer text-black/[0.6] transition-all ease-in duration-200 hover:text-red-500'
                        onClick={() => {
                            console.log("idItemCart ===>", idItemCart);
                            dispatch(removeCartItem({id: idItemCart}));
                            notify();
                        }}/>
                </div>
            </div>
        </div>
    )
}

export default CartItems