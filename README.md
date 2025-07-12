# Portfolio Website

A full-stack portfolio website built with Vue.js and Express.js, deployed on Vercel.

## Project Structure

```
my-portofolio-cv/
├── frontend/          # Vue.js frontend
│   ├── src/
│   │   ├── components/
│   │   ├── services/  # API service layer
│   │   └── ...
│   └── package.json
├── backend/           # Express.js API
│   ├── api/
│   │   └── index.js   # API routes
│   ├── data.js        # Data source
│   └── package.json
├── vercel.json        # Vercel configuration
└── deploy.sh          # Deployment script
```

## Features

- **Responsive Design**: Modern UI with Tailwind CSS
- **Dynamic Content**: Data fetched from API endpoints
- **Full-Stack Architecture**: Vue.js frontend + Express.js API
- **Vercel Deployment**: Optimized for serverless deployment

## API Endpoints

- `GET /api/education` - Get education history
- `GET /api/skills` - Get skills and technologies
- `GET /api/projects` - Get project portfolio

## Local Development

1. **Frontend Development**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. **Backend Development**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

## Deployment

### Option 1: Using the deployment script
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual deployment
1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

## Vercel Configuration

The `vercel.json` file is configured to:
- Build the Vue.js frontend using Vite
- Deploy the Express.js API as serverless functions
- Route `/api/*` requests to the backend
- Serve the frontend for all other routes

## Environment Variables

For production deployment, make sure to set any required environment variables in your Vercel dashboard.

## Troubleshooting

- **404 Errors**: Check that all API endpoints are working and the frontend is correctly calling the API service
- **Build Errors**: Ensure all dependencies are installed and the build script runs successfully
- **API Errors**: Verify that the backend data file exists and is properly exported

## Technologies Used

- **Frontend**: Vue.js 3, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Deployment**: Vercel
- **HTTP Client**: Axios 