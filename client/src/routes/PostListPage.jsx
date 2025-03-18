import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("cat");

  const getCategoryTitle = (cat) => {
    switch (cat) {
      case "tam-ly-hoc":
        return "Tâm lý học";
      case "suy-niem-loi-chua":
        return "Suy niệm lời Chúa";
      case "goc-nha-dao":
        return "Góc nhà đạo";
      case "hoi-nhap-van-hoa":
        return "Hội nhập văn hóa";
      case "ngon-ngu-va-van-chuong":
        return "Ngôn ngữ và văn chương";
      case "doc-truyen":
        return "Đọc truyện";
      case "tin-tuc-giao-hoi":
        return "Tin tức giáo hội";
      case "thu-vien":
        return "Thư viện";
      case "but-ky-triet-hoc":
        return "Bút ký triết học";
      case "chuyen-phiem":
        return "Chuyện phiếm";
      case "thuoc-va-suc-khoe":
        return "Thuốc và Sức khỏe";
      default:
        return "Development Blog";
    }
  };

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">{getCategoryTitle(category)}</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;