import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
	const [index, setIndex] = useState(0)
	const { name, job, image, text } = people[index]

	//check number makes it so when we hit the end of the array, it loops back to zero
	//or when index becomes less than zero it loops to end of array.
	const checkNumber = (number) => {
		if (number > people.length - 1) {
			return 0
		}
		if (number < 0) {
			return people.length - 1
		}
		return number
	}
	//onClicks
	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1
			return checkNumber(newIndex)
		})
	}

	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1
			return checkNumber(newIndex)
		})
	}

	//random person
	const randomPerson = () => {
		let randomNumber = Math.floor(Math.random() * people.length)
		if (randomNumber === index) {
			randomNumber = index + 1
		}
		//using checkNumber on randomNumber ensures we dont go beyond the items in array
		setIndex(checkNumber(randomNumber))
	}
	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomPerson}>
				surprise me
			</button>
		</article>
	)
}

export default Review
