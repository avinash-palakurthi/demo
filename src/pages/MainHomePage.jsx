import GoogleAuth from "../components/googleSigninFolder/GoogleAuth";

const MainHomePage = () => {
	return (
		<div className="bg-black h-screen w-full font-roboto ">
			<div className="px-4 py-20 mx-auto">
				<div className="text-center text-white">
					<h1 className="text-4xl font-thin  capitalize md:text-7xl">
						welcome to{" "}
						<span className="font-extrabold text-red-600 uppercase">
							demo rpg
						</span>{" "}
					</h1>
					<p className="mx-auto mt-4 text-gray-500 capitalize md:text-[1.3rem] md:w-3/5 ">
						You Can Share Your Opinions and Thoughts on Political news with
						Others in a Meaningful Way. .{" "}
					</p>
					<p className="mx-auto mt-4 text-gray-500 capitalize md:text-[1.3rem] md:w-3/5">
						Everyone who reads these articles / opinions attempts to relate them
						with your life while also learning more about the world.{" "}
					</p>
					<div>
						<GoogleAuth />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHomePage;
