import { useMemo, useState } from 'react';
import {
  FileText,
  Bell,
  Eye,
  EyeOff,
  Gamepad2,
  Home,
  ImageUp,
  LogOut,
  Pencil,
  Plus,
  Save,
  Table2,
  Trash2,
  Trophy,
} from 'lucide-react';
import logo from '../assets/logo-figma.png';
import dashboardIcon from '../assets/ui-icons/Icon.png';
import pendaftarIcon from '../assets/ui-icons/Icon-3.png';
import anggotaIcon from '../assets/ui-icons/Icon-7.png';
import gameSectionIcon from '../assets/game-divisi-icons/game-section-icon.png';
import mlbbLogo from '../assets/game-divisi-icons/mlbb.png';
import pubgLogo from '../assets/game-divisi-icons/pubg.png';

const gameSeed = [
  {
    id: 'mlbb',
    name: 'Mobile Legends: Bang Bang',
    short: 'MLBB',
    division: 'Divisi MOBA',
    description: 'Divisi MOBA mobile 5v5 untuk turnamen mahasiswa dan liga kampus.',
    registration: 'DIBUKA',
    visible: true,
    logo: mlbbLogo,
    logoName: 'mlbb-emblem.png',
    logoMeta: '512 × 512 px · PNG',
    bannerName: 'mlbb-banner.webp',
    bannerMeta: '1920 × 1080 px · 420 KB',
  },
  {
    id: 'pubg',
    name: 'PUBG Mobile',
    short: 'PUBG',
    division: 'Divisi Battle Royale',
    description: 'Divisi Battle Royale 4-man squad kompetisi IESPA/LIMA nasional.',
    registration: 'DIBUKA',
    visible: true,
    logo: pubgLogo,
    logoName: 'pubg-logo.png',
    logoMeta: '512 × 512 px · PNG',
    bannerName: 'pubg-banner.webp',
    bannerMeta: '1920 × 1080 px · 386 KB',
  },
  {
    id: 'valorant',
    name: 'Valorant',
    short: 'VLRN',
    division: 'Tactical FPS PC',
    description: 'Divisi Tactical FPS PC turnamen antarmahasiswa dan piala rektor.',
    registration: 'DIBUKA',
    visible: true,
    logo: null,
    logoName: 'valorant-logo.png',
    logoMeta: '512 × 512 px · PNG',
    bannerName: 'valorant-banner.webp',
    bannerMeta: '1920 × 1080 px · 404 KB',
  },
  {
    id: 'efootball',
    name: 'eFootball',
    short: 'EFB',
    division: 'Sports Simulation',
    description: 'Divisi simulasi olahraga sepak bola konsol dan mobile universitas.',
    registration: 'DITUTUP',
    visible: true,
    logo: null,
    logoName: 'efootball-logo.png',
    logoMeta: '512 × 512 px · PNG',
    bannerName: 'efootball-banner.webp',
    bannerMeta: '1920 × 1080 px · 395 KB',
  },
];

function GameLogo({ game, large = false }) {
  if (game.logo) {
    return <img className={large ? 'game-divisi-logo game-divisi-logo--large' : 'game-divisi-logo'} src={game.logo} alt="" aria-hidden="true" />;
  }
  return (
    <span className={large ? 'game-divisi-logo-fallback game-divisi-logo-fallback--large' : 'game-divisi-logo-fallback'} aria-hidden="true">
      {game.short.slice(0, 2)}
    </span>
  );
}

export default function KontenGameDivisi({ onLogout, onNavigate }) {
  const [games, setGames] = useState(gameSeed);
  const [editingId, setEditingId] = useState(null);
  const [adding, setAdding] = useState(false);
  const editingGame = useMemo(() => games.find((item) => item.id === editingId) || null, [games, editingId]);
  const [draft, setDraft] = useState(null);

  function openEdit(game) {
    setAdding(false);
    setEditingId(game.id);
    setDraft({ ...game });
    requestAnimationFrame(() => {
      document.getElementById('game-edit-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function openAdd() {
    setEditingId(null);
    setAdding(true);
    setDraft({
      id: '',
      name: '',
      short: '',
      division: '',
      description: '',
      registration: 'DIBUKA',
      visible: true,
      logo: null,
      logoName: '',
      logoMeta: '',
      bannerName: '',
      bannerMeta: '',
    });
    requestAnimationFrame(() => {
      document.getElementById('game-edit-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function closeEdit() {
    setAdding(false);
    setEditingId(null);
    setDraft(null);
  }

  function saveEdit() {
    if (!draft) return;

    if (adding) {
      const newGame = {
        ...draft,
        id: 'game-' + Date.now(),
        division: draft.division || 'Divisi Game',
        logoName: draft.logoName || 'logo-game.png',
        logoMeta: draft.logoMeta || 'PNG / JPG',
        bannerName: draft.bannerName || 'banner-game.webp',
        bannerMeta: draft.bannerMeta || 'Rasio 16:9',
      };
      setGames((items) => [...items, newGame]);
      setAdding(false);
      setDraft(null);
      return;
    }

    setGames((items) => items.map((item) => (item.id === draft.id ? { ...draft } : item)));
    setEditingId(draft.id);
  }

  return (
    <main className="game-divisi-page">
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
          <button type="button" className="beranda-nav__item beranda-nav__item--active" onClick={() => onNavigate?.('/konten-beranda')}>
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

      <section className="game-divisi-main">
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

        <div className="game-divisi-content">
          <div className="konten-tabs" role="tablist" aria-label="Kelola Konten">
            <button type="button" className="konten-tab" onClick={() => onNavigate?.('/konten-beranda')}>
              <Home size={13} strokeWidth={2} />
              <span>Beranda</span>
            </button>
            <button type="button" className="konten-tab konten-tab--active">
              <Gamepad2 size={13} strokeWidth={1.9} />
              <span>Game / Divisi</span>
            </button>
            <button type="button" className="konten-tab" onClick={() => onNavigate?.('/konten-event')}>
              <Trophy size={13} strokeWidth={1.9} />
              <span>Event</span>
            </button>
          </div>

          {!adding ? (
            <>
          <section className="game-divisi-topbar">
            <div className="game-divisi-count">
              <span className="game-divisi-count__dot" />
              <strong>4 Divisi Game Terdaftar</strong>
            </div>
            <button type="button" className="game-divisi-add" onClick={openAdd}>
              <Plus size={13} strokeWidth={2.1} />
              <span>Tambah Game</span>
            </button>
          </section>

          <section className="game-divisi-table-card">
            <div className="game-divisi-table-head">
              <img src={gameSectionIcon} alt="" aria-hidden="true" />
              <h2>Daftar Game / Divisi</h2>
            </div>

            <div className="game-divisi-table-wrap">
              <table className="game-divisi-table">
                <thead>
                  <tr>
                    <th>LOGO</th>
                    <th>NAMA GAME &amp; SINGKATAN</th>
                    <th>DESKRIPSI SINGKAT</th>
                    <th>STATUS<br />PENDAFTARAN</th>
                    <th>STATUS<br />TAMPIL</th>
                    <th>AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {games.map((game) => (
                    <tr key={game.id} className={editingId === game.id ? 'game-divisi-row game-divisi-row--editing' : 'game-divisi-row'}>
                      <td><GameLogo game={game} /></td>
                      <td>
                        <div className="game-divisi-name">
                          <strong>{game.name}</strong>
                          <div>
                            <span>{game.short}</span>
                            <small>| {game.division}</small>
                          </div>
                        </div>
                      </td>
                      <td><p className="game-divisi-description">{game.description}</p></td>
                      <td>
                        <span className={game.registration === 'DIBUKA' ? 'game-divisi-registration game-divisi-registration--open' : 'game-divisi-registration game-divisi-registration--closed'}>
                          {game.registration}
                        </span>
                      </td>
                      <td>
                        <span className="game-divisi-visible">
                          <Eye size={12} strokeWidth={2} />
                          TAMPIL
                        </span>
                      </td>
                      <td>
                        <div className="game-divisi-actions">
                          <button type="button" className={editingId === game.id ? 'game-divisi-edit game-divisi-edit--active' : 'game-divisi-edit'} onClick={() => openEdit(game)}>
                            <Pencil size={12} strokeWidth={2} />
                            <span>Edit</span>
                          </button>
                          <button type="button" className="game-divisi-delete" aria-label={'Hapus ' + game.name}>
                            <Trash2 size={13} strokeWidth={1.9} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
            </>
          ) : null}

          {draft && (editingGame || adding) ? (
            <section className="game-edit-card" id="game-edit-form">
              <div className="game-edit-head">
                <div className="game-edit-head__icon">
                  <Pencil size={16} strokeWidth={2} />
                </div>
                <div className="game-edit-head__copy">
                  <div className="game-edit-head__title-row">
                    <h2>{adding ? 'Tambah Game / Divisi Baru' : 'Edit Game / Divisi: ' + (editingGame.id === 'mlbb' ? 'Mobile Legends' : editingGame.name)}</h2>
                    {!adding ? <span>SEDANG DISUNTING</span> : null}
                  </div>
                  <p>{adding ? 'Lengkapi informasi dan visibilitas game baru yang akan ditampilkan di website mahasiswa.' : 'Perbarui informasi dan visibilitas game di website mahasiswa.'}</p>
                </div>
              </div>

              <div className="game-edit-body">
                <div className="game-edit-column game-edit-column--text">
                  <label className="game-edit-field">
                    <span>Nama Game</span>
                    <input
                      placeholder={adding ? 'Contoh: Free Fire / Apex Legends' : ''}
                      value={draft.name}
                      onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                    />
                  </label>

                  <label className="game-edit-field">
                    <span>Singkatan / Tag Kode</span>
                    <input
                      className="game-edit-mono"
                      maxLength={5}
                      placeholder={adding ? 'CONTOH: FF / APEX' : ''}
                      value={draft.short}
                      onChange={(e) => setDraft({ ...draft, short: e.target.value.toUpperCase() })}
                    />
                    {adding ? <small className="game-edit-helper">Maksimal 5 karakter, digunakan pada badge kartu pendaftaran.</small> : null}
                  </label>

                  <label className="game-edit-field">
                    <span>Deskripsi Singkat Divisi</span>
                    <textarea
                      rows={5}
                      placeholder={adding ? 'Tuliskan deskripsi singkat divisi game untuk pendaftar...' : ''}
                      value={draft.description}
                      onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                    />
                    {adding ? <small className="game-edit-helper">Ditampilkan pada ringkasan divisi dan formulir pemilihan cabang.</small> : null}
                  </label>
                </div>

                <div className="game-edit-column game-edit-column--media">
                  <div className="game-edit-media-grid">
                    <div className="game-edit-upload">
                      <span className="game-edit-upload__label">Logo Game (Square 1:1)</span>
                      {adding ? (
                        <div className="game-add-upload-box">
                          <ImageUp size={20} strokeWidth={1.7} />
                          <strong>Unggah Logo Game</strong>
                          <span>PNG, JPG maks 2MB (1:1)</span>
                        </div>
                      ) : (
                        <div className="game-edit-upload__preview">
                          <GameLogo game={draft} large />
                          <div>
                            <strong>{draft.logoName}</strong>
                            <span>{draft.logoMeta}</span>
                          </div>
                        </div>
                      )}
                      <button type="button">
                        <ImageUp size={12} strokeWidth={1.9} />
                        <span>{adding ? 'Pilih Logo' : 'Ganti Logo'}</span>
                      </button>
                    </div>

                    <div className="game-edit-upload">
                      <span className="game-edit-upload__label">Banner Game (16:9)</span>
                      {adding ? (
                        <div className="game-add-upload-box game-add-upload-box--banner">
                          <ImageUp size={20} strokeWidth={1.7} />
                          <strong>Unggah Banner Game</strong>
                          <span>Rasio 16:9 · Maks 5MB</span>
                        </div>
                      ) : (
                        <div className="game-edit-banner-preview">
                          <div className="game-edit-banner-preview__art" />
                          <div>
                            <strong>{draft.bannerName}</strong>
                            <span>{draft.bannerMeta}</span>
                          </div>
                        </div>
                      )}
                      <button type="button">
                        <ImageUp size={12} strokeWidth={1.9} />
                        <span>{adding ? 'Pilih Banner' : 'Ganti Banner'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="game-edit-status-grid">
                    <div className="game-edit-status-control">
                      <span>Status Pendaftaran</span>
                      <div>
                        <button type="button" className={draft.registration === 'DIBUKA' ? 'is-active is-open' : ''} onClick={() => setDraft({ ...draft, registration: 'DIBUKA' })}>Dibuka</button>
                        <button type="button" className={draft.registration === 'DITUTUP' ? 'is-active is-closed' : ''} onClick={() => setDraft({ ...draft, registration: 'DITUTUP' })}>Ditutup</button>
                      </div>
                    </div>

                    <div className="game-edit-status-control">
                      <span>Status Tampil di Web</span>
                      <div>
                        <button type="button" className={draft.visible ? 'is-active is-visible' : ''} onClick={() => setDraft({ ...draft, visible: true })}>
                          <Eye size={11} strokeWidth={1.9} /> Tampil
                        </button>
                        <button type="button" className={!draft.visible ? 'is-active is-hidden' : ''} onClick={() => setDraft({ ...draft, visible: false })}>
                          <EyeOff size={11} strokeWidth={1.9} /> Sembunyikan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="game-edit-footer">
                <button type="button" className="game-edit-cancel" onClick={closeEdit}>Batal</button>
                <button type="button" className="game-edit-save" onClick={saveEdit}>
                  <Save size={13} strokeWidth={2} />
                  <span>{adding ? 'Simpan Game Baru' : 'Simpan Perubahan Game'}</span>
                </button>
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
