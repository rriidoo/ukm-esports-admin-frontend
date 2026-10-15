import BrandHeader from '../components/BrandHeader';
import Footer from '../components/Footer';
import ResetPasswordCard from '../components/ResetPasswordCard';

export default function ResetSandi({ onBack, onSubmitEmail, initialEmail }) {
  return (
    <main className="reset-page">
      <div className="reset-page__main">
        <div className="reset-page__brand">
          <BrandHeader />
        </div>
        <ResetPasswordCard
          onBack={onBack}
          onSubmitEmail={onSubmitEmail}
          initialEmail={initialEmail}
        />
      </div>
      <Footer />
    </main>
  );
}
