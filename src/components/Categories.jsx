import { useState } from "react";

const Categories = ({ onSearch }) => {
  const [activeCategory, setActiveCategory] = useState("Random");
  const handlebtnClick = (e) => {
    const selectedCategory = e.target.value;
    onSearch(e.target.value);
    setActiveCategory(selectedCategory)
  };
  return (
    <section className="categories">
      <input
        type="submit"
        className={activeCategory === "Random" ? "list active" : "list"}
        value={"Random"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Random" ? "list active" : "list"}
        value={"Animals"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Random" ? "list active" : "list"}
        value={"Sports"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Random" ? "list active" : "list"}
        value={"Nature"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Random" ? "list active" : "list"}
        value={"Culture"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Random" ? "list active" : "list"}
        value={"School"}
        onClick={handlebtnClick}
      />
    </section>
  );
};

export default Categories;
