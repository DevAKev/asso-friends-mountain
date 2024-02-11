import React from "react";

const CardsEvents = () => {
  return (
    <div>
      {/* Fil d'ariane */}
      <div id="breadcrumb" className="container-fluid row mt-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item mt-2">
            <a href="/">Accueil</a>
          </li>
          <li className="breadcrumb-item active mt-2" aria-current="page">
            Événements
          </li>
        </ol>
      </div>

      {/* Premier atelier */}
      <section>
        <h2>
          Participer à un événement :{" "}
          <small className="text-muted">
            Atelier Observation de la faune et la flore
          </small>
        </h2>
        <div className="card">
          <img
            src="images/events-img/Rouge-gorge-fleurs.jpg"
            className="card-img-top p-4 rounded-3"
            alt="Rouge-gorge"
          />
          <div className="card-body">
            <h5 className="card-title">
              Accompagnez-nous pour observer la nature comme vous ne l'avez
              jamais vu !
            </h5>
            <p className="card-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-map"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                />
              </svg>
              Lieu du rendez-vous : Centre ville de Chamonix (74)
            </p>
            <p className="card-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-calendar2-week-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
              </svg>
              24 Juin 2023 à 9h00
            </p>
            <p className="card-text">
              Rejoignez-nous sur la place du centre ville de Chamonix avant de
              commencer notre randonnée découverte passionnante et préparez-vous
              à contempler toutes les merveilles que la nature a à nous offrir,
              vous serez accompagnés de véritables amoureux de la montagne qui
              seront là pour vous apprendre à voir ce que vous ne voyez pas
              habituellement.
            </p>
            <p className="card-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
              <a href="mailto:Lesamisdelamontagne.com">
                Lesamisdelamontagne.com
              </a>
            </p>
            <div className="float-right">
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#joinModal"
                type="button"
              >
                Je participe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <h3>Vos commentaires</h3>
        <div className="row row-cols-1">
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>Nous serons présents en famille !</p>
                  <footer className="blockquote-footer">
                    Marie - Il y a 5h
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Est-ce que la randonnée est difficile pour les enfants ?
                  </p>
                  <footer className="blockquote-footer">
                    Michel - Il y a 2h
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>Qu'est-ce qu'il faut prévoir dans notre sac ?</p>
                  <footer className="blockquote-footer">
                    Sam - À l'instant
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="col p-4">
        <h4>Participants à l'événement (20 places disponibles)</h4>
        <p> Participants à l'événement: 10 / 20 places disponibles </p>
        <div className="progress">
          <div
            role="progressbar"
            className="progress-bar bg-primary"
            style={{ width: "50%" }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="20"
          >
            10 / 20 participants
          </div>
        </div>
      </section>

      {/* Deuxième atelier */}
      <section>
        <h2>
          Participer à un événement :{" "}
          <small className="text-muted">
            Collecte des déchets en milieux naturels
          </small>
        </h2>
        <div className="card">
          <img
            src="images/events-img/collecte-déchets.jpg"
            className="card-img-top p-4 rounded-3"
            alt="Collecte des déchets"
          />
          <div className="card-body">
            <h5 className="card-title">
              Laissons un monde propre à nos enfants !
            </h5>
            <p className="card-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-map"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                />
              </svg>
              Lieu du rendez-vous : Réserve naturelle des Gorges de l'Ardèche
              (07)
            </p>
            <p className="card-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-calendar2-week-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
              </svg>
              27 Juillet 2023 à 9h00
            </p>
            <p className="card-text">
              Les espaces naturels sont des joyaux précieux qui abritent une
              multitude de plantes et d'animaux. Malheureusement, la présence
              humaine entraîne une pollution croissante de ces habitats
              fragiles. Nous vous invitons à participer à cette initiative de
              nettoyage, en consacrant quelques heures de votre temps, vous
              contribuerez à préserver la nature. Que vous soyez seul, en
              famille ou avec des amis, vous êtes les bienvenus ! Nous
              fournirons le matériel nécessaire, tels que des gants et des sacs
              poubelles, ainsi que des instructions sur la manière de collecter
              les déchets. En participant à cet événement, vous ferez partie
              d'un mouvement global visant à sensibiliser à l'importance de la
              préservation de notre environnement. Ensemble, nous pouvons faire
              la différence et inspirer les autres à agir de manière
              responsable, ensemble, nous pouvons créer un avenir durable où
              l'homme et la nature coexistent harmonieusement !
            </p>
            <p className="card-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-person-square"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
              <a href="mailto:Lesamisdelamontagne.com">
                Lesamisdelamontagne.com
              </a>
            </p>
            <div className="float-right">
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#joinModal"
                type="button"
              >
                Je participe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <h3>Vos commentaires</h3>
        <div className="row row-cols-1">
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>Une très belle initiative !</p>
                  <footer className="blockquote-footer">
                    Marco - Il y a 12h
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>
                    Merci, grâce à vous mes enfants ne jettent plus rien par
                    terre !
                  </p>
                  <footer className="blockquote-footer">
                    Sandra - Il y a 4h
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>Vers quelle heure est prévu le retour ?</p>
                  <footer className="blockquote-footer">
                    Mireille - Il y a 5 minutes
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="col p-4 mb-4">
        <h4>Participants à l'événement (40 places disponibles)</h4>
        <p>Participants à l'événement : 30 / 40 places disponibles</p>
        <div className="progress">
          <div
            role="progressbar"
            className="progress-bar bg-primary"
            style={{ width: "75%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="40"
          >
            30 / 40 participants
          </div>
        </div>
      </section>
      <br />

      {/* Fenêtre modal inscription participation */}
      <div
        className="modal fade"
        id="joinModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="joinModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="joinModalLabel">
                Participer à l'événement
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                <label htmlFor="email">e-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                ></textarea>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button type="button" className="btn btn-primary">
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsEvents;
