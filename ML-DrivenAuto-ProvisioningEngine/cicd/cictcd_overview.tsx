import React from 'react';
import { GitBranch, CheckCircle, AlertCircle, Rocket, Shield, Zap, TestTube, Package } from 'lucide-react';

export default function CICTCDOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            CICTCD Pipeline Architecture
          </h1>
          <p className="text-2xl text-gray-300">
            Continuous Integration → Continuous Testing → Continuous Delivery
          </p>
          <p className="text-lg text-gray-400 mt-2">
            Three-stage automated pipeline for ML Auto-Provisioning Engine
          </p>
        </div>

        {/* Pipeline Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* CI Stage */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-10 h-10 text-cyan-400" />
              <h2 className="text-3xl font-bold text-cyan-300">CI</h2>
            </div>
            <h3 className="text-xl font-semibold text-cyan-200 mb-3">Continuous Integration</h3>
            <p className="text-gray-300 mb-4">
              Validates code quality, builds components, and creates artifacts
            </p>
            <div className="space-y-2">
              {[
                'Code Quality Checks',
                'Dependency Validation',
                'Build All Components',
                'Docker Image Build',
                'Static Analysis',
                'IaC Validation'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CT Stage */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border-2 border-purple-400/30 hover:border-purple-400/60 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <TestTube className="w-10 h-10 text-purple-400" />
              <h2 className="text-3xl font-bold text-purple-300">CT</h2>
            </div>
            <h3 className="text-xl font-semibold text-purple-200 mb-3">Continuous Testing</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive testing across all levels and dimensions
            </p>
            <div className="space-y-2">
              {[
                'Unit Tests (Multi-version)',
                'Integration Tests',
                'ML Model Validation',
                'API Contract Tests',
                'End-to-End Tests',
                'Performance & Load',
                'Security Testing',
                'Chaos Engineering'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CD Stage */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border-2 border-green-400/30 hover:border-green-400/60 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-10 h-10 text-green-400" />
              <h2 className="text-3xl font-bold text-green-300">CD</h2>
            </div>
            <h3 className="text-xl font-semibold text-green-200 mb-3">Continuous Delivery</h3>
            <p className="text-gray-300 mb-4">
              Automated deployment with multiple strategies and validation
            </p>
            <div className="space-y-2">
              {[
                'Pre-deployment Checks',
                'Build & Push Artifacts',
                'Staging Deployment',
                'Production Deployment',
                'Auto-Provisioning',
                'Post-validation',
                'Rollback Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline Flow */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 border border-blue-400/20">
          <h2 className="text-3xl font-bold text-blue-300 mb-6">Pipeline Flow Diagram</h2>
          <div className="bg-slate-900/50 p-6 rounded-lg border border-blue-400/10 font-mono text-sm overflow-x-auto">
            <pre className="text-gray-300 whitespace-pre">
{`┌──────────────────────────────────────────────────────────────────────┐
│                         CI PIPELINE (Stage 1)                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────┐      ┌─────────────────┐      ┌──────────────┐│
│  │  Code Quality   │─────▶│   Dependency    │─────▶│    Build     ││
│  │    Checks       │      │   Validation    │      │  Components  ││
│  └─────────────────┘      └─────────────────┘      └──────────────┘│
│           │                                                │         │
│           └────────────────────┬───────────────────────────┘         │
│                                ▼                                     │
│                    ┌───────────────────────┐                        │
│                    │   Build Docker Image  │                        │
│                    └───────────────────────┘                        │
│                                │                                     │
│           ┌────────────────────┼────────────────────┐               │
│           ▼                    ▼                    ▼               │
│  ┌────────────────┐   ┌──────────────┐   ┌──────────────────┐    │
│  │ Static Analysis│   │ Validate IaC │   │ Integration Build│    │
│  └────────────────┘   └──────────────┘   └──────────────────┘    │
│                                │                                     │
└────────────────────────────────┼─────────────────────────────────────┘
                                 │
                                 ▼
┌──────────────────────────────────────────────────────────────────────┐
│                         CT PIPELINE (Stage 2)                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────┐    ┌──────────────┐    ┌────────────────────┐    │
│  │ Unit Tests  │───▶│ Integration  │───▶│  ML Model Tests    │    │
│  │ (Py 3.9-11) │    │    Tests     │    │  & Validation      │    │
│  └─────────────┘    └──────────────┘    └────────────────────┘    │
│         │                   │                       │                │
│         └───────────────────┴───────────────────────┘                │
│                             ▼                                        │
│                ┌─────────────────────────┐                          │
│                │  API Contract Tests     │                          │
│                └─────────────────────────┘                          │
│                             │                                        │
│         ┌───────────────────┼───────────────────┐                  │
│         ▼                   ▼                   ▼                   │
│  ┌────────────┐    ┌──────────────┐    ┌─────────────┐           │
│  │    E2E     │    │ Performance  │    │  Security   │           │
│  │   Tests    │    │  Load Tests  │    │   Testing   │           │
│  └────────────┘    └──────────────┘    └─────────────┘           │
│         │                   │                   │                   │
│         └───────────────────┴───────────────────┘                   │
│                             ▼                                        │
│                ┌─────────────────────────┐                          │
│                │  Generate Test Report   │                          │
│                └─────────────────────────┘                          │
│                             │                                        │
└─────────────────────────────┼────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                         CD PIPELINE (Stage 3)                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────┐      ┌─────────────────┐                     │
│  │ Pre-deployment   │─────▶│  Build & Push   │                     │
│  │     Checks       │      │   to Registry   │                     │
│  └──────────────────┘      └─────────────────┘                     │
│                                     │                                │
│                    ┌────────────────┴────────────────┐              │
│                    ▼                                 ▼              │
│         ┌──────────────────┐              ┌──────────────────┐    │
│         │Deploy to Staging │              │Deploy Production │    │
│         │  (Auto/Manual)   │              │ Rolling/Canary/  │    │
│         └──────────────────┘              │   Blue-Green     │    │
│                    │                       └──────────────────┘    │
│                    │                                 │              │
│                    └─────────────┬───────────────────┘              │
│                                  ▼                                  │
│                    ┌──────────────────────────┐                    │
│                    │  Post-deployment         │                    │
│                    │  Validation & Monitoring │                    │
│                    └──────────────────────────┘                    │
│                                  │                                  │
│                    ┌─────────────┴─────────────┐                   │
│                    ▼                           ▼                   │
│         ┌──────────────────┐        ┌──────────────────┐          │
│         │ Auto-Provision   │        │   Rollback if    │          │
│         │ Infrastructure   │        │   Failures       │          │
│         └──────────────────┘        └──────────────────┘          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-400/20">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-300">Quality Gates</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span><strong>CI Gate:</strong> Code quality, linting, security scans pass</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span><strong>CT Gate:</strong> All test suites pass with 80%+ coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span><strong>CD Gate:</strong> Staging validation and smoke tests pass</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-400/20">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-300">Automation Features</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Automatic artifact versioning and tagging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Parallel test execution for faster feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>ML-triggered infrastructure provisioning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>Automatic rollback on deployment failures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Deployment Strategies */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 border border-green-400/20">
          <h2 className="text-3xl font-bold text-green-300 mb-6">Deployment Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-700/30 p-4 rounded-lg border border-green-400/20">
              <h4 className="text-lg font-semibold text-green-200 mb-2">Rolling Update</h4>
              <p className="text-sm text-gray-300 mb-3">Gradual instance replacement with zero downtime</p>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• Default strategy</div>
                <div>• 100% → 150% → 100%</div>
                <div>• Safe for most deployments</div>
              </div>
            </div>
            
            <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-400/20">
              <h4 className="text-lg font-semibold text-blue-200 mb-2">Blue-Green</h4>
              <p className="text-sm text-gray-300 mb-3">Full environment switch with instant rollback</p>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• Zero-downtime</div>
                <div>• Test before switch</div>
                <div>• Instant rollback</div>
              </div>
            </div>
            
            <div className="bg-slate-700/30 p-4 rounded-lg border border-purple-400/20">
              <h4 className="text-lg font-semibold text-purple-200 mb-2">Canary</h4>
              <p className="text-sm text-gray-300 mb-3">Progressive rollout with monitoring</p>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• 10% → 50% → 100%</div>
                <div>• Monitor metrics</div>
                <div>• Auto-promote/rollback</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trigger Conditions */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-400/20">
          <h2 className="text-3xl font-bold text-cyan-300 mb-6">Pipeline Triggers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-cyan-200 mb-3">CI Triggers</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Every push to any branch</li>
                <li>✓ Pull request creation/update</li>
                <li>✓ Manual workflow dispatch</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-purple-200 mb-3">CT Triggers</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ After CI pipeline success</li>
                <li>✓ Daily scheduled runs (2 AM)</li>
                <li>✓ Manual with test level selection</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-green-200 mb-3">CD Triggers</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ After CT pipeline success</li>
                <li>✓ Main/develop branch only</li>
                <li>✓ Manual with environment choice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Metrics & Monitoring */}
        <div className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-400/30">
          <h2 className="text-3xl font-bold text-blue-300 mb-4">Pipeline Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-cyan-400">~15min</div>
              <div className="text-sm text-gray-400 mt-1">CI Duration</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-400">~45min</div>
              <div className="text-sm text-gray-400 mt-1">CT Duration</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-400">~30min</div>
              <div className="text-sm text-gray-400 mt-1">CD Duration</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-yellow-400">~90min</div>
              <div className="text-sm text-gray-400 mt-1">Total Pipeline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}