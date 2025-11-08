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
- Application client ID yang valid (format: `pk_xxx`)

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
NEXT_PUBLIC_CLIENT_ID=pk_your_client_id_here
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

## Local Development dengan SDK

Aplikasi ini menggunakan `@authtara/sdk` dari workspace lokal (tidak perlu publish ke npm). Setup menggunakan Bun workspaces untuk development yang lebih efisien.

### Development Workflow

1. **Build SDK pertama kali** (jika belum):
   ```bash
   # Dari root workspace
   bun run build:sdk
   
   # Atau langsung dari authtara-sdk directory
   cd authtara-sdk
   bun run build
   ```

2. **Jalankan SDK watch mode** (terminal 1):
   ```bash
   # Dari root workspace
   bun run dev:sdk
   
   # Atau langsung dari authtara-sdk directory
   cd authtara-sdk
   bun run dev:watch
   ```
   Watch mode akan auto-rebuild SDK saat ada perubahan di source code.

3. **Jalankan aplikasi** (terminal 2):
   ```bash
   # Dari root workspace
   bun run dev:app
   
   # Atau langsung dari simple-app-authtara directory
   cd simple-app-authtara
   bun run dev
   ```

### Menggunakan NPM Registry (Production)

Untuk production atau jika ingin menggunakan versi dari npm registry, ubah dependency di `package.json`:

```json
{
  "dependencies": {
    "@authtara/sdk": "^1.0.1"
  }
}
```

Kemudian jalankan:
```bash
bun install
```

## Notes

- **Development**: Aplikasi menggunakan `@authtara/sdk` dari workspace lokal (`workspace:*`)
- **Production**: Dapat menggunakan versi dari npm registry (`^1.0.1`)
- Backend API endpoint: `/widget/api/*`
- Client ID harus valid dan terdaftar di backend

## Troubleshooting

### Error 401 (Unauthorized) di Console

Jika Anda melihat error `401 (Unauthorized)` di browser console saat aplikasi pertama kali load, ini adalah **expected behavior** dan tidak mengganggu aplikasi.

**Penjelasan:**

- AuthProvider mencoba check existing session saat initial load
- Jika user belum login, backend mengembalikan 401 (yang benar)
- SDK dan AuthProvider sudah handle error ini dengan graceful (silent fail)
- Error di console adalah browser logging failed HTTP request, tapi aplikasi tetap berfungsi normal

**Solusi:** Tidak ada yang perlu dilakukan - aplikasi sudah bekerja dengan benar. Setelah user login, error ini tidak akan muncul lagi.
