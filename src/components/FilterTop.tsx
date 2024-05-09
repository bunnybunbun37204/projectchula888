import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
}

interface FilterTopProps {
  items: Item[];
}

const FilterTop: React.FC<FilterTopProps> = ({ items }) => {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filter function that checks if an item matches the filter text and selected categories
  const filteredItems = items.filter((item) => {
    const matchesFilterText = item.name.toLowerCase().includes(filterText.toLowerCase());
    const matchesCategories = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    return matchesFilterText && matchesCategories;
  });

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) => prevCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search by name..."
        className="border border-gray-300 rounded-md p-2"
        value={filterText}
        onChange={handleFilterTextChange}
      />

      <div className="flex items-center space-x-2">
        <span className="font-semibold">Filter by Category:</span>
        {Array.from(new Set(items.map((item) => item.category))).map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded-md ${
              selectedCategories.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleCategoryToggle(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        <h2 className="font-semibold mt-4">Filtered Items:</h2>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterTop;
