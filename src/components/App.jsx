import React, { createContext, useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import FormOverlay from "./FormOverlay/FormOverlay";
import Success from "./FormOverlay/Success";

export const dataContext = createContext();

export default function App() {
  const [data, setData] = useState({
    totalBacked: 89914,
    totalBackers: 5007,
    amount: "",
    selector: "",
    formOverlay: false,
    countOne: 101,
    countTwo: 64,
  });

  return (
    <section className="container">
      <dataContext.Provider value={{ data, setData }}>
        <Header />
        <Content />
        <div className="blur-overlay"></div>
        <FormOverlay />
        <Success />
      </dataContext.Provider>
    </section>
  );
}
