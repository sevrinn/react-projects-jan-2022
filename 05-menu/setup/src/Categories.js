import React from 'react'

const Categories = ({ categories, filterItems }) => {
	return (
		<div className='btn-container'>
			{categories.map((category, index) => {
				return (
					<button
						type='button'
						className='filter-btn'
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				)
			})}
		</div>
	)
}

export default Categories

/**
 * On line 3 we destruct our props
 * in the main return on line 4, we have a div container on line 5
 * line 6 maps through the categories passed in as props passing in category, index as args.
 * for every category in the array we return a button. the key has to be added and since its simple, going by index is fine
 * when clicked each button will run the filterItems function passed in on its specific category. the All button
 * resets it to All the categories.
 * The text of the button is its specific category
 */
