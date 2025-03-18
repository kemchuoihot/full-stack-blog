import { Link, useParams, useNavigate } from "react-router-dom";
import { vi } from "date-fns/locale";
import { format as formatDate, parseISO } from "date-fns";
import { format as formatTimeAgo, register } from "timeago.js";
import viLocale from "timeago.js/lib/lang/vi";

import Image from "../components/Image";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useUser } from "@clerk/clerk-react"; // Import useUser từ @clerk/clerk-react
import SideMenu from "../components/SideMenu";

// Đăng ký ngôn ngữ tiếng Việt cho timeago.js
register('vi', viLocale);

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const { isLoaded, isSignedIn } = useUser(); // Sử dụng useUser để kiểm tra trạng thái đăng nhập
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  const deleteMutation = useMutation({
    mutationFn: async (postId) => {
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${postId}`);
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleDelete = () => {
    if (data && data._id) {
      const confirmed = window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?");
      if (confirmed) {
        deleteMutation.mutate(data._id);
      }
    }
  };

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold" style={{ lineHeight: '1.5' }}>
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span className="mr-3 ml-3">
              ({formatTimeAgo(data.createdAt, "vi")})
            </span>
            <span>
              {formatDate(parseISO(data.createdAt), "dd MMMM yyyy", {
                locale: vi,
              })}
            </span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data.img && (
           <div className="hidden lg:block w-2/5">
            <Image src={data.img} className="float-end w-3/5 rounded-2xl" />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg lg:w-5/6 flex flex-col gap-6 text-justify" style={{ lineHeight: '1.8' }}>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image src='PXThuong.jpg' className='w-12  h-12 rounded-full object-cover'></Image>
              <Link className="font-medium">PX Nguyễn Văn Thượng</Link>
            </div>
            <p className="text-sm font-semibold text-gray-500">“Đối với tôi, sống là Đức Ki-tô”. (Phil 1,21)</p>
            <div className="flex gap-2">
              <Link>
                <Image src='facebook.svg'></Image>
              </Link>
              <Link>
                <Image src='instagram.svg'></Image>
              </Link>
          </div>
          </div>
          <SideMenu></SideMenu>
          {isLoaded && isSignedIn && ( // Hiển thị nút xóa bài viết khi người dùng đã đăng nhập
            <div className="mt-8">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white font-medium rounded-xl mt-4 p-2 w-36"
              >
                Delete Post
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;