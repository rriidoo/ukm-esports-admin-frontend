import {
  ArrowLeft,
  Bell,
  Download,
  Eye,
  FileText,
  LogOut,
  Table2,
} from 'lucide-react';
import logo from '../assets/logo-figma.png';
import dashboardIcon from '../assets/ui-icons/Icon.png';
import pendaftarIcon from '../assets/ui-icons/Icon-3.png';
import anggotaIcon from '../assets/ui-icons/Icon-7.png';
import personalIcon from '../assets/ui-icons/Icon-2.png';
import gameIcon from '../assets/ui-icons/Icon-4.png';
import motivationIcon from '../assets/ui-icons/Icon-6.png';
import documentIcon from '../assets/ui-icons/Icon-10.png';

const fallbackMember = {
  initials: 'RS',
  name: 'Rido Sihombing',
  email: 'rido.s@ittelkom-pwt.ac.id',
  nim: '23102014',
  study: 'S1 Informatika',
  game: 'Mobile Legends',
  cohort: '2023',
};

export default function DetailAnggota({ member, onBack, onLogout, onNavigate }) {
  const data = member || fallbackMember;

  return (
    <main className="detail-anggota-page">
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

          <button type="button" className="beranda-nav__item" onClick={() => onNavigate?.('/pendaftar')}>
            <img className="ui-nav-icon ui-nav-icon--pendaftar" src={pendaftarIcon} alt="" aria-hidden="true" />
            <span>Pendaftar</span>
          </button>

          <button type="button" className="beranda-nav__item beranda-nav__item--active" onClick={onBack}>
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

      <section className="detail-anggota-main">
        <header className="beranda-header">
          <h1>Anggota</h1>
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

        <div className="detail-anggota-content">
          <button type="button" className="detail-anggota-back" onClick={onBack}>
            <ArrowLeft size={15} strokeWidth={1.8} />
            <span>Kembali ke Anggota</span>
          </button>

          <section className="detail-anggota-hero">
            <div>
              <div className="detail-anggota-hero__title-row">
                <h2>Detail Anggota</h2>
                <span className="detail-anggota-hero__id">#REG-2024-0892</span>
              </div>
              <p>Diterima 14 Okt 2024, 10:24 WIB</p>
            </div>
          </section>

          <section className="detail-anggota-card">
            <div className="detail-anggota-card__title">
              <img className="ui-section-icon ui-section-icon--person" src={personalIcon} alt="" aria-hidden="true" />
              <h3>Informasi Mahasiswa</h3>
            </div>

            <div className="detail-anggota-info-grid">
              <div className="detail-anggota-info">
                <span>Nama Lengkap</span>
                <strong>{data.name}</strong>
              </div>
              <div className="detail-anggota-info">
                <span>NIM</span>
                <strong className="detail-anggota-mono">{data.nim}</strong>
              </div>
              <div className="detail-anggota-info">
                <span>Email Kampus</span>
                <strong className="detail-anggota-info__regular">{data.email}</strong>
              </div>
              <div className="detail-anggota-info">
                <span>Program Studi</span>
                <strong>{data.study}</strong>
              </div>
              <div className="detail-anggota-info">
                <span>Angkatan</span>
                <strong>{data.cohort}</strong>
              </div>
              <div className="detail-anggota-info">
                <span>Nomor WhatsApp</span>
                <strong className="detail-anggota-mono">+62 812-3456-7890</strong>
              </div>
            </div>
          </section>

          <section className="detail-anggota-card">
            <div className="detail-anggota-card__title">
              <img className="ui-section-icon ui-section-icon--game" src={gameIcon} alt="" aria-hidden="true" />
              <h3>Informasi Game</h3>
            </div>

            <div className="detail-anggota-info-grid detail-anggota-info-grid--game">
              <div className="detail-anggota-info">
                <span>Game / Divisi</span>
                <strong>{member ? data.game : 'Mobile Legends'}</strong>
              </div>
              <div className="detail-anggota-info">
                <span>Nickname / ID Game</span>
                <strong className="detail-anggota-mono">Progamer#1234</strong>
              </div>
              <div className="detail-anggota-info">
                <span>Rank / Pangkat Saat Ini</span>
                <strong>Mythic Honor</strong>
              </div>
            </div>
          </section>

          <section className="detail-anggota-card">
            <div className="detail-anggota-card__title">
              <img className="ui-section-icon ui-section-icon--motivation" src={motivationIcon} alt="" aria-hidden="true" />
              <h3>Motivasi Bergabung</h3>
            </div>

            <div className="detail-anggota-motivation">
              Saya ingin meningkatkan kemampuan bermain secara kompetitif dan mengikuti turnamen nasional mewakili kampus bersama komunitas Tel-U Esports. Selain itu saya ingin berkontribusi dalam manajemen scrim dan latihan rutin divisi Mobile Legends.
            </div>
          </section>

          <section className="detail-anggota-card detail-anggota-card--documents">
            <div className="detail-anggota-card__title">
              <img className="ui-section-icon ui-section-icon--document" src={documentIcon} alt="" aria-hidden="true" />
              <h3>Dokumen Pendaftaran</h3>
            </div>

            <div className="detail-anggota-documents">
              <article className="detail-anggota-document">
                <div className="detail-anggota-document__head">
                  <div>
                    <h4>Kartu Tanda Mahasiswa (KTM)</h4>
                    <p>ktm_rido_sihombing_23102014.pdf</p>
                  </div>
                  <span>1.8 MB</span>
                </div>

                <div className="detail-anggota-document__preview detail-anggota-document__preview--ktm">
                  <div className="detail-anggota-document__ktm-mark">TEL-U</div>
                  <div>
                    <strong>{data.name}</strong>
                    <span>{data.nim}</span>
                    <span>{data.study}</span>
                  </div>
                </div>

                <div className="detail-anggota-document__actions">
                  <button type="button"><Eye size={13} strokeWidth={1.9} /> Lihat Penuh</button>
                  <button type="button"><Download size={13} strokeWidth={1.9} /> Download</button>
                </div>
              </article>

              <article className="detail-anggota-document">
                <div className="detail-anggota-document__head">
                  <div>
                    <h4>Bukti Follow Instagram</h4>
                    <p>bukti_follow_instagram.jpg</p>
                  </div>
                  <span>850 KB</span>
                </div>

                <div className="detail-anggota-document__preview detail-anggota-document__preview--instagram">
                  <div className="detail-anggota-document__screenbar" />
                  <div className="detail-anggota-document__screenbody">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="detail-anggota-document__actions">
                  <button type="button"><Eye size={13} strokeWidth={1.9} /> Lihat Penuh</button>
                  <button type="button"><Download size={13} strokeWidth={1.9} /> Download</button>
                </div>
              </article>
            </div>
          </section>

          <section className="detail-anggota-actions">
            <button type="button" className="detail-anggota-delete">Delate Anggota</button>
          </section>
        </div>
      </section>
    </main>
  );
}
