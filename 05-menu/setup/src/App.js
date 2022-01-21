import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

//new Set
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {
	const [menuItems, setMenuItems] = useState(items)
	const [categories, setCategories] = useState(allCategories)

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items)
			return
		}
		const newItems = items.filter((item) => item.category === category)
		setMenuItems(newItems)
	}
	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>our menu</h2>
					<div className='underline'></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}

export default App

/**
 * Okay so down on line 22 we have our main return of what we'll see on the page.
 * line 26 is the title of the page followed by a decorative div
 * line 29 is our Categories component. We're passing it the categories state as a prop and a filter items function
 *
 *  on line 7 we have the allCategories array consisting of a manually added 'All' and then we spread out
 *  the mapped out items imported from data.js. The new Set wrapped around the map has it only return unique values. This is
 *  helpful so we only have one of each and if we update our data, the categories menu will update automatically.
 *  On line 14 we have the filterItems function that takes a category as a arg. If the category equals 'All',
 *  we set the state back to the original data list. Otherwise we create an array of items that have the matching category.
 *  We do this by filtering through the original list and setting it an array newItems.
 *  then we setMenuItems to new items.
 *
 * line 30 is the Menu component, passing in menuItems as props
 *
 */
