import React from 'react'
import Tour from './Tour'
// Tours component maps through tours gotten from api fetch and returns
//a Tour component for each one, using id as the key and using the spread operator to
// insert the rest.
const Tours = ({ tours, removeTour }) => {
	return (
		<section>
			<div className='title'>
				<h2>our tours</h2>
				<div className='underline'></div>
			</div>
			<div>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
				})}
			</div>
		</section>
	)
}

export default Tours
