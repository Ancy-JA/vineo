'use client';

import React, { useState } from 'react';
import { FaEye, FaEdit, FaCheck, FaTimes, FaTruck } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai';

interface ClientHistory {
  name: string;
  phone: string;
  wines: string[];
  startDate: string;
  endDate: string;
  status: string;
  deliverable: boolean;
  count: string;
}

const historyData: ClientHistory[] = [
  {
    name: "diyanew",
    phone: "89898989890",
    wines: ["lote 44 malbec", "la clave de raúl pérez", "remordimiento"],
    startDate: "02/08/2024",
    endDate: "05/08/2024",
    status: "Rechazada",
    deliverable: true,
    count: "0 veces",
  },
  {
    name: "Test User 2",
    phone: "9496239655",
    wines: ["casillero del diablo cabernet sauvignon 2021", "la garnacha salvaje del moncayo", "l'altre"],
    startDate: "02/08/2024",
    endDate: "05/08/2024",
    status: "Rechazada",
    deliverable: true,
    count: "0 veces",
  },
  {
    name: "Test User 1",
    phone: "9496239654",
    wines: ["time waits for no one double 2022", "gran feudo reserva", "marieta"],
    startDate: "02/08/2024",
    endDate: "05/08/2024",
    status: "Rechazada",
    deliverable: true,
    count: "0 veces",
  },
  {
    name: "Swathi old",
    phone: "9496239653",
    wines: ["piedra roble", "lia", "murmurón"],
    startDate: "01/08/2024",
    endDate: "04/08/2024",
    status: "Rechazada",
    deliverable: true,
    count: "0 veces",
  },
  {
    name: "Swathi prof",
    phone: "9496239653",
    wines: ["protos roble", "la clave de raul perez", "marques de riscal verdejo organic"],
    startDate: "01/08/2024",
    endDate: "04/08/2024",
    status: "Rechazada",
    deliverable: true,
    count: "0 veces",
  },
  {
    name: "Swathi",
    phone: "9496239653",
    wines: ["abadal picapoll", "boland cappuccino pinotage", "marques de riscal verdejo organic "],
    startDate: "01/08/2024",
    endDate: "04/08/2024",
    status: "Rechazada",
    deliverable: true,
    count: "0 veces",
  },
];

const HistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = historyData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.includes(searchTerm) ||
    item.wines.some((wine) => wine.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen w-screen bg-gray-100 p-4">
      <div className="max-w-screen bg-white p-4 rounded-lg shadow-md">
       

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name, phone, or wine..."
            className="w-70 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Responsive Grid Header */}
        <div className="hidden md:grid grid-cols-8 lg:grid-cols-8 bg-gray-200 font-semibold p-2">
          <div>Client</div>
          <div>Wines</div>
          <div>Count</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Status</div>
          <div>Rechazada</div>
          <div>Actions</div>
        </div>

        {/* Grid Body */}
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-8 gap-2 md:gap-2 items-center p-2 border-b"
          >
            {/* Client */}
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.phone}</p>
              </div>
            </div>

            {/* Wines */}
            <div className="md:block max-w-xs overflow-hidden col-span-2 md:col-span-1">
              {item.wines.map((wine, idx) => (
                <p key={idx} className="text-sm text-gray-700 truncate">
                  {wine}
                </p>
              ))}
            </div>

            {/* Count */}
            <div className="text-sm">
              <span className=" text-green-500 px-2 py-1 rounded border border-green-500">
                {item.count}
              </span>
            </div>

            {/* Start Date */}
            <div className="text-sm text-gray-600">{item.startDate}</div>

            {/* End Date */}
            <div className="text-sm text-gray-600">{item.endDate}</div>

            {/* Deliverable Status */}
            <div>
              <span className={`px-2 py-1 rounded  ${item.deliverable ? 'text-green-500' : 'text-red-500'}`}>
                {item.deliverable ? 'Entregable' : 'Rechazada'}
              </span>
            </div>

            {/* Rechazada Status */}
            <div className="text-sm text-red-600">{item.status}</div>

            {/* Actions */}
            <div className="flex space-x-1">
              <button className="bg-purple-500 text-white p-2 rounded-full">
                <BsDownload />
              </button>
              <button className="bg-orange-500 text-white p-2 rounded-full">
                <FaEye />
              </button>
              <button className="bg-green-500 text-white p-2 rounded-full">
                <AiOutlineWhatsApp />
              </button>
              <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
                <FaCheck />
              </button>
              <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
                <FaTimes />
              </button>
              <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
                <FaEdit />
              </button>
              <button className="bg-gray-200 text-gray-400 p-2 rounded-full">
                <FaTruck />
              </button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-700">188 Clientes</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
            <span>...</span>
            <button className="px-3 py-1 border rounded">19</button>
          </div>
          <div className="text-sm">
            <select className="border p-1 rounded">
              <option>10 / page</option>
              <option>20 / page</option>
              <option>50 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;


