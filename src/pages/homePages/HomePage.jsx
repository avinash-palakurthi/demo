import Navbar from "../../components/navbarFolder/Navbar";
const HomePage = () => {
	return (
		<div>
			<Navbar />
			<div className="py-20 bg-black text-center text-white px-4">
				<h2 className="text-5xl md:text-7xl leading-snug font-bold mb-5 uppercase text-red-600">
					Country in detail
				</h2>
			</div>
		</div>
	);
};

export default HomePage;
