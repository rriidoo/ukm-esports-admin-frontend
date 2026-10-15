import {
  ArrowLeft,
  Bell,
  Check,
  FileText,
  FolderOpen,
  Gamepad2,
  Grid2X2,
  LogOut,
  MessageSquareQuote,
  Table2,
  Eye,
  Download,
  UserRound,
  UserRoundPlus,
  Users,
  X,
} from 'lucide-react';
import logo from '../assets/logo-figma.png';
import dashboardIcon from '../assets/ui-icons/Icon.png';
import pendaftarIcon from '../assets/ui-icons/Icon-3.png';
import anggotaIcon from '../assets/ui-icons/Icon-7.png';
import personalIcon from '../assets/ui-icons/Icon-2.png';
import gameIcon from '../assets/ui-icons/Icon-4.png';
import motivationIcon from '../assets/ui-icons/Icon-6.png';
import documentIcon from '../assets/ui-icons/Icon-10.png';

export default function DetailPendaftar({ applicant, onBack, onLogout, onNavigate }) {
  const data = applicant || {
    initials: 'AB',
    name: 'Arya Bramanto',
    email: 'arya.b@ittelkom-pwt.ac.id',
    nim: '23102014',
    study: 'S1 Informatika',
    game: 'Valorant',
    cohort: '2023',
    date: '24 Okt 2024',
    status: 'Menunggu Verifikasi',
    tone: 'waiting',
  };

  return (
    <main className="detail-pendaftar-page">
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
          <button type="button" className="beranda-nav__item" onClick={() => onNavigate?.('/konten-beranda')}>
            <FileText size={17} strokeWidth={1.8} />
            <span>Kelola Konten</span>
          </button>
          <button type="button" className="beranda-nav__item beranda-nav__item--active" onClick={onBack}>
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

      <section className="detail-pendaftar-main">
        <header className="beranda-header">
          <h1>Pendaftar</h1>
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

        <div className="detail-pendaftar-content">
          <button type="button" className="detail-pendaftar-back" onClick={onBack}>
            <ArrowLeft size={15} strokeWidth={1.8} />
            <span>Kembali ke Pendaftar</span>
          </button>

          <section className="detail-pendaftar-hero">
            <div>
              <div className="detail-pendaftar-hero__title-row">
                <h2>Detail Pendaftar</h2>
                <span className="detail-pendaftar-hero__id">#{data.nim}</span>
              </div>
              <p>{data.name} • {data.email}</p>
            </div>
            <span className={`detail-pendaftar-status detail-pendaftar-status--${data.tone}`}>
              <i />
              {data.status}
            </span>
          </section>

          <section className="detail-pendaftar-card">
            <div className="detail-pendaftar-card__title">
              <img className="ui-section-icon ui-section-icon--person" src={personalIcon} alt="" aria-hidden="true" />
              <h3>Informasi Mahasiswa</h3>
            </div>
            <div className="detail-pendaftar-info-grid">
              <div className="detail-pendaftar-info">
                <span>Nama Lengkap</span>
                <strong>{data.name}</strong>
              </div>
              <div className="detail-pendaftar-info">
                <span>NIM</span>
                <strong>{data.nim}</strong>
              </div>
              <div className="detail-pendaftar-info">
                <span>Email</span>
                <strong>{data.email}</strong>
              </div>
              <div className="detail-pendaftar-info">
                <span>Program Studi</span>
                <strong>{data.study}</strong>
              </div>
              <div className="detail-pendaftar-info">
                <span>Angkatan</span>
                <strong>{data.cohort}</strong>
              </div>
              <div className="detail-pendaftar-info">
                <span>No. WhatsApp</span>
                <strong>0812 3456 7890</strong>
              </div>
            </div>
          </section>

          <section className="detail-pendaftar-card">
            <div className="detail-pendaftar-card__title">
              <img className="ui-section-icon ui-section-icon--game" src={gameIcon} alt="" aria-hidden="true" />
              <h3>Informasi Game</h3>
            </div>
            <div className="detail-pendaftar-info-grid detail-pendaftar-info-grid--game">
              <div className="detail-pendaftar-info">
                <span>Game Pilihan</span>
                <strong>{data.game}</strong>
              </div>
              <div className="detail-pendaftar-info">
                <span>Nickname / ID Game</span>
                <strong>Player#{data.nim.slice(-4)}</strong>
              </div>
              <div className="detail-pendaftar-info">
                <span>Rank Saat Ini</span>
                <strong>Gold III</strong>
              </div>
            </div>
          </section>

          <section className="detail-pendaftar-card">
            <div className="detail-pendaftar-card__title">
              <img className="ui-section-icon ui-section-icon--motivation" src={motivationIcon} alt="" aria-hidden="true" />
              <h3>Motivasi Bergabung</h3>
            </div>
            <div className="detail-pendaftar-motivation">
              Saya ingin mengembangkan kemampuan bermain secara kompetitif, menambah pengalaman dalam tim,
              serta berkontribusi dalam kegiatan dan turnamen UKM Esports Tel-U.
            </div>
          </section>

          <section className="detail-pendaftar-card detail-pendaftar-card--documents">
            <div className="detail-pendaftar-card__title">
              <img className="ui-section-icon ui-section-icon--document" src={documentIcon} alt="" aria-hidden="true" />
              <h3>Dokumen Pendaftaran</h3>
            </div>

            <div className="detail-pendaftar-documents">
              <article className="detail-document">
                <div className="detail-document__head">
                  <div>
                    <h4>Kartu Tanda Mahasiswa (KTM)</h4>
                    <p>ktm_{data.nim}.jpg</p>
                  </div>
                  <span>1.8 MB</span>
                </div>
                <div className="detail-document__preview detail-document__preview--ktm">
                  <div className="detail-document__ktm-mark">TEL-U</div>
                  <div>
                    <strong>{data.name}</strong>
                    <span>{data.nim}</span>
                    <span>{data.study}</span>
                  </div>
                </div>
                <div className="detail-document__view-actions">
                  <button type="button"><Eye size={13} strokeWidth={1.9} /> Lihat Penuh</button>
                  <button type="button"><Download size={13} strokeWidth={1.9} /> Download</button>
                </div>
                <div className="detail-document__actions">
                  <button type="button"><Check size={13} strokeWidth={2} /> Valid</button>
                  <button type="button"><X size={13} strokeWidth={2} /> Tidak Valid</button>
                </div>
              </article>

              <article className="detail-document">
                <div className="detail-document__head">
                  <div>
                    <h4>Bukti Follow Instagram</h4>
                    <p>bukti_follow_{data.nim}.jpg</p>
                  </div>
                  <span>1.2 MB</span>
                </div>
                <div className="detail-document__preview detail-document__preview--instagram">
                  <div className="detail-document__screenbar" />
                  <div className="detail-document__screenbody">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="detail-document__view-actions">
                  <button type="button"><Eye size={13} strokeWidth={1.9} /> Lihat Penuh</button>
                  <button type="button"><Download size={13} strokeWidth={1.9} /> Download</button>
                </div>
                <div className="detail-document__actions">
                  <button type="button"><Check size={13} strokeWidth={2} /> Valid</button>
                  <button type="button"><X size={13} strokeWidth={2} /> Tidak Valid</button>
                </div>
              </article>
            </div>
          </section>

          <section className="detail-pendaftar-review">
            <div>
              <span>Status Pendaftaran:</span>
              <strong className={`detail-pendaftar-review__status detail-pendaftar-review__status--${data.tone}`}>
                <i />
                {data.status}
              </strong>
            </div>
            <div className="detail-pendaftar-review__actions">
              <button type="button" className="detail-pendaftar-reject">Tolak Pendaftar</button>
              <button type="button" className="detail-pendaftar-accept">Terima Pendaftar</button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
