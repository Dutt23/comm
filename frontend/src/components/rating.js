import React from 'react'
import PropTypes from 'prop-types';

const Rating = ({ rating, text, color }) => {

	const star = (className, key) => 
	<i 
	key = {key}
	style={{ color }} 
	className={className}>
	</i>

const displayStars = (rating, color) => {
	if(!rating || isNaN(rating))
	return renderStars(5, "far fa-star", color);
	const numberOfStarts = Math.trunc(rating);
	const ceil = Math.ceil(rating)
	const emptyStars = 5 - ceil;
	const starList = []
	if (numberOfStarts > 0) {
		starList.push(renderStars(numberOfStarts, "fas fa-star"))
	}
	if (numberOfStarts !== ceil) {
		starList.push(renderStars(1, "fas fa-star-half"))
	}
	if (emptyStars > 0)
		starList.push(renderStars(emptyStars, "far fa-star"))
	return starList;
}

const renderStars = (limit, className) => {
	const starList = []
	for (let i = 0; i < limit; i++) {
		starList.push(star(className, `${i}${className}`))
	}
	return starList
}

	return (
		<div className="rating">
			{displayStars(rating, color)} {text && <span>{text}</span>}
		</div>
	)
}




Rating.defaulProps = {
	color: '#f8e825'
}
Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string
}
export default Rating
