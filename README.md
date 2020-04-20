View live at [www.ceruleanmind.com](https://www.ceruleanmind.com)

# CI
[Travis CI](https://travis-ci.org/account/repositories)

# Action Items
- Identify storage options
- fix .eslintrc configuration

# Enhancements
- update site.json
- deploy on EBS
- host static resources on S3
    - site.json
    - public

# Building and testing
>npm install && npm test

# Running
>./run.sh

# Packaging
```bash
rm *.zip
zip -r portfolio.zip . -x node_modules/\* \*.txt \*.md .\* .\* \*.code-workspace run.sh \*.err \*.out \*.zip
unzip portfolio.zip -d portfolio
```