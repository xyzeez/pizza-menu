import React from 'react';
import './index.css';
import pizzaData from './data';

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <section className="menu">
      <h2>our menu</h2>

      {pizzaData.length ? (
        <React.Fragment>
          <p>
            Savor the taste of Italy with our exquisite pizza menu. From classic
            Margheritas to gourmet delights, each bite is a journey through
            authentic Italian flavors. Mangia bene!
          </p>
          <ul className="pizzas">
            {pizzaData
              ? pizzaData.map((pizza) => (
                  <Pizza data={pizza} key={pizza.name} />
                ))
              : null}
          </ul>
        </React.Fragment>
      ) : (
        <p>
          "Oops! Our menu is currently empty. Stay tuned for delicious updates!"
        </p>
      )}
    </section>
  );
};

const Pizza = ({ data }) => {
  return (
    <li className={`pizza ${data.soldOut ? 'sold-out' : ''}`}>
      <img src={data.photoName} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? 'sold out' : `${data.price}`}</span>
      </div>
    </li>
  );
};

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      <p>© 2024 Fast React Pizza CO. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
};

export default App;
