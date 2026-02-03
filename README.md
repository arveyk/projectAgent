# Project Agent

## Set up pre-commit secret detection
 ```
pip install pre-commit
pip install detect-secrets
pre-commit install
```
Commit using the command line, and it will catch any secrets.

## Collecting test data
`npx tsx ./projectAgent-Node/src/bin/collectTestData.ts`
