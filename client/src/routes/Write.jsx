import { useUser } from '@clerk/clerk-react';
import 'react-quill/dist/quill.snow.css' ;
import ReactQuill from 'react-quill-new';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Upload from "../components/Upload";


const Write = () => {
  const {isLoaded, isSignedIn} = useUser()
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost);
    },
    onSuccess: (res) => {
      toast.success("Đăng bài thành công");
      navigate(`/${res.data.slug}`);
    },
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);

    mutation.mutate(data);
  };

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }
  if(isLoaded && !isSignedIn) return <div>Đăng nhập tài khoản để viết bài.</div>
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-boild '>Tạo bài viết mới</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Thêm ảnh nền
          </button>
        </Upload>
        <input name='title' type="text" className="text-4xl font-semibold bg-transparent outline-none" placeholder='Tiêu đề bài viết'/>
        <div className="flex items-center gap-4">
          <label htmlFor="" className='text-sm'>Chọn phân loại:</label>
          <select name="category" id=""  className="p-2 rounded-xl bg-white shadow-md">
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

        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
            
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Đăng"}
        </button>
        {"Progress:" + progress}
      </form>
    </div>
  )
}

export default Write