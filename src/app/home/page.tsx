"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FoodItems } from "../constants/mockProps";
import Order from "../components/Order";
import Search from "../components/Search";
import SortList, { FoodItem } from "../components/SortList";
import CatagoriesTap from "../components/CatagoriesTap";
import Pagination from "../components/Pagination";

const foodMenu: FoodItem[] = [
  { id: 1, name: "Chicken Salad", price: 10.99, category: "Appetizers" },
  { id: 2, name: "Grilled Steak", price: 22.5, category: "Main Courses" },
  { id: 3, name: "Chocolate Cake", price: 7.95, category: "Desserts" },
];

const foodSortOptions = [
  { label: "Name (A-Z)", value: "name" },
  { label: "Price (Low-High)", value: "price" },
];

const HomePage = () => {
  const handleSearchSubmit = (query: string) => {
    console.log("Search query:", query);
  };

  const handleSortSelected = (sortValue: string) => {
    console.log("Food menu sorted by:", sortValue);
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section */}
      <div className="px-5 pt-5 w-full md:w-[70%] h-[calc(100vh)] ">
        <div className="flex justify-between mb-4">
          <div>
            <Search onSubmit={handleSearchSubmit} />
          </div>
          <div>
            <SortList
              items={foodMenu}
              sortOptions={foodSortOptions}
              onSortSelected={handleSortSelected}
            />
          </div>
        </div>

        <div className="mb-4">
          <CatagoriesTap
            selectedCategoryId={selectedCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {FoodItems.map((picture) => (
            <div
              key={picture.id}
              className="bg-[#D8E6E9] rounded-lg overflow-hidden p-4"
            >
              <Image
                src={picture.url}
                width={240}
                height={240}
                alt="picture"
                className="rounded-lg shadow-md object-cover"
              />
              <div className="mt-4">
                <h3 className="text-xl text-black font-bold">
                  {picture.title}
                </h3>
                <p className="text-base text-gray-500">{picture.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Pagination
            currentPage={1}
            totalPages={10}
            onNextClick={() => {}}
            onBackClick={() => {}}
            onPageChange={() => {}}
          />
        </div>
      </div>
      {/* Right section */}
      <div className="w-[30%] border-l-2 ">
        <Order />
      </div>
    </div>
  );
};

export default HomePage;
