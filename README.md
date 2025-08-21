# Better CV - AI-Powered Resume Builder

An AI-powered resume builder application that streamlines the process of creating personalized, professional resumes by leveraging advanced algorithms and user-friendly interfaces.

## 🌐 Live Demo

**🔗 [View Live Application](https://better-cv.fly.dev)** *(Will be available after deployment)*

## 🏗️ Tech Stack

- **Backend**: Ruby on Rails 7.0.4
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Deployment**: Fly.io with Docker

## 🚀 Quick Start

### Development Setup
```bash
# Install dependencies
bundle install
yarn install

# Setup database
bin/rails db:create

# Start development servers
bin/dev
```

### Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📖 Original Setup Instructions

### Setup
```
bundle
yarn install
```

### Database setup

```
bin/rails db:create
```

### Running project 
```
bin/dev
```

## 🔄 CI/CD

This project uses GitHub Actions for continuous integration and deployment:
- Automated testing on pull requests
- Automatic deployment to Fly.io on pushes to main branch
- Docker-based build process
