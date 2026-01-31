import { useState, useEffect } from "react";

function Header() {
  const [isBlue, setIsBlue] = useState(false); // toggle blue color

  const [bgColor, setBgColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-gray-900");

  useEffect(() => {
    if (isBlue) {
      setBgColor("bg-blue-600");
      setTextColor("text-white");
    } else {
      setBgColor("bg-white");
      setTextColor("text-gray-900");
    }
  }, [isBlue]);

  return (
    <header
      onClick={() => setIsBlue(!isBlue)}
      className={`flex justify-between items-center p-4 shadow cursor-pointer transition-colors duration-500 ${bgColor}`}
    >
      <h1 className={`font-bold text-xl transition-colors duration-500 ${textColor}`}>
        React CI/CD Demo
      </h1>
    </header>
  );
}

export default Header;
