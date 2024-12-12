import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import TextField from '@/components/SignIn/TextField';
import PasswordField from '@/components/SignIn/PasswordField';
import LoadingButton from '@/components/LoadingButton';
import SocialLoginButton from '@/components/SocialLoginButton';
import { loginValidationSchema } from '@/utils/validationSchemas';
import { useLoginUserMutation } from '@/app/redux/authApi';
import { saveTokens } from '@/utils/Token';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();


  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const { data } = await loginUser(values).unwrap();
        if (data?.userLogin?.accessToken && data?.userLogin?.refreshToken) {
          // Save tokens and navigate to the user dashboard
          saveTokens(data.userLogin);
          router.push('/userdashboard');
        } else {
          // Set error message for incorrect email or password
          setErrorMessage("Email and password do not match");
        }
      } catch (error) {
        // Handle login failure and show error message
        setErrorMessage('Email and password do not match');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box component="form" noValidate className="space-y-4" onSubmit={formik.handleSubmit}>
      <TextField
  id="email"
  label={ "Email"}
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.email && Boolean(formik.errors.email)}
  helperText={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
/>

<PasswordField
  id="password"
  label={"Password"}
  value={formik.values.password}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  showPassword={showPassword}
  setShowPassword={setShowPassword}
  error={formik.touched.password && Boolean(formik.errors.password)}
  helperText={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
/>

      {/* Display error message */}
      {errorMessage && (
        <Typography variant="body2" className="text-red-500 text-center">
          {errorMessage}
        </Typography>
      )}

      <div className="pb-12 flex items-center justify-between">
        <div className="text-[#303E63]">{"Remember Me"}</div>
        <Link href="/forgot-password" className="text-md text-[#303E63]">
          {"Forgot your password?"}
        </Link>
      </div>

      <LoadingButton isLoading={loading} text={"Login"} loadingText={"Logging in..."} type="submit" />

      <div className="flex justify-center scale-150 mt-4">
        <SocialLoginButton
          iconSrc="/flat-color-icons_google.svg"
          altText="Google Icon"
          
          onClick={() => {
            // Add Google login logic if needed
          }}
        />
      </div>
    </Box>
  );
}
