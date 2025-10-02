import React from "react";

interface MainHeaderProps {
  children: React.ReactNode;
}

const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return (
    <header className="w-full h-16 flex items-center fixed top-0 left-0 bg-pink-600 shadow-lg px-4 z-50 md:justify-between">
      {children}
    </header>
  );
};

export default MainHeader;
