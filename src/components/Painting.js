import PropTypes from 'prop-types'
const Painting =({imageUrl, title, profile, author, price, quantity})=>{
    return(
        <div>
            <img src={imageUrl} alt={title} width="480"/>
            <h2>{title}</h2>
            <p>
                Author: <a href={profile}> {author.tag} </a>
            </p>
            <p> Price: {price} credits</p>
            <p> Availability: {quantity<10 ? 'running low.isRequired' : 'available'}</p>
<button type ='button'> Add to cart </button>
        </div>
    )
};
Painting.propTypes={
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    quantity:PropTypes.number.isRequired,


}
export default Painting;
