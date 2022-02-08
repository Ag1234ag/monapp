import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../JS/Actions/productActions";
import Smartphone from "../../Category/Smartphone/Smartphone";
const ListeSmartphone = () => {
    const productsToFind = useSelector(
        (state) => state
      );
      const load = useSelector((state) => state.productReducer.load);
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);
      return load ? (
        <h2>loading</h2>
      
      ) : (
        <div className="productlist">
          { productsToFind
          .map((product) => (
            <Smartphone product={product} key={product.id} />
          ))}
        </div>
      );
    };
export default ListeSmartphone;
