import { FaDownload } from "react-icons/fa";

const SingleImage = ({ image }) => {
  return (
    <div className="card">
      <img src={image.urls.small} className="image" alt="hello" />

      <div className="card_info">
        <div className="author">
          <div>
            <img src={image.user.profile_image.medium} alt={image.user.name} className="pic" />
          </div>
          <div className="name">{image.user.name}</div>
        </div>
        <div className="download">
         <a href={image.links.download} download>Download <FaDownload /></a>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
