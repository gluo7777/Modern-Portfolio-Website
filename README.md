View live at [www.williamluo.com](https://www.williamluo.com)

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
- set up https://aws.amazon.com/solutions/implementations/instance-scheduler/ to save $
- schedule for 9 to 3 ~ monthly costs (est. $2.16)
- update references to old domain williamluo.com

# Building and testing
>npm install && npm test

# Running
>./run.sh

# Packaging
```bash
rm *.zip
zip -r portfolio.zip . -x node_modules/\* portfolio \*.txt \*.md .\* .\* \*.code-workspace run.sh \*.err \*.out \*.zip
unzip portfolio.zip -d portfolio
```