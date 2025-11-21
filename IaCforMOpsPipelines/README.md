# MLOps Infrastructure as Code (IaC) MVP

## Overview
Complete IaaS solution for MLOps pipelines using Infrastructure as Code. Automates provisioning of GPU clusters, feature stores, model registries, and complete ML lifecycle management.

## Architecture Components
- **GPU Clusters**: Auto-scaling Kubernetes clusters with GPU node pools
- **Feature Store**: Real-time and batch feature serving
- **Model Registry**: Versioned model artifacts with metadata
- **Monitoring**: Prometheus + Grafana for infrastructure and model metrics
- **Orchestration**: Kubeflow Pipelines for ML workflows

## Tech Stack
- **IaC**: Terraform
- **Container Orchestration**: Kubernetes
- **ML Platform**: Kubeflow, MLflow
- **Feature Store**: Feast
- **Monitoring**: Prometheus, Grafana
- **Cloud**: AWS (adaptable to GCP/Azure)

## Prerequisites
- Terraform >= 1.5.0
- kubectl >= 1.27.0
- AWS CLI configured
- Docker
- Python 3.9+

## Quick Start

### 1. Clone and Setup
```bash
git clone <repository-url>
cd mlops-iac-mvp
```

### 2. Configure Environment
```bash
# Copy example configuration
cp terraform/terraform.tfvars.example terraform/terraform.tfvars

# Edit with your settings
vim terraform/terraform.tfvars
```

### 3. Deploy Infrastructure
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### 4. Configure kubectl
```bash
aws eks update-kubeconfig --name mlops-cluster --region us-west-2
```

### 5. Deploy ML Platform
```bash
cd ../kubernetes
kubectl apply -f namespaces/
kubectl apply -f storage/
kubectl apply -f mlflow/
kubectl apply -f feast/
kubectl apply -f kubeflow/
kubectl apply -f monitoring/
```

### 6. Run Sample Pipeline
```bash
cd ../ml-pipelines
python examples/training_pipeline.py
```

## Project Structure
```
mlops-iac-mvp/
├── terraform/                 # Infrastructure as Code
│   ├── modules/              # Reusable Terraform modules
│   ├── environments/         # Environment-specific configs
│   └── main.tf              # Root configuration
├── kubernetes/               # K8s manifests
│   ├── mlflow/              # Model registry
│   ├── feast/               # Feature store
│   ├── kubeflow/            # ML orchestration
│   └── monitoring/          # Observability
├── ml-pipelines/            # Sample ML workflows
│   ├── data/                # Sample datasets
│   ├── models/              # Model definitions
│   └── pipelines/           # Kubeflow pipelines
├── scripts/                 # Utility scripts
└── docs/                    # Documentation
```

## Features

### Infrastructure Automation
- ✅ Auto-scaling GPU clusters (g4dn.xlarge)
- ✅ Multi-AZ deployment for high availability
- ✅ Spot instance support for cost optimization
- ✅ VPC with private subnets
- ✅ IAM roles with least privilege

### Feature Store
- ✅ Real-time feature serving
- ✅ Batch feature materialization
- ✅ Feature versioning
- ✅ Point-in-time correctness

### Model Registry
- ✅ Model versioning and lineage
- ✅ Experiment tracking
- ✅ Artifact storage (S3)
- ✅ Model staging (dev/staging/prod)

### Monitoring
- ✅ Infrastructure metrics (CPU, GPU, memory)
- ✅ Model performance metrics
- ✅ Data drift detection
- ✅ Custom dashboards

### Compliance
- ✅ Encryption at rest and in transit
- ✅ Audit logging
- ✅ RBAC policies
- ✅ Network isolation
- ✅ Secrets management

## Usage Examples

### Train a Model
```python
from ml_pipelines.pipelines import training_pipeline

pipeline = training_pipeline.create_pipeline()
pipeline.run()
```

### Deploy a Model
```python
from ml_pipelines.pipelines import deployment_pipeline

deployment_pipeline.deploy_model(
    model_name="fraud-detector",
    model_version="v1.2.3",
    environment="production"
)
```

### Monitor Model Performance
```bash
# Port forward Grafana
kubectl port-forward -n monitoring svc/grafana 3000:80

# Access at http://localhost:3000
# Default credentials: admin/admin
```

## Cost Optimization
- Spot instances for training workloads
- Auto-scaling based on workload
- S3 lifecycle policies
- EBS volume optimization

## Security Best Practices
- Encrypted EBS volumes
- Private subnets for compute
- KMS for secrets
- IAM roles for service accounts
- Network policies

## Monitoring and Alerting
- Infrastructure metrics
- Model performance metrics
- Cost tracking
- Custom alerts via Prometheus

## Cleanup
```bash
# Delete K8s resources
kubectl delete namespace mlflow feast kubeflow monitoring

# Destroy infrastructure
cd terraform
terraform destroy
```

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
MIT License - see LICENSE file for details

## Support
- Documentation: ./docs/
- Issues: GitHub Issues
- Email: support@example.com

## Roadmap
- [ ] Multi-cloud support (GCP, Azure)
- [ ] A/B testing framework
- [ ] Advanced drift detection
- [ ] AutoML integration
- [ ] Model explainability tools
