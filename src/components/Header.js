import { useLocation } from 'react-router-dom';

function Header({ text }) {
  const location = useLocation();
  const locationPath = location.pathname;

  console.log(location.pathname);
  let animation = 'enable';
  function enableDisable() {
    if (locationPath === '/') {
      animation = 'enable';
    } else {
      animation = 'disable';
    }
  }
  enableDisable();
  return (
    <header className={animation}>
      <h1>{text}</h1>
      <svg width="314" height="15" viewBox="0 0 314 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12H156.5L238.5 4L313 12" stroke="#303036" strokeWidth="6" />
      </svg>
    </header>
  );
}

export default Header;
