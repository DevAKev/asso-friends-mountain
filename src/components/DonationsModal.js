import React from "react";

const DonationsModal = () => {
  return (
    <div className="modal" tabIndex="-1" role="dialog" id="confirmDon">
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Formulaire d'inscription</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <article className="card">
              <div className="card-body p-5">
                <ul
                  className="nav bg-light nav-pills rounded nav-fill mb-3"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="pill"
                      href="#nav-tab-card"
                    >
                      <i className="fa fa-credit-card"></i> Carte bancaire
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="pill"
                      href="#nav-tab-paypal"
                    >
                      <i className="fa fa-paypal"></i> Paypal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="pill"
                      href="#nav-tab-bank"
                    >
                      <i className="fa fa-university"></i> Virement bancaire
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="nav-tab-card">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Votre adresse email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="email@email.com"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Password">Votre mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      name="Password"
                      placeholder="Saisissez votre mot de passe"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Montant du don</label>
                    <input
                      type="number"
                      className="form-control"
                      name="Montant"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="text">
                      Votre nom (Nom présent sur la carte)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardNumber">
                      Numéro de carte
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-credit-card"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                      </svg>
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        name="cardNumber"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text text-muted">
                          <i className="fab fa-cc-visa"></i> &nbsp;
                          <i className="fab fa-cc-amex"></i> &nbsp;
                          <i className="fab fa-cc-mastercard"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="form-group">
                        <label>Expiration</label>
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="MM"
                            name="mois"
                          />
                          <input
                            type="number"
                            className="form-control"
                            placeholder="AA"
                            name="année"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label
                          data-toggle="tooltip"
                          title="CVV"
                          data-original-title="3 derniers chiffres dos de la carte"
                        >
                          Chiffres Clés
                          <i className="fa fa-question-circle"></i>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="subscribe btn btn-primary btn-block mt-3"
                    type="submit"
                  >
                    {" "}
                    Confirmer{" "}
                  </button>
                  <fieldset>
                    <legend>Newsletter</legend>

                    <input type="checkbox" name="newsletter" id="newsletter" />
                    <label htmlFor="newsletter" className="inline-label p-4">
                      J'accepte de recevoir la newsletter
                    </label>
                  </fieldset>

                  <fieldset>
                    <div>
                      <label
                        htmlFor="Usecondition"
                        className="inline-label p-4"
                      >
                        Je déclare avoir consulté les conditions générales
                        d'utilisations et je donne mon accord
                      </label>
                      <input
                        type="checkbox"
                        name="Usecondition"
                        id="Usecondition"
                        required
                      />
                    </div>

                    <button className="btn btn-danger" type="reset">
                      Réinitialiser le formulaire
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Soumettre le formulaire
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsModal;
