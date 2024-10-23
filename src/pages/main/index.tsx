import { useState } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Button
				onClick={() => (setCount((count) => count + 1), toast.success("hi"))}
			>
				count is {count}
			</Button>
		</>
	);
}

export default App;
