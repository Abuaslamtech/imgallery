import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Images from "./components/Images";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import {BsImages} from "react-icons/bs";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchCurrentImages();
  }, [page, query]);

  // general fetch
  const fetchCurrentImages = () => {
    setIsLoading(true);
    if (query.trim() === "") {
      fetchImages(`https://api.unsplash.com/photos?page=${page}&per_page=12`);
    } else {
      searchImage(query, page);
    }
  };
  // fetch random images
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
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  // search
  const searchImage = (query, page) => {
    console.log(query);
    setIsLoading(true);
    const accessKey = "Bpe7jTS9WHRy6H7EzCHeycdKQ2nXWiadkKYwDszJMXA";
    const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&per_page=12`;
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      })
      .then((res) => {
        setImages(res.data.results);
        setTimeout(() => setIsLoading(false), 3000);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  // pages
  const handleNext = () => {
    setPage((page) => page + 1);
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };
  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };
  return (
    <>
      <Header onSearch={handleSearch} />
      <Pagination
        onSearch={handleSearch}
        onNext={handleNext}
        onPrev={handlePrev}
        currentPage={page}
      />
      <div className="mainC">
        {isLoading ? (
          <div className="sic">
            <BsImages className="sim" />
            <p>Loading Images ....</p>
          </div>
        ) : (
          images && images.length > 0 && <Images images={images} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
