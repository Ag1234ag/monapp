import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../JS/Actions/productActions";
import Tablettes from "../../Category/Tablettes/Tablettes";

const ListeTablettes = () => {
    const productsToFind = useSelector(
        (state) => state.productReducer.productsToFind
      );
      const productsToFinddd = useSelector(
        (state) => state
      );
      const load = useSelector((state) => state.productReducer.load);
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);
    console.log(productsToFinddd)

      return load ? (
        <h2>loading</h2>
      ) : (
        <div className="productlist">
          { productsToFind.map((product) => (
            <Tablettes product={product} key={product.id} />
          ))}
        </div>
      );
    };

export default ListeTablettes;
