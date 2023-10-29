import React, { useState } from "react";
import Items from "../../assets/Item.json";
import Item from "./Item";

const Category = () => {
  const [selectcateg, setIsSelectcateg] = useState(0);
  const categories = [
    "Все",
    "Комплекты",
    "Наволочки",
    "Простыни",
    "Пододеяльники",
    "Одеяла",
  ];
  return (
    <>
      <div className="Category">
        {categories.map((cat, index) => (
          <div
            className={selectcateg === index ? "categ-active" : "categ"}
            key={index}
            onClick={() => setIsSelectcateg(index)}
          >
            {cat}
          </div>
        ))}
      </div>
      <Item {...Items} />
    </>
  );
};

export default Category;
