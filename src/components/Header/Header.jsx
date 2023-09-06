import React from "react";
import Navbar from "./Navbar";

const width = screen.width;

export default function Header() {
  return (
    <section className="header">
      <Navbar />
      <div className="hero-image-holder">
        <img
          src={
            width <= 1024 ? "image-hero-mobile.jpg" : "image-hero-desktop.jpg"
          }
          alt="hero-image"
        />
      </div>
    </section>
  );
}
