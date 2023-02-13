
const Painting =({imageUrl, title, profile, author, price})=>{
    return(
        <div>
            <img src={imageUrl} alt={title} width="480"/>
            <h2>{title}</h2>
            <p>
                Author: <a href={profile}> {author} </a>
            </p>
            <p> Price: {price} credits</p>
            <p> Availability: out of stock or available </p>
<button type ='button'> Add to cart </button>
        </div>
    )
}
export default Painting;
