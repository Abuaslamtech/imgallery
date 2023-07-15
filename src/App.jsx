import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Images from "./components/Images";
import Header from "./components/Header";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchImages("https://api.unsplash.com/photos");
  }, [])
  const fetchImages = (apiUrl) => {
    const accessKey = "Bpe7jTS9WHRy6H7EzCHeycdKQ2nXWiadkKYwDszJMXA";
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // search

  const searchImage = (query) => {
    const accessKey = "Bpe7jTS9WHRy6H7EzCHeycdKQ2nXWiadkKYwDszJMXA";
    const apiUrl = `https://api.unsplash.com/search/photos?page=3&query=${query}`;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((res) => {
        setImages(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header onSearch={searchImage} />
      <div>{images && images.length > 0 && <Images images={images} />}</div>
    </>
  );
}

export default App;
