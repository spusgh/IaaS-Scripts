# Synthetic Data Generation Environment - IaC MVP

## Overview
Infrastructure as Code solution for provisioning isolated, secure environments for synthetic data generation with GPU support, compliance controls, and privacy-preserving workflows.

## Architecture

### Infrastructure Components
- **GPU Compute Nodes**: NVIDIA T4/A100 instances for data generation
- **Secure Storage**: Encrypted S3/Azure Blob with access controls
- **Network Isolation**: VPC/VNet with private subnets
- **Compliance Layer**: Audit logging, encryption, and access controls
- **Container Orchestration**: Kubernetes for workload management

### Security Features
- End-to-end encryption (data at rest and in transit)
- Role-based access control (RBAC)
- Audit logging and compliance reporting
- Network segmentation and private endpoints
- Secrets management with HashiCorp Vault

## Repository Structure

```
synthetic-data-iaac/
├── README.md
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── modules/
│   │   ├── networking/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   ├── compute/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   ├── storage/
│   │   │   ├── main.tf
│   │   │   ├── variables.tf
│   │   │   └── outputs.tf
│   │   └── security/
│   │       ├── main.tf
│   │       ├── variables.tf
│   │       └── outputs.tf
├── kubernetes/
│   ├── namespace.yaml
│   ├── gpu-workload.yaml
│   ├── storage-claim.yaml
│   ├── secrets.yaml
│   └── rbac.yaml
├── docker/
│   ├── Dockerfile.generator
│   ├── Dockerfile.validator
│   └── requirements.txt
├── scripts/
│   ├── generate_synthetic_data.py
│   ├── validate_privacy.py
│   ├── compliance_report.py
│   └── setup_environment.sh
├── config/
│   ├── data_schemas/
│   │   ├── healthcare_schema.json
│   │   ├── financial_schema.json
│   │   └── pii_schema.json
│   ├── privacy_config.yaml
│   └── compliance_rules.yaml
├── tests/
│   ├── test_infrastructure.py
│   ├── test_data_generation.py
│   └── test_privacy_compliance.py
└── docs/
    ├── ARCHITECTURE.md
    ├── SECURITY.md
    ├── DEPLOYMENT.md
    └── API.md
```

## Quick Start

### Prerequisites
- Terraform >= 1.5.0
- kubectl >= 1.27
- Docker >= 24.0
- Cloud provider CLI (AWS CLI / Azure CLI / gcloud)
- Python >= 3.9

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-org/synthetic-data-iaac.git
cd synthetic-data-iaac
```

2. **Configure cloud credentials**
```bash
# AWS
export AWS_PROFILE=your-profile

# Azure
az login

# GCP
gcloud auth application-default login
```

3. **Initialize Terraform**
```bash
cd terraform
terraform init
```

4. **Configure variables**
```bash
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your configuration
```

5. **Deploy infrastructure**
```bash
terraform plan
terraform apply
```

6. **Configure kubectl**
```bash
# AWS EKS
aws eks update-kubeconfig --name synthetic-data-cluster --region us-east-1

# Azure AKS
az aks get-credentials --resource-group synthetic-data-rg --name synthetic-data-cluster
```

7. **Deploy Kubernetes resources**
```bash
kubectl apply -f kubernetes/
```

## Usage

### Generate Synthetic Data

```bash
# Build Docker image
docker build -t synthetic-generator:latest -f docker/Dockerfile.generator .

# Run data generation job
kubectl apply -f kubernetes/gpu-workload.yaml

# Monitor job
kubectl logs -f job/synthetic-data-generation
```

### Validate Privacy Compliance

```bash
python scripts/validate_privacy.py \
  --input-data s3://synthetic-data-bucket/output/ \
  --schema config/data_schemas/healthcare_schema.json \
  --report-output ./compliance_report.json
```

### Generate Compliance Report

```bash
python scripts/compliance_report.py \
  --environment production \
  --output ./reports/compliance_$(date +%Y%m%d).pdf
```

## Configuration

### Data Schemas

Define your synthetic data schemas in `config/data_schemas/`:

```json
{
  "name": "healthcare_record",
  "fields": [
    {"name": "patient_id", "type": "synthetic_id", "privacy_level": "high"},
    {"name": "age", "type": "integer", "range": [18, 90]},
    {"name": "diagnosis", "type": "categorical", "values": ["..."]},
    {"name": "treatment", "type": "text", "generator": "llm"}
  ]
}
```

### Privacy Configuration

Configure privacy-preserving mechanisms in `config/privacy_config.yaml`:

```yaml
privacy_mechanisms:
  - type: differential_privacy
    epsilon: 1.0
    delta: 1e-5
  - type: k_anonymity
    k_value: 5
  - type: data_masking
    fields: [ssn, email, phone]
```

## Data Generation Tools

### Supported Generators
- **SDV (Synthetic Data Vault)**: Tabular data
- **CTGAN**: GAN-based tabular synthesis
- **Gretel**: Enterprise synthetic data
- **Custom LLM**: Text and structured data

### Privacy Techniques
- Differential privacy
- K-anonymity
- L-diversity
- T-closeness
- Data masking and tokenization

## Security Architecture

### Network Security
- Private subnets for compute resources
- Security groups with least privilege
- VPC endpoints for AWS services
- Network policies in Kubernetes

### Data Security
- AES-256 encryption at rest
- TLS 1.3 for data in transit
- Customer-managed encryption keys (CMK)
- Automated key rotation

### Access Control
- IAM roles and policies
- Kubernetes RBAC
- Service accounts with minimal permissions
- MFA enforcement for admin access

### Compliance
- HIPAA compliance controls
- GDPR privacy measures
- SOC 2 audit logging
- PCI DSS data protection

## Monitoring & Logging

### Metrics
- GPU utilization and memory
- Data generation throughput
- Privacy budget consumption
- Storage usage and costs

### Logs
- CloudWatch / Azure Monitor integration
- Centralized logging with ELK/EFK
- Audit trails for all data access
- Security event monitoring

## Cost Optimization

- Spot instances for non-critical workloads
- Auto-scaling based on queue depth
- Lifecycle policies for storage
- Resource tagging for cost allocation

## Troubleshooting

### Common Issues

**GPU not available in pod**
```bash
kubectl describe node <node-name>
# Check for nvidia.com/gpu resource
```

**Storage access denied**
```bash
# Verify IAM role permissions
aws iam get-role-policy --role-name synthetic-data-role --policy-name storage-access
```

**Privacy validation fails**
```bash
# Check privacy configuration
python scripts/validate_privacy.py --debug
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

Apache 2.0 - See [LICENSE](LICENSE) file.

## Support

- Documentation: [docs/](docs/)
- Issues: GitHub Issues
- Security: security@yourcompany.com

## Roadmap

- [ ] Multi-cloud support (AWS, Azure, GCP)
- [ ] Federated learning integration
- [ ] Real-time synthetic data streaming
- [ ] Advanced privacy-preserving ML
- [ ] Automated compliance certification

---

**Version**: 1.0.0  
**Last Updated**: November 2025