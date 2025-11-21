# CICTCD Pipeline Documentation

## Overview

The ML Auto-Provisioning Engine implements a comprehensive **CICTCD** pipeline:

- **CI** - Continuous Integration
- **CT** - Continuous Testing  
- **CD** - Continuous Delivery

This three-stage approach ensures code quality, comprehensive testing, and reliable deployments.

---

## 🔄 Pipeline Architecture

### Stage 1: CI - Continuous Integration

**Purpose**: Validate code quality and build artifacts

**Triggers**:
- Every push to any branch
- Pull request creation/update
- Manual workflow dispatch

**Jobs**:
1. **Code Quality Checks** (5 min)
   - Black formatting
   - isort import sorting
   - Flake8 linting
   - Pylint analysis
   - MyPy type checking
   - Bandit security scanning
   - Safety dependency checks

2. **Dependency Validation** (3 min)
   - Requirements validation
   - Conflict detection
   - License compliance

3. **Build All Components** (8 min)
   - ML Engine build
   - API build
   - Provisioning Engine build
   - Python compilation
   - Package creation

4. **Build Docker Images** (10 min)
   - Multi-stage Docker build
   - Layer caching
   - Image artifact storage

5. **Static Analysis** (7 min)
   - SonarCloud scanning
   - CodeQL analysis
   - Security vulnerability detection

6. **Validate Infrastructure** (5 min)
   - Terraform validation
   - Pulumi preview
   - Kubernetes manifest validation

**Total Duration**: ~15 minutes

**Quality Gates**:
- ✅ All linting checks pass
- ✅ No security vulnerabilities
- ✅ Build artifacts created
- ✅ Docker image built successfully

---

### Stage 2: CT - Continuous Testing

**Purpose**: Comprehensive multi-level testing

**Triggers**:
- After successful CI pipeline
- Daily scheduled (2 AM UTC)
- Manual with test level selection

**Test Levels**:

#### 1. Unit Tests (10 min)
- **Scope**: Individual components
- **Matrix**: Python 3.9, 3.10, 3.11
- **Coverage Target**: 80%+
- **Tools**: pytest, pytest-cov, pytest-xdist

```bash
pytest tests/ -v --cov --cov-report=xml -n auto
```

#### 2. Integration Tests (15 min)
- **Scope**: Component interactions
- **Services**: PostgreSQL, Redis, API
- **Tools**: docker-compose, pytest-asyncio

```bash
pytest tests/integration/ -v --base-url http://localhost:8000
```

#### 3. ML Model Tests (12 min)
- **Scope**: Model validation
- **Tests**:
  - Feature engineering accuracy
  - Model prediction quality
  - Training performance
  - Inference latency
- **Tools**: pytest-benchmark

#### 4. API Contract Tests (8 min)
- **Scope**: API specification compliance
- **Tools**: Schemathesis
- **Validation**: OpenAPI schema

```bash
schemathesis run http://localhost:8000/openapi.json --checks all
```

#### 5. End-to-End Tests (20 min)
- **Scope**: Full user workflows
- **Tools**: Playwright, pytest-playwright
- **Tests**:
  - Complete prediction flow
  - Infrastructure provisioning
  - Dashboard interactions

#### 6. Performance Tests (15 min)
- **Scope**: Load and stress testing
- **Tools**: k6
- **Metrics**:
  - Throughput: RPS
  - Latency: p50, p95, p99
  - Error rate: <1%

```javascript
k6 run tests/performance/load_test.js --vus 100 --duration 5m
```

#### 7. Security Tests (10 min)
- **Scope**: Security vulnerabilities
- **Tools**: OWASP ZAP
- **Tests**:
  - SQL injection
  - XSS vulnerabilities
  - Authentication bypass
  - API security

#### 8. Chaos Engineering (Optional, 15 min)
- **Scope**: System resilience
- **Tools**: Chaos Toolkit
- **Experiments**:
  - Service failures
  - Network latency
  - Resource exhaustion

**Total Duration**: ~45 minutes (full suite)

**Quality Gates**:
- ✅ All unit tests pass (3 Python versions)
- ✅ Integration tests pass
- ✅ ML model accuracy >85%
- ✅ API contracts validated
- ✅ E2E scenarios successful
- ✅ Performance within thresholds
- ✅ No critical security issues

---

### Stage 3: CD - Continuous Delivery

**Purpose**: Deploy to staging/production

**Triggers**:
- After successful CT pipeline
- Main/develop branch only
- Manual with environment selection

**Deployment Strategies**:

#### 1. Rolling Update (Default)
```yaml
maximumPercent: 150
minimumHealthyPercent: 100
```
- Gradual replacement
- Zero downtime
- Safe rollback

#### 2. Blue-Green
- Full environment switch
- Test green before traffic switch
- Instant rollback capability
- Higher resource cost

#### 3. Canary
```yaml
stages:
  - 10% traffic for 5 minutes
  - 50% traffic for 5 minutes  
  - 100% traffic (full rollout)
```
- Progressive rollout
- Metric-based promotion
- Auto-rollback on errors

**Jobs**:

1. **Pre-Deployment Checks** (5 min)
   - Test results validation
   - Configuration validation
   - Infrastructure drift check
   - Model artifacts verification

2. **Build & Push Artifacts** (8 min)
   - Docker image build
   - ECR push
   - Image signing (Cosign)
   - SBOM generation (Syft)

3. **Deploy to Staging** (10 min)
   - ECS task update
   - Health checks
   - Smoke tests
   - DNS update (if needed)

4. **Deploy to Production** (15 min)
   - Deployment snapshot
   - Strategy execution
   - Monitoring validation
   - Production smoke tests

5. **Auto-Provision Infrastructure** (5 min)
   - ML predictions
   - Scaling recommendations
   - Terraform generation
   - PR creation for approval

6. **Post-Deployment Validation** (7 min)
   - Synthetic monitoring
   - Metrics validation
   - Alert verification
   - Business continuity tests

7. **Rollback** (if failures, 10 min)
   - Previous version restore
   - Traffic switch
   - Verification
   - Notification

**Total Duration**: ~30 minutes (staging + production)

**Quality Gates**:
- ✅ Pre-deployment checks pass
- ✅ Image signed and verified
- ✅ Staging deployment successful
- ✅ Smoke tests pass
- ✅ Production health verified
- ✅ Monitoring active

---

## 📊 Pipeline Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| CI Duration | <20 min | ~15 min |
| CT Duration | <60 min | ~45 min |
| CD Duration | <40 min | ~30 min |
| **Total Pipeline** | <2 hours | **~90 min** |
| Deployment Frequency | Daily | Multiple/day |
| MTTR | <30 min | ~20 min |
| Change Failure Rate | <5% | ~3% |

---

## 🚀 Usage

### Running CI Locally

```bash
# Code quality checks
black --check .
flake8 .
mypy ml_engine/ api/

# Build components
python setup.py sdist bdist_wheel

# Build Docker image
docker build -t ml-autoprov-api:local .
```

### Running CT Locally

```bash
# Unit tests
pytest tests/ -v --cov

# Integration tests with services
docker-compose -f docker-compose.test.yml up -d
pytest tests/integration/

# Performance tests
k6 run tests/performance/load_test.js
```

### Triggering CD Manually

```bash
# Via GitHub CLI
gh workflow run cd_continuous_delivery.yml \
  -f environment=staging \
  -f deployment_strategy=rolling

# Via API
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/OWNER/REPO/actions/workflows/cd_continuous_delivery.yml/dispatches \
  -d '{"ref":"main","inputs":{"environment":"production","deployment_strategy":"canary"}}'
```

---

## 🔐 Required Secrets

Configure these in GitHub Settings > Secrets:

### AWS
```bash
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_ACCOUNT_ID
ECR_REGISTRY
```

### Cloud Providers
```bash
GCP_PROJECT_ID
GOOGLE_APPLICATION_CREDENTIALS
AZURE_SUBSCRIPTION_ID
```

### Notifications
```bash
SLACK_WEBHOOK
SMTP_USER
SMTP_PASSWORD
STAKEHOLDER_EMAILS
```

### Tools
```bash
SONAR_TOKEN
PULUMI_ACCESS_TOKEN
STATUS_PAGE_TOKEN
API_KEY
```

---

## 📈 Monitoring & Alerts

### Pipeline Notifications

**Slack Channels**:
- `#ci-alerts` - CI failures
- `#test-results` - CT summaries
- `#deployments` - CD status

**Email Alerts**:
- CI failures → Developers
- CT failures → QA Team
- CD failures → Ops Team + Stakeholders

### Dashboards

**GitHub Actions Dashboard**:
- Workflow runs
- Success/failure rates
- Duration trends

**Custom Metrics**:
- Test coverage trends
- Deployment frequency
- MTTR tracking
- Build duration

---

## 🐛 Troubleshooting

### CI Failures

**Black formatting fails**:
```bash
# Auto-fix formatting
black .
git add -u
git commit -m "fix: formatting"
```

**Docker build fails**:
```bash
# Clear cache and rebuild
docker builder prune -a
docker build --no-cache -t ml-autoprov-api .
```

### CT Failures

**Unit tests timeout**:
```bash
# Increase timeout
pytest tests/ --timeout=600
```

**Integration tests fail**:
```bash
# Check service health
docker-compose ps
docker-compose logs api

# Restart services
docker-compose down -v
docker-compose up -d
```

### CD Failures

**Deployment stuck**:
```bash
# Check ECS service events
aws ecs describe-services \
  --cluster ml-autoprov-production \
  --services api-service

# Force new deployment
aws ecs update-service \
  --cluster ml-autoprov-production \
  --service api-service \
  --force-new-deployment
```

**Rollback**:
```bash
# Manually trigger rollback workflow
gh workflow run cd_continuous_delivery.yml \
  -f environment=production \
  -f rollback=true
```

---

## 📚 Best Practices

### For Developers

1. **Run tests locally** before pushing
2. **Keep PRs small** (<500 lines)
3. **Write tests** for new features
4. **Update documentation** with code changes
5. **Review pipeline failures** promptly

### For QA

1. **Monitor CT pipeline** daily
2. **Investigate flaky tests** immediately
3. **Update test coverage** for new features
4. **Maintain test data** quality
5. **Document test scenarios**

### For DevOps

1. **Monitor pipeline metrics** weekly
2. **Optimize slow jobs** regularly
3. **Update dependencies** monthly
4. **Review security scans** after each run
5. **Maintain pipeline infrastructure**

---

## 🔄 Pipeline Optimization

### Current Optimizations

1. **Parallel Execution**
   - Unit tests across Python versions
   - Independent test suites
   - Matrix builds

2. **Caching**
   - Pip dependencies
   - Docker layers
   - Build artifacts

3. **Incremental Testing**
   - Changed files only (when applicable)
   - Skip unchanged components

### Future Improvements

- [ ] Implement test impact analysis
- [ ] Add more parallel jobs
- [ ] Optimize Docker layer caching
- [ ] Implement smart test selection
- [ ] Add preview environments

---

## 📞 Support

- **Documentation**: `/docs`
- **Issues**: GitHub Issues
- **Slack**: `#ml-autoprov-cicd`
- **On-Call**: PagerDuty integration

---

## 📄 License

MIT License - See LICENSE file for details