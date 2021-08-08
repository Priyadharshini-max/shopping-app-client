import { Container } from 'react-bootstrap';
import ItemComponent from "../Component/ItemComponent";

function AllProduct() {
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



