import { addItem } from "@/store/listSlice";
import { useDispatch } from "react-redux";

export default function Form() {
	// Assign useDishpatch to dispatch
	const dispatch = useDispatch();

	// Function to handle form submit
	function handleSubmit(e) {
		//Prevent default form submit event
		e.preventDefault();
		//Create listItem and assign it the value of the input field
		const listItem = document.getElementById("userInput").value;
		//Dispatch the listItem that now contains the user input value
		if (listItem !== "") {
			dispatch(addItem(listItem));
        }
        
		document.getElementById("userInput").value = "";
	}

	//Return the elements
	return (
		<form className="flex flex-row rounded-lg gap-2 items-center shadow-md p-4" onSubmit={(e) => handleSubmit(e)}>
			<input
				className="border-2 border-gray-700 rounded-lg p-2 outline-green-600"
				id="userInput"
				type="text"
				name="text"></input>
			<button className="text-gray-700 hover:text-green-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1}
					stroke="currentColor"
					className="w-12 h-12">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
				</svg>
			</button>
		</form>
	);
}
