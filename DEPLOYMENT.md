# Deployment Guide

This application can be deployed to multiple platforms. Here are the available options:

## 🚀 Fly.io (Recommended)

The application is configured for Fly.io deployment with GitHub Actions.

### Setup Steps:

1. **Install Fly CLI** (if deploying manually):
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Sign up for Fly.io** and get your API token:
   ```bash
   flyctl auth signup
   flyctl auth token
   ```

3. **Add the API token to GitHub Secrets**:
   - Go to your repository settings
   - Navigate to Secrets and variables > Actions
   - Add a new secret named `FLY_API_TOKEN` with your token

4. **Deploy**:
   - The app will automatically deploy when you push to the main branch
   - Manual deployment: `flyctl deploy`

### Live URL:
After deployment, your app will be available at: `https://better-cv.fly.dev`

## 🚂 Railway (Alternative)

1. **Connect to Railway**:
   - Visit [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will automatically detect the Dockerfile and deploy

2. **Environment Variables**:
   - Set `RAILS_MASTER_KEY` (generate with `rails secret`)
   - Add any other required environment variables

## 🐳 Docker (Local Development)

To run locally with Docker:

```bash
# Build the image
docker build -t better-cv .

# Run the container
docker run -p 3000:3000 better-cv
```

## 📝 Environment Variables

For production deployment, you'll need:

- `RAILS_MASTER_KEY`: Rails master key for credentials
- `DATABASE_URL`: PostgreSQL database URL (provided by hosting platform)
- `REDIS_URL`: Redis URL (if using Redis features)

## 🔧 Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
bundle install
yarn install

# Setup database
rails db:create db:migrate

# Precompile assets
rails assets:precompile

# Start the server
rails server
```

## 🌐 Live Application

Once deployed, the application features:
- AI-powered resume builder
- React frontend with modern UI
- Rails API backend
- PostgreSQL database
- Real-time updates