import { useUser } from '@clerk/clerk-react';
import 'react-quill/dist/quill.snow.css' ;
import ReactQuill from 'react-quill-new';

const Write = () => {
  const {isLoaded, isSignedIn} = useUser()
  if(!isLoaded) return <div>Loading...</div>
  if(isLoaded && !isSignedIn) return <div>Đăng nhập tài khoaản để viết bài.</div>
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-boild '>Tạo bài viết mới</h1>
      <form action="" className="flex flex-col gap-6 flex-1 mb-6">
        <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Thêm ảnh nền</button>
        <input type="text" className="text-4xl font-semibold bg-transparent outline-none" placeholder='Tiêu đề bài viết'/>
        <div className="flex items-center gap-4">
          <label htmlFor="" className='text-sm'>Chọn phân loại:</label>
          <select name="cat" id=""  className="p-2 rounded-xl bg-white shadow-md">
            <option value="tam-ly-hoc">Tâm lý học</option>
            <option value="suy-niem-loi-chua">Suy niệm lời Chúa</option>
            <option value="goc-nha-dao">Góc nhà đạo</option>
            <option value="hoi-nhap-van-hoa">Hội nhập văn hóa</option>
            <option value="ngon-ngu-va-van-chuong">Ngôn ngữ và văn chương</option>
            <option value="doc-truyen">Đọc truyện</option>
            <option value="tin-tuc-giao-hoi">Tin tức giáo hội</option>
            <option value="thu-vien">Thư viện</option>
            <option value="but-ky-triet-hoc">Bút ký triết học</option>
            <option value="chuyen-phiem">Chuyện phiếm</option>
            <option value="thuoc-va-suc-khoe">Thuốc và Sức khỏe</option>
          </select>
        </div>
        <textarea  className="p-4 rounded-xl bg-white shadow-md" name="desc" id="" placeholder='Tóm tắt bài viết'></textarea>
        <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            // value={value}
            // onChange={setValue}
            // readOnly={0 < progress && progress < 100}
          />
        <button className='bg-blue-800 text-white font-medium rounded-xl  p-2 w-36'>Đăng</button>
      </form>
    </div>
  )
}

export default Write