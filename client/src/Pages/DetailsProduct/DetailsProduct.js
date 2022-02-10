import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../JS/Actions/productActions";
import { AddToCart } from "../../JS/Actions/cartActions";
import { decrement, increment  } from "../../JS/Actions/countActions";
import { useParams } from "react-router-dom";
import { AiOutlineBarcode } from "react-icons/ai";
import { BsFileText} from "react-icons/bs";
import { IoResize } from  "react-icons/io5";
import { GiPriceTag } from  "react-icons/gi";
import  { FaWeightHanging } from  "react-icons/fa";
import { BsBoxSeam } from  "react-icons/bs";
import './DetailsProduct.css'
const DetailsProduct = () => {
    const params = useParams();
    console.log(params.id)
    const count = useSelector(state => state.countReducer.count)
    const productsToFind = useSelector(
        (state) => state.productReducer.productToFind
      );
      const userToFind = useSelector(
        (state) => state.authReducer.user
      );

      const load = useSelector((state) => state.productReducer.load);
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getProduct(params.id));
      }, [dispatch]);
      const prod ={
        productId :productsToFind._id,
        quantity : count 
      }
      console.log(prod)
      
  return <div className="details">
     
   <img  src={productsToFind.ImgURL } alt="image product " width={300} height={300} />
   <div className="dett">
   <h2> <BsFileText style={{ color:"black" , fontSize: "1.5em"}} /> {productsToFind.NameProduct} </h2>
     <h2> <AiOutlineBarcode style={{ color:"black" , fontSize: "1.5em"}} />{productsToFind.Barcode} </h2>
     <h2>   <BsBoxSeam style={{ color:"black" , fontSize: "1.5em"}} />{productsToFind.Quantity } </h2>
     <h2> {productsToFind.Description} </h2>
     <div className="button-container">
       <button className="cart-qty-plus"  type="button" value="+" onClick={() => dispatch(increment())} > +</button>
       <input type="text" name="qty"  class="qty form-control" value={count} />
     <button className="cart-qty-minus" type="button" value="-" onClick={() => dispatch(decrement())}>-</button>
     </div> 
     <h2>  <IoResize style={{ color:"black" , fontSize: "1.5em"}} />{productsToFind.Size} </h2>
     <h2> <FaWeightHanging style={{ color:"black" , fontSize: "1.5em"}} /> {productsToFind.Weight} </h2>
     <h2>  <GiPriceTag style={{ color:"black" , fontSize: "1.5em"}} />{productsToFind.Price} </h2>
     <div  className="de">
     <button  onClick={() => dispatch(AddToCart(userToFind._id , prod ))}> Add To Cart </button>
     </div>
     </div>
  </div>;
};

export default DetailsProduct;
