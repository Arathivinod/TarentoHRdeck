import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewJoineeForm from "./Pages/AddNewJoineeForm";
import ViewDeck from "./Pages/ViewDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import HRlogin from "./Pages/HRlogin";
import Header from "./Components/header";


const App = () => {
  return (
      
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="login" element={<HRlogin />} />
        <Route path="add-details" element={<AddNewJoineeForm />} />
        <Route path="deck" element={<ViewDeck />} />
        </Routes>
       
      </BrowserRouter>
    
  );
};

export default App;