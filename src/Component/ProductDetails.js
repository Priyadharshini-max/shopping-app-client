import { ProductContext } from "../Context/ProductContext";
import React, { useContext, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const API_URL = "https://shopping-app-api01.herokuapp.com/postproduct";

  // context for product details
  const context = useContext(ProductContext);

  const addBuynowProducts = async () => {
    try {
      const { buyNowItem: { id, product, picture, rate } } = context;
      const mailid = localStorage.getItem("user");

      const { data } = await axios.post(API_URL, {
        mailid, id, product, picture, rate
      })

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container>
        <Table responsive="lg">
          <tr>
            <td> <div><img variant="top" src={context.buyNowItem.picture} alt="pic" height={330} width={330} />
              <Link to={{
                pathname: 'https://rzp.io/l/uVXB2JhLfx',
              }} target="_blank"><Button type="button" size="sm" className="buynowBtn" onClick={addBuynowProducts}>Buy Now</Button></Link>
            </div></td>
            <td> <h1 className="mt-2">{context.buyNowItem.product}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vestibulum ante eu enim tincidunt, quis ultricies orci elementum.
                Nula facilisi. Ut et ante quis lacus dictum sodales ut in libero.
                Ut et ante quis lacus dictum sodales ut in libero.Nulla facilisi.
                Ut et ante quis.l
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