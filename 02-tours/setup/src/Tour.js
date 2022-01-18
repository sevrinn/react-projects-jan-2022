import React, { useState } from 'react'

//destruct props immediately
const Tour = ({ id, image, info, price, name, removeTour }) => {
	//STATE
	const [readMore, setReadMore] = useState(false) //readMore is initally set to false

	return (
		<article className='single-tour'>
			<img src={image} alt={name} />
			<footer>
				<div className='tour-info'>
					<h4>{name}</h4>
					<h4 className='tour-price'>${price}</h4>
				</div>
				<p>
					{/* if readmore is true, display all of info, otherwise show just portion */}
					{readMore ? info : `${info.substring(0, 200)}...`}
					{/* when clicked, set readMore to the opposite of what it currently is */}
					<button
						onClick={() => {
							setReadMore(!readMore)
						}}
					>
						{/* if readMore is true button says show less, otherwise have it say show more */}
						{readMore ? 'show less' : 'show more'}
					</button>
				</p>
				{/* when clicked, invokes the removeTour function */}
				<button className='delete-btn' onClick={() => removeTour(id)}>
					not interested
				</button>
			</footer>
		</article>
	)
}

export default Tour
