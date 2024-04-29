"use client";
import React, { useEffect, useState } from "react";

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface FoodMenuListProps {
  items: FoodItem[];
  sortOptions: { label: string; value: string }[];
  initialSort?: string;
  onSortSelected: (sortValue: string) => void;
}

const SortList = ({
  items,
  sortOptions,
  initialSort,
  onSortSelected,
}: FoodMenuListProps) => {
  const [sortedItems, setSortedItems] = useState<any[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>(initialSort || "");

  useEffect(() => {
    const sortItems = (items: FoodItem[], sortValue: string) => {
      switch (sortValue) {
        case "name":
          return items.sort((a, b) => (a.name > b.name ? 1 : -1));
        case "price":
          return items.sort((a, b) => (a.price > b.price ? 1 : -1));
        case "category":
          return items.sort((a, b) => (a.category > b.category ? 1 : -1));
        default:
          return items;
      }
    };
    setSortedItems(sortItems(items, selectedSort));
  }, [items, selectedSort]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(event.target.value);
    onSortSelected(event.target.value);
  };

  return (
    <div>
      <select
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={selectedSort}
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortList;
