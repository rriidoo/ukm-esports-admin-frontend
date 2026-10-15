import { useState } from 'react';
import { EyeOff } from 'lucide-react';
import emailIcon from '../assets/icon-email.svg';
import lockIcon from '../assets/icon-lock.svg';
import eyeIcon from '../assets/icon-eye.svg';

export default function LoginCard({ onForgotPassword, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin?.(form);
  }

  return (
    <section className="login-card" aria-labelledby="login-title">
      <div className="login-card__heading">
        <h2 id="login-title">Login Admin</h2>
        <p>Masuk untuk mengelola website Tel-U Esports.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="field-group field-group--email">
          <label htmlFor="email">EMAIL</label>
          <div className="input-shell">
            <img className="input-icon input-icon--email" src={emailIcon} alt="" aria-hidden="true" />
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@telkom-pwt.ac.id"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="field-group field-group--password">
          <label htmlFor="password">PASSWORD</label>
          <div className="input-shell">
            <img className="input-icon input-icon--lock" src={lockIcon} alt="" aria-hidden="true" />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password"
              autoComplete="current-password"
              required
            />
            <button
              className="password-toggle"
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
            >
              {showPassword ? <EyeOff size={18} strokeWidth={1.8} /> : <img src={eyeIcon} alt="" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="login-form__meta">
          <label className="remember">
            <input
              name="remember"
              type="checkbox"
              checked={form.remember}
              onChange={handleChange}
            />
            <span>Ingat saya</span>
          </label>

          <button type="button" className="forgot-password" onClick={onForgotPassword}>
            Lupa password?
          </button>
        </div>

        <button className="login-button" type="submit">
          Login Admin
        </button>
      </form>
    </section>
  );
}
