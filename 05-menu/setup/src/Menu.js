import React from 'react'

const Menu = ({ items }) => {
	return (
		<div className='section-center'>
			{items.map((menuItem) => {
				const { id, title, img, desc, price } = menuItem
				return (
					<article key={id} className='menu-item'>
						<img src={img} alt={title} className='photo' />
						<div className='item-info'>
							<header>
								<h4>{title}</h4>
								<h4 className='price'>${price}</h4>
							</header>
							<p className='item-text'>{desc}</p>
						</div>
					</article>
				)
			})}
		</div>
	)
}

export default Menu
/**
 * line 3 is the menu component passing in items as props
 * on line 6 we map thru the items
 * line 7 we deconstruct each menuItem obj returning an article on line 9 with necessary key equalling menu items id.
 * the img, title, price, and description are all pulled in thier places
 *
 */
