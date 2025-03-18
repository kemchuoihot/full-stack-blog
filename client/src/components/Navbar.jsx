import React, { useState } from 'react';
import { IKImage, IKVideo, IKContext, IKUpload } from 'imagekitio-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Search from './Search';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        tamLy: false,
        vanHoa: false,
        tinTuc: false,
        trietHoc: false,
        sucKhoe: false
    });

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const toggleDropdown = (key) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const handleCategoryChange = (category) => {
        setSearchParams({ cat: category });
        navigate(`/posts?cat=${category}`);
    };

    return (
        <div className='w-full h-16 md:h-20 flex justify-between items-center'>
            {/* Logo */}
            <Link to='/' className="items-center space-x-4 md:hidden">
                <h1 className='text-white text-lg font-medium text-center hidden md:block'>PX Nguyễn Văn Thượng</h1>
                <img className='w-10 md:w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfpfvwMtpIbQd8mfYcmXdORVsB0ICQOMkAw&s" alt="logo" />
            </Link>
            {/* Navigation */}
            {/* Mobile */}
            <div className='md:hidden'>
                <div className='cursor-pointer text-4xl z-20' onClick={() => setOpen(!open)} >
                    {open ? <i className="fa-solid fa-xmark mr-3"></i> : <i className="fa-solid fa-bars mr-3"></i>}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center bg-gray-800 bg-opacity-80 text-white absolute transition-all duration-300 ease-in-out z-10 ${open ? "-right-0" : "-right-[100%]"}`} >
                    <div className='space-y-5'>
                        <div className="relative group">
                            <span className="text-white cursor-pointer" onClick={() => toggleDropdown('tamLy')}>Tâm Lý & Tín Ngưỡng {dropdownOpen.tamLy ? <i className="fa-solid fa-chevron-up"> </i> :  <i className="fa-solid fa-chevron-down"></i> } </span>
                            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white space-y-5 pt-5 pl-5 ${dropdownOpen.tamLy ? 'max-h-screen ' : 'max-h-0'}`}>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("tam-ly-hoc")}>Tâm lý học</span>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("suy-niem-loi-chua")}>Suy Niệm Lời Chúa</span>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("goc-nha-dao")}>Góc Nhà Đạo</span>
                            </div>
                        </div>

                        {/* Văn Hoá & Ngôn Ngữ */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer" onClick={() => toggleDropdown('vanHoa')}>Văn Hoá & Ngôn Ngữ {dropdownOpen.vanHoa ? <i className="fa-solid fa-chevron-up"> </i> :  <i className="fa-solid fa-chevron-down"></i> }</span>
                            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white space-y-5 pt-5 pl-5 ${dropdownOpen.vanHoa ? 'max-h-screen' : 'max-h-0'}`}>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("hoi-nhap-van-hoa")}>Hội Nhập Văn Hoá</span>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("ngon-ngu-va-van-chuong")}>Ngôn Ngữ và Văn Chương</span>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("doc-truyen")}>Đọc Truyện</span>
                            </div>
                        </div>

                        {/* Tin Tức & Thông Tin */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer" onClick={() => toggleDropdown('tinTuc')}>Tin Tức & Thông Tin {dropdownOpen.tinTuc ? <i className="fa-solid fa-chevron-up"> </i> :  <i className="fa-solid fa-chevron-down"></i> }</span>
                            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white space-y-5 pt-5 pl-5 ${dropdownOpen.tinTuc ? 'max-h-screen' : 'max-h-0'}`}>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("tin-tuc-giao-hoi")}>Tin Tức Giáo Hội</span>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("thu-vien")}>Thư Viện</span>
                            </div>
                        </div>

                        {/* Triết Học & Văn Chương */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer" onClick={() => toggleDropdown('trietHoc')}>Triết Học & Văn Chương {dropdownOpen.trietHoc ? <i className="fa-solid fa-chevron-up"> </i> :  <i className="fa-solid fa-chevron-down"></i> }</span>
                            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white space-y-5 pt-5 pl-5 ${dropdownOpen.trietHoc ? 'max-h-screen' : 'max-h-0'}`}>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("but-ky-triet-hoc")}>Bút Ký Triết Học</span>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("chuyen-phiem")}>Chuyện Phiếm</span>
                            </div>
                        </div>

                        {/* Sức Khỏe */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer" onClick={() => toggleDropdown('sucKhoe')}>Sức Khỏe {dropdownOpen.sucKhoe ? <i className="fa-solid fa-chevron-up"> </i> :  <i className="fa-solid fa-chevron-down"></i> }</span>
                            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white space-y-5 pt-5 pl-5 ${dropdownOpen.sucKhoe ? 'max-h-screen' : 'max-h-0'}`}>
                                <span className="block cursor-pointer" onClick={() => handleCategoryChange("thuoc-va-suc-khoe")}>Thuốc & Sức Khoẻ</span>
                            </div>
                        </div>
                        <div className='text-white '>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex bg-[#bf3c4b] p-4 w-full relative -top-4">
                <div className="space-x-5 font-semibold flex justify-between w-full">
                    <div className="flex space-x-5 items-center"> 
                        <Link to='/' className="text-white hover:text-[#ffcdd3] transition-all duration-300"> 
                        <i className="fa-solid fa-house mr-2"></i>
                            Trang chủ</Link>
                        {/* Tâm Lý & Tín Ngưỡng */}
                        <div className="relative group ">
                            <span className="text-white cursor-pointer">Tâm Lý & Tín Ngưỡng <i className="fa-solid fa-chevron-down"></i></span>
                            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white text-[#bf3c4b]  space-y-2 shadow-lg ">
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("tam-ly-hoc")}>Tâm lý học</span>
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("suy-niem-loi-chua")}>Suy Niệm Lời Chúa</span>
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("goc-nha-dao")}>Góc Nhà Đạo</span>
                            </div>
                        </div>

                        {/* Văn Hoá & Ngôn Ngữ */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer">Văn Hoá & Ngôn Ngữ <i className="fa-solid fa-chevron-down"></i></span>
                            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white text-[#bf3c4b]  space-y-2 shadow-lg ">
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("hoi-nhap-van-hoa")}>Hội Nhập Văn Hoá</span>
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("ngon-ngu-va-van-chuong")}>Ngôn Ngữ và Văn Chương</span>
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("doc-truyen")}>Đọc Truyện</span>
                            </div>
                        </div>

                        {/* Tin Tức & Thông Tin */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer">Tin Tức & Thông Tin <i className="fa-solid fa-chevron-down"></i></span>
                            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-white text-[#bf3c4b]  space-y-2 shadow-lg ">
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("tin-tuc-giao-hoi")}>Tin Tức Giáo Hội</span>
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("thu-vien")}>Thư Viện</span>
                            </div>
                        </div>

                        {/* Triết Học & Văn Chương */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer">Triết Học & Văn Chương <i className="fa-solid fa-chevron-down"></i></span>
                            <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-white text-[#bf3c4b]  space-y-2 shadow-lg ">
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("but-ky-triet-hoc")}>Bút Ký Triết Học</span>
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("chuyen-phiem")}>Chuyện Phiếm</span>
                            </div>
                        </div>

                        {/* Sức Khỏe */}
                        <div className="relative group">
                            <span className="text-white cursor-pointer">Sức Khỏe <i className="fa-solid fa-chevron-down"></i></span>
                            <div className="w-40 absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-white text-[#bf3c4b]  space-y-2 shadow-lg ">
                                <span className="block cursor-pointer hover:bg-[#bf3c4b] hover:bg-opacity-50 transition-all p-4" onClick={() => handleCategoryChange("thuoc-va-suc-khoe")}>Thuốc & Sức Khoẻ</span>
                            </div>
                        </div>
                    </div>
                    <div className=' flex'>
                        <Search></Search>

                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;