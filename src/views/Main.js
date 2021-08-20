import Header from '../components/Header';
import Btn from '../components/mainComponents/Btn';
import Playboard from '../components/mainComponents/Playboard';
function Main() {
  return (
    <div className="grid main">
      <Header text="The Shadow" />
      <Btn />
      <Playboard />
    </div>
  );
}

export default Main;
