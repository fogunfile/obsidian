import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./page/Home";
import About from "./page/About";
import Invoice from "./page/Invoice";
import RouteAsObj from "./page/RouteAsObj";
import Search from "./page/Search";
import UserDashboard from "./page/UserDashboard";
import UserProfile from "./page/UserProfile";
import UserEditProfile from "./page/UserEditProfile";
import AdminDashboard from "./page/AdminDashboard";

function App() {
  return (
		<div className="app">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employers" element={<About />} />

				{/* Approach #1 */}
				<Route path="/jobs">
					<Route index element={<UserDashboard />} />
					<Route path="profile" element={<UserProfile />} />
					<Route
						path=":editId"
						element={<UserEditProfile />}
					/>
					<Route
						path="admin"
						element={<AdminDashboard />}
					/>
				</Route>

				{/* Approach #2 */}
				<Route path="/career" element={<Invoice />} />
				<Route path="/events" element={<RouteAsObj />} />

				<Route path="/blog" element={<Search />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export const NotFound = () => {
  return <div><h1> 404 page not found </h1> </div>
}

export default App;
