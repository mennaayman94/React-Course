import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const params = useParams();
  const [productDetails, setDetails] = useState(null);
  console.log(params);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setDetails(res.data);
    });
  }, []);
  return (
    <>
      {productDetails && (
        <div>
          ItemId: {productDetails.id}
          Price:{productDetails.price}
          Title: {productDetails.title}
        </div>
      )}
    </>
  );
}
export default ProductDetails;
