import { useContext, useEffect } from "react";
import { dataContext } from "../App";

export default function FormCards(props) {
  const { data, setData } = useContext(dataContext);

  useEffect(() => {
    switch (data.selector) {
      case "0":
        document.querySelector(
          ".form-overlay > div:nth-child(3) .pledge"
        ).style.display = "flex";
        document.querySelector(
          ".form-overlay > div:nth-child(3) .pledge-line"
        ).style.display = "block";
        document.querySelector(
          ".form-overlay > div:nth-child(3)"
        ).style.border = "medium solid var(--dark-cyan)";
        document
          .querySelectorAll(
            ".form-overlay > div:nth-child(4), .form-overlay > div:nth-child(5)"
          )
          .forEach((x) => (x.style.border = "thin solid var(--dark-grey)"));
        document
          .querySelectorAll(
            ".form-overlay > div:nth-child(4) .pledge, .form-overlay > div:nth-child(5) .pledge, .form-overlay > div:nth-child(4) .pledge-line, .form-overlay > div:nth-child(5) .pledge-line"
          )
          .forEach((x) => (x.style.display = "none"));
        break;
      case "25":
        document.querySelector(
          ".form-overlay > div:nth-child(4) .pledge"
        ).style.display = "flex";
        document.querySelector(
          ".form-overlay > div:nth-child(4) .pledge-line"
        ).style.display = "block";
        document.querySelector(
          ".form-overlay > div:nth-child(4)"
        ).style.border = "medium solid var(--dark-cyan)";
        document
          .querySelectorAll(
            ".form-overlay > div:nth-child(3), .form-overlay > div:nth-child(5)"
          )
          .forEach((x) => (x.style.border = "thin solid var(--dark-grey)"));
        document
          .querySelectorAll(
            ".form-overlay > div:nth-child(3) .pledge, .form-overlay > div:nth-child(5) .pledge, .form-overlay > div:nth-child(3) .pledge-line, .form-overlay > div:nth-child(5) .pledge-line"
          )
          .forEach((x) => (x.style.display = "none"));
        break;
      case "75":
        document.querySelector(
          ".form-overlay > div:nth-child(5) .pledge"
        ).style.display = "flex";
        document.querySelector(
          ".form-overlay > div:nth-child(5) .pledge-line"
        ).style.display = "block";
        document.querySelector(
          ".form-overlay > div:nth-child(5)"
        ).style.border = "medium solid var(--dark-cyan)";
        document
          .querySelectorAll(
            ".form-overlay > div:nth-child(4), .form-overlay > div:nth-child(3)"
          )
          .forEach((x) => (x.style.border = "thin solid var(--dark-grey)"));
        document
          .querySelectorAll(
            ".form-overlay > div:nth-child(4) .pledge, .form-overlay > div:nth-child(3) .pledge, .form-overlay > div:nth-child(4) .pledge-line, .form-overlay > div:nth-child(3) .pledge-line"
          )
          .forEach((x) => (x.style.display = "none"));
        break;
      default:
        break;
    }
  }, [data.selector]);

  function submitHandler() {
    if (data.selector === "0") {
      if (parseFloat(data.amount) <= 0 || data.amount === "") {
        setData({ ...data, amount: "" });
      } else {
        completed(0);
      }
    } else if (data.selector === "25") {
      if (parseFloat(data.amount) < 25 || data.amount === "") {
        setData({ ...data, amount: "" });
      } else {
        completed(1);
      }
    } else {
      if (parseFloat(data.amount) < 75 || data.amount === "") {
        setData({ ...data, amount: "" });
      } else {
        completed(2);
      }
    }
  }

  function completed(x) {
    if (x === 1) {
      setData({
        ...data,
        totalBacked: data.totalBacked + parseFloat(data.amount),
        totalBackers: data.totalBackers + 1,
        amount: "",
        selector: "",
        countOne: data.countOne - 1,
      });
    } else if (x === 2) {
      setData({
        ...data,
        totalBacked: data.totalBacked + parseFloat(data.amount),
        totalBackers: data.totalBackers + 1,
        amount: "",
        selector: "",
        countTwo: data.countTwo - 1,
      });
    } else {
      setData({
        ...data,
        totalBacked: data.totalBacked + parseFloat(data.amount),
        totalBackers: data.totalBackers + 1,
        amount: "",
        selector: "",
      });
    }
    document.querySelector(".form-overlay").style.display = "none";
    document.querySelector(".success").style.display = "grid";
    document
      .querySelectorAll(
        ".form-overlay > div:nth-child(3) .pledge, .form-overlay > div:nth-child(4) .pledge, .form-overlay > div:nth-child(5) .pledge, .form-overlay > div:nth-child(3) .pledge-line, .form-overlay > div:nth-child(4) .pledge-line, .form-overlay > div:nth-child(5) .pledge-line"
      )
      .forEach((x) => (x.style.display = "none"));
    document
      .querySelectorAll("input[name='button']")
      .forEach((x) => (x.checked = false));
    document
      .querySelectorAll(
        ".form-overlay > div:nth-child(3), .form-overlay > div:nth-child(4), .form-overlay > div:nth-child(5)"
      )
      .forEach((x) => (x.style.border = "thin solid var(--dark-grey)"));
  }

  return (
    <div className="form-cards">
      <div className="selection">
        <div className="check">
          <input
            type="radio"
            name="button"
            onClick={(e) => {
              setData({ ...data, selector: props.value });
            }}
          />
        </div>
        <div className="selection-heading">
          <h3>{props.heading}</h3>
          {props.subHeading && <p>Pledge ${props.subHeading} or more</p>}
        </div>
        <div className="selection-content">
          <p>{props.content}</p>
        </div>
        <div className="quantity">
          <h1>{props.quantity}</h1>
          {props.quantity && <p>left</p>}
        </div>
      </div>
      <hr className="pledge-line" />
      <div className="pledge">
        <p>Enter your pledge</p>
        <div className="pledge-input">
          <input
            type="number"
            onChange={(e) => setData({ ...data, amount: e.target.value })}
            value={data.amount}
          />
          <button onClick={submitHandler}>Continue</button>
        </div>
      </div>
    </div>
  );
}
