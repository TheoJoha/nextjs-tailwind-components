"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image"
const LightDarkToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex justify-center">
      {currentTheme === "dark" ? <button title="dark-toggle" className="bg-slate-700 rounded-full p-2 hover:bg-slate-800" onClick={() => setTheme("light")}>
        <Image src={"toggle/sun.svg"} alt="Illustration of sun" height={20} width={20}/>
        </button> : 
        <button title="light-toggle" className="bg-slate-200 rounded-full p-2
        hover:bg-slate-300" onClick={() => setTheme("dark")}>
            <Image src={"toggle/moon.svg"} alt="Illustration of moon" height={20} width={20}/>
        </button>}
    </div>
  );
  }

export default LightDarkToggle;
