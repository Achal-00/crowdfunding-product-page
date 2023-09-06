import { useContext, useEffect } from "react";
import { dataContext } from "../App";

const width = screen.width;

export default function SectionOne() {
  const { data, setData } = useContext(dataContext);

  useEffect(() => {
    if (data.formOverlay) {
      document.querySelector(".form-overlay").style.display = "grid";
      document.querySelector(".blur-overlay").style.display = "block";
    }
  }, [data.formOverlay]);

  return (
    <div className="section-1">
      <div className="mastercraft-holder">
        <img src="logo-mastercraft.svg" alt="logo" />
      </div>
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="section-1-btn-holder">
        <button onClick={() => setData({ ...data, formOverlay: true })}>
          Back this project
        </button>
        {width <= 1024 ? (
          <div className="section-one-bookmark">
            <img src="icon-bookmark.svg" alt="bookmark" />
          </div>
        ) : (
          <div className="section-one-bookmark">
            <img src="icon-bookmark.svg" alt="bookmark" />
            Bookmark
          </div>
        )}
      </div>
    </div>
  );
}
