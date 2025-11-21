import React from 'react';
import { FileText, Folder, GitBranch, Download, Zap, CheckCircle } from 'lucide-react';

export default function AutoProvisioningReadme() {
  const folders = [
    {
      name: "ml_engine/",
      files: [
        { name: "data_collector.py", desc: "Historical metrics collection" },
        { name: "feature_engineering.py", desc: "Time-series feature extraction" },
        { name: "model_training.py", desc: "LSTM/Prophet model training" },
        { name: "predictor.py", desc: "Real-time prediction service" },
        { name: "requirements.txt", desc: "Python dependencies" }
      ]
    },
    {
      name: "provisioning_engine/",
      files: [
        { name: "terraform_generator.py", desc: "Dynamic Terraform code generation" },
        { name: "pulumi_generator.py", desc: "Dynamic Pulumi code generation" },
        { name: "resource_calculator.py", desc: "Resource sizing logic" },
        { name: "requirements.txt", desc: "Python dependencies" }
      ]
    },
    {
      name: "api/",
      files: [
        { name: "main.py", desc: "FastAPI application" },
        { name: "models.py", desc: "Pydantic data models" },
        { name: "routes.py", desc: "API endpoints" },
        { name: "requirements.txt", desc: "API dependencies" }
      ]
    },
    {
      name: "cicd/",
      files: [
        { name: "ci_continuous_integration.yml", desc: "CI: Code quality & builds" },
        { name: "ct_continuous_testing.yml", desc: "CT: Comprehensive testing" },
        { name: "cd_continuous_delivery.yml", desc: "CD: Automated deployment" },
        { name: "README.md", desc: "Pipeline documentation" }
      ]
    },
    {
      name: "infrastructure/",
      files: [
        { name: "terraform/", desc: "Base Terraform configs" },
        { name: "pulumi/", desc: "Base Pulumi configs" },
        { name: "k8s/", desc: "Kubernetes manifests" }
      ]
    },
    {
      name: "monitoring/",
      files: [
        { name: "prometheus_config.yml", desc: "Metrics collection" },
        { name: "grafana_dashboard.json", desc: "Visualization dashboard" },
        { name: "alerting_rules.yml", desc: "Alert definitions" }
      ]
    },
    {
      name: "scripts/",
      files: [
        { name: "generate_test_report.py", desc: "Test report generator" },
        { name: "coverage_summary.py", desc: "Coverage analysis" },
        { name: "validate_deployment_config.py", desc: "Config validator" }
      ]
    },
    {
      name: "docs/",
      files: [
        { name: "architecture.md", desc: "System architecture" },
        { name: "api_spec.yaml", desc: "OpenAPI specification" },
        { name: "deployment_guide.md", desc: "Deployment instructions" }
      ]
    },
    {
      name: "tests/",
      files: [
        { name: "test_ml_engine.py", desc: "ML engine unit tests" },
        { name: "integration/", desc: "Integration test suite" },
        { name: "e2e/", desc: "End-to-end tests" },
        { name: "performance/", desc: "Load & performance tests" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 border-b border-blue-400 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-10 h-10 text-blue-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              IaaS ML-Driven Auto-Provisioning Engine
            </h1>
          </div>
          <p className="text-lg text-gray-300">
            Intelligent infrastructure scaling using machine learning predictions and automated provisioning
          </p>
        </div>

        {/* Badges */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['Python 3.9+', 'TensorFlow 2.x', 'FastAPI', 'Terraform', 'Pulumi', 'Docker', 'Kubernetes'].map(badge => (
            <span key={badge} className="px-4 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm">
              {badge}
            </span>
          ))}
        </div>

        {/* CICTCD Pipeline Highlight */}
        <section className="mb-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg p-6 border border-cyan-400/30">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl font-bold text-cyan-300">CICTCD Pipeline</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Three-stage automated pipeline ensuring quality, testing, and reliable deployments
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 p-4 rounded border border-cyan-400/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-cyan-200">CI - Integration</h3>
              </div>
              <p className="text-sm text-gray-400">Code quality checks, builds, and artifact creation (~15 min)</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded border border-purple-400/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-200">CT - Testing</h3>
              </div>
              <p className="text-sm text-gray-400">8 test levels including E2E, performance, security (~45 min)</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded border border-green-400/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-green-200">CD - Delivery</h3>
              </div>
              <p className="text-sm text-gray-400">Multi-strategy deployment with auto-rollback (~30 min)</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-8 bg-slate-800/50 rounded-lg p-6 border border-blue-400/20">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">🎯 Overview</h2>
          <p className="text-gray-300 mb-4">
            An intelligent auto-provisioning system that predicts infrastructure needs using ML models and 
            automatically generates IaC scripts to scale resources preemptively.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-700/50 p-4 rounded border border-blue-400/20">
              <h3 className="font-semibold text-blue-300 mb-2">ML Forecasting</h3>
              <p className="text-sm text-gray-400">LSTM & Prophet models for time-series prediction</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded border border-blue-400/20">
              <h3 className="font-semibold text-blue-300 mb-2">Auto-Provisioning</h3>
              <p className="text-sm text-gray-400">Dynamic Terraform/Pulumi code generation</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded border border-blue-400/20">
              <h3 className="font-semibold text-blue-300 mb-2">CICTCD Pipeline</h3>
              <p className="text-sm text-gray-400">Complete automation from commit to production</p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-8 bg-slate-800/50 rounded-lg p-6 border border-blue-400/20">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">🏗️ Architecture</h2>
          <div className="bg-slate-900/50 p-4 rounded border border-blue-400/10 font-mono text-sm">
            <pre className="text-gray-300 overflow-x-auto">{`┌──────────────────────────────────────────────────────────┐
│              Data Collection & Ingestion                  │
│  Prometheus / CloudWatch → Time-series Database          │
└─────────────────────┬────────────────────────────────────┘
                      │
                      ▼
┌──────────────────────────────────────────────────────────┐
│              ML Prediction Engine                         │
│  Feature Engineering → Training → Ensemble Forecasting   │
└─────────────────────┬────────────────────────────────────┘
                      │
                      ▼
┌──────────────────────────────────────────────────────────┐
│         Provisioning & Decision Engine                    │
│  Threshold Analysis → IaC Generation → Deployment        │
└─────────────────────┬────────────────────────────────────┘
                      │
                      ▼
┌──────────────────────────────────────────────────────────┐
│           CICTCD Pipeline Integration                     │
│  CI (Build) → CT (Test) → CD (Deploy) → Monitor         │
└──────────────────────────────────────────────────────────┘`}</pre>
          </div>
        </section>

        {/* Project Structure */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-300">📁 Project Structure</h2>
          <div className="space-y-4">
            {folders.map((folder, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg border border-blue-400/20 overflow-hidden">
                <div className="bg-blue-900/30 px-4 py-3 border-b border-blue-400/20 flex items-center gap-2">
                  <Folder className="w-5 h-5 text-blue-400" />
                  <span className="font-mono font-semibold text-blue-300">{folder.name}</span>
                </div>
                <div className="p-4">
                  <div className="grid gap-2">
                    {folder.files.map((file, fidx) => (
                      <div key={fidx} className="flex items-center gap-3 py-2 px-3 bg-slate-700/30 rounded hover:bg-slate-700/50 transition-colors">
                        <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-mono text-sm text-gray-300 flex-1">{file.name}</span>
                        <span className="text-xs text-gray-500">{file.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-8 bg-slate-800/50 rounded-lg p-6 border border-blue-400/20">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">🚀 Quick Start</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">1. Clone Repository</h3>
              <pre className="bg-slate-900 p-3 rounded border border-blue-400/20 text-sm font-mono text-gray-300 overflow-x-auto">
git clone https://github.com/your-org/iaas-auto-provisioning.git
cd iaas-auto-provisioning
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">2. Install Dependencies</h3>
              <pre className="bg-slate-900 p-3 rounded border border-blue-400/20 text-sm font-mono text-gray-300 overflow-x-auto">
pip install -r requirements.txt
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">3. Configure Environment</h3>
              <pre className="bg-slate-900 p-3 rounded border border-blue-400/20 text-sm font-mono text-gray-300 overflow-x-auto">
cp .env.example .env
# Edit .env with your cloud provider credentials
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">4. Train ML Models</h3>
              <pre className="bg-slate-900 p-3 rounded border border-blue-400/20 text-sm font-mono text-gray-300 overflow-x-auto">
python ml_engine/model_training.py --data-path ./data/historical_metrics.csv
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">5. Start API Server</h3>
              <pre className="bg-slate-900 p-3 rounded border border-blue-400/20 text-sm font-mono text-gray-300 overflow-x-auto">
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
              </pre>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-8 bg-slate-800/50 rounded-lg p-6 border border-blue-400/20">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">✨ Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Multi-Model ML', desc: 'LSTM, Prophet, ARIMA for robust predictions' },
              { title: 'IaC Generation', desc: 'Dynamic Terraform & Pulumi script creation' },
              { title: 'Cloud Agnostic', desc: 'AWS, GCP, Azure support' },
              { title: 'CICTCD Pipeline', desc: '3-stage automated deployment' },
              { title: 'Cost Optimization', desc: 'Intelligent resource right-sizing' },
              { title: 'Auto-Rollback', desc: 'Automatic failure recovery' },
              { title: '8 Test Levels', desc: 'From unit to chaos engineering' },
              { title: 'Multi-Strategy Deploy', desc: 'Rolling, Blue-Green, Canary' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-700/30 p-4 rounded border border-blue-400/10">
                <h3 className="font-semibold text-blue-300 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-8 bg-slate-800/50 rounded-lg p-6 border border-blue-400/20">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">🔌 API Endpoints</h2>
          <div className="space-y-2">
            {[
              { method: 'POST', path: '/api/v1/predict', desc: 'Generate resource forecast' },
              { method: 'POST', path: '/api/v1/recommend', desc: 'Get scaling recommendations' },
              { method: 'POST', path: '/api/v1/provision', desc: 'Trigger auto-provisioning' },
              { method: 'GET', path: '/api/v1/status/{task_id}', desc: 'Check provisioning status' },
              { method: 'GET', path: '/api/v1/metrics', desc: 'Retrieve historical metrics' },
              { method: 'POST', path: '/api/v1/models/train', desc: 'Retrain ML models' }
            ].map((endpoint, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-slate-700/30 p-3 rounded border border-blue-400/10 font-mono text-sm">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  endpoint.method === 'POST' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                }`}>
                  {endpoint.method}
                </span>
                <span className="text-gray-300 flex-1">{endpoint.path}</span>
                <span className="text-gray-500 text-xs">{endpoint.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pipeline Info */}
        <section className="mb-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg p-6 border border-cyan-400/30">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300">⚡ CICTCD Pipeline</h2>
          <p className="text-gray-300 mb-4">
            Comprehensive three-stage pipeline with quality gates, automated testing, and multiple deployment strategies.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-slate-800/50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-cyan-400">~15min</div>
              <div className="text-sm text-gray-400">CI Duration</div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-purple-400">~45min</div>
              <div className="text-sm text-gray-400">CT Duration</div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded text-center">
              <div className="text-2xl font-bold text-green-400">~30min</div>
              <div className="text-sm text-gray-400">CD Duration</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-center">
            See <code className="bg-slate-900 px-2 py-1 rounded">cicd/README.md</code> for complete pipeline documentation
          </p>
        </section>

        {/* Download Instructions */}
        <section className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-lg p-6 border border-blue-400/30">
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-6 h-6 text-blue-300" />
            <h2 className="text-2xl font-bold text-blue-300">📦 Download & Deploy</h2>
          </div>
          <p className="text-gray-300 mb-4">
            All code files are provided in the artifacts below. Download each file and organize according to 
            the folder structure above. Each artifact contains production-ready code with comprehensive documentation.
          </p>
          <div className="bg-slate-900/50 p-4 rounded border border-blue-400/20">
            <h3 className="font-semibold text-blue-200 mb-2">Deployment Options:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li><strong>Local Development:</strong> Use virtual environment and uvicorn</li>
              <li><strong>Docker:</strong> Build with provided Dockerfile and docker-compose</li>
              <li><strong>Kubernetes:</strong> Deploy with manifests in infrastructure/k8s/</li>
              <li><strong>CI/CD:</strong> Push to GitHub and let CICTCD pipeline handle it</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-blue-400/20 text-center text-gray-400 text-sm">
          <p>Built with ❤️ for intelligent infrastructure management</p>
          <p className="mt-2">License: MIT | Documentation: docs/ | Pipeline: cicd/README.md</p>
        </footer>
      </div>
    </div>
  );
}