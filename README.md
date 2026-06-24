# 🚀 Node.js Application Deployment on AWS EKS using Terraform & GitHub Actions

## 📌 Project Overview

This project demonstrates an end-to-end DevOps workflow for deploying a containerized Node.js application on Amazon EKS using Infrastructure as Code (Terraform) and CI/CD automation (GitHub Actions).

The infrastructure is provisioned entirely through Terraform, the application image is stored in Amazon ECR, and deployments are automated through a GitHub Actions pipeline.

---

## 🏗️ Architecture

```text
Developer
    |
    v
GitHub Repository
    |
    v
GitHub Actions
    |
    +-------------------+
    |                   |
    v                   v
Docker Build       Kubernetes Deployment
    |                   |
    v                   |
Amazon ECR             Amazon EKS
    |                   |
    +---------+---------+
              |
              v
      AWS Load Balancer
              |
              v
           End Users
```

---

## 🛠️ Technologies Used

| Category               | Tools                  |
| ---------------------- | ---------------------- |
| Cloud                  | AWS                    |
| Containerization       | Docker                 |
| Container Registry     | Amazon ECR             |
| Orchestration          | Kubernetes, Amazon EKS |
| Infrastructure as Code | Terraform              |
| CI/CD                  | GitHub Actions         |
| Application            | Node.js                |
| Version Control        | Git & GitHub           |

---

## 📂 Project Structure

```text
eks-nodejs-project/
│
├── app/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
│
├── terraform/
│   ├── provider.tf
│   ├── variables.tf
│   ├── vpc.tf
│   ├── eks.tf
│   └── outputs.tf
│
├── kubernetes/
│   ├── deployment.yaml
│   └── service.yaml
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ⚙️ Infrastructure Provisioned Using Terraform

### Networking

* VPC
* Public Subnets
* Private Subnets
* Internet Gateway
* NAT Gateway
* Route Tables

### Kubernetes Infrastructure

* Amazon EKS Cluster
* EKS Managed Node Group
* IAM Roles and Policies
* Security Groups

### Container Registry

* Amazon ECR Repository

---

## 🚀 CI/CD Pipeline Workflow

The deployment process is fully automated using GitHub Actions.

```text
Git Push
    |
    v
GitHub Actions
    |
    v
Build Docker Image
    |
    v
Push Image to Amazon ECR
    |
    v
Update Kubernetes Deployment
    |
    v
Deploy to Amazon EKS
```

### Pipeline Stages

1. Source code is pushed to GitHub.
2. GitHub Actions workflow is triggered.
3. Docker image is built.
4. Image is pushed to Amazon ECR.
5. Kubernetes manifests are applied to Amazon EKS.
6. Application is updated automatically.

---

## ☸️ Kubernetes Components

### Deployment

* Manages application pods
* Maintains desired replica count
* Automatically recreates failed pods

### Service

* Exposes application within the cluster
* Creates an AWS Load Balancer
* Routes traffic to application pods

---

## 📋 Deployment Process

### Build Docker Image

```bash
docker build -t nodejs-app .
```

### Push Image to Amazon ECR

```bash
docker push <ecr-repository-url>
```

### Deploy Application

```bash
kubectl apply -f kubernetes/
```

### Verify Resources

```bash
kubectl get pods
kubectl get svc
kubectl get nodes
```

---

## 🎯 Key Learnings

Through this project I gained hands-on experience in:

* Infrastructure as Code (Terraform)
* AWS Networking Concepts
* Amazon EKS Cluster Management
* Docker Containerization
* Kubernetes Deployments and Services
* Container Registry Management using ECR
* CI/CD Pipeline Automation with GitHub Actions
* Application Deployment on Kubernetes
* Troubleshooting Kubernetes Workloads
* Cloud-Native Application Architecture

---

## 🔮 Future Enhancements

* Implement GitHub OIDC Authentication
* Use Helm Charts for Kubernetes Deployments
* Configure NGINX Ingress Controller
* Add Monitoring with Prometheus and Grafana
* Implement Blue-Green Deployment Strategy
* Add Security Scanning in CI/CD Pipeline
* Enable Horizontal Pod Autoscaling (HPA)

---

## 👨‍💻 Author

**Nisha Thakur**

Aspiring DevOps Engineer with hands-on experience in AWS, Terraform, Docker, Kubernetes, EKS, GitHub Actions, and CI/CD automation.

---

## ⭐ If you found this project useful

Feel free to fork the repository, raise issues, or share feedback.
