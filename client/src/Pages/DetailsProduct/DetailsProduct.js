import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../JS/Actions/productActions";
import { AddToCart } from "../../JS/Actions/cartActions";
import { useParams } from "react-router-dom";
const DetailsProduct = () => {
    const params = useParams();
    console.log(params.id)
    const productsToFind = useSelector(
        (state) => state.productReducer.productToFind
      );
      const load = useSelector((state) => state.productReducer.load);
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getProduct(params.id));
      }, [dispatch]);
      console.log(productsToFind)
      const prod ={
        productId :"61ebf605caaa2bb40f263033",
        quantity :1
      }
  return <div>
     <h2> {productsToFind.NameProduct} </h2>
     <h2> {productsToFind.ImgURL } </h2>
     <h2> {productsToFind.Barcode} </h2>
     <h2> {productsToFind.Quantity } </h2>
     <h2> {productsToFind.Description} </h2>
     <h2> {productsToFind.Size} </h2>
     <h2> {productsToFind.Weight} </h2>
     <h2> {productsToFind.Price} </h2>
     <button onClick={() => dispatch(AddToCart("61eff6eb27c8731b1796a27b" , prod ))}> Add To Cart </button>
  </div>;
};

export default DetailsProduct;
