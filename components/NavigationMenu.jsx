import React from 'react'
import Link from 'next/link';
import { BsChevronDown  } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: '/' },
    { id: 2, name: "About", url: '/about' },
    { id: 1, name: "Category", subMenu: true },
    { id: 1, name: "Contact", url: '/contact' },
];

const NavigationMenu = ({ showCategoryMenu, setShowCategoryMenu, categories }) => {
    return (
        <nav className='hidden md:block'>
            <ul className='flex items-center gap-8 font-medium text-gray-950 capitalize'>
                {
                    data.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                { !!item?.subMenu ? (
                                    <li className='relative flex items-center gap-2 cursor-pointer'
                                        onMouseEnter={() => setShowCategoryMenu(true)}
                                        onMouseLeave={() => setShowCategoryMenu(false)}>
                                        <span>{item.name}</span>
                                        <BsChevronDown size={14} className={`mt-1 transition-all ease-linear duration-300 ${showCategoryMenu ? "transform rotate-180" : ""}`}/>

                                        { showCategoryMenu &&
                                            <ul className='bg-white absolute top-7 left-0 min-w-[250px] p-2 shadow-lg rounded-md'>
                                                { categories?.map(({attributes: category, id}) => {
                                                        return (
                                                            <Link 
                                                                href={`/category/${category.slug}`}
                                                                key={id}
                                                                onClick={() => setShowCategoryMenu(false)}>
                                                                <li className='h-12 flex items-center justify-between px-3 cursor-pointer rounded-md transition-all ease-linear duration-300 hover:bg-black/[0.1]'>
                                                                    <span>{category.nameCategory}</span>
                                                                    <span className='text-gray-400 text-[14px]'>({category.products.data.length})</span>
                                                                </li>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </li>
                                ) : (
                                    <li className='cursor-pointer'>
                                        <Link href={item.url}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )}
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavigationMenu