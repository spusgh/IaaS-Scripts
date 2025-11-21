# IaaS ML‑Driven Auto‑Provisioning Engine

Intelligent infrastructure scaling using machine learning predictions and automated provisioning.

---

## 🔧 Tech Stack Badges
- Python 3.9+
- TensorFlow 2.x
- FastAPI
- Terraform
- Pulumi
- Docker
- Kubernetes

---

## ⚡ CICTCD Pipeline
Three‑stage automated pipeline ensuring quality, testing, and reliable deployments.

- **CI – Integration**  
  Code quality checks, builds, and artifact creation (~15 min)

- **CT – Testing**  
  8 test levels including E2E, performance, security (~45 min)

- **CD – Delivery**  
  Multi‑strategy deployment with auto‑rollback (~30 min)

---

## 🎯 Overview
An intelligent auto‑provisioning system that predicts infrastructure needs using ML models and automatically generates IaC scripts to scale resources preemptively.

- **ML Forecasting**: LSTM & Prophet models for time‑series prediction  
- **Auto‑Provisioning**: Dynamic Terraform/Pulumi code generation  
- **CICTCD Pipeline**: Complete automation from commit to production  

---

## 🏗️ Architecture
```text

┌──────────────────────────────────────────────────────────┐ 
│ Data Collection & Ingestion				   │ 
│ Prometheus / CloudWatch → Time-series Database	   │ 
└──────────────────────────────────────────────────────────┘ 
			▼ 
┌──────────────────────────────────────────────────────────┐ 
│ ML Prediction Engine					   │ 
│ Feature Engineering → Training → Ensemble Forecasting	   │ 
└──────────────────────────────────────────────────────────┘ 
 			  ▼ 
┌──────────────────────────────────────────────────────────┐ 
│ Provisioning & Decision Engine			   │ 
│ Threshold Analysis → IaC Generation → Deployment	   │ 
└──────────────────────────────────────────────────────────┘ 
			▼ 
┌──────────────────────────────────────────────────────────┐ 
│ CICTCD Pipeline Integration				   │ 
│ CI (Build) → CT (Test) → CD (Deploy) → Monitor	   │ 
└──────────────────────────────────────────────────────────┘

```


---

## 📁 Project Structure
- **ml_engine/**: ML forecasting (data collection, feature engineering, training, prediction)  
- **provisioning_engine/**: Terraform & Pulumi code generation, resource sizing  
- **api/**: FastAPI application, models, routes  
- **cicd/**: CI, CT, CD pipeline configs  
- **infrastructure/**: Terraform, Pulumi, Kubernetes manifests  
- **monitoring/**: Prometheus, Grafana, alerting rules  
- **scripts/**: Test reporting, coverage, deployment validation  
- **docs/**: Architecture, API spec, deployment guide  
- **tests/**: Unit, integration, E2E, performance tests  

---

## 🚀 Quick Start
```bash
# 1. Clone Repository
git clone https://github.com/your-org/iaas-auto-provisioning.git
cd iaas-auto-provisioning

# 2. Install Dependencies
pip install -r requirements.txt

# 3. Configure Environment
cp .env.example .env
# Edit .env with your cloud provider credentials

# 4. Train ML Models
python ml_engine/model_training.py --data-path ./data/historical_metrics.csv

# 5. Start API Server
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
```

### ✨ Key Features
- Multi‑Model ML (LSTM, Prophet, ARIMA)
- IaC Generation (Terraform & Pulumi)
- Cloud Agnostic (AWS, GCP, Azure)
- CICTCD Pipeline (3‑stage automated deployment)
- Cost Optimization (intelligent resource right‑sizing)
- Auto‑Rollback (failure recovery)

#### 8 Test Levels (unit → chaos engineering)
- Multi‑Strategy Deploy (Rolling, Blue‑Green, Canary)

### 🔌 API Endpoints
- POST /api/v1/predict → Generate resource forecast
- POST /api/v1/recommend → Get scaling recommendations
- POST /api/v1/provision → Trigger auto‑provisioning
- GET /api/v1/status/{task_id} → Check provisioning status
- GET /api/v1/metrics → Retrieve historical metrics
- POST /api/v1/models/train → Retrain ML models

### CICTCD Pipeline Architecture
- Continuous Integration → Continuous Testing → Continuous Delivery Three‑stage automated pipeline for ML Auto‑Provisioning Engine.
#### CI – Continuous Integration 
- Validates code quality, builds components, and creates artifacts.
- Code Quality Checks
- Dependency Validation
- Build Components
- Docker Image Build
- Static Analysis
- IaC Validation

#### CT – Continuous Testing
- Comprehensive testing across all levels and dimensions.
- Unit Tests (multi‑version)
- Integration Tests
- ML Model Validation
- API Contract Tests
- End‑to‑End Tests
- Performance & Load
- Security Testing
- Chaos Engineering

#### CD – Continuous Delivery
- Automated deployment with multiple strategies and validation.
- Pre‑deployment Checks
- Build & Push Artifacts
- Staging Deployment
- Production Deployment
- Auto‑Provisioning
- Post‑validation
- Rollback Support

### 📊 Pipeline Flow Diagram
Code
[CI Stage → CT Stage → CD Stage]
Includes code quality, builds, ML validation, API tests, E2E, performance, security, deployment, monitoring, rollback.

### 🔒 Quality Gates
- CI Gate: Code quality, linting, security scans pass
- CT Gate: All test suites pass with 80%+ coverage
- CD Gate: Staging validation and smoke tests pass

### ⚙️ Automation Features
- Automatic artifact versioning and tagging
- Parallel test execution
- ML‑triggered infrastructure provisioning
- Automatic rollback on deployment failures

### 🚀 Deployment Strategies
- Rolling Update: Gradual instance replacement, zero downtime
- Blue‑Green: Full environment switch, instant rollback
- Canary: Progressive rollout with monitoring


### 📈 Monitoring & Alerts
- Integrated Prometheus & Grafana dashboards
- Custom SLOs and alerting rules
- Real‑time provisioning status tracking

