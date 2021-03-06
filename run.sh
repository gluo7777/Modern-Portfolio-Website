#!/bin/bash

# We can remove stack traces in error pages by setting the NODE_ENV environment variable to production (it is set to 'development' by default). In addition 
# to generating less-verbose error messages, setting the variable to production caches view templates and CSS files generated from CSS extensions. Tests 
# indicate that setting NODE_ENV to production can improve app performance by a factor of three!
# npm install
echo "Configuring environment"
export NODE_ENV=production
app=portfolio
port=3030
[ -z "$S3" ] && read -p "Enter S3 URL: " S3
echo "Starting app=$app in port=$port"
$(PORT=$port SITE_CONFIG_URL=$S3/site.json node app.js > $app.out 2> $app.err) &
