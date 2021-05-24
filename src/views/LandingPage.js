import LandingForm from '../components/LandingForm';
import Header from '../components/Header';
import '../styles/main.scss';

function LandingPage() {
  return (
    <article>
      <Header text="The Shadow" />
      <LandingForm text="Login" />
    </article>
  );
}

export default LandingPage;
