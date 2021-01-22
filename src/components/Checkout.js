import axios from 'axios';
import React, { useState } from 'react';
import './Checkout.css';

const Checkout = (props) => {

  const [ checkoutSuccessMessage, setCheckoutSuccessMessage ] = useState(null)
  const [ checkoutErrorMessage, setCheckoutErrorMessage ] = useState(null)

  const checkout = () => {

    if (props.selectedVideo === null || props.selectedVideo === null) {
      setCheckoutErrorMessage(`Please select a customer & video!`)
      return;
    }

  const theFuture = new Date(new Date().getTime()+(7*24*60*60*1000));

  axios.post(`${props.baseUrl}/rentals/${props.selectedVideo.title}/check-out`, {}, {
      params: {
        'customer_id': props.selectedCustomer.id,
        'due_date': theFuture.toJSON(),
      }})        
      .then((response) => {
          console.log(response)
          setCheckoutSuccessMessage(`Customer ${props.selectedCustomer.name} has checked out ${props.selectedVideo.title}`)
          })
      .catch((error) => {
         // ADD STUFF HERE IF TIME
      });
    }

    return (
    <div className="container">
      <br></br>
      <h5>Rental Checkout</h5>
      { checkoutSuccessMessage ? <span><br></br><h5>{checkoutSuccessMessage}</h5></span> : <span /> }
      { props.selectedVideo === null || props.selectedVideo === null ? <span><br></br><h5>{checkoutErrorMessage}</h5></span> : <span /> }
        <div className="box w-50 container">
              <h5>Selected Customer: { props.selectedCustomer ? props.selectedCustomer.name : <span>None</span> }</h5>
              <h5>Selected Video: {props.selectedVideo ? props.selectedVideo.title : <span>None</span> }</h5>
          <button onClick={checkout} className="btn btn-outline-primary">Checkout!</button>
        </div>
    </div>
    )
  }
  
  Checkout.propTypes = {
    // DONT FORGET TO FILL ME OUT!
    // addCardCallback: PropTypes.func.isRequired
    };
    
  
  export default Checkout;    