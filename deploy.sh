#!/bin/bash
prod_files="bin data lib public routes templates app.js run.sh package.json package-lock.json"
out="portfolio.tar.gz"
tar -czvf $out $prod_files
user=$1
host=$2
sftp $1@$2 $host
put $out