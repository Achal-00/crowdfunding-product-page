import { useContext } from "react";
import { dataContext } from "../App";

export default function Success() {
  const { data, setData } = useContext(dataContext);

  return (
    <section className="success">
      <div className="success-holder">
        <img src="icon-check.svg" alt="success" />
      </div>
      <h1>Thanks for your support!</h1>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        onClick={() => {
          document.querySelector(".success").style.display = "none";
          setData({ ...data, formOverlay: false });
        }}
      >
        Got it!
      </button>
    </section>
  );
}
