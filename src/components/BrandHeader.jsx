import logo from '../assets/logo-figma.png';

export default function BrandHeader() {
  return (
    <header className="brand" aria-label="UKM Esports Tel-U">
      <div className="brand__logo-wrap">
        <img className="brand__logo" src={logo} alt="Logo UKM Esports Tel-U" />
      </div>

      <h1 className="brand__title">
        <span className="brand__title-main">UKM ESPORTS</span>
        <span className="brand__title-accent">TEL-U</span>
      </h1>
      <p className="brand__subtitle">ADMIN CONSOLE</p>
    </header>
  );
}
