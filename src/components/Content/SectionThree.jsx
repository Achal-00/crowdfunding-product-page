import Cards from "./Cards";

export default function SectionThree() {
  return (
    <div className="section-3">
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens and USB sticks to
        be stored under the stand.
      </p>
      <Cards
        heading="Bamboo Stand"
        subheading="Pledge $25 or more"
        content="You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list."
        quantity="101"
      />
      <Cards
        heading="Black Edition Stand"
        subheading="Pledge $75 or more"
        content="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
        quantity="64"
      />
      <div className="cards disabled">
        <div className="heading">
          <h3>Mahogany Special Edition</h3>
          <p>Pledge $200 or more</p>
        </div>
        <div className="cards-content">
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You'll be added to our Backer member list.
            Shipping is included.
          </p>
        </div>
        <div className="footer">
          <div>
            <h1>0</h1>
            <p>left</p>
          </div>
          <button>Out of Stock</button>
        </div>
      </div>
    </div>
  );
}
