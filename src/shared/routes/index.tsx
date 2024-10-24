import { createBrowserRouter } from "react-router-dom";
import Main from "~/pages/main";
import TestPage from "~/pages/test";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/rtk",
		element: <TestPage />,
	},
]);
