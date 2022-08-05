import './App.css';
import Card from './Componentes/Card';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Estos son algunos Superheores famosos: </h1>
        <Card 
          nombre='Superman'
          creador='DC Comics'
          desc={['Más rápido que una', <strong> bala</strong>, ', más poderoso que una',<strong> locomotora... </strong>,'El Hombre de Acero libra una batalla interminable por la verdad, la justicia y el estilo estadounidense.']}
          imagen='superman' />

        <Card 
          nombre='Ironman'
          creador='Marvel'
          desc={['Anthony Edward Stark es el hijo del jefe de',<b> Industrias Stark</b>,', Howard Stark y su esposa Maria Stark. Un niño genio que ingresa al MIT a la edad de 15 años para estudiar Ingeniería Industrial, luego recibe maestrías en ingeniería eléctrica y física. Después de que sus padres mueren en un accidente automovilístico, hereda la compañía de su familia.']}
          imagen='ironman' />

        <Card
          nombre='Batman'
          creador='DC Comics'
          desc={['En nombre de sus padres asesinados, Bruce Wayne libra una guerra eterna contra los criminales de',<b> Gotham City. </b>,'El es la venganza. El es la noche. Él es Batman.']}
          imagen='batman' />
      </div>
    </div>
  );
}

export default App;
