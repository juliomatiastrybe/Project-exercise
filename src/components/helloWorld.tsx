import calculateAge from '../helpers/calculateAge';
import Header from './header';
import ModuleDetails from './moduleDetails';

function HelloWorld() {
  const name = 'Julio Matias';
  const birth = '04/03/1996';
  const age = calculateAge(birth);
  console.log(age);

  return (
    <>
      <h1>{`Nome: ${name}`}</h1>
      <h2>{`Idade: ${age}`}</h2>
      <Header />
      <ModuleDetails />
    </>
  );
}

export default HelloWorld;
