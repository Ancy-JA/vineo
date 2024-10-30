'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useGetBoxHistoryAdminQuery, useGetBoxWinePrintCardMutation } from '@/app/redux/authApi';
import debounce from 'lodash.debounce';
import { BsDownload } from 'react-icons/bs';
import { FaEye, FaCheck, FaTimes, FaEdit, FaTruck } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Numbers } from '../../../../constants/numberconstants';

interface User {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  country?: string;
  postalCode?: string;
  city?: string;
}

interface Wine {
  name: string;
}

interface Box {
  _id: string;
  user: User;
  box_wines: Wine[];
  created_at: string;
  delivery_date: string;
  status: string;
}

const HistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);
  const pageSize = Numbers.page_size;


  // Fetch box history with debounced search term
  const { data, refetch, isLoading, error } = useGetBoxHistoryAdminQuery(
    { searchString: debouncedSearchTerm, page, pageSize }
  );

  // Debounce function for search term
  const debouncedSetSearchTerm = useCallback(
    debounce((term: string) => {
      setDebouncedSearchTerm(term);
      setPage(1);
    }, 500),
    []
  );

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSetSearchTerm(newSearchTerm);
  };

  // Refetch data when search term or page changes
  useEffect(() => {
    refetch();
  }, [debouncedSearchTerm, page]);

  // Mutation hook for fetching the download URL
  const [getBoxWinePrintCard] = useGetBoxWinePrintCardMutation();

  // Function to handle the download action
  // Define the expected response structure
  interface GetBoxWinePrintCardResponse {
    data: {
      getBoxWinePrintCard: string; // Assuming this is a Base64-encoded string
    };
  }

  const handleDownload = async (boxId: string) => {
    try {

      // Fetch the response and assert the type
      const response = await getBoxWinePrintCard({ boxId: String(boxId) }).unwrap() as unknown as GetBoxWinePrintCardResponse;
      // Extract the Base64 string from the nested object
      const base64Data = response.data.getBoxWinePrintCard;


      // Normalize the Base64 data for URL-safe characters
      const normalizedBase64 = base64Data.replace(/-/g, '+').replace(/_/g, '/');
      // Decode the Base64 string
      const binaryString = window.atob(normalizedBase64);


      // Convert binary string to byte array
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });


      // Create a URL for the Blob and trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `box_${boxId}.pdf`;
      downloadLink.click();
     // Release the object URL after download to free memory
      URL.revokeObjectURL(downloadLink.href);

    } catch (error) {
      console.error("Error fetching download data:", error);
    }
  };


  const handleView = (box: Box) => {
    setSelectedBox(box);
  };

  const closeModal = () => {
    setSelectedBox(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const fetchedBoxes: Box[] = data?.data?.getBoxHistoryAdmin?.boxes || [];
  const totalClients = data?.data?.getBoxHistoryAdmin?.total || 0;
  const totalPages = Math.ceil(totalClients / pageSize);

  const handlePageClick = (newPage: number) => {
    setPage(newPage);
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 border rounded ${page === i ? 'bg-blue-500 text-white' : 'text-black'}`}
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
          className={`px-3 py-1 border rounded ${page === 1 ? 'bg-blue-500 text-white' : 'text-black'}`}
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
            className={`px-3 py-1 border rounded ${page === i ? 'bg-blue-500 text-white' : 'text-black'}`}
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
          className={`px-3 py-1 border rounded ${page === totalPages ? 'bg-blue-500 text-white' : 'text-black'}`}
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
        <div className="mb-3 border-b font-bold">Wine box history</div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-70 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>

        <div className="hidden xl:grid grid-cols-[3fr_4fr_1fr_1fr_1fr_1fr_3fr] gap-2 items-center p-2 border-b text-left font-semibold bg-gray-200">
          <div>User details</div>
          <div>Wine in box</div>
          <div>Creation date</div>
          <div>Delivery date</div>
          <div>Box type</div>
          <div>Status</div>
          <div>Behavior/Actions</div>
        </div>

        {fetchedBoxes.length > 0 ? (
          fetchedBoxes.map((box) => (
            <div
              key={box._id}
              className="grid grid-cols-1 xl:grid-cols-[3fr_4fr_1fr_1fr_1fr_1fr_3fr] gap-2 items-center p-2 border-b text-left"
            >
              <div className="flex items-left space-x-4">
                <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
                  {box.user.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semi-bold">{box.user.name}</div>
                  <div className="text-sm text-gray-600">{box.user.phone}</div>
                </div>
              </div>

              <div className="grid gap-y-1">
                {box.box_wines.map((wine, _idx) => (
                  <div key={_idx} className="flex justify-between items-center text-sm text-gray-700">
                    <span className="truncate">{wine.name}</span>
                    <span className="text-green-500 px-2 py-1 rounded border border-green-500">
                      {`${box.box_wines.length} veces`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-sm text-gray-600">{new Date(box.created_at).toLocaleDateString()}</div>
              <div className="text-sm text-gray-600">{new Date(box.delivery_date).toLocaleDateString()}</div>
              <div>
                <span className={`px-2 py-1 rounded ${box.status === 'Entregable' ? 'text-green-500' : 'text-red-500'}`}>
                  {box.status === 'Entregable' ? 'Entregable' : 'Rechazada'}
                </span>
              </div>
              <div className="text-sm text-red-600">{box.status}</div>

              <div className="flex flex-wrap space-x-2 space-y-2">
                <button className="bg-purple-500 text-white p-2 rounded-full"
                  onClick={() => handleDownload(box._id)}>
                  <BsDownload />
                </button>
                <div className="relative group">
                  <button className="bg-orange-500 text-white p-2 rounded-full" onClick={() => handleView(box)}>
                    <FaEye />
                  </button>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-sm bg-orange-400 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Details
                  </span>
                </div>
                <button
                  className="bg-green-500 text-white p-2 rounded-full"
                  onClick={() => window.open(`https://wa.me/${box.user.phone}`, '_blank')}
                >
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

        {selectedBox && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white p-6 rounded shadow-lg max-w-lg w-full">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <FaTimes size={18} />
              </button>
              <h2 className="text-xl font-bold mb-4">Client Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={selectedBox.user.name}
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div>
                  <label>Full Address</label>
                  <input
                    type="text"
                    value={selectedBox.user.address || ''}
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="text"
                    value={selectedBox.user.email || ''}
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div>
                  <label>Country</label>
                  <input
                    type="text"
                    value={selectedBox.user.country || ''}
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div>
                  <label>Postal Code</label>
                  <input
                    type="text"
                    value={selectedBox.user.postalCode || ''}
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div>
                  <label>City</label>
                  <input
                    type="text"
                    value={selectedBox.user.city || ''}
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    value={selectedBox.user.phone}
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    value="******"
                    readOnly
                    className="border p-2 w-full rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        )}



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
