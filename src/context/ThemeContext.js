import React, { createContext, useState} from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [backgroundColor, setBackgroundColor] = useState('rgb(124, 13, 14)');

	const changeColor = (color) => setBackgroundColor(color);
	return (
		<ThemeContext.Provider value={{ backgroundColor, changeColor }}>
			{children}
		</ThemeContext.Provider>
	);
}



