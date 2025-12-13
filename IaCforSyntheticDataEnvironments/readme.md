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

## Quick Start

### Prerequisites
- Terraform >= 1.5.0
- kubectl >= 1.27
- Docker >= 24.0
- Cloud provider CLI (AWS CLI / Azure CLI / gcloud)
- Python >= 3.9

### Installation

1. **Clone the repository**
2. **Configure cloud credentials**
3. **Initialize Terraform**
4. **Configure variables**
5. **Deploy infrastructure**
6. **Configure kubectl**
7. **Deploy Kubernetes resources**

## Usage
### Generate Synthetic Data

### Validate Privacy Compliance

### Generate Compliance Report

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


---

**Coded with Claude**

---
