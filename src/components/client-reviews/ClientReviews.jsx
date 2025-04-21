import './ClientReviews.scss';
import { useState } from 'react';
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import avatar from '../../assets/avatar.jpg';

const clients = [
  {
    name: 'John D',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis lacinia mi, ac facilisis nisl egestas nec. Curabitur scelerisque, quam vitae congue semper nulla turpis mollis augue, condimentum.”',
    image: profile1,
  },
  {
    name: 'Jane Doe',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis lacinia mi, ac facilisis nisl egestas nec. Curabitur scelerisque, quam vitae congue semper nulla turpis mollis augue, condimentum.”',
    image: profile2,
  },
  {
    name: 'Lynn M',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis lacinia mi, ac facilisis nisl egestas nec. Curabitur scelerisque, quam vitae congue semper nulla turpis mollis augue, condimentum.”',
    image: null,
  },
];

function ClientReviews() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (startIndex + 1) % clients.length;
    setStartIndex(newIndex);
  };

  const visibleClients = [
    clients[startIndex],
    clients[(startIndex + 1) % clients.length],
  ];

  return (
    <section className="client-reviews">
      <div className="reviews-header">
        {[...Array(5)].map((_, i) => (
          <lord-icon
            key={i}
            src="https://cdn.lordicon.com/uihwbzln.json"
            trigger="loop"
            delay="1000"
            colors="primary:#000000,secondary:#ffc738,tertiary:#000000"
            style={{ width: '25px', height: '25px' }}
          ></lord-icon>
        ))}
        <h2>Client Reviews</h2>
      </div>

      <div className="review-wrapper">
        {visibleClients.map((client, index) => (
          <div className="review-card" key={index}>
            <img
              src={client.image || avatar}
              alt={client.name}
              className="review-image"
            />
            <p className="review-text">{client.text}</p>
            <h4 className="review-name">{client.name}</h4>
          </div>
        ))}
      </div>

      <div className="review-next" onClick={handleNext}>
        <p>NEXT</p>
        <lord-icon
          src="https://cdn.lordicon.com/whtfgdfm.json"
          trigger="loop"
          delay="1000"
          colors="primary:#000000"
          style={{ width: '25px', height: '25px' }}
        ></lord-icon>
      </div>
    </section>
  );
}

export default ClientReviews;
