import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Image from "./Image";
import { format as formatDate, parseISO } from "date-fns";
import { vi } from "date-fns/locale";
import { format as formatTimeAgo, register } from "timeago.js";
import viLocale from "timeago.js/lib/lang/vi";

// Đăng ký ngôn ngữ tiếng Việt cho timeago.js
register("vi", viLocale);

const PostListItem = ({ post }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryClick = (category) => {
    setSearchParams({ cat: category });
    navigate(`/posts?cat=${category}`);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <Link to={`/${post.slug}`} className="md:hidden xl:block xl:w-1/4">
          <Image src={post.img} className="rounded-2xl object-cover w-full h-48" />
        </Link>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-3/4">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex flex-col gap-2 text-gray-400 text-sm">
          <div className="">
            <span>Được viết bởi:</span>
            <span className="ml-3 text-blue-800">
              PX Nguyễn Văn Thượng
            </span>
            <span className="mr-3 ml-3">
              ({formatTimeAgo(post.createdAt, "vi")})
            </span>
            <span>
              {formatDate(parseISO(post.createdAt), "dd MMMM yyyy", {
                locale: vi,
              })}
            </span>
          </div>
          <div className="">
            <span className="mr-3">Thư Mục:</span>
            <span
              className="text-blue-800 cursor-pointer"
              onClick={() => handleCategoryClick(post.category)}
            >
              {post.category}
            </span>
          </div>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">
          Đọc chi tiết
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;