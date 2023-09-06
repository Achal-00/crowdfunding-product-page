import { useContext, useEffect } from "react";
import { dataContext } from "../App";

export default function Cards(props) {
  const { data, setData } = useContext(dataContext);

  useEffect(() => {
    if (data.formOverlay) {
      document.querySelector(".form-overlay").style.display = "grid";
      document.querySelector(".blur-overlay").style.display = "block";
    }
  }, [data.formOverlay]);

  return (
    <div className="cards">
      <div className="heading">
        <h3>{props.heading}</h3>
        <p>{props.subheading}</p>
      </div>
      <div className="cards-content">
        <p>{props.content}</p>
      </div>
      <div className="footer">
        <div>
          <h1>{props.quantity}</h1>
          <p>left</p>
        </div>
        <button onClick={() => setData({ ...data, formOverlay: true })}>
          Select Reward
        </button>
      </div>
    </div>
  );
}
