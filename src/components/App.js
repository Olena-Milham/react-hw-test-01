import PaintingList from './PaintingList'
import paintings from '../paintings.json'
import Section from './Section'

export default function App () {
  return (<div>
    
    
    <Section title='Top of the week'>
      <PaintingList cards={paintings}/></Section>
    <Section />
    
    </div>)
};
