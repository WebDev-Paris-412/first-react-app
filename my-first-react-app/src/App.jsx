import { useEffect } from "react"
import "./App.css"
import something, { sayHi } from "./utils"
import reactSVG from "./assets/react.svg"

function App() {
	const hiSamara = sayHi("Samara")

	const student = {
		name: "María",
		address: {
			city: "Paris",
		},
		dateOfBirth: new Date("01/05/1989"),
		picture: "https://randomuser.me/api/portraits/lego/6.jpg",
		activity: ["Coding", "Judging bad people!"],
	}

	const users = [
		student,
		{
			name: "Julien",
			dateOfBirth: new Date("01/05/1991"),
			picture: "https://randomuser.me/api/portraits/lego/3.jpg",
			activity: ["Coding", "CSS", "Shooting Ducks"],
		},
	]

	const width = "100px"
	return (
		<>
			<h1 className="title">Application</h1>
			<ul>
				<li>{sayHi("Evan")}</li>
				<li>{hiSamara} !</li>
			</ul>
			<p>
				Hi, I am {student.name}, I live in {student.address.city}, I like{" "}
				{student.activity[0]} :)
			</p>
			<p>{something}</p>
			<p>{student.activity.join("-")}</p>
			<pre>{JSON.stringify(student)}</pre>

			{/* <div
        className="square"
        style={{
          height: "100px",
          width: width,
          backgroundColor: "red",
        }}></div> */}
			<section
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "2rem",
				}}>
				{/* Don't writ your components as a function execution
          This is just for you to vizualise that it's just a function in the end :) */}
				{Square({ color: "magenta", size: "big" })}

				<Square color="dodgerblue" />
				<Square size="tiny" color="#12da45" rounded={true} />
				<Square />
				<Square />
			</section>

			<FlexContainer>
				<User user={users[0]} />
				<User user={users[1]} />
			</FlexContainer>

			{/* How to load images */}
			<img src="/images/vite.svg" alt="" />
			<img src={reactSVG} alt="" />
		</>
	)
}

/**
 * How do we create Components???
 */

function FlexContainer(props) {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: "1rem",
			}}>
			{props.children}
		</div>
	)
}

// User.propTypes = {
//   user: {
//     name: String,
//     dateOfBirth: Date
//   }
// }
function User(props) {
	// console.log(props)
	// console.log(props.user.dateOfBirth.toDateString())
	return (
		// Card
		<Card>
			{/* Avatar */}
			<Avatar picture={props.user.picture} name={props.user.name} />
			{/* / Avatar */}
			{/* UserInfos */}
			<UserInfos
				name={props.user.name}
				dateOfBirth={props.user.dateOfBirth}
				activities={props.user.activity}
			/>
		</Card>
	)
}

function Card(props) {
	return (
		<article
			style={{
				display: "flex",
				backgroundColor: "whitesmoke",
				color: "black",
				padding: "1rem",
			}}>
			{props.children}
		</article>
	)
}

function Avatar(props) {
	return (
		<div
			style={{
				overflow: "hidden",
				borderRadius: "50%",
				height: "100px",
				width: "100px",
			}}>
			<img
				style={{
					width: 100 + "px",
				}}
				// src="https://randomuser.me/api/portraits/lego/8.jpg"
				src={props.picture}
				// alt="Bob"
				alt={props.name}
			/>
		</div>
	)
}
/**
 *
 * @param {{name: string, dateOfBirth: Date, activity: String[]}} props
 * @returns
 */
function UserInfos({ name, dateOfBirth, activities }) {
	// const { name, dateOfBirth, activity } = props
	// const name = props.name
	// const dateOfBirth = props.dateOfBirth
	// const activities = props.activities
	return (
		<div>
			<h2>
				Name: <span>{name}</span>
			</h2>
			<p>
				Birth: <span>{dateOfBirth.toDateString()}</span>
			</p>
			<p>
				activities: <span>{activities.join(", ")}</span>
			</p>
		</div>
	)
}

function Square(props) {
	let size
	if (props.size === "big") {
		size = 200
	} else if (props.size === "tiny") {
		size = 50
	} else {
		size = 100
	}
	return (
		<div>
			<div
				className="square"
				style={{
					height: size + "px",
					width: size + "px",
					backgroundColor: props.color || "red",
					borderRadius: props.rounded ? "4px" : null,
				}}></div>
			<pre>{JSON.stringify(props)}</pre>
		</div>
	)
}

export default App

// const cat = {
// 	name: "Illiu",
// 	color: ["black", "white"],
// 	isCute: true,
// 	isMeowing: true,
// }

// const { name, color } = cat
