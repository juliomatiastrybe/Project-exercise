import NumberRadom from './numbeRadom';

function LuckyNumbers() {
  return (
    <>
      <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
      <ul>
        <li>{NumberRadom()}</li>
        <li>{NumberRadom()}</li>
        <li>{NumberRadom()}</li>
        <li>{NumberRadom()}</li>
        <li>{NumberRadom()}</li>
        <li>{NumberRadom()}</li>
      </ul>
    </>
  );
}

export default LuckyNumbers;
