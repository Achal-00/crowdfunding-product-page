import { useContext, useEffect } from "react";
import { dataContext } from "../App";

export default function SectionTwo() {
  const { data } = useContext(dataContext);

  useEffect(() => {
    if (data.totalBacked <= 94000) {
      document.querySelector(
        ".progress-bar-background .progressed"
      ).style.width = "85%";
    } else if (data.totalBacked <= 97000) {
      document.querySelector(
        ".progress-bar-background .progressed"
      ).style.width = "90%";
    } else if (data.totalBacked <= 99999) {
      document.querySelector(
        ".progress-bar-background .progressed"
      ).style.width = "95%";
    } else {
      document.querySelector(
        ".progress-bar-background .progressed"
      ).style.width = "100%";
    }
  }, [data.totalBacked]);

  return (
    <div className="section-2">
      <div>
        <h1>${data.totalBacked}</h1>
        <p>of $100,000 backed</p>
      </div>
      <div className="section-2-line"></div>
      <div>
        <h1>{data.totalBackers}</h1>
        <p>total backers</p>
      </div>
      <div className="section-2-line"></div>
      <div>
        <h1>56</h1>
        <p>days left</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-background">
          <div className="progressed"></div>
        </div>
      </div>
    </div>
  );
}
