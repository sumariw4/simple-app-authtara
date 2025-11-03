'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@authtara/sdk/react';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  // Redirect jika sudah authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleSuccess = () => {
    router.push('/dashboard');
  };

  // Show loading state saat check authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render form if already authenticated (will redirect)
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sign In</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account to continue</p>
        </div>

        <LoginForm onSuccess={handleSuccess} />

        <div className="text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
