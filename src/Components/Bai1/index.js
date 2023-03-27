import { useState } from "react";

const Bai1 = () => {
    const [products,setProducts] = useState([
        {
            name: "Product 1",
            code: "01",
            price: "10000$"
        },
        {
            name: "Product 2",
            code: "02",
            price: "20000$"
        },
        {
            name: "Product 3",
            code: "03",
            price: "30000$"
        }
    ])
    return (
        <div>
            {products.map(item=> {
                return(
                    <div>
                        <div>name: {item.name}</div>
                        <div>code: {item.code}</div>
                        <div>price: {item.price}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default Bai1