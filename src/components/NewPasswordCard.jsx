import { useMemo, useState } from 'react';
import { CheckCircle2, EyeOff } from 'lucide-react';
import lockIcon from '../assets/icon-lock.svg';
import eyeIcon from '../assets/icon-eye.svg';
import backIcon from '../assets/icon-back.svg';

export default function NewPasswordCard({ onBack, onUpdated }) {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const isLongEnough = password.length >= 8;
  const matches = password.length > 0 && password === confirmation;
  const canSubmit = isLongEnough && matches;

  const helperText = useMemo(() => {
    if (!confirmation) return 'Pastikan kedua kata sandi sama persis';
    return matches ? 'Kedua kata sandi sudah sama' : 'Kata sandi belum sama';
  }, [confirmation, matches]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!canSubmit) return;
    onUpdated?.(password);
  }

  return (
    <section className="new-password-card" aria-labelledby="new-password-title">
      <div className="new-password-card__heading">
        <h2 id="new-password-title">Buat Sandi Baru</h2>
      </div>

      <form className="new-password-form" onSubmit={handleSubmit}>
        <div className="new-password-field">
          <label htmlFor="new-password">KATA SANDI BARU</label>
          <div className="new-password-input">
            <img className="new-password-lock" src={lockIcon} alt="" aria-hidden="true" />
            <input
              id="new-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Minimal 8 karakter kombinasi"
              autoComplete="new-password"
              required
              minLength={8}
            />
            <button
              type="button"
              className="new-password-eye"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
            >
              {showPassword ? <EyeOff size={18} strokeWidth={1.8} /> : <img src={eyeIcon} alt="" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="new-password-field new-password-field--confirm">
          <label htmlFor="confirm-password">KONFIRMASI KATA SANDI BARU</label>
          <div className="new-password-input">
            <img className="new-password-lock" src={lockIcon} alt="" aria-hidden="true" />
            <input
              id="confirm-password"
              type={showConfirmation ? 'text' : 'password'}
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              placeholder="Ulangi kata sandi baru"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="new-password-eye"
              onClick={() => setShowConfirmation((value) => !value)}
              aria-label={showConfirmation ? 'Sembunyikan konfirmasi kata sandi' : 'Tampilkan konfirmasi kata sandi'}
            >
              {showConfirmation ? <EyeOff size={18} strokeWidth={1.8} /> : <img src={eyeIcon} alt="" aria-hidden="true" />}
            </button>
          </div>

          <div className={matches ? 'new-password-helper new-password-helper--valid' : 'new-password-helper'}>
            <CheckCircle2 size={14} strokeWidth={1.8} aria-hidden="true" />
            <span>{helperText}</span>
          </div>
        </div>

        <button className="new-password-submit" type="submit" disabled={!canSubmit}>
          Perbarui Kata Sandi
        </button>
      </form>

      <div className="new-password-footer-action">
        <button type="button" className="new-password-back" onClick={onBack}>
          <img src={backIcon} alt="" aria-hidden="true" />
          <span>Kembali ke Login Admin</span>
        </button>
      </div>
    </section>
  );
}
