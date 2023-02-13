
import Painting from './Painting'
function PaintingList ({cards}) {
   return (
    <ul>
    {cards.map(card=>(
        <li key={card.id}>
            <Painting    
imageUrl={card.url}
title={card.title}
author = {card.author.tag}
profile ={card.author.url}
price = {card.price}
quantity={card.quantity}
/>

        </li>
    ))}
</ul>
   );
}
export default PaintingList;
