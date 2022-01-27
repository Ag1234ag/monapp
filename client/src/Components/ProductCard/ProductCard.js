import React from "react";
import { Card , Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from '../../JS/Actions/cartActions';
import {
  deleteProduct,
  getProduct,
  toggleTrue,
} from "../../JS/Actions/productActions";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  onAddToCart = async (id, productId) => {
    await addToCart(id, productId, 1);
    alert ('Item added to Cart');
}

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{product.NameProduct}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          </Card.Subtitle>
         
          
          <Button
                              
                                    size="sm"
                                    onClick={onAddToCart()}
                                    >Add To Cart</Button> 
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
