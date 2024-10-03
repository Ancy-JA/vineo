'use client';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Typography, Link, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (formData: { email: string; password: string }) => {
    setApiError('');
    setLoading(true);

    const query = `
      query userLogin($payload: UserLoginDto!) {
        userLogin(payload: $payload) {
          accessToken
          refreshToken
        }
      }
    `;

    try {
      const response = await fetch('https://vineoback-gh-qa.caprover2.innogenio.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          variables: { payload: formData },
        }),
      });

      const { data, errors } = await response.json();

      if (errors) {
        setApiError('Login failed.');
      } else {
        const { accessToken, refreshToken } = data.userLogin;
        console.log('Login successful', { accessToken, refreshToken });
      }
    } catch (err) {
      setApiError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex w-full min-h-screen items-center justify-center bg-gray-50 font-inter">
      <div className="absolute top-6 left-6">
        <Image src="/vineo.png" alt="Vineo Logo" width={100} height={100} />
      </div>

      {/* Background Image Container */}
      <div
        className="absolute right-20 top-20 left-0 bottom-0 bg-no-repeat md:bg-center lg:bg-left bg-image"
        style={{
          backgroundImage: "url('/glass-bottle.png')",
        }}
      >
        <style jsx>{`
          .bg-image {
            background-size: 600px;
          }
        `}</style>
        <span className="sr-only">Wine illustration</span>
      </div>

      {/* Main container with flexbox to align the elements */}
      <div className="relative w-full max-w-lg px-6 py-4 shadow-2xl rounded-lg z-10 lg:left-40 top-0 bottom-40">
        <Typography variant="h3" component="h2" className="mb-6 text-center font-bold text-gray-800 text-4xl md:text-3xl lg:text-4xl">
          Welcome to Vineo
        </Typography>

        <Typography variant="h6" component="h2" className="mb-6 text-center font-bold text-gray-800">
          Login
        </Typography>

        {apiError && <p className="text-red-500 text-sm text-center mb-4">{apiError}</p>}

        <Box component="form" noValidate className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              {...register('email')}
              className={`w-full p-3 border bg-gray-100 bg-opacity-60 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                className={`w-full p-3 border bg-gray-100 bg-opacity-60 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end" className="focus:outline-none">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600">Remember Me</span>
            <Link href="/forgot-password" className="text-sm text-gray-600">
              Have you forgotten your password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#F78A79] hover:bg-[#F66F65] text-white font-bold py-3 px-4 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-[#F78A79] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="flex justify-center mt-4">
            <button
              type="button"
            >
              {/* Load the SVG from the public folder */}
              <img src="/flat-color-icons_google.svg" alt="Google Icon" className="mr-2" width={24} height={24} />
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
