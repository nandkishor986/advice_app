💡 Advice App:

A simple yet insightful React-based web application that delivers random advice to users.
This project is containerized with Docker, analyzed using SonarQube for code quality, and deployed to AWS EKS with ArgoCD and an AWS Application Load Balancer.

🚀 Tech Stack:

Frontend: React (Create React App)

CI/CD: Jenkins + ArgoCD

Quality Analysis: SonarQube

Containerization: Docker

Infrastructure: AWS EKS via Terraform

Ingress: AWS ALB with Ingress Controller

🛠️ Getting Started Locally
To run the project locally:

npm install
npm start

Then open your browser at http://localhost:3000

📦 Available Scripts:

In the project directory, you can run:

Command	Description:

npm start	-> Starts the development server
npm test	-> Runs tests in watch mode
npm run build ->	Builds the app for production
npm run eject -> Ejects CRA config (irreversible!)

🔍 Code Quality:

This project integrates SonarQube for static code analysis. The analysis is triggered automatically in the Jenkins pipeline after dependencies are installed.

🐳 Docker:

To build and run the app in a Docker container:

docker image build -t repo-name/advice-app .
docker container run -p 3000:3000 --name advice_app advice-app
docker image push repo-name/advice_app:latest

The Docker image is pushed to Docker Hub and later used by the Kubernetes deployment.

☸️ Deployment:

CI/CD Flow:

* Jenkins:

1. Runs SonarQube analysis

2. Builds and pushes Docker image

3. Provisions AWS EKS cluster using Terraform (from separate Git repo)

* ArgoCD:

1. Monitors Kubernetes manifests

2. Deploys app on EKS

3. Manages rollout via Ingress (ALB)

🌍 Production URL:

Once deployed, the app is available via an AWS Application Load Balancer.
URL: Will be using Route53 to create a "A" pointing to Load Balancer DNS. Attaching a SSL certificate to Load Balancer. 

📚 Learn More:

React Documentation

Create React App Docs

ArgoCD

Terraform EKS Module

SonarQube
