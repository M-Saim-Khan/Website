import {  useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import api from "../api";
import Product from "../components/ProductFull";

function Products(){
    const{ id } = useParams();
    const[product,setproduct]=useState(null);


    useEffect(()=>{
        api.get(`/shop/products/${id}/`).then((res)=>setproduct(res.data)).catch((err)=>alert(err));
    
    },[id]);
    
    const AddtoCart = (productId) => {
       api.post("/shop/cart/items/", {product_id : product.id, amount:1}).then((res)=> {
            if (res.status === 201) alert ("Added To Cart");
            else alert("Failed To Add To Cart")
        }).catch((error) => alert("Please Login Before Adding To Cart"))
    }

    if(!product) return <p>Loading...</p>;

    return(
        <div>
            <Product product={product} onAdd={AddtoCart} />
        </div>
    );
}
export default Products