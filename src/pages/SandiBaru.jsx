import BrandHeader from '../components/BrandHeader';
import Footer from '../components/Footer';
import NewPasswordCard from '../components/NewPasswordCard';

export default function SandiBaru({ onBack, onUpdated }) {
  return (
    <main className="new-password-page">
      <div className="new-password-page__main">
        <div className="new-password-page__brand">
          <BrandHeader />
        </div>
        <NewPasswordCard onBack={onBack} onUpdated={onUpdated} />
      </div>
      <Footer />
    </main>
  );
}
