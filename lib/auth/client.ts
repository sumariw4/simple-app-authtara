/**
 * Auth Client Setup
 * Singleton pattern untuk ensure single AuthClient instance
 */

import { AuthClient } from '@authtara/sdk';

// Get environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

if (!CLIENT_ID) {
  throw new Error(
    'NEXT_PUBLIC_CLIENT_ID is required. Please set it in your .env.local file.',
  );
}

if (!CLIENT_ID.startsWith('app_')) {
  throw new Error('NEXT_PUBLIC_CLIENT_ID must start with "app_"');
}

// Construct API URL dengan path /widget/api
const WIDGET_API_URL = `${API_URL}/widget/api`;

// Singleton instance
let authClientInstance: AuthClient | null = null;

/**
 * Get or create AuthClient instance
 * Singleton pattern untuk ensure single instance across app
 */
export function getAuthClient(): AuthClient {
  if (!authClientInstance) {
    authClientInstance = new AuthClient({
      clientId: CLIENT_ID,
      apiUrl: WIDGET_API_URL,
    });
  }

  return authClientInstance;
}

/**
 * Create new AuthClient instance (for testing or special cases)
 */
export function createAuthClient(): AuthClient {
  return new AuthClient({
    clientId: CLIENT_ID,
    apiUrl: WIDGET_API_URL,
  });
}

