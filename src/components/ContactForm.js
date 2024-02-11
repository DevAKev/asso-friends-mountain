import React from "react";

const ContactForm = () => {
  return (
    <div>
      <hr className="separator" />
      <div className="contact-wrapper">
        <form className="form-horizontal" method="post" action="contact.php">
          <h4 className="section-header">Posez-nous vos questions !</h4>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" placeholder="Nom" name="name" required />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email@mail.com"
            name="email"
            required
          />
          <label htmlFor="phone">Téléphone</label>
          <input type="tel" id="phone" placeholder="0600000000" name="phone" />
          <label htmlFor="category">Catégorie de question</label>
          <select id="category" name="category">
            <option value="default">Choisissez une catégorie</option>
            <option value="help">Aide</option>
            <option value="pro-contact">Contact professionnel</option>
            <option value="Proposition">Proposition / Suggestion</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea rows="10" id="message" name="message" required></textarea>
          <button className="send-button" id="submit" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
