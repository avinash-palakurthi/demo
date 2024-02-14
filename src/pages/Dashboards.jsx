import Navbar from "../components/navbarFolder/Navbar";

const Dashboards = () => {
	return (
		<div>
			<Navbar />
			<div className="py-20 bg-black text-center text-white px4">
				<h2 className="text-5xl md:text-7xl leading-snug font-bold mb-5 text-red-600">
					Dashboard
				</h2>
			</div>
		</div>
	);
};

export default Dashboards;
