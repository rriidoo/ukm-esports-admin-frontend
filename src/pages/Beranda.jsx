import {
  Bell,
  ClipboardCheck,
  FileText,
  Grid2X2,
  LogOut,
  Table2,
  UserRoundPlus,
  Users,
} from 'lucide-react';
import logo from '../assets/logo-figma.png';
import dashboardIcon from '../assets/ui-icons/Icon.png';
import pendaftarIcon from '../assets/ui-icons/Icon-3.png';
import anggotaIcon from '../assets/ui-icons/Icon-7.png';

const applicants = [
  {
    name: 'Arya Bramanyo',
    nim: '231182014',
    game: 'Valorant',
    date: '24 Okt 2024',
    status: 'Menunggu Verifikasi',
    tone: 'waiting',
  },
  {
    name: 'Clara Nathania',
    nim: '241183022',
    game: 'Mobile Legends',
    date: '24 Okt 2024',
    status: 'Menunggu Verifikasi',
    tone: 'waiting',
  },
  {
    name: 'Fajar Ramadhani',
    nim: '221184089',
    game: 'PUBG Mobile',
    date: '23 Okt 2024',
    status: 'Diterima',
    tone: 'accepted',
  },
  {
    name: 'Dewi Anggraini',
    nim: '231181077',
    game: 'Valorant',
    date: '23 Okt 2024',
    status: 'Diterima',
    tone: 'accepted',
  },
  {
    name: 'Bagus Wicaksono',
    nim: '211182051',
    game: 'eFootball',
    date: '22 Okt 2024',
    status: 'Ditolak',
    tone: 'rejected',
  },
];

export default function Beranda({ onLogout, onNavigate }) {
  return (
    <main className="beranda-page">
      <aside className="beranda-sidebar">
        <div className="beranda-brand">
          <img src={logo} alt="Logo UKM Esports Tel-U" />
          <div className="beranda-brand__copy">
            <strong>UKM ESPORTS TEL-U</strong>
            <span>ADMIN CONSOLE</span>
          </div>
        </div>

        <nav className="beranda-nav" aria-label="Navigasi admin">
          <button type="button" className="beranda-nav__item beranda-nav__item--active">
            <img className="ui-nav-icon" src={dashboardIcon} alt="" aria-hidden="true" />
            <span>Beranda</span>
          </button>
          <button type="button" className="beranda-nav__item" onClick={() => onNavigate?.('/konten-beranda')}>
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

      <section className="beranda-main">
        <header className="beranda-header">
          <h1>Beranda</h1>

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

        <div className="beranda-content">
          <section className="beranda-summary">
            <article className="beranda-summary-card">
              <div>
                <p className="beranda-summary-card__label">Pendaftar yang Perlu Dicek</p>
                <div className="beranda-summary-card__value">
                  <strong>24</strong>
                  <span>Mahasiswa</span>
                </div>
                <div className="beranda-summary-card__badge beranda-summary-card__badge--warning">
                  <span />
                  Perlu ditinjau segera
                </div>
              </div>

              <div className="beranda-summary-card__icon beranda-summary-card__icon--warning">
                <ClipboardCheck size={18} strokeWidth={1.8} />
              </div>
            </article>

            <article className="beranda-summary-card">
              <div>
                <p className="beranda-summary-card__label">Pendaftar Baru</p>
                <div className="beranda-summary-card__value">
                  <strong>18</strong>
                  <span>Mahasiswa</span>
                </div>
                <div className="beranda-summary-card__badge beranda-summary-card__badge--info">
                  <span />
                  Minggu ini
                </div>
              </div>

              <div className="beranda-summary-card__icon beranda-summary-card__icon--info">
                <UserRoundPlus size={18} strokeWidth={1.8} />
              </div>
            </article>
          </section>

          <section className="beranda-table-card">
            <div className="beranda-table-card__head">
              <div>
                <h2>Pendaftar Terbaru</h2>
                <p>Data registrasi calon anggota yang baru masuk sistem.</p>
              </div>
              <button type="button" className="beranda-see-all" onClick={() => onNavigate?.('/pendaftar')}>
                Lihat Semua Pendaftar <span>→</span>
              </button>
            </div>

            <div className="beranda-table-wrap">
              <table className="beranda-table">
                <thead>
                  <tr>
                    <th>NAMA MAHASISWA</th>
                    <th>NIM</th>
                    <th>GAME</th>
                    <th>TANGGAL DAFTAR</th>
                    <th>STATUS</th>
                    <th>AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((item) => (
                    <tr key={item.nim}>
                      <td className="beranda-table__name">{item.name}</td>
                      <td>{item.nim}</td>
                      <td>{item.game}</td>
                      <td>{item.date}</td>
                      <td>
                        <span className={`beranda-status beranda-status--${item.tone}`}>
                          <i />
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button type="button" className="beranda-detail">
                          Detail <span>→</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
