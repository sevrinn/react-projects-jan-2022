import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//set url to the api endpoint
const url = 'https://course-api.com/react-tours-project'
function App() {
	const [loading, setLoading] = useState(true) //loading state initially set to true
	const [tours, setTours] = useState([]) //tours state initially set as an empty array

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id)
		setTours(newTours)
	}
	// Getting the tours from the api
	const fetchTours = async () => {
		setLoading(true) //sets loading to true
		// try catch block will show more than just the network errors
		// that regular ol' fetch would supply
		try {
			//if successfull
			const response = await fetch(url) //sets response to the data at api endpoint
			const tours = await response.json() //sets tours to that data, served up in json format
			setLoading(false) //sets loading to false
			setTours(tours) //sets tours to the tours data from the response
		} catch (error) {
			//if unsuccessful
			setLoading(false) //set loading to false
			console.log(error) // log the error
		}

		console.log(tours)
	}

	//use useEffect to run fetchTours once upon initial render
	useEffect(() => {
		fetchTours()
	}, [])

	//display logic
	//if loading is true, return the loading component
	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}
	//if the length of tours is 0, return the folowwing
	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>no tours left</h2>
					{/* this button will run fetchTours and reloads them shits */}
					<button className='btn' onClick={fetchTours}>
						refresh
					</button>
				</div>
			</main>
		)
	}
	//main return
	//displays Tours component
	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	)
}

export default App
