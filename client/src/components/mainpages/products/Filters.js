import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <>
      <nav class="navbar">
        <div class="container-fluid">
          <span>
            Categories:
            <select name="category" value={category} onChange={handleCategory}>
              <option value="">All Products</option>
              {categories.map((category) => (
                <option value={"category=" + category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </span>
          <form class="d-flex">
            <input
              className="form-control me-2"
              type="text"
              value={search}
              placeholder="Enter your search!"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </form>
          <span>
            Sort By:
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="">Newest</option>
              <option value="sort=oldest">Oldest</option>
              <option value="sort=-sold">Best sales</option>
              <option value="sort=-price">Price: High-Low</option>
              <option value="sort=price">Price: Low-High</option>
            </select>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Filters;
