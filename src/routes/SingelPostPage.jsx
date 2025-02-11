// import { Link, useParams } from "react-router-dom";
import { Link } from "react-router";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
// import PostMenuActions from "../components/PostMenuActions";
// import Search from "../components/Search";
// import Comments from "../components/Comments";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { format } from "timeago.js";

// const fetchPost = async (slug) => {
//   const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
//   return res.data;
// };

const SinglePostPage = () => {
  // const { slug } = useParams();

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["post", slug],
  //   queryFn: () => fetchPost(slug),
  // });

  // if (isPending) return "loading...";
  // if (error) return "Something went wrong!" + error.message;
  // if (!data) return "Post not found!";

  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {/* {data.title} */}Title
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            {/* <Link className="text-blue-800">{data.user.username}</Link> */}
            <span>on</span>
            {/* <Link className="text-blue-800">{data.category}</Link> */}
            {/* <span>{format(data.createdAt)}</span> */}
          </div>
          {/* <p className="text-gray-500 font-medium">{data.desc}</p> */}
        </div>
        {/* {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w="600" className="rounded-2xl" />
          </div>
        )} */}
        <div className="hidden lg:block w-2/5">
            <Image src='featured1.jpeg' className="w-4/5 rounded-2xl" />
          </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg lg:w-5/6 flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            fugiat itaque quas esse sunt cupiditate possimus cumque asperiores,
            dolorem, dolores eligendi amet perferendis illum repellat nam quam
            facilis veritatis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint ipsa fuga nihil numquam, quam dicta quas
            exercitationem aliquam maxime quaerat, enim autem culpa sequi at!
            Earum facere in ducimus culpa. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero fuga modi amet error aliquid
            eos nobis vero soluta facilis, voluptatem, voluptates quod suscipit
            obcaecati voluptate quaerat laborum, voluptatum dicta ipsum.
          </p>
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
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">Tâm lý học</Link>
            <Link className="underline">Suy niệm lời Chúa</Link>
            <Link className="underline">Góc nhà đạo</Link>
            <Link className="underline">Hội nhập văn hóa</Link>
            <Link className="underline">Ngôn ngữ và văn chương</Link>
            <Link className="underline">Đọc truyện</Link>
            <Link className="underline">Tin tức giáo hội</Link>
            <Link className="underline">Thư viện</Link>
            <Link className="underline">Bút ký triết học</Link>
            <Link className="underline">Chuyện phiếm</Link>
            <Link className="underline">Thuốc và Sức khỏe</Link>
            
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default SinglePostPage;