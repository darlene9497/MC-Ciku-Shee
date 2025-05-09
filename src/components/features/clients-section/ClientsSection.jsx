import "./ClientsSection.scss";
import client1 from "../../../assets/svgs/client1.svg";
import client2 from "../../../assets/svgs/client2.svg";
import client3 from "../../../assets/svgs/client3.svg";
import client4 from "../../../assets/svgs/client4.svg";
import client5 from "../../../assets/svgs/client5.svg";
import client6 from "../../../assets/svgs/client6.svg";
import client7 from "../../../assets/svgs/client7.svg";

const clients = [
    { name: 'Client 1', logo: client1 },
    { name: 'Client 2', logo: client2 },
    { name: 'Client 3', logo: client3 },
    { name: 'Client 4', logo: client4 },
    { name: 'Client 5', logo: client5 },
    { name: 'Client 6', logo: client6 },
    { name: 'Client 7', logo: client7 },
];

const allClients = [...clients, ...clients];
const ClientsSection = () => (
    <section className="clients-section">
        <h2>Clients I've worked with</h2>
        <div className="clients-section__logos">
            {allClients.map((client, idx) => (
                <div className="clients-section__logo" key={client.name + idx}>
                    <img src={client.logo} alt={client.name + ' logo'} />
                </div>
            ))}
        </div>
    </section>
);

export default ClientsSection;