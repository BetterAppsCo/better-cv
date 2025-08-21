# Better CV - AI-Powered Resume Builder

An AI-powered resume builder application that streamlines the process of creating personalized, professional resumes by leveraging advanced algorithms and user-friendly interfaces.

## 🌐 Live Demo

**🔗 [View Live Application](https://better-cv.fly.dev)** 

> **Status**: Ready for deployment! The application is configured with CI/CD pipeline and will be automatically deployed when GitHub repository secrets are configured.

## ✨ Features

- **AI-Powered Resume Building**: Advanced algorithms for personalized resume creation
- **Modern React Frontend**: Built with React 18, TypeScript, and Tailwind CSS
- **Robust Rails Backend**: Ruby on Rails 7 with PostgreSQL database
- **Real-time Updates**: Interactive user interface with seamless updates
- **Professional Templates**: Multiple resume templates and formats
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🏗️ Tech Stack

- **Backend**: Ruby on Rails 7.0.4
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom components
- **Database**: PostgreSQL
- **Deployment**: Fly.io with Docker containerization
- **CI/CD**: GitHub Actions for automated testing and deployment

## 🚀 Quick Start

### Prerequisites

- Ruby 3.0.4
- Node.js 16.20.0+
- Yarn package manager
- PostgreSQL database

### Development Setup

```bash
# Clone the repository
git clone https://github.com/BetterAppsCo/better-cv.git
cd better-cv

# Run the automated setup
./bin/setup-dev

# Or manual setup:
bundle install
yarn install
bin/rails db:create db:migrate

# Start development servers
bin/dev
```

The application will be available at `http://localhost:3000`

### Docker Development

```bash
# Using Docker Compose
docker-compose up --build

# Or using Docker directly
docker build -t better-cv .
docker run -p 3000:3000 better-cv
```

## 🚀 Deployment

### Automated Deployment (Recommended)

The application includes a complete CI/CD pipeline with GitHub Actions:

1. **Fork/Clone** this repository
2. **Configure secrets** in your GitHub repository:
   - Go to Settings → Secrets and variables → Actions
   - Add `FLY_API_TOKEN` (get from [fly.io](https://fly.io))
3. **Push to main branch** - automatic deployment will start
4. **Your app will be live** at `https://your-app-name.fly.dev`

### Manual Deployment Options

- **Fly.io**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
- **Railway**: Connect your GitHub repo to Railway dashboard
- **Heroku**: Use the included `Procfile` for Heroku deployment
- **Docker**: Deploy the containerized app to any Docker-compatible platform

### Health Check

The application includes a health check endpoint at `/health` for monitoring:

```bash
curl https://your-app.fly.dev/health
```

## 📖 Development Commands

```bash
# Start development servers (Rails + Vite)
bin/dev

# Run tests
bin/rails test

# Rails console
bin/rails console

# Database operations
bin/rails db:migrate
bin/rails db:seed

# Asset compilation
bin/rails assets:precompile

# Verify deployment
./bin/verify-deployment https://your-app.fly.dev
```

## 🔧 Configuration

### Environment Variables

Key environment variables for production:

- `RAILS_ENV=production`
- `RAILS_MASTER_KEY` - Rails master key
- `DATABASE_URL` - PostgreSQL connection (auto-provided by platforms)
- `REDIS_URL` - Redis connection (optional)

See [.env.example](./.env.example) for complete configuration details.

### Database Configuration

The application is configured to work with:
- **Development**: Local PostgreSQL
- **Test**: Local PostgreSQL test database  
- **Production**: PostgreSQL via `DATABASE_URL` environment variable

## 🧪 Testing

```bash
# Run full test suite
bin/rails test

# Run specific tests
bin/rails test test/controllers/
bin/rails test test/models/

# System tests (with browser automation)
bin/rails test:system
```

## 📦 Project Structure

```
better-cv/
├── app/
│   ├── controllers/         # Rails controllers
│   ├── models/             # Rails models
│   ├── javascript/         # React frontend
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── entrypoints/    # Vite entry points
│   └── views/              # Rails views
├── config/                 # Rails configuration
├── db/                     # Database migrations
├── .github/workflows/      # CI/CD pipelines
├── bin/                    # Executable scripts
├── Dockerfile             # Docker configuration
├── fly.toml              # Fly.io configuration
├── docker-compose.yml    # Local Docker setup
└── package.json          # Node.js dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Use GitHub Discussions for questions

---

Built with ❤️ by BetterAppsCo
