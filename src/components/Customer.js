const Customer = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.state}</h2>
    </div>
  )
}

Customer.propTypes = {
  // DONT FORGET TO FILL ME OUT!
  // addCardCallback: PropTypes.func.isRequired
  };
  

export default Customer;    