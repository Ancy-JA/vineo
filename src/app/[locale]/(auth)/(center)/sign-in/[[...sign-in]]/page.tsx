'use client';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { useLoginUserMutation } from '@/app/redux/authApi';

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const { data } = await loginUser(values).unwrap();
        if (data?.userLogin?.accessToken && data?.userLogin?.refreshToken) {
          const { accessToken, refreshToken } = data.userLogin;

          // Store tokens in localStorage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          // Redirect to the dashboard
          router.push('/userdashboard');
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-50 font-inter">
      <div className="absolute left-6 top-6">
        <Image src="/vineo.png" alt="Vineo Logo" width={100} height={100} />
      </div>
      {/* Background Image Container */}
      <div className="absolute bottom-0 left-0 right-20 top-24 bg-glass-bottle bg-39rem bg-no-repeat md:bg-center lg:bg-left">
        <span className="sr-only">Wine illustration</span>
      </div>

      <div className="relative bottom-40 top-0 z-10 w-full max-w-lg rounded-lg px-6 py-4 font-inter shadow-2xl lg:left-40">
        <Typography variant="h3" className="mb-6 text-center text-2xl font-bold text-[#303E63]">
          Welcome to Vineo
        </Typography>
        <Typography variant="h6" className="mb-6 text-center font-bold text-[#394A59]">
          Login
        </Typography>

        <Box component="form" noValidate className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="mb-2 block text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full border bg-gray-100/60 p-3 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="mt-1 text-sm text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="mb-2 block text-[#394A59]">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`w-full border bg-gray-100/60 p-3 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" className="focus:outline-none">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[#303E63]">Remember Me</span>
            <Link href="/forgot-password" className="text-sm text-[#303E63]">Forgot your password?</Link>
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
