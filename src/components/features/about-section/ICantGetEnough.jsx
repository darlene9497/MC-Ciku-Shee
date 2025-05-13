import "./ICantGetEnough.scss";
import books from "../../../assets/images/cge1.jpg";
import bible from "../../../assets/images/cge2.jpg";
import netflix from "../../../assets/images/cge3.jpg";

const ICantGetEnough = () => {
  return (
    <section className="cant-get-enough-section">
        <div className="cge-left">
            <h2 className="cge-title">
                I can't get enough<br className="cge-title-break" /> of ...
            </h2>
            <div className="cge-fact">
                <h4>CAN'T LIVE WITHOUT</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis lacinia mi, ac facilisis nisl egestas nec.</p>
                <div className="cge-underline" />
            </div>
            <div className="cge-fact">
                <h4>BINGING ON SHOWS</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis lacinia mi, ac facilisis nisl egestas nec.</p>
            </div>
        </div>
        <div className="cge-right">
            <div className="cge-img-grid">
                <img className="cge-img cge-img-lg" src={books} alt="Books" />
                <img className="cge-img cge-img-sm" src={bible} alt="The Bible" />
                <img className="cge-img cge-img-sm" src={netflix} alt="Netflix" />
            </div>
        </div>
    </section>
  );
};

export default ICantGetEnough;
