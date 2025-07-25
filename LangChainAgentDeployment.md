
# IaaS - Infrastructure as Code

LangChain Agent Deployment on Azure Container Apps with Terraform

### 🌐 LangChain Agent Deployment on Azure Container Apps
 This document outlines the Terraform-based infrastructure setup for deploying LangChain agents on Azure Container Apps, integrating with an external vector database (Weaviate) and storage configuration.

### 🚀 Project: LangChain Agent Deployment on Azure Container Apps (Terraform)
 This setup provides a modular, cloud-native environment for deploying LangChain agents, allowing for easy customization and scalability.
 The infrastructure is designed to be reusable and adaptable for various LangChain workflows, with a focus on external vector database integration and storage configuration.

### 🎯 Goal
Provision a modular, cloud-native environment for deploying LangChain agents with external vector database and storage configuration.

### 📁 File Structure (Terraform Modules)

/langchain-agent-infra/</br>
├── main.tf                &nbsp;&nbsp;&nbsp; # Root config and module wiring</br>
├── variables.tf           &nbsp;&nbsp;&nbsp; # Input variables for customization</br>
├── outputs.tf             &nbsp;&nbsp;&nbsp; # Useful deployment outputs</br>
├── modules/ &nbsp;&nbsp;&nbsp; </br>
│   └── langchain_agent/   &nbsp;&nbsp;&nbsp; </br>
│       ├── container.tf    &nbsp;&nbsp;&nbsp; # Azure Container App setup</br>
│       ├── storage.tf      &nbsp;&nbsp;&nbsp;  # Blob storage for prompt/config</br>
│       ├── network.tf      &nbsp;&nbsp;&nbsp; # VNet & private DNS</br>
│       └── variables.tf</br>
│   └── vector_db/</br>
│       ├── weaviate.tf    &nbsp;&nbsp;&nbsp;  # Helm chart for Weaviate on AKS</br>
│       ├── networking.tf</br>
│       └── variables.tf</br>

### 🧩 Terraform Modules Overview
#### 🔹 LangChain Agent Module
<li>Resources: </li>
azurerm_container_app_environment <br/>
azurerm_container_app <br/>
azurerm_storage_account<br/>
azurerm_storage_container<br/>
azurerm_storage_blob<br/><br/>

<li>Config Options:</li>

Agent ID / Workflow Name<br/>
Promptpack folder location<br/>
Container image tag

#### 🔹 Vector DB (Weaviate) Module
<li>Resources:</li>
AKS Cluster via azurerm_kubernetes_cluster<br/>
Helm Release:<br/>

#####  hcl
resource "helm_release" "weaviate" {<br/>
  chart = "weaviate"<br/>
  repository = "https://weaviate.github.io/weaviate-helm"<br/>
  values = [file("weaviate-values.yaml")]<br/>
}<br/>

<li>Embedded Index Setup:</Li>
Object storage path (for embeddings)<br/>
LangChain connector config<br/>

### 🛡️ Optional Add-ons
Azure Key Vault for secret management <br/>
Private DNS zone linking for API endpoints<br/> 
CI/CD pipeline using GitHub Actions for agent updates<br/>


