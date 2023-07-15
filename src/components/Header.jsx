import SearchImage from "./SearchImage";
import Categories from "./Categories";
import{MdMonochromePhotos} from "react-icons/md";

const Header = ({ onSearch }) => {
  return (
    <>
      <div className="logo">
        <MdMonochromePhotos className="ic"/>
        <h1>ImGallery</h1>
      </div>
      <SearchImage onSearch={onSearch} />
      <Categories />
    </>
  );
};

export default Header;
