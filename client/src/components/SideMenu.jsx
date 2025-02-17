import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat:category,
      });
    }
  };
return (
    <div className='px-4 h-mã sticky top-8'>
            <h1 className='mb-4 text-sm font-medium'>Tìm kiếm</h1>
            <Search />
            <h1 className='mb-4 text-sm font-medium'>Danh mục</h1>
            <div className="flex flex-col gap-2 text-sm">
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("tam-ly-hoc")}>Tâm lý học</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("suy-niem-loi-chua")}>Suy niệm lời Chúa</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("goc-nha-dao")}>Góc nhà đạo</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("hoi-nhap-van-hoa")}>Hội nhập văn hóa</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("ngon-ngu-va-van-chuong")}>Ngôn ngữ và văn chương</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("doc-truyen")}>Đọc truyện</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("tin-tuc-giao-hoi")}>Tin tức giáo hội</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("thu-vien")}>Thư viện</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("but-ky-triet-hoc")}>Bút ký triết học</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("chuyen-phiem")}>Chuyện phiếm</span>
                <span className="underline cursor-pointer" to="#" onClick={()=>handleCategoryChange("thuoc-va-suc-khoe")}>Thuốc và Sức khỏe</span>
            </div>
    </div>
)
}

export default SideMenu