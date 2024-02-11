import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>À propos</h3>
          </div>
          <div className="col-md-4">
            <h3>Contact</h3>
            <ul className="list-unstyled">
              <li>Adresse : 123 rue de la Montagne, 75000 Paris</li>
              <li>Téléphone : 01 23 45 67 89</li>
              <li>Email : lesamisdelamontagne@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Empreinte environnementale</h3>
            <p>
              <strong>270ko</strong> de données
            </p>
            <p>
              <strong>0,14g</strong> de CO2
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="socials p-2 text-center">
              <h3>Suivez-nous :</h3>
              <a href="https://fr-fr.facebook.com/">
                <i className="fa-brands fa-facebook fa-bounce"></i>
              </a>
              <a href="https://twitter.com/?lang=fr">
                <i className="fa-brands fa-twitter fa-bounce"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram fa-bounce"></i>
              </a>
              <a href="https://www.youtube.com/?hl=FR">
                <i className="fa-brands fa-youtube fa-bounce"></i>
              </a>
              <a href="https://fr.linkedin.com/">
                <i className="fa-brands fa-linkedin fa-bounce"></i>
              </a>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-center">
                  Copyright © 2023
                  <a href="/">Lesamisdelamontagne.com</a> - Tous droits
                  réservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <a href="/">
          <button className="btn btn-primary">
            Retour vers le haut
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-up-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
            </svg>
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
