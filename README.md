# Hatronika Energy Platform

A modern React-based web application for solar energy system configuration, investment opportunities, and energy portfolio management. Built with Vite for optimal development experience and performance.

## 🚀 Features

### Core Functionality
- **Multi-step System Configuration**: Interactive wizard for solar panel system sizing and specification
- **Investment Portal**: Platform for individual and institutional energy investments
- **Real-time Calculations**: Dynamic system specifications and financial projections
- **Geographic Integration**: Google Maps integration for site location and analysis
- **User Authentication**: Secure login with OTP verification
- **Responsive Design**: Mobile-first approach with modern UI components

### User Journeys
- **Energy Consumers**: Configure systems with pay-per-use or purchase options
- **Individual Investors**: Build personal energy portfolios
- **Property Developers**: Manage multiple properties and energy solutions
- **Tender Management**: Investment opportunity discovery and bidding

## 🛠 Tech Stack

- **Frontend**: React 18.3.1 with modern hooks and context
- **Build Tool**: Vite 4.x for fast development and optimized builds
- **Routing**: React Router DOM 6.x with protected routes
- **Maps**: Google Maps API integration via `@vis.gl/react-google-maps`
- **UI Components**: Custom component library with cards, panels, and form controls
- **State Management**: React Context API for auth and notifications
- **HTTP Client**: Axios for API communication
- **Styling**: CSS Modules with modern responsive design

## 📦 Installation

### Prerequisites
- Node.js 16+ (recommended: 18+)
- npm, yarn, or pnpm

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd hatronika-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗 Project Structure

```
src/
├── api/                    # API integration layer
├── common/                 # Shared utilities and helpers
├── context/               # React context providers
│   ├── AuthProvider       # Authentication state
│   ├── ToastProvider      # Notification system
│   └── ProtectedRoute     # Route protection
├── navigation/            # Routing configuration
│   └── routes/           # Route definitions
├── ui/                   # UI components and pages
│   ├── core/             # Main application pages
│   │   ├── add-system/   # System configuration wizard
│   │   ├── dashboard/    # User dashboard
│   │   ├── tenders/      # Investment opportunities
│   │   ├── thank-you/    # Completion pages
│   │   └── ...
│   └── components/       # Reusable UI components
public/
├── config.json           # Application configuration
└── assets/              # Static assets
```

## 🔧 Configuration

### Environment Setup
The application uses a configuration-driven approach with `public/config.json` for:
- User type definitions and flows
- Form field configurations
- Step-by-step wizard settings
- Investment type categorization

### Vite Configuration
Key optimizations in `vite.config.js`:
- Path aliases for clean imports
- Vendor chunk splitting for better caching
- Dependency pre-bundling for React ecosystem
- Asset optimization and build output configuration

## 🚦 Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🔐 Authentication Flow

1. **User Registration**: Multi-step onboarding with user type selection
2. **Email Verification**: Secure OTP-based email confirmation
3. **Protected Routes**: Context-based route protection
4. **Session Management**: JWT token handling with automatic refresh

## 📱 Key Components

### System Configuration Wizard
- **Step 1-2**: Property details and energy requirements
- **Step 3**: System specifications and financial projections
- **Step 4**: Email verification
- **Step 5**: OTP confirmation and completion

### Investment Platform
- **Tender Listings**: Available investment opportunities
- **Portfolio Management**: Track investments and returns
- **Property Integration**: Multi-property energy solutions

## 🌐 API Integration

The application integrates with backend services for:
- System calculations and specifications
- User authentication and management
- Investment opportunity data
- Geographic and mapping services

## 🎨 UI/UX Features

- **Interactive Cards**: Expandable system information displays
- **Dynamic Forms**: Context-aware form validation
- **Progress Indicators**: Multi-step process visualization
- **Responsive Design**: Mobile-optimized layouts
- **Toast Notifications**: User feedback system

## 🚀 Deployment

The application is configured for static deployment with:
- Relative asset paths for flexible hosting
- Optimized bundle splitting
- Progressive loading strategies
- CDN-ready asset organization

## 🤝 Contributing

1. Follow the established component patterns
2. Use the configured path aliases for imports
3. Maintain responsive design principles
4. Add proper error handling and validation
5. Update configuration files for new features

## 📄 License

[License information to be added]

---

Built with ⚡ Vite and ⚛️ React for the future of sustainable energy solutions.
