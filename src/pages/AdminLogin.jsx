import BrandHeader from '../components/BrandHeader';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';

export default function AdminLogin({ onForgotPassword, onLogin }) {
  return (
    <main className="admin-login-page">
      <div className="admin-login-page__content">
        <BrandHeader />
        <LoginCard onForgotPassword={onForgotPassword} onLogin={onLogin} />
      </div>
      <Footer />
    </main>
  );
}
