import "../css/ProductCard.css";


function ProductCard(props) {
  // console.log(props)
  return (
    <div>
      <div className='mainContainer'>
        <div className='imageContainer'>
          <img src={(props.props.image)} alt="image1" loading='lazy'/>
        </div>
        <div className="contentContainer">
        <div className="namePrice">
          
        </div>
          <div className="tags">

          </div>
          <div className="addTo">

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard