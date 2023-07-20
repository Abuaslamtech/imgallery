import { MdMonochromePhotos } from "react-icons/md";
import {IoLogoWhatsapp} from "react-icons/io";
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="left">
          <MdMonochromePhotos className="ic" />
          <h1>Impics</h1>
        </div>
        <div className="right">
          <div><IoLogoWhatsapp /> +2347035974746</div>
          <div><BsFacebook /> Abdullahiabuaslam</div>
          <div><AiFillTwitterCircle /> @abdul_abuaslam</div>
        </div>
      </div>
      <div className="credit">
        <div className="copy">&copy; Impics @ 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
