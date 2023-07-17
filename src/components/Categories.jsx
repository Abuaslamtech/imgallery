

const Categories = ({ onSearch }) => {
  const handlebtnClick = (e) => {
    onSearch(e.target.value)
  };
  return (
    <section className="categories">
      <input type="submit" className="list active" value={"Random"} onClick={handlebtnClick}/>
      <input type="submit" className="list" value={"Animals"} onClick={handlebtnClick}/>
      <input type="submit" className="list" value={"Sports"} onClick={handlebtnClick}/>
      <input type="submit" className="list" value={"Nature"} onClick={handlebtnClick}/>
      <input type="submit" className="list" value={"Culture"} onClick={handlebtnClick}/>
      <input type="submit" className="list" value={"School"} onClick={handlebtnClick}/>
    </section>
  );
};

export default Categories;
