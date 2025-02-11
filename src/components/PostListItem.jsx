import React from 'react'
import Image from './Image'
import { Link } from 'react-router'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className="md:hidden xl:block">
            <Image src='postImg.jpeg' className='rounded-2xl object-cover'></Image>
        </div>
        {/* details */}
        <div className="flex flex-col gap-2  text-sm">
            <Link to='/' className='text-4xl font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Link>
            <div className="flex items-center text-gray-400 text-sm gap-4">
                <span>Written by</span>
                <Link className='text-blue-800'>PX Nguyen Van Thuong</Link>
                <span>on</span>
                <Link className='text-blue-800'>Web design</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec purus tempor lacinia. Nullam nec purus tempor lacinia.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec purus tempor lacinia. Nullam nec purus tempor lacinia.

            </p>
            <Link className='text-blue-800 underline text-sm'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem