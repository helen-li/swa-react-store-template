import React from "react";
import Footer from "../components/Footer";
import ButtonBar from "../components/ButtonBar";
import Header from "../components/Header";
import RedAlert from "../components/RedAlert";
import YellowAlert from "../components/YellowAlert";
import { BeginnerCards } from "../data/Cards";
import ProductTable from "../components/ProductTable";

const BeginStore = () => {
  return (
    <div>
      <Header 
        header='Our Products' 
        description='View our catalouge of instruments and accessories. Ranging from beginner to experienced, we have the perfect fit for you.'
      />
      <YellowAlert 
        bold='Beginner Collection'
        description='View our collection of instruments for beginner players.'
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

      <ProductTable productsList={BeginnerCards}/>
      <br />
      <Footer/>
    </div>
  );
};

export default BeginStore;
