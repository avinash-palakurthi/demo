import { NavLink } from "react-router-dom";
const NavItems = () => {
	const navItems = [
		{ id: 1, path: "/homepage", link: "Country In Detail" },
		{ id: 2, path: "/usa", link: "USA" },
		{ id: 4, path: "/dashboards", link: "Dashboards" },
		{ id: 5, path: "/india", link: "India" },
	];
	return (
		<div>
			<ul className="hidden gap-12 text-lg text-white md:flex ">
				{navItems.map(({ id, path, link }) => (
					<li key={id} className="hover:text-red-500 ease-in duration-300">
						<NavLink
							className={({ isActive, isPending }) =>
								isActive ? "active" : isPending ? "pending" : ""
							}
							to={path}
						>
							{link}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavItems;
