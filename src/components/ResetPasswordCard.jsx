import { useState } from 'react';
import emailIcon from '../assets/icon-email.svg';
import backIcon from '../assets/icon-back.svg';

export default function ResetPasswordCard({ onBack, onSubmitEmail, initialEmail = '' }) {
  const [email, setEmail] = useState(initialEmail);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitEmail?.(email.trim());
  }

  return (
    <section className="reset-card" aria-labelledby="reset-title">
      <div className="reset-card__heading">
        <h2 id="reset-title">Lupa Password Admin</h2>
        <p>
          Masukkan email admin terdaftar untuk menerima
          <br />
          instruksi dan tautan reset password.
        </p>
      </div>

      <form className="reset-form" onSubmit={handleSubmit}>
        <div className="reset-field">
          <label htmlFor="reset-email">EMAIL ADMIN</label>
          <div className="reset-input-shell">
            <img className="reset-input-icon" src={emailIcon} alt="" aria-hidden="true" />
            <input
              id="reset-email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@telkom-pwt.ac.id"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <button className="reset-submit" type="submit">
          Kirim Email
        </button>

        <button className="reset-back" type="button" onClick={onBack}>
          <img src={backIcon} alt="" aria-hidden="true" />
          <span>Kembali ke Login Admin</span>
        </button>
      </form>
    </section>
  );
}
