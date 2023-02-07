import Title from './components/title/title';
import Picture from './components/picture/picture';
import Info from './components/info/info';
import pikachu from './components/picture/public/img/Pikachu.webp';

function App() {
  const me = {
    photo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0491c21c-114d-496a-8954-8491759cb5f3/d8cnvs9-b67615e7-b2de-4578-a04b-21394b51a432.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wNDkxYzIxYy0xMTRkLTQ5NmEtODk1NC04NDkxNzU5Y2I1ZjMvZDhjbnZzOS1iNjc2MTVlNy1iMmRlLTQ1NzgtYTA0Yi0yMTM5NGI1MWE0MzIucG5nIn1dXX0.2XB9mjsGr1-ZsKXvvGVjD5ZhEUtK0jjtMzBmTfdaaRQ',
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