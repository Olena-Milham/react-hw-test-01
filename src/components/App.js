import Painting from './Painting';
import paintings from '../paintings.json'

export default function App () {
  return (<div>
    <Painting
    imageUrl={paintings[0].url}
    title={paintings[0].title}
    author = {paintings[0].author.tag}
    profile ={paintings[0].profile}
    price = {paintings[0].price}
    />
    </div>)

};
