import PaintingList from './PaintingList'
import paintings from '../paintings.json'

export default function App () {
  return (<div>
    {paintings.map(painting=>( 
    <PaintingList cards={paintings}/>
    ))}
    </div>)
};
