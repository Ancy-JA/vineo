'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm, FieldError, UseFormRegister } from 'react-hook-form';
import * as Yup from 'yup';
//import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import { useLoginUserMutation, useGetBoxHistoryQuery, useGetSubscriptionStatusMutation } from '@/app/redux/authApi';

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// Define FormData structure
interface FormData {
  email: string;
  password: string;
}

// Interface for TextInput Props
interface TextInputProps {
  id: keyof FormData; // Ensure the id corresponds to the keys in FormData
  label: string;
  type: string;
  register: UseFormRegister<FormData>; // Type-safe register function
  error?: FieldError; // Optional error field to show validation errors
}

// TextInput Component
const TextInput: React.FC<TextInputProps> = ({ id, label, type, register, error }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-gray-700">{label}</label>
    <input
      id={id}
      type={type}
      {...register(id)}
      className={`w-full border bg-gray-100/60 p-3 ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500`}
    />
    {error && <div className="mt-1 text-sm text-red-500">{error.message}</div>}
  </div>
);

// Main Login Component
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginUser] = useLoginUserMutation();
  const [getSubscriptionStatus] = useGetSubscriptionStatusMutation();
  //const router = useRouter(); // Initialize the router

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  // Handles form submission
  const onSubmit = async (formData: FormData) => {
    setApiError('');
    setLoading(true);

    try {
      const { data } = await loginUser(formData).unwrap();
      if (data?.userLogin) {
        const { accessToken, refreshToken } = data.userLogin;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setIsLoggedIn(true);
      } else {
        setApiError('Login failed.');
      }
    } catch {
      setApiError('Incorrect email or password.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch subscription status if logged in
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      if (isLoggedIn) {
        try {
          const subscriptionStatus = await getSubscriptionStatus({}).unwrap();
          console.log('Subscription Status:', subscriptionStatus);
        } catch (error) {
          console.error('Error fetching subscription status:', error);
        }
      }
    };
    fetchSubscriptionStatus();
  }, [isLoggedIn, getSubscriptionStatus]);

  // Fetch box history after login
  const { data: boxHistoryData, error: boxHistoryError } = useGetBoxHistoryQuery(
    { page: 1, limit: 10 },
    { skip: !isLoggedIn }
  );

  useEffect(() => {
    if (boxHistoryData) console.log('Box History Data:', boxHistoryData);
    if (boxHistoryError) console.error('Error fetching Box History:', boxHistoryError);
  }, [boxHistoryData, boxHistoryError]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-50 font-inter">
      {/* Logo */}
      <div className="absolute left-6 top-6">
        <Image src="/vineo.png" alt="Vineo Logo" width={100} height={100} />
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-20 top-24 bg-glass-bottle bg-39rem bg-no-repeat md:bg-center lg:bg-left">
        <div className="sr-only">Wine illustration</div>
      </div>

      {/* Main Login Container */}
      <div className="relative bottom-40 top-0 z-10 w-full max-w-lg rounded-lg px-6 py-4 font-inter shadow-2xl lg:left-40">
        <Typography variant="h3" className="mb-6 text-center text-2xl font-bold text-[#303E63]">
          Welcome to Vineo
        </Typography>
        <Typography variant="h6" className="mb-6 text-center font-bold text-[#394A59]">
          Login
        </Typography>

        {/* API Error */}
        {apiError && <div className="mb-4 text-center text-sm text-red-500">{apiError}</div>}

        {/* Login Form */}
        <Box component="form" noValidate className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput id="email" label="Email" type="email" register={register} error={errors.email} />
          
          <div>
            <label htmlFor="password" className="mb-2 block text-[#394A59]">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                className={`w-full border bg-gray-100/60 p-3 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" className="focus:outline-none">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
          </div>

          {/* Additional Form Options */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[#303E63]">Remember Me</span>
            <Link href="/forgot-password" className="text-sm text-[#303E63]">Forgot your password?</Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-4 w-full rounded-lg bg-[#F78A79] px-4 py-3 font-bold text-white hover:bg-[#F66F65] focus:outline-none focus:ring-2 focus:ring-[#F78A79] ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Social Login (Placeholder for Google) */}
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
