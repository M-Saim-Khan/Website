import { Link,useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import api from "../api"
import Product from "../components/product"
import "../styles/ProductList.css"

function ProductsList(){
    const { id } = useParams()
    const[products, setproduct] = useState([]);

    useEffect(() => {
        getproduct();
    }, [])

    const getproduct = () => {
        api.get(`/shop/products/?category=${id}`).then((res)=>res.data).then((data)=>{setproduct(data); console.log(data)}).catch((err)=>alert(err));
    }

    return <div>
        <h1 id="WelcomeTxt">CHECK OUT THE PRODUCTS!</h1>
        {products.map((product)=>(
            <Link key={product.id} to={`/products/${product.id}`}>
                <Product product={product}/>
            </Link>
        ))}
    </div>
}

export default ProductsList