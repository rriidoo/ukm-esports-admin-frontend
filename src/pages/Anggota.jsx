import { useMemo, useState } from 'react';
import {
  Bell,
  FileText,
  Gamepad2,
  Grid2X2,
  LogOut,
  Search,
  Table2,
  UserRoundPlus,
  Users,
} from 'lucide-react';
import logo from '../assets/logo-figma.png';
import dashboardIcon from '../assets/ui-icons/Icon.png';
import pendaftarIcon from '../assets/ui-icons/Icon-3.png';
import anggotaIcon from '../assets/ui-icons/Icon-7.png';
import anggotaTotalIcon from '../assets/ui-icons/Icon-1.png';
import anggotaGameIcon from '../assets/ui-icons/Icon-11.png';
import anggotaCohortIcon from '../assets/ui-icons/Icon-12.png';

const members = [
  { initials: 'AB', name: 'Arya Bramanto', email: 'arya.b@ittelkom-pwt.ac.id', nim: '23102014', study: 'S1 Informatika', game: 'Valorant', cohort: '2023' },
  { initials: 'CN', name: 'Clara Nathania', email: 'clara.n@ittelkom-pwt.ac.id', nim: '24103022', study: 'S1 Desain Komunikasi Visual', game: 'Mobile Legends', cohort: '2024' },
  { initials: 'FR', name: 'Fajar Ramadhani', email: 'fajar.r@ittelkom-pwt.ac.id', nim: '22104089', study: 'S1 Rekayasa Perangkat Lunak', game: 'PUBG Mobile', cohort: '2022' },
  { initials: 'DA', name: 'Dewi Anggraini', email: 'dewi.a@ittelkom-pwt.ac.id', nim: '23101077', study: 'S1 Sistem Informasi', game: 'Valorant', cohort: '2023' },
  { initials: 'BW', name: 'Bagus Wicaksono', email: 'bagus.w@ittelkom-pwt.ac.id', nim: '21102051', study: 'S1 Teknik Telekomunikasi', game: 'eFootball', cohort: '2021' },
  { initials: 'RK', name: 'Rifqi Kurniawan', email: 'rifqi.k@ittelkom-pwt.ac.id', nim: '24102015', study: 'S1 Informatika', game: 'Valorant', cohort: '2024' },
  { initials: 'NP', name: 'Nadia Putri', email: 'nadia.p@ittelkom-pwt.ac.id', nim: '24103088', study: 'S1 Desain Komunikasi Visual', game: 'Mobile Legends', cohort: '2024' },
  { initials: 'DW', name: 'Dimas Wahyu', email: 'dimas.w@ittelkom-pwt.ac.id', nim: '23101019', study: 'S1 Informatika', game: 'eFootball', cohort: '2023' },
];

export default function Anggota({ onLogout, onNavigate, onDetail }) {
  const [query, setQuery] = useState('');
  const [game, setGame] = useState('');
  const [cohort, setCohort] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((item) => {
      const matchesQuery = !q || item.name.toLowerCase().includes(q) || item.nim.toLowerCase().includes(q);
      const matchesGame = !game || item.game === game;
      const matchesCohort = !cohort || item.cohort === cohort;
      return matchesQuery && matchesGame && matchesCohort;
    });
  }, [query, game, cohort]);

  return (
    <main className="anggota-page">
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
          <button type="button" className="beranda-nav__item beranda-nav__item--active">
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

      <section className="anggota-main">
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

        <div className="anggota-content">
          <section className="anggota-summary">
            <article className="anggota-stat anggota-stat--total">
              <div>
                <p>TOTAL ANGGOTA</p>
                <div className="anggota-stat__value">
                  <strong>580</strong>
                  <span>Mahasiswa</span>
                </div>
                <small><i /> Aktif di seluruh Program/Game</small>
              </div>
              <div className="anggota-stat__icon">
                <img className="anggota-stat__asset anggota-stat__asset--members" src={anggotaTotalIcon} alt="" aria-hidden="true" />
              </div>
            </article>

            <article className="anggota-stat anggota-stat--games">
              <div className="anggota-stat__head">
                <p>ANGGOTA PER GAME</p>
                <img className="anggota-stat__asset anggota-stat__asset--game" src={anggotaGameIcon} alt="" aria-hidden="true" />
              </div>
              <div className="anggota-game-grid">
                <div><span>Valorant</span><b className="anggota-number anggota-number--blue">225</b></div>
                <div><span>Mobile Legends</span><b className="anggota-number anggota-number--red">200</b></div>
                <div><span>PUBG M</span><b className="anggota-number anggota-number--yellow">120</b></div>
                <div><span>eFootball</span><b className="anggota-number anggota-number--cyan">80</b></div>
              </div>
            </article>

            <article className="anggota-stat anggota-stat--cohort">
              <div className="anggota-stat__head">
                <p>ANGGOTA PER ANGKATAN</p>
                <img className="anggota-stat__asset anggota-stat__asset--cohort" src={anggotaCohortIcon} alt="" aria-hidden="true" />
              </div>
              <div className="anggota-cohort-grid">
                <div><span>2021</span><b>80</b></div>
                <div><span>2022</span><b>120</b></div>
                <div><span>2023</span><b>175</b></div>
                <div><span>2024</span><b>205</b></div>
              </div>
            </article>
          </section>

          <section className="anggota-filter">
            <label className="anggota-search">
              <Search size={17} strokeWidth={1.8} />
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Cari nama atau NIM..."
              />
            </label>

            <select value={game} onChange={(event) => { setGame(event.target.value); setPage(1); }}>
              <option value="">Semua Game</option>
              <option value="Valorant">Valorant</option>
              <option value="Mobile Legends">Mobile Legends</option>
              <option value="PUBG Mobile">PUBG Mobile</option>
              <option value="eFootball">eFootball</option>
            </select>

            <select value={cohort} onChange={(event) => { setCohort(event.target.value); setPage(1); }}>
              <option value="">Semua Angkatan</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>

            <button type="button" className="anggota-reset" onClick={() => {
              setQuery('');
              setGame('');
              setCohort('');
              setPage(1);
            }}>
              Reset Filter
            </button>
          </section>

          <section className="anggota-table-card">
            <div className="anggota-table-scroll">
              <table className="anggota-table">
                <thead>
                  <tr>
                    <th>NAMA MAHASISWA</th>
                    <th>NIM</th>
                    <th>PROGRAM STUDI</th>
                    <th>GAME</th>
                    <th>ANGKATAN</th>
                    <th>AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr key={item.nim}>
                      <td>
                        <div className="anggota-person">
                          <span className="anggota-person__avatar">{item.initials}</span>
                          <div>
                            <strong>{item.name}</strong>
                            <span>{item.email}</span>
                          </div>
                        </div>
                      </td>
                      <td>{item.nim}</td>
                      <td>{item.study}</td>
                      <td>
                        <span className={`pendaftar-game pendaftar-game--${item.game.toLowerCase().replaceAll(' ', '-')}`}>
                          <i />
                          {item.game}
                        </span>
                      </td>
                      <td>{item.cohort}</td>
                      <td>
                        <button type="button" className="anggota-detail" onClick={() => onDetail?.(item)}>
                          Detail <span>›</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filtered.length === 0 && (
                <div className="pendaftar-empty">Tidak ada anggota yang sesuai dengan filter.</div>
              )}
            </div>

            <footer className="anggota-pagination">
              <p>
                Menampilkan <strong>{filtered.length ? '1–' + filtered.length : '0'}</strong> dari <strong>580</strong> anggota
              </p>
              <div className="pendaftar-pagination__controls">
                <button type="button" className="pendaftar-page-button pendaftar-page-button--wide" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>
                  ‹ Sebelumnya
                </button>
                {[1, 2, 3].map((n) => (
                  <button key={n} type="button" className={page === n ? 'pendaftar-page-button pendaftar-page-button--active' : 'pendaftar-page-button'} onClick={() => setPage(n)}>
                    {n}
                  </button>
                ))}
                <span className="pendaftar-pagination__ellipsis">...</span>
                <button type="button" className={page === 58 ? 'pendaftar-page-button pendaftar-page-button--active' : 'pendaftar-page-button'} onClick={() => setPage(58)}>
                  58
                </button>
                <button type="button" className="pendaftar-page-button pendaftar-page-button--wide" disabled={page === 58} onClick={() => setPage((current) => Math.min(58, current + 1))}>
                  Berikutnya ›
                </button>
              </div>
            </footer>
          </section>
        </div>
      </section>
    </main>
  );
}
