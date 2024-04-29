"use client";
import React, { useState } from "react";

interface SearchProps {
  onSubmit: (query: string) => void;
}

const Search = ({ onSubmit }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="ml-2 px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
