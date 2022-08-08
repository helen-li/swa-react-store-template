import React from "react";
import { ProductCards } from "../data/Cards";
import ButtonBar from "../components/ButtonBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RedAlert from "../components/RedAlert";
import YellowAlert from "../components/YellowAlert";
import ProductTable from "../components/ProductTable";

const Store = () => {
  return (
    <div>
      <Header 
        header='Our Products' 
        description='View our catalog of instruments and accessories. Ranging from beginner to experienced, we have the perfect fit for you.'
      />

      <YellowAlert 
        bold="Full Collection"
        description="View our collection of instruments for all players."
      />
      
      <br />

      <RedAlert
        header='NOTE ABOUT COVID-19'
        description='Due to shipping delays and risks, we are closing our online store. Please phone to place an order for curb side pickup.'
        note='Store contact: (000) 000 0000'
      />

      <ButtonBar/>
      <br />
      <br />
      <ProductTable productsList={ProductCards}/>
      
      <br />
      <Footer/>
    </div>
  );
};

export default Store;
