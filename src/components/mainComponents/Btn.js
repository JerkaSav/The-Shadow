import inventory from '../../assets/inventory.svg';
import logBook from '../../assets/logbook.svg';
import equipment from '../../assets/equipment.svg';
function Btn() {
  return (
    <div className="btns">
      <button className="btn-dark">
        <img src={inventory} alt="inventory" />
      </button>
      <button className="btn-dark">
        <img src={logBook} alt="logbook" />
      </button>
      <button className="btn-dark">
        <img src={equipment} alt="equipment" />
      </button>
    </div>
  );
}

export default Btn;
