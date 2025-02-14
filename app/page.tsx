"use client";

import { useState } from "react";
import { productItems, manufacturers, machineIcons, materialIcons, baseMaterials, grainTypes, coatingTypes, gritOptions } from "@/config/constant";
import ProductItem from "./_components/ProductItem";
import Image from "next/image";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedManufacturer, setSelectedManufacturer] = useState("");

  const [selectedMachines, setSelectedMachines] = useState<string[]>([]);

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const [isWetGrinding, setIsWetGrinding] = useState(false); // State for wet grinding filter

  const [isGrainDropdownOpen, setIsGrainDropdownOpen] = useState(false);
  const [selectedGrainType, setSelectedGrainType] = useState("");

  const [selectedBaseMaterial, setSelectedBaseMaterial] = useState("");
  const [isBaseMaterialDropdownOpen, setIsBaseMaterialDropdownOpen] = useState(false);

  const [selectedCoating, setSelectedCoating] = useState("");
  const [isCoatingDropdownOpen, setIsCoatingDropdownOpen] = useState(false);

  const [selectedGrits, setSelectedGrits] = useState<string[]>([]);

  // Function to reset all filters to their initial states
  const resetFilters = () => {
    setSearchTerm("");
    // setSelectedManufacturer("");
    setSelectedMachines([]);
    setSelectedMaterials([]);
    setIsWetGrinding(false);
    setSelectedGrainType("");
    setSelectedBaseMaterial("");
    setSelectedCoating("");
    setSelectedGrits([]);
  };


  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 200);
  };

  const handleManufacturerSelect = (manufacturer: string) => {
    // setSelectedManufacturer(manufacturer);
    setSearchTerm(manufacturer);
    setIsDropdownOpen(false);
  };

  const handleMachineToggle = (machine: string) => {
    setSelectedMachines((prev) =>
      prev.includes(machine)
        ? prev.filter((m) => m !== machine)
        : [...prev, machine]
    );
  };

  const handleMaterialToggle = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const filteredManufacturers = manufacturers.filter((m) =>
    m.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleGrainDropdown = () => {
    setIsGrainDropdownOpen((prev) => !prev);
  };

  const handleGrainTypeSelect = (type: string) => {
    setSelectedGrainType(type);
    setIsGrainDropdownOpen(false); // Close dropdown after selection
  };

  const toggleBaseMaterialDropdown = () => {
    setIsBaseMaterialDropdownOpen((prev) => !prev);
  };

  const handleBaseMaterialSelect = (material: string) => {
    setSelectedBaseMaterial(material);
    setIsBaseMaterialDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleCoatingDropdown = () => {
    setIsCoatingDropdownOpen((prev) => !prev);
  };

  const handleCoatingSelect = (coating: string) => {
    setSelectedCoating(coating);
    setIsCoatingDropdownOpen(false); // Close dropdown after selection
  };

  const handleGritToggle = (grit: string) => {
    setSelectedGrits((prev) =>
      prev.includes(grit) ? prev.filter((g) => g !== grit) : [...prev, grit]
    );
  };

  return (
    <>
      <div className="container mx-auto max-w-[1240px]">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            {/* Manufacturer Filter */}
            <div className="my-6 relative">
              <h2 className="text-lg font-bold mb-2">MANUFACTURER</h2>
              <input
                type="search"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Any Manufacturer"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {isDropdownOpen && (
                <div className="absolute bg-white border border-gray-300 rounded-lg w-full mt-1 z-10">
                  {filteredManufacturers.map((manufacturer) => (
                    <div
                      key={manufacturer}
                      className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleManufacturerSelect(manufacturer)}
                    >
                      {manufacturer}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Filter by Machines */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">FILTER BY MACHINES</h2>
              <div className="grid grid-cols-5 gap-2">
                {machineIcons.map((icon, index) => (
                  <button
                    key={index}
                    className={`w-full p-2 ${selectedMachines.includes(icon)
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-300"
                      }`}
                    onClick={() => handleMachineToggle(icon)}
                  >
                    <Image
                      src={`/image/machines/36x36/${icon}`}
                      alt={`Machine ${index + 1}`}
                      width={36}
                      height={36}
                      className="mx-auto"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Materials */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">FILTER BY MATERIALS</h2>
              <div className="grid grid-cols-5 gap-1">
                {materialIcons.map((material, index) => (
                  <button
                    key={index}
                    className={`w-full p-1 ${selectedMaterials.includes(material.src)
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-300"
                      }`}
                    onClick={() => handleMaterialToggle(material.src)}
                  >
                    <Image
                      src={`/image/materials/36x36/${material.src}`}
                      alt={material.name}
                      width={36}
                      height={36}
                      className="mx-auto"
                    />
                    <span className="sr-only">{material.name}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Wet Grinding Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">WET GRINDING</h2>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wet-grinding"
                  checked={isWetGrinding}
                  onChange={(e) => setIsWetGrinding(e.target.checked)}
                  className="w-5 h-5 border-gray-300 rounded"
                />
                <label
                  htmlFor="wet-grinding"
                  className="text-gray-700 cursor-pointer"
                >
                  Suitable also for wet grinding
                </label>
              </div>
            </div>
            {/* Filter by Grain Type */}
            <div className="mb-6 relative">
              <h2 className="text-lg font-bold mb-2">FILTER BY GRAIN TYPE</h2>
              <div className="relative">
                <input
                  type="search"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Any grain type"
                  value={selectedGrainType}
                  onFocus={toggleGrainDropdown}
                  readOnly
                />
                {isGrainDropdownOpen && (
                  <div className="absolute bg-white border border-gray-300 rounded-lg w-full mt-1 z-10 max-h-40 overflow-y-auto">
                    {grainTypes.map((type) => (
                      <div
                        key={type}
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleGrainTypeSelect(type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Filter by Base Material */}
            <div className="mb-6 relative">
              <h2 className="text-lg font-bold mb-2">FILTER BY BASE MATERIAL</h2>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Any base material"
                  value={selectedBaseMaterial}
                  onFocus={toggleBaseMaterialDropdown}
                  readOnly
                />
                {isBaseMaterialDropdownOpen && (
                  <div className="absolute bg-white border border-gray-300 rounded-lg w-full mt-1 z-10 max-h-40 overflow-y-auto">
                    {baseMaterials.map((material) => (
                      <div
                        key={material}
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleBaseMaterialSelect(material)}
                      >
                        {material}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Filter by Type of Coating */}
            <div className="mb-6 relative">
              <h2 className="text-lg font-bold mb-2">TYPE OF COATING</h2>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Any coating"
                  value={selectedCoating}
                  onFocus={toggleCoatingDropdown}
                  readOnly
                />
                {isCoatingDropdownOpen && (
                  <div className="absolute bg-white border border-gray-300 rounded-lg w-full mt-1 z-10 max-h-40 overflow-y-auto">
                    {coatingTypes.map((type) => (
                      <div
                        key={type}
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleCoatingSelect(type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Filter by Grit */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">GRIT</h2>
              <div className="grid grid-cols-4 gap-2">
                {gritOptions.map((grit) => (
                  <div key={grit} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`grit-${grit}`}
                      checked={selectedGrits.includes(grit)}
                      onChange={() => handleGritToggle(grit)}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <label htmlFor={`grit-${grit}`} className="text-gray-700">
                      {grit}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* Reset Filters Button */}
            <div className="my-6">
              <button
                onClick={resetFilters}
                className="px-4 py-2 border-2 border-black text-black rounded-lg hover:bg-gray-200"
              >
                Clear Filters – Display All Belts
              </button>
            </div>
          </div>

          {/* Product Items */}
          <div className="col-span-9 my-12 mx-12">
            <div className="grid grid-cols-12 gap-4">
              {productItems.map((item) => (
                <div
                  className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3"
                  key={item.id}
                >
                  <ProductItem
                    name={item.name}
                    image={item.image}
                    overlayImage={item.overlayImage}
                  />
                </div>
              ))}
            </div>
            {/* CTA Section */}
            <div
              className="relative mt-12 text-white py-12"
              style={{
                backgroundImage: "url('/image/backgrounds/cta-bckg-o3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Need help selecting the most suitable abrasives for your project?
                </h2>
                <p className="text-lg">
                  Please{" "}
                  <a
                    href="/contact"
                    className="text-yellow-400 border border-yellow-500 p-2 hover:text-white hover:bg-yellow-500"
                  >
                    contact us
                  </a>{" "}
                  or check{" "}
                  <a
                    href="/products"
                    className="text-yellow-400 border border-yellow-500 p-2 hover:text-white hover:bg-yellow-500"
                  >
                    our production
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div >

      </div >
    </>
  );
};

export default Home;
