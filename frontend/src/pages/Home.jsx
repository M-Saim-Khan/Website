import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import api from "../api"
import Category from "../components/category"
import "../styles/Home.css"

function Home(){
    const navigate = useNavigate();
    const[categories, setcategory] = useState([]);

    useEffect(() => {
        getcategory();
    }, [])

    const getcategory = () => {
        api.get("/shop/categories/").then((res)=>res.data).then((data)=>{setcategory(data); console.log(data)}).catch((err)=>alert(err));
    }

    return<div>
        <div>
        <h1 id="WelcomeTxt">Welcome to the store!</h1>
        <h2>Check Out Our Catalogues</h2>
        <h3>Categories</h3>
        {categories.map((category)=><Category category={category} key={category.id}/>)}
        </div>
        <div>
            <button className="cart" onClick={()=>navigate(`/Cart`)}>CHECK CART</button>
        </div>
        
    </div>
}

export default Home