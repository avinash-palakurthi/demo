import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink, useNavigate } from "react-router-dom";
import { CiGrid41, CiCircleRemove } from "react-icons/ci";
// import { useState } from "react";
const NavItemsMobile = () => {
	const navItems = [
		{ id: 1, path: "/homepage", link: "Home" },
		{ id: 2, path: "/usa", link: "USA" },
		{ id: 4, path: "/dashboards", link: "Dashboards" },
		{ id: 5, path: "/india", link: "India" },
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div>
			{/*  */}

			<div className="flex justify-center text-white md:hidden">
				<button
					onClick={toggleMenu}
					className="duration-300 ease-in hover:text-red-600 "
				>
					{isMenuOpen ? <CiCircleRemove size={30} /> : <CiGrid41 size={30} />}
				</button>
			</div>
			{/*  */}
			<div>
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
			</div>
		</div>
	);
};

export default NavItemsMobile;
