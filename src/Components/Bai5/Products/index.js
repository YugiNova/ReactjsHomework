import { useState } from "react"

const Products = (props) => {
    const productsData = [
        {
            user: "user1",
            product : {
                name: "product1",
                price: "10000$"
            },
        },
        {
            user: "user2",
            product : {
                name: "product2",
                price: "20000$"
            },
        },
        {
            user: "user3",
            product : {
                name: "product3",
                price: "30000$"
            },
        },
        {
            user: "user3",
            product : {
                name: "product4",
                price: "40000$"
            },
        },
    ]
    

    return (
        <div>
            {
                productsData.map(item => {
                    if(item.user === props.name)
                        return(
                            <div>
                                <div>{item.product.name}</div>
                                <div>{item.product.price}</div>
                            </div>
                        )
                })
            }
        </div>
    );
}

export default Products