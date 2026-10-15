import { useEffect, useState } from 'react';
import AdminLogin from './pages/AdminLogin';
import ResetSandi from './pages/ResetSandi';
import KodeOtp from './pages/KodeOtp';
import SandiBaru from './pages/SandiBaru';
import Beranda from './pages/Beranda';
import Pendaftar from './pages/Pendaftar';
import Anggota from './pages/Anggota';
import DetailPendaftar from './pages/DetailPendaftar';
import DetailAnggota from './pages/DetailAnggota';
import KontenBeranda from './pages/KontenBeranda';
import EditKontenBerandaKeunggulan from './pages/EditKontenBerandaKeunggulan';
import KontenGameDivisi from './pages/KontenGameDivisi';
import KontenEvent from './pages/KontenEvent';
import ExportData from './pages/ExportData';

const routes = new Set(['/', '/reset-sandi', '/kode-otp', '/sandi-baru', '/beranda', '/pendaftar', '/detail-pendaftar', '/anggota', '/detail-anggota', '/konten-beranda', '/edit-konten-beranda-keunggulan', '/konten-game-divisi', '/konten-event', '/export-data']);

function normalizePath(pathname) {
  return routes.has(pathname) ? pathname : '/';
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [resetEmail, setResetEmail] = useState('admin@telkom-pwt.ac.id');
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    function handlePopState() {
      setPath(normalizePath(window.location.pathname));
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function navigate(nextPath) {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setPath(nextPath);
  }

  function handleResetEmail(email) {
    setResetEmail(email);
    navigate('/kode-otp');
  }

  function handleOtpVerified() {
    navigate('/sandi-baru');
  }

  function handlePasswordUpdated() {
    navigate('/');
  }

  function handleLogin() {
    navigate('/beranda');
  }

  if (path === '/reset-sandi') {
    return (
      <ResetSandi
        initialEmail={resetEmail}
        onSubmitEmail={handleResetEmail}
        onBack={() => navigate('/')}
      />
    );
  }

  if (path === '/kode-otp') {
    return (
      <KodeOtp
        email={resetEmail}
        onVerified={handleOtpVerified}
        onBack={() => navigate('/')}
      />
    );
  }

  if (path === '/sandi-baru') {
    return (
      <SandiBaru
        onUpdated={handlePasswordUpdated}
        onBack={() => navigate('/')}
      />
    );
  }

  if (path === '/export-data') {
    return <ExportData onLogout={() => navigate('/')} onNavigate={navigate} />;
  }

  if (path === '/konten-event') {
    return <KontenEvent onLogout={() => navigate('/')} onNavigate={navigate} />;
  }

  if (path === '/konten-game-divisi') {
    return <KontenGameDivisi onLogout={() => navigate('/')} onNavigate={navigate} />;
  }

  if (path === '/edit-konten-beranda-keunggulan') {
    return <EditKontenBerandaKeunggulan onLogout={() => navigate('/')} onNavigate={navigate} />;
  }

  if (path === '/konten-beranda') {
    return <KontenBeranda onLogout={() => navigate('/')} onNavigate={navigate} />;
  }

  if (path === '/detail-anggota') {
    return (
      <DetailAnggota
        member={selectedMember}
        onBack={() => navigate('/anggota')}
        onLogout={() => navigate('/')}
        onNavigate={navigate}
      />
    );
  }

  if (path === '/anggota') {
    return (
      <Anggota
        onLogout={() => navigate('/')}
        onNavigate={navigate}
        onDetail={(member) => {
          setSelectedMember(member);
          navigate('/detail-anggota');
        }}
      />
    );
  }

  if (path === '/detail-pendaftar') {
    return (
      <DetailPendaftar
        applicant={selectedApplicant}
        onBack={() => navigate('/pendaftar')}
        onLogout={() => navigate('/')}
        onNavigate={navigate}
      />
    );
  }

  if (path === '/pendaftar') {
    return (
      <Pendaftar
        onLogout={() => navigate('/')}
        onNavigate={navigate}
        onDetail={(applicant) => {
          setSelectedApplicant(applicant);
          navigate('/detail-pendaftar');
        }}
      />
    );
  }

  if (path === '/beranda') {
    return <Beranda onLogout={() => navigate('/')} onNavigate={navigate} />;
  }

  return (
    <AdminLogin
      onForgotPassword={() => navigate('/reset-sandi')}
      onLogin={handleLogin}
    />
  );
}
