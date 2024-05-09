import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
];

export default function FilterBox() {
  const [query, setQuery] = useState<string>('');
  const [selected, setSelected] = useState<Person | null>(people[0]); // Default selection (e.g., first person)

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSelectionChange = (selectedOption: Person | null) => {
    setSelected(selectedOption);
    setQuery(''); // Clear query after selecting an option
  };

  return (
    <div>
      <Combobox value={selected} onChange={handleSelectionChange}>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M17 ... " />
            </svg>
          </div>

          <ComboboxInput
            type="text"
            name="category"
            id="name"
            className="block rounded-md py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            onChange={handleInputChange}
            value={query}
            placeholder="Input Here"
          />
        </div>

        <ComboboxOptions
          className="w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex bg-white cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              {selected === person && (
                <CheckIcon className="w-4 h-4 text-primary" />
              )}
              <div className="text-sm text-gray-900">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
