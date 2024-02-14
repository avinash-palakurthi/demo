import { useNavigate } from "react-router-dom";

import { useUser } from "../../context/UserContextName";
import { BsEmojiSmile } from "react-icons/bs";
import { auth } from "../../firebaseCofig/firebase";
import NavItems from "../navbarFolder/NavItems";
import NavItemsMobile from "./NavItemsMobile";
// import { Button } from "@material-tailwind/react";
const Navbar = () => {
	const user = useUser();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		try {
			await auth.signOut();
			navigate("/");
			// Optionally, you can redirect the user to the home page or another page after logout
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<header className="fixed top-0 left-0 right-0  bg-black ">
				<nav className="flex items-center justify-around px-4 py-4 mx-auto ">
					<a className="text-xl font-bold text-red-600 duration-500 md:text-4xl cursor-pointer">
						DEMO RPG
					</a>
					{/* nav items for lg screen*/}
					<NavItems />
					{/* user Details */}
					<div className="text-teal-300 md:text-xl  flex items-center  justify-center   ">
						{user ? (
							<div className="flex items-center justify-center gap-6">
								<p className="mr-4 uppercase font-roboto  inline-flex items-center gap-2">
									{user.displayName}
									<BsEmojiSmile size={20} className="text-yellow-500" />
								</p>

								{/* signout */}
								<button
									onClick={handleSignOut}
									className="text-orange-900 bg-white rounded-md hover:bg-orange-800 hover:text-white ease-in duration-300 text-sm font-roboto p-1 md:text-base md:p-2 md:px-6"
								>
									Sign Out
								</button>
								{/* Add more user-related functionality or navigation links */}
							</div>
						) : (
							<p></p>
						)}
					</div>

					<NavItemsMobile />
				</nav>
			</header>
			);
		</div>
	);
};

export default Navbar;

{
	/* mob device  */
}
{
	/* <div className="flex justify-center text-white md:hidden">
						<button
							onClick={toggleMenu}
							className="duration-300 ease-in hover:text-red-600 "
						>
							{isMenuOpen ? (
								<CiCircleRemove size={30} />
							) : (
								<CiGrid41 size={30} />
							)}
						</button>
					</div> */
}

{
	/* menu items for mobile screen */
}
{
	/* <div>
					<ul
						className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-16 bg-white ${
							isMenuOpen
								? "fixed top-0 left-0 w-full transition-all ease-in-out duration-200"
								: "hidden"
						}`}
					>
						{navItems.map(({ id, path, link }) => (
							<li key={id}>
								<NavLink onClick={toggleMenu} to={path}>
									{link}
								</NavLink>
							</li>
						))}
					</ul>
				</div> */
}
