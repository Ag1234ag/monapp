import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../JS/Actions/productActions";
import AdminSmartphone from "../AdminCategory/AdminSmartphone/AdminSmartphone";
const ListeSmartphone = () => {
    const productsToFind = useSelector(
        (state) => state
      );
      const load = useSelector((state) => state.productReducer.load);
      const dispatch = useDispatch();
      const filiter = useSelector(
        (state) => state.filiterReducer.nameProduct
      );
      useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);
      return load ? (
        <h2>loading</h2>
      
      ) : (
        <div className="productlist">
          { productsToFind.filter(product => product.NameProduct.toUpperCase().includes(filiter.toUpperCase()) 
             &&  product.Category =="smartphone"
              ).map((product) => (
            <AdminSmartphone product={product} key={product.id} />
          ))}
        </div>
      );
    };
export default ListeSmartphone;
