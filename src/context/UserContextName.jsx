// src/context/UserContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseCofig/firebase";

const UserContextName = createContext();

export const useUser = () => {
	return useContext(UserContextName);
};

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			setUser(authUser);
		});

		return () => unsubscribe();
	}, []);

	return (
		<UserContextName.Provider value={user}>{children}</UserContextName.Provider>
	);
};
