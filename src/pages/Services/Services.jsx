import "./Services.scss";
import PageTitle from "../../components/common/PageTitle/PageTitle";
import eventImage from "../../assets/shee7.jpeg";
import partyImage from "../../assets/shee11.jpeg";
import weddingImage from "../../assets/shee6.jpeg";
import corporateImage from "../../assets/shee5.jpeg";
const Services = () => {
  return (
    <div className="services-page">
      <PageTitle title="Work with Shee" />
      <div className="services-container">
        <div className="services-content">
          <img src={eventImage} alt="event" />
          <div className="services-content-text">
            <h2>Events</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam sagittis lacinia mi, ac facilisis nisl egestas nec. 
              Curabitur scelerisque, quam vitae congue semper, nulla turpis 
              mollis augue, condimentum volutpat lorem sem quis odio. 
              Sed a elit at sapien volutpat porta ut ut lectus. Fusce vestibulum 
              diam quis nibh vestibulum rutrum. Mauris a enim non magna 
              vestibulum facilisis quis nec nulla. Maecenas suscipit eleifend 
              massa. Nunc porttitor massa felis, quis iaculis ipsum cursus at.
            </p>
          </div>
        </div>
        <div className="services-content">
          <div className="service-content-text">
            <h2>Parties</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam sagittis lacinia mi, ac facilisis nisl egestas nec. 
              Curabitur scelerisque, quam vitae congue semper, nulla turpis 
              mollis augue, condimentum volutpat lorem sem quis odio. 
              Sed a elit at sapien volutpat porta ut ut lectus. Fusce vestibulum 
              diam quis nibh vestibulum rutrum. Mauris a enim non magna 
              vestibulum facilisis quis nec nulla. Maecenas suscipit eleifend 
              massa. Nunc porttitor massa felis, quis iaculis ipsum cursus at.
            </p>
          </div>
          <img src={partyImage} alt="party" />
        </div>
        <div className="services-content">
          <img src={weddingImage} alt="wedding" />
          <div className="service-content-text">
            <h2>Weddings</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam sagittis lacinia mi, ac facilisis nisl egestas nec. 
              Curabitur scelerisque, quam vitae congue semper, nulla turpis 
              mollis augue, condimentum volutpat lorem sem quis odio. 
              Sed a elit at sapien volutpat porta ut ut lectus. Fusce vestibulum 
            </p>
          </div>
        </div>
        <div className="services-content">
          <div className="service-content-text">
            <h2>Corporate</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nam sagittis lacinia mi, ac facilisis nisl egestas nec. 
              Curabitur scelerisque, quam vitae congue semper, nulla turpis 
              mollis augue, condimentum volutpat lorem sem quis odio. 
              Sed a elit at sapien volutpat porta ut ut lectus. Fusce vestibulum 
            </p>
          </div>
          <img src={corporateImage} alt="corporate" />
        </div>
      </div>
    </div>
  );
};

export default Services; 