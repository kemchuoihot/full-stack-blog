import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
    if (location.pathname !== "/posts") {
      navigate(`/posts?cat=${category}`);
    }
  };

  return (
    <div className='h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Danh mục</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("tam-ly-hoc")}>Tâm lý học</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("suy-niem-loi-chua")}>Suy niệm lời Chúa</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("goc-nha-dao")}>Góc nhà đạo</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("hoi-nhap-van-hoa")}>Hội nhập văn hóa</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("ngon-ngu-va-van-chuong")}>Ngôn ngữ và văn chương</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("doc-truyen")}>Đọc truyện</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("tin-tuc-giao-hoi")}>Tin tức giáo hội</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("thu-vien")}>Thư viện</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("but-ky-triet-hoc")}>Bút ký triết học</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("chuyen-phiem")}>Chuyện phiếm</span>
        <span className="underline cursor-pointer" onClick={() => handleCategoryChange("thuoc-va-suc-khoe")}>Thuốc và Sức khỏe</span>
      </div>
    </div>
  );
};

export default SideMenu;