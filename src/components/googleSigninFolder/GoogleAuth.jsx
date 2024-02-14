// import { Button } from "@material-tailwind/react";
// import { FcGoogle } from "react-icons/fc";
// import { signInWithGoogle } from "../../firebaseCofig/firebase";
// import { Link } from "react-router-dom";

// const GoogleAuth = () => {
// 	const handleSignIn = async () => {
// 		try {
// 			await signInWithGoogle();
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	return (
// 		<>
// 			<Link to="/homepage">
// 				<Button
// 					onClick={handleSignIn}
// 					className="py-2 mt-5 md:px-12 rounded-full inline-flex gap-2 text-sm font-extralight md:gap-5  items-center justify-center md:text-md md:font-thin"
// 				>
// 					<FcGoogle size={30} />
// 					Login With Google
// 				</Button>
// 			</Link>
// 		</>
// 	);
// };

// export default GoogleAuth;

import { Button } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../firebaseCofig/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";

const GoogleAuth = () => {
	const [loading, setLoading] = useState(false);

	const handleSignIn = async () => {
		try {
			setLoading(true); // Set loading state to true while signing in
			await signInWithGoogle();
			// After successful sign-in, you can navigate to the home page or perform any other logic.
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false); // Set loading state back to false after sign-in attempt
		}
	};

	return (
		<>
			<Link to="/homepage">
				<Button
					onClick={handleSignIn}
					className="py-2 mt-5 md:px-12 rounded-full inline-flex gap-2 text-sm font-extralight md:gap-5 items-center justify-center md:text-md md:font-thin"
					disabled={loading} // Disable the button while loading
				>
					{loading ? (
						// Display a loading indicator (skeleton) while signing in
						<div className="animate-pulse h-5 w-5 bg-gray-300 rounded-full"></div>
					) : (
						<>
							<FcGoogle size={30} />
							Login With Google
						</>
					)}
				</Button>
			</Link>
		</>
	);
};

export default GoogleAuth;
