'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/app/constants/imageconstants';

const CongratulationsPage: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(true); // Initially blurred
  const [email, setEmail] = useState(''); // Track email input

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      setIsBlurred(false); // Remove blur on valid email
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMAGES.paperbg})`,
      }}
    >
      {/* Transparent Header */}
      <div className="w-full fixed top-0 left-0 bg-blurgradient  shadow-md z-10">
        <div className="max-w-[108rem] mx-auto flex items-center p-4">
          <Image
            src={IMAGES.vineoLogo}
            alt="Vineo Logo"
            width={200}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-20 px-4 font-domine relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl">
          <div className="text-4xl font-bold mt-[2rem] text-gray-800">¡Enhorabuena!</div>
          <div className="text-2xl max-w-[53rem] text-gray-600 mt-6">
            Ya sabemos tus gustos, ahora aprende sobre vinos cada mes con las cajas de Vineo.
            Suscríbete, disfruta y aprende sobre el vino.
          </div>
        </div>

        {/* Email Form */}
        <div className="mt-8 w-full text-xl max-w-[40rem]">
          <div className="flex xsm:flex-row flex-col items-center gap-3 font-domine">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-2 py-5 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <button
              className="bg-customPink text-white px-10 py-4 w-full max-w-[15rem] rounded-xl"
              onClick={handleSubmit} // Validate email and remove blur
            >
              Crear cuenta
            </button>
          </div>
        </div>

        {/* Profile and Wine Preferences Section */}
        <div className="relative w-full max-w-4xl mt-16">
          {/* Blur Layer */}
          {isBlurred && (
  <div
    className="absolute inset-0 backdrop-blur-sm rounded-xl z-10 pointer-events-none bg-blurgradient"
    
  ></div>
)}
          {/* Content */}
          <div
            className={`relative z-20 ${
              isBlurred ? 'filter blur-sm ' : 'filter blur-none '
            } transition-all duration-300`}
          >
            {/* Profile Section */}
            <div className="text-center">
              <div className="text-3xl mb-[2rem] pt-7 font-bold text-gray-800">Este es tu perfil</div>
              <div className="w-[18rem] xsm:w-[20rem] h-[20rem] mx-auto bg-transparent rounded-2xl shadow-all-sides-2xl" />
            </div>

            {/* Wine Preferences Section */}
            <div className="mt-8">
              <div className="text-2xl font-semibold text-gray-800 text-center mb-[2rem]">
                Estas son el estilo de vinos que te gustan:
              </div>
              <div className="mt-4 flex flex-col text-2xl justify-center items-center gap-6">
                <div className="bg-transparent p-6 shadow-all-sides-xl rounded-2xl flex flex-row gap-4 w-[18rem] xsm:w-[28rem] md:w-[40rem] h-[15rem] items-center justify-center">
                  <div className="text-customGray">Vino Blanco</div>
                  <button className="bg-customPink text-white mt-4 px-6 py-2 rounded-lg">Seleccionar</button>
                </div>
                <div className="bg-transparent p-6 shadow-all-sides-xl rounded-2xl flex flex-row gap-4 w-[18rem] xsm:w-[28rem] md:w-[40rem] h-[15rem] items-center justify-center">
                  <div className="text-customGray">Vino Tinto</div>
                  <button className="bg-customPink text-white mt-4 px-6 py-2 rounded-lg">Seleccionar</button>
                </div>
                <div className="bg-transparent p-6 mb-7 shadow-all-sides-xl  rounded-2xl flex flex-row gap-4 w-[18rem] xsm:w-[28rem] md:w-[40rem] h-[15rem] items-center justify-center">
                  <div className="text-customGray">Vino Rosado</div>
                  <button className="bg-customPink text-white mt-4 px-6 py-2 rounded-lg">Seleccionar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center text-2xl">
          <div className="font-semibold mb-[1rem] text-customGray">Comienza hoy y descubre tu primera caja</div>
          <button className="bg-customPink text-white mt-4 mb-[2rem] px-8 py-3 rounded-md">Suscribirme</button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsPage;
