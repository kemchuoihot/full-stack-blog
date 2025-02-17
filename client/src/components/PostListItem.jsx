import { Link } from "react-router-dom";
import Image from "./Image";
import { format as formatDate, parseISO } from "date-fns";
import { vi } from "date-fns/locale";
import { format as formatTimeAgo, register } from "timeago.js";
import viLocale from "timeago.js/lib/lang/vi";

// Đăng ký ngôn ngữ tiếng Việt cho timeago.js
register("vi", viLocale);

const PostListItem = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/4">
          <Image src={post.img} className="rounded-2xl object-cover" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-3/4">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex flex-col gap-2 text-gray-400 text-sm">
          <div className="">
            <span>Được viết bởi:</span>
            <span className="ml-3 md:ml-0 text-blue-800">
              PX Nguyễn Văn Thượng
            </span>
          </div>
          <div className="">
            <span className="mr-3 md:mr-0">Thư Mục:</span>
            <Link className="text-blue-800">{post.category}</Link>
          </div>
          <div className="">
            <span className="mr-3 md:mr-0">
              ({formatTimeAgo(post.createdAt, "vi")})
            </span>
            <span>
              {formatDate(parseISO(post.createdAt), "dd MMMM yyyy", {
                locale: vi,
              })}
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
