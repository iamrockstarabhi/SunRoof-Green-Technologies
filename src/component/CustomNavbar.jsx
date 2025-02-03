import React from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    return (
        <>
            <nav className='bg-gray-900 h-full w-full p-3 text-gray-200 text-lg'>

                <div className='flex justify-between mx-5'>

                    <div>

                        <Link to="/">
                            <b>SunRoof <span className='text-green-400'>Green</span> Technologies</b>
                        </Link>

                    </div>

                    <div>

                        <ul className='flex gap-5'>

                            <Link to="/" className='cursor-pointer'><li>Home</li></Link>
                            <li className='cursor-pointer'>Products</li>
                            <li className='cursor-pointer'>About Us</li>
                            <li className='cursor-pointer'>Contact</li>

                        </ul>

                    </div>

                </div>

            </nav>
        </>
    )
}

export default CustomNavbar