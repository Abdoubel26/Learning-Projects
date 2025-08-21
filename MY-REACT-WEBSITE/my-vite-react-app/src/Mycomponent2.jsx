import React, {useState} from "react";

function MyComponent2() {
    const [name, setName] = useState("Guest");

    const UpdateName = (e) => {
        setName(e.target.value);
    }

    const [quantity, setQuantity] = useState(1);

    const UpdateQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const [comment, setComment] = useState("You are not a fool");

    const UpdateComment = (e) => {
        setComment(e.target.value);
    }
    const [payment, setPayment] = useState();

    const UpdatePayment = (e) => {
        setPayment(e.target.value);
    }

    const [shipping, setShipping] = useState("Standard");

    const UpdateShipping = (e) => {
        setShipping(e.target.value);
    }

    return(
        <div>
            <input  value={name} onChange={UpdateName} />
            <p>Name: {name}</p>
            &nbsp;
            <input  type="number" value={quantity} onChange={UpdateQuantity} />
            <p>Quantity: {quantity}</p>
            &nbsp;
            <textarea placeholder="Enter your comment" value={comment} onChange={UpdateComment} />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={UpdatePayment}>
                <option value="">Select Payment Method</option>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
            </select>
        <br></br>
        <br></br>
            <label>
                <input type="radio"  
                value='Standard'
                checked={shipping === "Standard"} 
                onChange={UpdateShipping} />
                Standard
            </label>
            <label>
                <input type="radio" 
                checked={shipping === "Delivery"} 
                onChange={UpdateShipping}
                value='Delivery'
                />

                Delivery
            </label>
            <br />
            <br />
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent2;