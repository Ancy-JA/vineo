// BoxItem.tsx
import React from 'react';
import { Box, Wine } from './Types';
import ActionButtons from './ActionButtons';

interface BoxItemProps {
  box: Box;
  handleDownload: (boxId: string) => void;
  handleView: (box: Box) => void;
}

const BoxItem: React.FC<BoxItemProps> = ({ box, handleDownload, handleView }) => (
  <div className="grid grid-cols-1 xl:grid-cols-[3fr_4fr_1fr_1fr_1fr_1fr_3fr] gap-2 items-center p-2 border-b text-left">
    {/* User Details */}
    <div className="flex items-left space-x-4">
      <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
        {box.user.name.charAt(0)}
      </div>
      <div>
        <div className="font-semibold">{box.user.name}</div>
        <div className="text-sm text-gray-600">{box.user.phone}</div>
      </div>
    </div>

    {/* Wine in Box */}
    <div className="grid gap-y-1">
      {box.box_wines.map((wine: Wine, idx: number) => (
        <div key={idx} className="flex justify-between items-center text-sm text-gray-700">
          <span className="truncate">{wine.name}</span>
          <span className="text-green-500 px-2 py-1 rounded border border-green-500">
            {`${box.box_wines.length} veces`}
          </span>
        </div>
      ))}
    </div>

    {/* Creation and Delivery Dates */}
    <div className="text-sm text-gray-600">{new Date(box.created_at).toLocaleDateString()}</div>
    <div className="text-sm text-gray-600">{new Date(box.delivery_date).toLocaleDateString()}</div>

    {/* Box Type and Status */}
    <div>
      <span className={`px-2 py-1 rounded ${box.status === 'Entregable' ? 'text-green-500' : 'text-red-500'}`}>
        {box.status === 'Entregable' ? 'Entregable' : 'Rechazada'}
      </span>
    </div>
    <div className="text-sm text-red-600">{box.status}</div>

    {/* Action Buttons */}
    <div>
      <ActionButtons
        onDownload={() => handleDownload(box._id)}
        onView={() => handleView(box)}
        phone={box.user.phone}
      />
    </div>
  </div>
);

export default BoxItem;
