import React from 'react'
import { Link } from 'react-router'
import FeaturePost from '../components/FeaturePost'
import PostList from '../components/PostList'

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <span>Trang chủ</span>
        <span><i className="fa-solid fa-house-user"></i></span>
        <span className='text-blue-800'>Blogs</span>
      </div> 
      {/* Introduction */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className='text-gray-800 text-xl md:text-3xl lg:text-5xl font-bold'>
            “Đối với tôi, sống là Đức Ki-tô”. (Phil 1,21)
          </h1>
          <p className='mt-8 text-md md:text-xl'>
            Blog PX Nguyễn Văn Thượng
          </p>
        </div>
        <div className='text-2xl md:text-3xl lg:text-4xl'>
          <Link to='/write'>
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
        </div>
      </div>
      {/* Feature Post */}
      <FeaturePost />
      {/* Post List */}
      <div className="">
        <h1 className='my-8 text-2xl text-gray-800'>Bài viết gần đây</h1>
        <PostList />
      </div>
    </div>
  )
}

export default HomePage