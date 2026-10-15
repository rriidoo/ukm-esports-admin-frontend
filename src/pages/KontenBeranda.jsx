import { useRef, useState } from 'react';
import {
  Bell,
  ChevronDown,
  ChevronUp,
  FileText,
  Gamepad2,
  Home,
  Image as ImageIcon,
  LogOut,
  Pencil,
  Save,
  Table2,
  Trophy,
} from 'lucide-react';
import logo from '../assets/logo-figma.png';
import dashboardIcon from '../assets/ui-icons/Icon.png';
import pendaftarIcon from '../assets/ui-icons/Icon-3.png';
import anggotaIcon from '../assets/ui-icons/Icon-7.png';
import heroIcon from '../assets/konten-icons/Container.png';
import statisticIcon from '../assets/konten-icons/Background.png';
import advantageIcon from '../assets/konten-icons/Background-1.png';
import onlineIcon from '../assets/konten-icons/Background-2.png';
import realtimeIcon from '../assets/konten-icons/Background-3.png';
import certificateIcon from '../assets/konten-icons/Background-4.png';
import gameIcon from '../assets/konten-icons/Background-5.png';
import eventIcon from '../assets/konten-icons/Background-6.png';

const initialGames = [
  { order: 1, code: 'MLBB', name: 'Mobile Legends: Bang Bang', detail: 'Divisi MOBA • 240 Anggota', visible: true },
  { order: 2, code: 'PUBG', name: 'PUBG Mobile', detail: 'Divisi Battle Royale • 120 Anggota', visible: true },
  { order: 3, code: 'VLRN', name: 'Valorant', detail: 'Divisi Tactical FPS • 135 Anggota', visible: true },
  { order: 4, code: 'EFB', name: 'eFootball', detail: 'Divisi Sports Sim • 85 Anggota', visible: true },
];

const advantages = [
  {
    icon: onlineIcon,
    title: 'Pendaftaran 100% Online',
    description: 'Tak perlu repot cetak berkas, semua proses digital langsung dari gawai.',
  },
  {
    icon: realtimeIcon,
    title: 'Pantau Status Real-time',
    description: 'Dapatkan notifikasi langsung ke dashboard status seleksi dan verifikasi berkas.',
  },
  {
    icon: certificateIcon,
    title: 'Sertifikat & Rekomendasi Kampus',
    description: 'Dukungan resmi delegasi turnamen nasional dan poin SKK / TAK universitas.',
  },
];

export default function KontenBeranda({ onLogout, onNavigate }) {
  const fileInputRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const [statVisible, setStatVisible] = useState(true);
  const [games, setGames] = useState(initialGames);
  const [hero, setHero] = useState({
    badge: 'NEW SEASON REGISTRATION OPEN',
    title: 'Bergabunglah dengan Komunitas E-Sport Telkom Purwokerto',
    description:
      'Pendaftaran digital cepat dan mudah. Tunjukkan skill terbaikmu dan jadilah bagian dari atlet profesional kampus.',
    cta: 'DAFTAR SEKARANG',
  });
  const [stats, setStats] = useState({
    students: '1.200+',
    divisions: '4',
    champions: '12+',
  });

  function toggleGameVisibility(code) {
    setGames((items) => items.map((item) => (item.code === code ? { ...item, visible: !item.visible } : item)));
  }

  return (
    <main className="konten-page">
      <aside className="beranda-sidebar">
        <div className="beranda-brand">
          <img src={logo} alt="Logo UKM Esports Tel-U" />
          <div className="beranda-brand__copy">
            <strong>UKM ESPORTS TEL-U</strong>
            <span>ADMIN CONSOLE</span>
          </div>
        </div>

        <nav className="beranda-nav" aria-label="Navigasi admin">
          <button type="button" className="beranda-nav__item" onClick={() => onNavigate?.('/beranda')}>
            <img className="ui-nav-icon" src={dashboardIcon} alt="" aria-hidden="true" />
            <span>Beranda</span>
          </button>

          <button type="button" className="beranda-nav__item beranda-nav__item--active">
            <FileText size={17} strokeWidth={1.8} />
            <span>Kelola Konten</span>
          </button>

          <button type="button" className="beranda-nav__item" onClick={() => onNavigate?.('/pendaftar')}>
            <img className="ui-nav-icon ui-nav-icon--pendaftar" src={pendaftarIcon} alt="" aria-hidden="true" />
            <span>Pendaftar</span>
          </button>

          <button type="button" className="beranda-nav__item" onClick={() => onNavigate?.('/anggota')}>
            <img className="ui-nav-icon ui-nav-icon--anggota" src={anggotaIcon} alt="" aria-hidden="true" />
            <span>Anggota</span>
          </button>

          <button type="button" className="beranda-nav__item" onClick={() => onNavigate?.('/export-data')}>
            <Table2 size={17} strokeWidth={1.8} />
            <span>Export Data</span>
          </button>
        </nav>

        <div className="beranda-sidebar__bottom">
          <div className="beranda-admin">
            <div className="beranda-admin__avatar">RP</div>
            <div className="beranda-admin__copy">
              <strong>Raka Pratan</strong>
              <span>SUPER ADMIN</span>
            </div>
            <button type="button" className="beranda-admin__logout" onClick={onLogout} aria-label="Logout">
              <LogOut size={15} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </aside>

      <section className="konten-main">
        <header className="beranda-header">
          <h1>Kelola Konten</h1>
          <div className="beranda-header__actions">
            <div className="beranda-period">
              <span className="beranda-period__dot" />
              <span>Periode Aktif: Registrasi 2024/2025</span>
            </div>
            <button type="button" className="beranda-notification" aria-label="Notifikasi">
              <Bell size={16} strokeWidth={1.8} />
              <span className="beranda-notification__dot" />
            </button>
          </div>
        </header>

        <div className="konten-content">
          <div className="konten-tabs" role="tablist" aria-label="Kelola Konten">
            <button type="button" className="konten-tab konten-tab--active">
              <Home size={13} strokeWidth={2} />
              <span>Beranda</span>
            </button>
            <button type="button" className="konten-tab" onClick={() => onNavigate?.('/konten-game-divisi')}>
              <Gamepad2 size={13} strokeWidth={1.9} />
              <span>Game / Divisi</span>
            </button>
            <button type="button" className="konten-tab" onClick={() => onNavigate?.('/konten-event')}>
              <Trophy size={13} strokeWidth={1.9} />
              <span>Event</span>
            </button>
          </div>

          <section className="konten-card konten-card--hero">
            <div className="konten-card__head">
              <div className="konten-card__heading">
                <img src={heroIcon} alt="" aria-hidden="true" className="konten-section-icon konten-section-icon--hero" />
                <div>
                  <h2>Hero Section</h2>
                  <p>Konten visual utama pembuka di beranda website mahasiswa.</p>
                </div>
              </div>
              <label className="konten-switch-row">
                <span>Tampilkan di Website</span>
                <input type="checkbox" checked={heroVisible} onChange={(e) => setHeroVisible(e.target.checked)} />
                <i />
              </label>
            </div>

            <div className="konten-hero-grid">
              <div className="konten-form-stack">
                <label className="konten-field">
                  <span>Badge / Teks Pengumuman</span>
                  <input value={hero.badge} onChange={(e) => setHero({ ...hero, badge: e.target.value })} />
                </label>

                <label className="konten-field">
                  <span>Judul Utama</span>
                  <input value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
                </label>

                <label className="konten-field">
                  <span>Deskripsi Singkat</span>
                  <textarea rows={3} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
                </label>

                <label className="konten-field">
                  <span>Teks Tombol CTA</span>
                  <input value={hero.cta} onChange={(e) => setHero({ ...hero, cta: e.target.value })} />
                </label>
              </div>

              <div className="konten-banner-control">
                <span className="konten-banner-control__label">Banner / Gambar Utama</span>
                <div className="konten-banner-preview">
                  <div className="konten-banner-preview__glow" />
                  <div className="konten-banner-preview__screen">
                    <span>TEL-U</span>
                    <strong>ESPORTS</strong>
                  </div>
                  <div className="konten-banner-preview__stage" />
                  <div className="konten-banner-preview__meta">
                    <div>
                      <strong>hero-banner-2025.webp</strong>
                      <span>1920 × 1080 px • 842 KB</span>
                    </div>
                    <button type="button" onClick={() => fileInputRef.current?.click()}>
                      <ImageIcon size={12} strokeWidth={1.8} />
                      Ganti Gambar
                    </button>
                  </div>
                </div>
                <input ref={fileInputRef} type="file" hidden accept="image/png,image/jpeg,image/webp" />
                <p className="konten-help">Format JPG/PNG/WebP, rekomendasi rasio 16:9, maksimal ukuran file 2 MB.</p>
              </div>
            </div>

            <div className="konten-card__footer">
              <button type="button" className="konten-save-button">
                <span className="konten-save-button__check">✓</span>
                Simpan Perubahan Hero
              </button>
            </div>
          </section>

          <section className="konten-card">
            <div className="konten-card__head">
              <div className="konten-card__heading">
                <img src={statisticIcon} alt="" aria-hidden="true" className="konten-section-icon konten-section-icon--stats" />
                <div>
                  <h2>Statistik Beranda</h2>
                  <p>Pengaturan angka pencapaian yang disorot pada homepage mahasiswa.</p>
                </div>
              </div>
              <label className="konten-switch-row">
                <span>Tampilkan di Website</span>
                <input type="checkbox" checked={statVisible} onChange={(e) => setStatVisible(e.target.checked)} />
                <i />
              </label>
            </div>

            <div className="konten-stat-grid">
              <label className="konten-stat-field">
                <span>Total Mahasiswa</span>
                <input value={stats.students} onChange={(e) => setStats({ ...stats, students: e.target.value })} />
                <small>Jumlah mahasiswa yang bergabung</small>
              </label>
              <label className="konten-stat-field">
                <span>Divisi Game</span>
                <input value={stats.divisions} onChange={(e) => setStats({ ...stats, divisions: e.target.value })} />
                <small>Total cabang game aktif</small>
              </label>
              <label className="konten-stat-field">
                <span>Juara Nasional</span>
                <input value={stats.champions} onChange={(e) => setStats({ ...stats, champions: e.target.value })} />
                <small>Trofi & prestasi kompetisi</small>
              </label>
            </div>

            <div className="konten-card__footer">
              <button type="button" className="konten-save-button">
                <Save size={12} strokeWidth={2} />
                Simpan Statistik
              </button>
            </div>
          </section>

          <section className="konten-card">
            <div className="konten-card__head">
              <div className="konten-card__heading">
                <img src={advantageIcon} alt="" aria-hidden="true" className="konten-section-icon" />
                <div>
                  <h2>Keunggulan Komunitas</h2>
                  <p>Pilar keunggulan UKM yang dipromosikan kepada calon pendaftar.</p>
                </div>
              </div>
              <button type="button" className="konten-secondary-button" onClick={() => onNavigate?.('/edit-konten-beranda-keunggulan')}>
                <Pencil size={11} strokeWidth={1.8} />
                Edit Keunggulan
              </button>
            </div>

            <div className="konten-feature-list">
              {advantages.map((item) => (
                <article className="konten-feature-row" key={item.title}>
                  <img src={item.icon} alt="" aria-hidden="true" />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                  <span className="konten-active-badge">Aktif</span>
                </article>
              ))}
            </div>
          </section>

          <section className="konten-card">
            <div className="konten-card__head konten-card__head--compact">
              <div className="konten-card__heading">
                <img src={gameIcon} alt="" aria-hidden="true" className="konten-section-icon" />
                <div>
                  <div className="konten-heading-with-badge">
                    <h2>Game yang Ditampilkan</h2>
                    <span>4 Game Aktif</span>
                  </div>
                  <p>Urutan dan visibilitas game yang langsung disorot pada landing page.</p>
                </div>
              </div>
            </div>

            <div className="konten-game-list">
              {games.map((game, index) => (
                <article className="konten-game-row" key={game.code}>
                  <span className="konten-game-order">{game.order}</span>
                  <span className="konten-game-code">{game.code}</span>
                  <div className="konten-game-copy">
                    <strong>{game.name}</strong>
                    <span>{game.detail}</span>
                  </div>
                  <span className={game.visible ? 'konten-show-badge' : 'konten-show-badge konten-show-badge--hidden'}>{game.visible ? 'Tampil' : 'Disembunyikan'}</span>
                  <div className="konten-order-actions" aria-label={`Atur urutan ${game.name}`}>
                    <button type="button" disabled={index === 0} aria-label="Naikkan">
                      <ChevronUp size={14} strokeWidth={1.8} />
                    </button>
                    <button type="button" disabled={index === games.length - 1} aria-label="Turunkan">
                      <ChevronDown size={14} strokeWidth={1.8} />
                    </button>
                  </div>
                  <button type="button" className="konten-hide-button" onClick={() => toggleGameVisibility(game.code)}>{game.visible ? 'Sembunyikan' : 'Tampilkan'}</button>
                </article>
              ))}
            </div>

            <p className="konten-note">
              <span>ⓘ</span>
              Catatan: Urutan menentukan susunan kartu game pada halaman utama. Kelola detail spesifikasi &amp; pendaftaran divisi melalui tab Game / Divisi.
            </p>
          </section>

          <section className="konten-card konten-card--event-preview">
            <div className="konten-card__head konten-card__head--compact">
              <div className="konten-card__heading">
                <img src={eventIcon} alt="" aria-hidden="true" className="konten-section-icon" />
                <div>
                  <h2>Event yang Ditampilkan</h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
