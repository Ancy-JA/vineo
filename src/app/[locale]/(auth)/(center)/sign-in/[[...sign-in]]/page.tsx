'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useLoginUserMutation } from '@/app/redux/authApi'; // Import the mutation hook

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginUser] = useLoginUserMutation(); // Use the mutation from authApi

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

    try {
      const { data, error } = await loginUser(formData).unwrap(); // Use the loginUser mutation

      if (error) {
        setApiError('Login failed.');
      } else {
        const { accessToken, refreshToken } = data.userLogin;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      }
    } catch {
      setApiError('Incorrect email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-50 font-inter">
      <div className="absolute left-6 top-6">
        <Image src="/vineo.png" alt="Vineo Logo" width={100} height={100} />
      </div>

      {/* Background Image Container */}
      <div className="absolute bottom-0 left-0 right-20 top-20 bg-glass-bottle bg-600px bg-no-repeat md:bg-center lg:bg-left">
        <span className="sr-only">Wine illustration</span>
      </div>

      {/* Main container with flexbox to align the elements */}
      <div className="relative bottom-40 top-0 z-10 w-full max-w-lg rounded-lg px-6 py-4 font-inter shadow-2xl lg:left-40">
        <Typography variant="h3" component="h2" className="mb-6 text-center font-inter text-4xl font-bold text-[#303E63] md:text-3xl lg:text-4xl">
          Welcome to Vineo
        </Typography>

        <Typography variant="h6" component="h2" className="mb-6 text-center font-inter font-bold text-[#394A59]">
          Login
        </Typography>

        {apiError && <p className="mb-4 text-center text-sm text-red-500">{apiError}</p>}

        <Box component="form" noValidate className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="mb-2 block text-[#394A59]">Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={`w-full border bg-gray-100/60 p-3 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-[#394A59]">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                className={`w-full border bg-gray-100/60 p-3 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end" className="focus:outline-none">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </span>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[#303E63]">Remember Me</span>
            <Link href="/forgot-password" className="text-sm text-[#303E63]">
              Have you forgotten your password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 w-full rounded-lg bg-[#F78A79] px-4 py-3 font-bold text-white hover:bg-[#F66F65] focus:outline-none focus:ring-2 focus:ring-[#F78A79] ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="mt-4 flex justify-center">
            <button type="button">
              <Image src="/flat-color-icons_google.svg" alt="Google Icon" className="mr-2" width={24} height={24} />
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
