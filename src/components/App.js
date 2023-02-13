import PaintingList from './PaintingList'
import paintings from '../paintings.json'

export default function App () {
  return (<div>
    
    <PaintingList cards={paintings}/>
    
    </div>)
};
