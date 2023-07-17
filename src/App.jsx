import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Images from "./components/Images";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchImages(`https://api.unsplash.com/photos?page=${page}&per_page=12`);
  }, [page]);
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
    const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${query}`;
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
  // pages
  const handleNext = () => {
    setPage((page) => page + 1);
    console.log(page)
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((page) => page - 1);
      console.log(page)
    }
  };
  return (
    <>
      <Header onSearch={searchImage} />
      <Pagination onSearch={searchImage} onNext={handleNext} onPrev={handlePrev} currentPage={page}/>
      <div className="mainC">
        {images && images.length > 0 && <Images images={images} />}
      </div>
      <Pagination />
      <Footer />
    </>
  );
}

export default App;
