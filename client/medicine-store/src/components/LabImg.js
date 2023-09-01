import img from "../asset/labimg.webp";
import "../css/LabImg.css";

function LabImg() {
  return (
    <div className="labimg-container section-padding">
      <div className="img-part">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="info-part text-darkpurple">
        <h2>Why We Are Better</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Faucibus viverra pretium orci
          lectus rhoncus ipsum tortor. Rutrum varius tortor lorem consectetur
          tempus. Felis posuere aliquam dis egestas. Turpis mattis feugiat nunc
          ipsum facilisis.
        </p>
      </div>
      <div className="contain-item">
        <div className="item">
          <div className="main-text">15</div>
          <div className="bottom-text">Years Experience</div>
        </div>
        <div className="item">
          <div className="main-text">5k+</div>
          <div className="bottom-text">Happy Customers</div>
        </div>
        <div className="item">
          <div className="main-text">800+</div>
          <div className="bottom-text">Health Care Products</div>
        </div>
      </div>
    </div>
  );
}

export default LabImg;
