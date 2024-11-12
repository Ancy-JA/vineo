// ModalView.tsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Box } from '@/components/Types';

interface ModalViewProps {
  selectedBox: Box | null;
  closeModal: () => void;
}

const ModalView: React.FC<ModalViewProps> = ({ selectedBox, closeModal }) => {
  if (!selectedBox) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none">
          <FaTimes size={18} />
        </button>
        <h2 className="text-xl font-bold mb-4">Client Details</h2>
        {/* Display client details in a form */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              value={selectedBox.user.name}
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label>Full Address</label>
            <input
              type="text"
              value={selectedBox.user.address || ''}
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={selectedBox.user.email || ''}
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              value={selectedBox.user.country || ''}
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              value={selectedBox.user.postalCode || ''}
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={selectedBox.user.city || ''}
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              value={selectedBox.user.phone}
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value="******"
              readOnly
              className="border p-2 w-full rounded pointer-events-none bg-gray-100 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
