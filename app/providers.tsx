'use client';

import { AuthProvider } from '@authtara/sdk/react';
import { getAuthClient } from '@/lib/auth/client';

const authClient = getAuthClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider client={authClient}>{children}</AuthProvider>;
}

