import { ProductContext } from "../Context/ProductContext";
import React, { useContext } from "react";
import { Container, Card, Button, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const context = useContext(ProductContext);

  console.log("BuynowItem", context.buyNowItem)
  return (
    <>
      <Container>
        <Table responsive="lg">
          <tr>
            <td> <div><img variant="top" src={context.buyNowItem.picture} height={330} width={330} />
            <Link to="/modal"><Button type="button" size="sm" className="buynowBtn">Buy Now</Button></Link>
            </div></td>
            <td> <h1 className="mt-2">{context.buyNowItem.product}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vestibulum ante eu enim tincidunt, quis ultricies orci elementum.
                Nulla facilisi. Ut et ante quis lacus dictum sodales ut in libero.
                Ut et ante quis lacus dictum sodales ut in libero.Nulla facilisi.
                Ut et ante quis.
              </p>
              <div className="d-flex">
                <p>Price : {context.buyNowItem.rate} </p>
              </div>
              <div>
                <h4>Specification</h4>
                <ul>
                  <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                  <li>16.59 cm (6.53 inch) HD+ Display</li>
                  <li>13MP Rear Camera | 5MP Front Camera</li>
                  <li>5000 mAh Lithium Polymer Battery</li>
                  <li>4 GB RAM | 64 GB ROM | Expandable Upto 512 GB</li>
                  <li>16.59 cm (6.53 inch) HD+ Display</li>
                  <li>13MP Rear Camera | 5MP Front Camera</li>
                  <li>5000 mAh Lithium Polymer Battery</li>
                </ul>
                <h4>Customer Review</h4>
                <p>
                  It is an good phone ever i see, but it have only one problem For
                  safety the network will be slow,but ever.
                </p>
              </div>
            </td>
          </tr>

        </Table>
      </Container>

    </>
  )
}