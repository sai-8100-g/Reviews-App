import './index.css'

const ReviewsCarousel = props => {
  const {newList, onForwardClick, onBackwardClick} = props
  const {imgUrl, username, companyName, description} = newList

  const onForwardRight = () => {
    onForwardClick()
  }

  const onBackwardLeft = () => {
    onBackwardClick()
  }

  return (
    <div className="review-container">
      <img src={imgUrl} alt={username} />
      <div className="arrow-container">
        <button
          type="button"
          data-testId="leftArrow"
          className="left-arrow"
          onClick={onBackwardLeft}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <p className="username">{username}</p>
        <button
          type="button"
          data-testId="rightArrow"
          className="right-arrow"
          onClick={onForwardRight}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
      <p>{companyName}</p>
      <p>{description}</p>
    </div>
  )
}

export default ReviewsCarousel
