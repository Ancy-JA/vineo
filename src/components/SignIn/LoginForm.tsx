import React, { useState } from 'react';
import { Box, Link } from '@mui/material';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
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
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const { data } = await loginUser(values).unwrap();
        if (data?.userLogin?.accessToken && data?.userLogin?.refreshToken) {
          saveTokens(data.userLogin);
          router.push('/userdashboard');
        }
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box component="form" noValidate className="space-y-4" onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        label={t('signIn.emailLabel')}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />
      <PasswordField
        id="password"
        label={t('signIn.passwordLabel')}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        error={formik.touched.password && formik.errors.password}
      />
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[#303E63]">{t('signIn.rememberMe')}</span>
        <Link href="/forgot-password" className="text-sm text-[#303E63]">
          {t('signIn.forgotPassword')}
        </Link>
      </div>
      <LoadingButton isLoading={loading} text={t('signIn.loginButton')} loadingText={t('signIn.loggingIn')} type="submit" />
      <div className="flex justify-center mt-4">
  <SocialLoginButton
    iconSrc="/flat-color-icons_google.svg"
    altText="Google Icon"
    onClick={() => { /* Google login logic */ }}
  />
</div>

    </Box>
  );
}
