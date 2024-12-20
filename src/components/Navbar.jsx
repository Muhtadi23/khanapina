import Image from 'next/image';
import React from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 border-1 border-b-2'>
            <div className='hidden md:flex'>

                <input className='rounded-full pl-3 p-1 ring-2' type="search" name="search" id="" placeholder='Search...' />
            </div>
            <div className='flex gap-4 items-center justify-end w-full'>
                <div className='flex items-center gap-4 text-xl'>
                    <MdOutlineMessage />
                    <MdOutlineNotificationsActive />
                </div>
                <div className='flex flex-col '>
                    <span className='text-xs'>Miran Muhtadi</span>
                    <span className='text-right text-green-500'>Admin</span>
                </div>
                <div>
                    <Image className='rounded-full' src='/ava.jpg' alt='ava' width={30} height={30}>
                    </Image>
                </div>
            </div>
        </div>
    );
};

export default Navbar;