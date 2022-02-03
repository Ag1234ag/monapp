import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../JS/Actions/productActions";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Computers from "../Category/Computers/Computers";
import Tablettes from "../Category/Tablettes/Tablettes";
import Smartphone from "../Category/Smartphone/Smartphone";
import Printers from "../Category/Printers/Printers";
import './ProductList.css'
const ProductList = () => {
  const productsToFind = useSelector(
    (state) => state.productReducer.productsToFind
  );
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(productsToFind)
  return load ? (
    <h2>loading</h2>
  ) : (
    <div className="productlist">
      { productsToFind.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
