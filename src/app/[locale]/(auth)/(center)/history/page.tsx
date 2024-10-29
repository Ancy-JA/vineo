'use client';
import React, { useState } from 'react';
import { useGetBoxHistoryAdminQuery } from '@/app/redux/authApi';
import { BsDownload } from 'react-icons/bs';
import { FaEye, FaCheck, FaTimes, FaEdit, FaTruck } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Numbers } from '../../../../constants/numberconstants';
interface User {
  name: string;
  phone: string;
}

interface Wine {
  name: string;
}

interface Box {
  user: User;
  box_wines: Wine[];
  created_at: string;
  delivery_date: string;
  status: string;
}

const HistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = Numbers.page_size;

  const { data, refetch, isLoading, error } = useGetBoxHistoryAdminQuery(
    { searchString: searchTerm, page, pageSize }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const fetchedBoxes: Box[] = data?.data?.getBoxHistoryAdmin?.boxes || [];
  const totalClients = data?.data?.getBoxHistoryAdmin?.total || 0;
  const totalPages = Math.ceil(totalClients / pageSize);

  const handlePageClick = (newPage: number) => {
    setPage(newPage);
    refetch();
  };

  const clientHistory = fetchedBoxes.map((box: Box, _index: number) => ({
    name: box.user.name,
    phone: box.user.phone,
    wines: box.box_wines.map((wine: Wine) => wine.name),
    startDate: new Date(box.created_at).toLocaleDateString(),
    endDate: new Date(box.delivery_date).toLocaleDateString(),
    status: box.status,
    deliverable: box.status === 'Entregable',
    count: `${box.box_wines.length} veces`,
  }));

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 border rounded ${page === i ? 'bg-blue-500 text-white' : 'text-black'
              }`}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageClick(1)}
          className={`px-3 py-1 border rounded ${page === 1 ? 'bg-blue-500 text-white' : 'text-black'
            }`}
        >
          1
        </button>
      );
      if (page > 3) {
        pages.push(<span key="start-ellipsis">...</span>);
      }
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 border rounded ${page === i ? 'bg-blue-500 text-white' : 'text-black'
              }`}
          >
            {i}
          </button>
        );
      }
      if (page < totalPages - 2) {
        pages.push(<span key="end-ellipsis">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={`px-3 py-1 border rounded ${page === totalPages ? 'bg-blue-500 text-white' : 'text-black'
            }`}
        >
          {totalPages}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 p-4">
      <div className="w-full bg-white p-4 rounded-lg shadow-md">
        <div className='mb-3 border-b font-bold '>Wine box history</div>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-70 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setPage(1);
              refetch();
            }}
          />
        </div>

        {/* Responsive Grid Header */}
        <div className="hidden xl:grid grid-cols-[3fr_4fr_1fr_1fr_1fr_1fr_3fr] gap-2 items-center p-2 border-b  text-left font-semibold bg-gray-200">
          <div>User details</div>
          <div>Wine in box</div>
          <div>Creation date</div>
          <div>Delivery date</div>
          <div>Box type</div>
          <div>Status</div>
          <div>Behavior/Actions</div>
        </div>

        {clientHistory.length > 0 ? (
          clientHistory.map((item, _index) => (
            <div
              key={_index}
              className="grid grid-cols-1 xl:grid-cols-[3fr_4fr_1fr_1fr_1fr_1fr_3fr] gap-2 items-center p-2 border-b text-left"
            >
              {/* User Details */}
              <div className="flex items-left space-x-4">
                <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center ">
                  {item.name.charAt(0)}
                </div>
                <div >
                  <div className="font-semi-bold">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.phone}</div>
                </div>
              </div>

              {/* Wines in Box with "veces" to the right of each wine */}
              <div className="grid gap-y-1">
                {item.wines.map((wine, _idx) => (
                  <div key={_idx} className="flex justify-between items-center text-sm text-gray-700">
                    <span className="truncate">{wine}</span>
                    <span className="text-green-500 px-2 py-1 rounded border border-green-500">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Creation Date */}
              <div className="text-sm text-gray-600">{item.startDate}</div>

              {/* Delivery Date */}
              <div className="text-sm text-gray-600">{item.endDate}</div>

              {/* Type of Box */}
              <div>
                <span
                  className={`px-2 py-1 rounded ${item.deliverable ? 'text-green-500' : 'text-red-500'}`}
                >
                  {item.deliverable ? 'Entregable' : 'Rechazada'}
                </span>
              </div>

              {/* Status */}
              <div className="text-sm text-red-600">{item.status}</div>

              {/* Actions */}
              <div className="flex flex-wrap space-x-2 space-y-2">
                <button className=" bg-purple-500 text-white p-2 rounded-full">
                  <BsDownload />
                </button>
                <button className=" bg-orange-500 text-white p-2 rounded-full">
                  <FaEye />
                </button>
                <button className=" bg-green-500 text-white p-2 rounded-full">
                  <AiOutlineWhatsApp />
                </button>
                <button className=" bg-gray-200 text-gray-400 p-2 rounded-full">
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
          ))
        ) : (
          <div className="text-gray-500 text-center p-4">No data available</div>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700">{totalClients} Clientes</span>
          <div className="flex-1 flex justify-end items-center space-x-2">
            <button
              onClick={() => handlePageClick(page - 1)}
              disabled={page === 1}
              className={`px-3 py-1 border rounded ${page === 1 ? 'text-gray-400' : 'text-black'}`}
            >
              &lt;
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => handlePageClick(page + 1)}
              disabled={page === totalPages}
              className={`px-3 py-1 border rounded ${page === totalPages ? 'text-gray-400' : 'text-black'}`}
            >
              &gt;
            </button>
          </div>
          <div className="text-sm">
            <select
              className="border p-1 rounded"
              value={pageSize}
              onChange={() => {
                setPage(1);
                refetch();
              }}
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
