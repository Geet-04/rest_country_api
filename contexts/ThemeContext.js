//A wrapper that provides context to its children
import { createContext, useState } from "react";

const ThemeContext = createContext() // 1️⃣ Create context container

export const ThemeProvider = ({children})=>{ // 2️⃣ children = wrapped components
   //console.log({children});
   const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))// 3️⃣ Create state here

   return(
      <ThemeContext.Provider value={[isDark, setIsDark]}>
         {children} {/* 4️⃣ Render whatever is inside <ThemeProvider> */}
      </ThemeContext.Provider>
   )
}

export default ThemeContext;