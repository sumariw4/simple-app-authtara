# Simple App AuthTara

Aplikasi Next.js 16+ sederhana dengan autentikasi menggunakan @authtara/sdk yang terhubung ke backend widget API.

## Fitur

- ✅ Sign Up (Registrasi)
- ✅ Sign In (Login)
- ✅ Protected Dashboard dengan informasi user
- ✅ Sign Out
- ✅ Route protection dengan middleware
- ✅ Modern UI dengan Tailwind CSS

## Setup

### Prerequisites

- Bun >= 1.0.0 (package manager)
- Backend saas-backend harus running di `http://localhost:3000`
- Application client ID yang valid (format: `app_xxx`)

### Installation

1. Install dependencies:
```bash
bun install
```

2. Copy environment variables template:
```bash
cp .env.local.example .env.local
```

3. Edit `.env.local` dan set:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_CLIENT_ID=app_your_client_id_here
```

### Development

Run development server:
```bash
bun run dev
```

Aplikasi akan berjalan di `http://localhost:3002`

### Build

Build untuk production:
```bash
bun run build
```

Run production server:
```bash
bun run start
```

## Project Structure

```
simple-app-authtara/
├── app/
│   ├── (auth)/              # Auth routes group
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/          # Protected routes group
│   │   └── page.tsx         # Dashboard page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home (redirect logic)
│   ├── providers.tsx       # Client providers
│   └── globals.css           # Global styles
├── components/
│   └── auth/
│       ├── login-form.tsx   # Login form component
│       └── signup-form.tsx  # Signup form component
├── lib/
│   └── auth/
│       └── client.ts        # AuthClient initialization
├── middleware.ts            # Route protection middleware
└── package.json
```

## Tech Stack

- **Next.js 16+** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **@authtara/sdk** (Authentication SDK)

## Usage

1. Buka aplikasi di `http://localhost:3002`
2. Home page akan redirect ke `/login` jika belum authenticated
3. Sign up atau Sign in untuk mengakses dashboard
4. Dashboard menampilkan informasi user dan tombol sign out

## Notes

- Aplikasi menggunakan `@authtara/sdk` dari local package (`file:../saas-authtara-sdk`)
- Backend API endpoint: `/widget/api/*`
- Client ID harus valid dan terdaftar di backend

