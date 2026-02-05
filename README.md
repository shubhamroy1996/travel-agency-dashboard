# 🌍 Travel Agency Dashboard

A comprehensive full-stack travel agency management platform with an admin dashboard and customer-facing travel booking interface. Built with React Router, TypeScript, and modern web technologies for server-side rendering and optimal performance.

<img width="1286" height="632" alt="Travel Agency Dashboard" src="https://via.placeholder.com/1286x632?text=Travel+Agency+Dashboard" />

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [API Integration](#api-integration)
- [Usage](#usage)
- [Build & Deployment](#build--deployment)
- [Scripts](#scripts)
- [Performance Optimizations](#performance-optimizations)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Admin Dashboard Features
- **Dashboard Analytics** - Real-time statistics with user growth and trip analytics
- **User Management** - View all users with pagination and data grid
- **Trip Management** - Create, edit, and manage travel trips
- **Data Visualization** - Charts for user growth, trip trends, and travel styles
- **Interactive Maps** - World map integration for trip location selection
- **Trip Details** - View comprehensive trip information and details

### Customer Portal Features
- **Travel Browsing** - Browse available travel destinations
- **Trip Details** - View detailed information about specific trips
- **Search & Filter** - Find trips by destination, date, and preferences
- **Responsive Design** - Mobile-first design for all devices

### Advanced Features
- **Authentication** - Google OAuth integration with Appwrite
- **Backend Integration** - Appwrite BaaS for database and authentication
- **Server-Side Rendering** - React Router for SSR and optimal SEO
- **AI Integration** - Google Generative AI for enhanced features
- **Monitoring** - Sentry integration for error tracking
- **Docker Ready** - Containerized deployment support

---

## 🛠️ Tech Stack

### Frontend Framework & Routing
- **React 19** - Latest React version
- **React Router 7** - Server-side rendering and routing
- **TypeScript** - Static type checking

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Tailwind Merge** - Utility for merging Tailwind classes
- **PostCSS** - CSS transformations

### UI Components & Data
- **Syncfusion Components** - Enterprise-grade UI components
  - GridComponent - Data tables
  - MapsComponent - Interactive maps
  - ComboBoxComponent - Dropdown selection
  - ButtonComponent - Button utilities
  - ChartComponent - Data visualization
  - PagerComponent - Pagination

### Backend & Database
- **Appwrite** - Backend-as-a-Service platform
- **Node.js** - Server runtime
- **REST APIs** - External API integration

### AI & Analytics
- **Google Generative AI** - AI-powered features
- **Sentry** - Error tracking and performance monitoring
- **Sentry Profiling Node** - Performance profiling

### Utilities
- **Day.js** - Date and time manipulation
- **clsx** - Conditional className utilities
- **isbot** - Bot detection

---

## 📁 Project Structure

```
travel-agency-dashboard/
├── app/
│   ├── appwrite/                      # Appwrite service layer
│   │   ├── client.ts                  # Appwrite client configuration
│   │   ├── auth.ts                    # Authentication functions
│   │   ├── dashboard.ts               # Dashboard analytics
│   │   └── trip.ts                    # Trip data operations
│   ├── routes/                        # Page routes
│   │   ├── admin/                     # Admin dashboard routes
│   │   │   ├── dashboard.tsx          # Analytics dashboard
│   │   │   ├── admin-layout.tsx       # Admin layout wrapper
│   │   │   ├── all-users.tsx          # User management
│   │   │   ├── trips.tsx              # Trip listing
│   │   │   ├── create-trip.tsx        # Create new trip
│   │   │   └── trip-detail.tsx        # Trip details view
│   │   ├── root/                      # Customer-facing routes
│   │   │   ├── page-layout.tsx        # Main layout
│   │   │   ├── travel-page.tsx        # Travel browsing
│   │   │   ├── travel-detail.tsx      # Trip details
│   │   │   └── sign-in.tsx            # Authentication
│   │   └── api/                       # API routes
│   │       └── create-trip.ts         # Trip creation endpoint
│   ├── constants/                     # App constants
│   │   ├── index.ts                   # Constants export
│   │   └── world_map.ts               # Map data
│   ├── lib/                           # Utility functions
│   │   └── utils.ts                   # Helper functions
│   ├── root.tsx                       # Root layout component
│   ├── routes.ts                      # Route configuration
│   ├── app.css                        # Global styles
│   ├── entry.client.tsx               # Client entry point
│   └── entry.server.tsx               # Server entry point
├── components/                        # Shared components
│   ├── Headers.tsx                    # Header component
│   ├── Navbar.tsx                     # Navigation bar
│   ├── MobileSidebar.tsx              # Mobile sidebar
│   ├── StatsCard.tsx                  # Statistics card
│   ├── TripCard.tsx                   # Trip card display
│   ├── Info.tsx                       # Info component
│   └── index.tsx                      # Component exports
├── public/
│   └── assets/                        # Static assets
│       ├── icons/                     # SVG icons
│       └── images/                    # Images
├── .github/                           # GitHub workflows
├── vite.config.ts                     # Vite configuration
├── react-router.config.ts             # React Router configuration
├── tsconfig.json                      # TypeScript configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── Dockerfile                         # Docker configuration
├── package.json                       # Dependencies
├── .env.local                         # Environment variables
└── README.md                          # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 3.0.0
- Appwrite instance (local or cloud)
- Google OAuth credentials
- Syncfusion license key (for production)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd travel-agency-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see Configuration section)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`
   - Admin: `/admin/Dashboard`
   - Customer: `/`

---

## ⚙️ Environment Setup

### Required Environment Variables

Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
VITE_APPWRITE_API_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPRWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_API_KEY=your_api_key
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPRWRITE_USERS=users_collection_id
VITE_APPWRITE_TRIPS=trips_collection_id

# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_google_client_id

# Syncfusion License
VITE_SYNCFUSION_LICENSE_KEY=your_license_key

# Sentry
SENTRY_AUTH_TOKEN=your_sentry_token
```

### Appwrite Setup

1. Create a new Appwrite project
2. Set up database with two collections:
   - **Users** - User data with OAuth integration
   - **Trips** - Travel trip information
3. Configure OAuth provider for Google
4. Copy credentials to `.env.local`

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Set up OAuth consent screen
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs
6. Copy Client ID to `.env.local`

---

## API Integration

### External APIs

#### REST Countries API
- **Endpoint**: `https://restcountries.com/v3.1/independent?status=true`
- **Purpose**: Fetch country data for trip creation
- **Usage**: Dynamic dropdown in create trip form

#### Google Generative AI
- **Package**: `@google/generative-ai`
- **Purpose**: AI-powered trip recommendations
- **Configuration**: Requires API key from Google Cloud

---

## 💻 Usage

### Admin Dashboard

1. **Navigate to Admin**
   - URL: `/admin/Dashboard`
   - Requires authentication

2. **Dashboard Features**
   - View user growth statistics
   - Monitor trip creation trends
   - Analyze travel style preferences
   - Real-time analytics

3. **User Management**
   - URL: `/admin/all-users`
   - View all registered users
   - Paginated data grid

4. **Trip Management**
   - URL: `/admin/trips`
   - View all created trips
   - Create new trips: `/admin/trips/create`
   - View trip details: `/admin/trips/:tripId`

### Customer Portal

1. **Browse Trips**
   - URL: `/`
   - View featured destinations
   - Filter and search trips

2. **Trip Details**
   - URL: `/travel/:tripId`
   - View comprehensive trip information
   - Check activities and pricing

3. **Authentication**
   - URL: `/sign-in`
   - Google OAuth authentication
   - Account management

---

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

This creates optimized production builds:
- `build/client/` - Static assets
- `build/server/` - Server-side code

### Preview Production Build

```bash
npm run preview
# or
npm start
```

### Docker Deployment

#### Build Docker Image

```bash
docker build -t travel-agency-dashboard .

# Run container
docker run -p 3000:3000 --env-file .env.local travel-agency-dashboard
```

#### Deployment Platforms

The containerized application can be deployed to:

- **AWS ECS** - Elastic Container Service
- **Google Cloud Run** - Serverless containers
- **Azure Container Apps** - Container apps service
- **Digital Ocean App Platform** - Simple deployment
- **Fly.io** - Edge deployment
- **Railway** - Zero-config deployment
- **Render** - Cloud platform
- **Vercel** - Serverless deployment

#### Deployment Commands

```bash
# Build production bundle
npm run build

# Deploy build directory
# Upload 'build/' folder to your hosting service
```

---

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Run production server |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run TypeScript type checking |

---

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚡ Performance Optimizations

### Implemented Optimizations

- **Server-Side Rendering** - React Router SSR for optimal SEO
- **Code Splitting** - Lazy loading of admin and customer routes
- **Tree Shaking** - Removal of unused code during build
- **Source Maps** - Production source map generation
- **Compression** - Gzip compression for assets
- **Image Optimization** - WebP format support

### Performance Monitoring

- **Sentry Integration** - Real-time error tracking
- **Performance Profiling** - Node.js performance profiling
- **Analytics** - Track user interactions and metrics

### Performance Issues & Solutions

See [PERFORMANCE_ANALYSIS.md](PERFORMANCE_ANALYSIS.md) for detailed analysis of:

- Bundle size optimization recommendations
- Syncfusion component alternatives
- API request optimization
- Blocking operations mitigation
- Cache strategy implementation

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📞 Support & Contact

For questions or support, please open an issue in the repository.

---

## 🙏 Acknowledgments

- **React Router** - Server-side rendering framework
- **Appwrite** - Backend-as-a-Service platform
- **Syncfusion** - Enterprise UI components
- **Tailwind CSS** - Styling framework
- **Sentry** - Error tracking
- **Google Cloud** - AI and authentication services

---

**Last Updated**: February 5, 2026
**Version**: 1.0.0
