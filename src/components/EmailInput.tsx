import React from 'react';

const EmailInput: React.FC = () => {
  return (
    <div className="flex items-center border border-customGray rounded-2xl p-2 w-full md:w-auto max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-transparent px-4 outline-none text-sm"
      />
      <button className="bg-customPink hover:bg-[#e55e5e] text-white font-semibold rounded-xl px-4 py-2 shadow-md">
        Subscribe
      </button>
    </div>
  );
};

export default EmailInput;
