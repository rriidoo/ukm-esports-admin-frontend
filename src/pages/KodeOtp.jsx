import BrandHeader from '../components/BrandHeader';
import Footer from '../components/Footer';
import OtpCard from '../components/OtpCard';

export default function KodeOtp({ email, onBack, onVerified }) {
  return (
    <main className="otp-page">
      <div className="otp-page__main">
        <div className="otp-page__brand">
          <BrandHeader />
        </div>
        <OtpCard email={email} onBack={onBack} onVerified={onVerified} />
      </div>
      <Footer />
    </main>
  );
}
