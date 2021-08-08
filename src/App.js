import AllProduct from "./Pages/AllProduct";
import { BrowserRouter, Switch, Route, Redirect, DefaultRoute, Router } from "react-router-dom";
import ProductConfig from "./Config/ProductConfig";
import NavbarComponent from "./Component/NavbarComponent";
import Cardfn from "./Pages/Card";
import ModalFn from "./Component/ModalComponent";
import ProductDetails from "./Component/ProductDetails"


export default function App() {
  return (

    <ProductConfig>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={AllProduct} />
          <Route path="/card" component={Cardfn} />
          <Route path="/modal" component={ModalFn} />
          <Route path="/ProductDetails" component={ProductDetails} />
          <Route path="/:name" component={AllProduct} />
        </Switch>
      </BrowserRouter>
    </ProductConfig>

  )
}