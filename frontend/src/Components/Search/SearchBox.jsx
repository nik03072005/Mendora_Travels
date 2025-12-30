import { useState } from "react";
import SearchModal from "./SearchModal";


export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="border px-4 py-2 rounded-full shadow-md cursor-pointer w-full max-w-md"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-gray-500">Search Destination</span>
      </div>

      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
