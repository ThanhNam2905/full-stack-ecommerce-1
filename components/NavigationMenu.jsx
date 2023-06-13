import React from 'react'
import Link from 'next/link';
import { BsChevronDown  } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: '/' },
    { id: 2, name: "About", url: '/about' },
    { id: 1, name: "Category", subMenu: true },
    { id: 1, name: "Contact", url: '/contact' },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 1, name: "Football shoes", doc_count: 107 }
]


const NavigationMenu = ({ showCategoryMenu, setShowCategoryMenu }) => {
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
                                                { subMenuData.map((submenu, index) => {
                                                        return (
                                                            <Link 
                                                                href={"/"} 
                                                                key={index}
                                                                onClick={() => setShowCategoryMenu(false)}>
                                                                <li className='h-12 flex items-center justify-between px-3 cursor-pointer rounded-md transition-all ease-linear duration-300 hover:bg-black/[0.1]'>
                                                                    <span>{submenu.name}</span>
                                                                    <span className='text-gray-400 text-[14px]'>({submenu.doc_count})</span>
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