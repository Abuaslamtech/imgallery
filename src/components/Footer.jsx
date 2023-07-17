import { MdMonochromePhotos } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="left">
          <MdMonochromePhotos className="ic" />
          <h1>Impics</h1>
        </div>
        <div className="right">
          <div>About</div>
          <div>About</div>
        </div>
      </div>
      <div className="credit">
        <div className="copy">&copy; Impics @ 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
