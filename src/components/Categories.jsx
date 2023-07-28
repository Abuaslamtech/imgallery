import { useState } from "react";

const Categories = ({ onSearch }) => {
  const [activeCategory, setActiveCategory] = useState("Random");
  const handlebtnClick = (e) => {
    const selectedCategory = e.target.value;
    onSearch(e.target.value);
    setActiveCategory(selectedCategory);
    console.log(activeCategory)
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
        className={activeCategory === "Animals" ? "list active" : "list"}
        value={"Animals"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Sports" ? "list active" : "list"}
        value={"Sports"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Nature" ? "list active" : "list"}
        value={"Nature"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "Culture" ? "list active" : "list"}
        value={"Culture"}
        onClick={handlebtnClick}
      />
      <input
        type="submit"
        className={activeCategory === "School" ? "list active" : "list"}
        value={"School"}
        onClick={handlebtnClick}
      />
    </section>
  );
};

export default Categories;
