import { useEffect, useRef, useState } from 'react';
import backIcon from '../assets/icon-back.svg';

const OTP_LENGTH = 4;
const RESEND_SECONDS = 45;

export default function OtpCard({ email, onBack, onVerified }) {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(''));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) return undefined;
    const timer = window.setInterval(() => {
      setSecondsLeft((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [secondsLeft]);

  const otp = digits.join('');
  const canVerify = otp.length === OTP_LENGTH;

  function updateDigit(index, value) {
    const cleaned = value.replace(/\D/g, '').slice(-1);
    setDigits((current) => {
      const next = [...current];
      next[index] = cleaned;
      return next;
    });

    if (cleaned && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index, event) {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      event.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handlePaste(event) {
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (!pasted) return;

    event.preventDefault();
    const next = Array(OTP_LENGTH).fill('');
    pasted.split('').forEach((digit, index) => {
      next[index] = digit;
    });
    setDigits(next);
    inputsRef.current[Math.min(pasted.length, OTP_LENGTH) - 1]?.focus();
  }

  function handleVerify(event) {
    event.preventDefault();
    if (!canVerify) return;
    onVerified?.(otp);
  }

  function handleResend() {
    if (secondsLeft > 0) return;
    setDigits(Array(OTP_LENGTH).fill(''));
    setSecondsLeft(RESEND_SECONDS);
    inputsRef.current[0]?.focus();
  }

  const timerText = `00:${String(secondsLeft).padStart(2, '0')}`;

  return (
    <section className="otp-card" aria-labelledby="otp-title">
      <div className="otp-card__header">
        <h2 id="otp-title">Verifikasi Kode Keamanan</h2>
        <p>Masukkan 4 digit kode otorisasi yang telah dikirimkan ke email:</p>
        <strong>{email || 'admin@telkom-pwt.ac.id'}</strong>
      </div>

      <form className="otp-form" onSubmit={handleVerify}>
        <div className="otp-inputs" onPaste={handlePaste}>
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputsRef.current[index] = element;
              }}
              value={digit}
              onChange={(event) => updateDigit(index, event.target.value)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              aria-label={`Digit OTP ${index + 1}`}
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="otp-resend-row">
          <span>Tidak menerima kode?</span>
          <button
            type="button"
            className={secondsLeft > 0 ? 'otp-resend otp-resend--disabled' : 'otp-resend'}
            disabled={secondsLeft > 0}
            onClick={handleResend}
          >
            {secondsLeft > 0 ? (
              <>
                <span>Kirim ulang dalam</span>
                <b>{timerText}</b>
              </>
            ) : (
              <span>Kirim ulang kode</span>
            )}
          </button>
        </div>

        <button className="otp-submit" type="submit" disabled={!canVerify}>
          Verifikasi &amp; Lanjutkan
        </button>

        <button className="otp-back" type="button" onClick={onBack}>
          <img src={backIcon} alt="" aria-hidden="true" />
          <span>Kembali ke Login Admin</span>
        </button>
      </form>
    </section>
  );
}
