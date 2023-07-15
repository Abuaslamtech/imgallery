import SingleImage from "./SingleImage";

const Images = ({ images }) => {
  return (
    <div className="images">
      {images.map((image) => (
        <SingleImage key={image.id} image={image} />
      ))}
    </div>
  );
};
export default Images;
