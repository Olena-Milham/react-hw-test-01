import Painting from './Painting';
import PropTypes from 'prop-types';
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
PaintingList.propTypes={
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
        })
    )
}
export default PaintingList;
