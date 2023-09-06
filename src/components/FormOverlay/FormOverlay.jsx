import { useContext, useEffect } from "react";
import FormCards from "./FormCards";
import { dataContext } from "../App";

export default function FormOverlay() {
  const { data, setData } = useContext(dataContext);

  useEffect(() => {
    if (!data.formOverlay) {
      document.querySelector(".form-overlay").style.display = "none";
      document.querySelector(".blur-overlay").style.display = "none";
    }
  }, [data.formOverlay]);

  return (
    <section className="form-overlay">
      <div className="heading">
        <h4>Back this project</h4>
        <div className="close-holder">
          <img
            src="icon-close-modal.svg"
            alt="close"
            onClick={() => setData({ ...data, formOverlay: false })}
          />
        </div>
      </div>
      <p className="sub-heading">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <FormCards
        heading="Pledge with no reward"
        content="Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to recieve product
            updates via email."
        value="0"
      />
      <FormCards
        heading="Bamboo Stand"
        subHeading="25"
        content="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
        quantity={data.countOne}
        value="25"
      />
      <FormCards
        heading="Black Edition Stand"
        subHeading="75"
        content="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        quantity={data.countTwo}
        value="75"
      />
      <div className="form-cards disabled">
        <div className="selection">
          <div className="check">
            <input type="radio" />
          </div>
          <div className="selection-heading">
            <h3>Mahogany Special Edition</h3>
            <p>Pledge $200 or more</p>
          </div>
          <div className="selection-content">
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You'll be added to our Backer member list.
              Shipping is included.
            </p>
          </div>
          <div className="quantity">
            <h1>0</h1>
            <p>left</p>
          </div>
        </div>
      </div>
    </section>
  );
}
