import { Container } from 'react-bootstrap';
import ItemComponent from "../Component/ItemComponent";
import { useHistory } from 'react-router';
import React, { useEffect } from "react";

function AllProduct() {
  const history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem("user")){
       history.push("/")
    }   
  },[])

  return (
    <>
      <div className="HeaderDiv">
        <Container>
          <h1 className="Heading">ONLINE SHOPPING</h1>
          <h4 className="secondHeading">Create your own style</h4>
        </Container>
      </div>
      <ItemComponent />
    </>
  )
}

export default AllProduct;



