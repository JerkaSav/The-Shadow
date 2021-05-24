function Header({ text }) {
  return (
    <header>
      <h1>{text}</h1>
      <svg width="314" height="15" viewBox="0 0 314 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12H156.5L238.5 4L313 12" stroke="#303036" strokeWidth="6" />
      </svg>
    </header>
  );
}

export default Header;
