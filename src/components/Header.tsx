import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">
        TIC TAC TOE
      </h1>
      <p className="text-neutral-500 mt-2 font-medium">Unbeatable AI Edition</p>
    </header>
  );
};

export default Header;
