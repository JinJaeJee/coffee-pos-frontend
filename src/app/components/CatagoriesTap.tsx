import React from "react";

interface Proops {
  selectedCategoryId: number;
  onCategorySelect: (categoryId: number) => void;
}
interface Category {
  id: number;
  title: string;
}

export const CatagoriesList: Category[] = [
  { id: 1, title: "All" },
  { id: 2, title: "Drinks" },
  { id: 3, title: "Foods" },
  { id: 4, title: "Desserts" },
  { id: 5, title: "ETC." },
];

const CatagoriesTap = ({ selectedCategoryId, onCategorySelect }: Proops) => {
  return (
    <div className="flex justify-between gap-4 sm:flex-wrap md:flex-wrap">
      {CatagoriesList.map((item) => (
        <button
          key={item.id}
          className={`
            bg-[#4A5C2F] text-white w-40 h-12 rounded-lg flex items-center justify-center hover:bg-[#72973a]
            ${selectedCategoryId === item.id && "bg-[#72973a] font-bold "}
          `}
          onClick={() => onCategorySelect(item.id)}
        >
          <p>{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default CatagoriesTap;
