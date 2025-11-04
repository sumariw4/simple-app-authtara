'use client';

import React, { useMemo } from 'react';
import { AuthProvider } from '@authtara/sdk/react';
import { getAuthClient } from '@/lib/auth/client';

/**
 * Providers Component
 *
 * Note: Error 401 (Unauthorized) di console saat initial load adalah expected behavior.
 * Ini terjadi karena AuthProvider mencoba check existing session sebelum user login.
 * Error ini tidak mengganggu aplikasi dan sudah di-handle dengan graceful oleh SDK.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // Initialize authClient dalam useMemo untuk ensure single instance
  const authClient = useMemo(() => getAuthClient(), []);

  // Type assertion untuk handle React 19 types compatibility dengan SDK yang menggunakan React 18 types
  // Double assertion diperlukan karena TypeScript melihat ReactNode dari dua versi berbeda sebagai tipe yang berbeda
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <AuthProvider client={authClient}>{children as any}</AuthProvider>;
}
