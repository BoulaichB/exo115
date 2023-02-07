import Title from './components/title/title';
import Picture from './components/picture/picture';
import Info from './components/info/info';
import pikachu from './components/picture/public/img/Pikachu.webp';
import cartman from './components/info/public/img/cartman.png';

function App() {
  const me = {
    photo: cartman,
    name: 'Bachir',
    age: 22,
    size: '1.72cm'
  }
  return (
    <div>
      <Title _param1={'Bachir'} _param2={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima?'}/>
      <Picture _param1={'https://pngimg.com/uploads/pokemon/pokemon_PNG93.png'} _param2={pikachu}/>
      <Info _param1={me.photo} _param2={me.name} _param3={me.age} _param4={me.size}/>
    </div>
  );
}

export default App;