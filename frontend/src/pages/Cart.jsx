import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import api from "../api"
import CartItem from "../components/cartitems"
import "../styles/Cart.css"

function Cart(){
    const navigate = useNavigate();
    const[Cartitems, setitems] = useState([]);

    useEffect(() => {
        getitems();
    }, [])

const getitems = () => {
    api.get("/shop/cart/").then((res) => {
        setitems(res.data[0]?.cartitems || [])
    }).catch((err) => alert(err))
}

    const deleteitem = (id) => {
        api.delete(`/shop/cart/items/${id}/`).then((res) => {
            if (res.status === 204) alert ("Item Deleted!");
            else alert("Failed To Delete Item");
            getitems();
        }).catch((error) => alert(error))
    };



    return<div>
        <h1 id="Cart-Txt">CART</h1>
        <h3>Purchases:</h3>
        {Cartitems.map((Cartitem)=><CartItem Cartitem={Cartitem} onDelete = {deleteitem} key={Cartitem.id}/>)}
        </div>
}

export default Cart