import Title from './components/title/title';
import Picture from './components/picture/picture';
import pikachu from './components/picture/public/img/Pikachu.webp';

function App() {
  return (
    <div>
      <Title _param1={'Bachir'} _param2={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima?'}/>
      <Picture _param1={'https://pngimg.com/uploads/pokemon/pokemon_PNG93.png'} _param2={pikachu}/>
    </div>
  );
}

export default App;