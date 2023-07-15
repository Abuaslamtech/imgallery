import SearchImage from "./SearchImage";
import Categories from "./Categories";
import{MdMonochromePhotos} from "react-icons/md";

const Header = ({ onSearch }) => {
  return (
    <div className="head">
      <div className="logo">
        <MdMonochromePhotos className="ic"/>
        <h1>ImPics</h1>
      </div>
      <SearchImage onSearch={onSearch} />
      <Categories />
    </div>
  );
};

export default Header;
