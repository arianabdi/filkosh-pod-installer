#!/bin/bash

PROJECT_NAME="filkosh-pod"
FOLDER_NAME="filkosh-pod-api"

# delete the PM2 project
pm2 delete $PROJECT_NAME

# Delete the project folder
rm -rf $FOLDER_NAME

# Check if the access key is provided
if [ -z "$1" ]; then
    echo "Error: Access key not provided."
    exit 1
fi

ACCESS_KEY="$1"

# Your existing script commands here, and use $ACCESS_KEY where needed
bash <(curl -Ls https://"$ACCESS_KEY"@raw.githubusercontent.com/arianabdi/filkosh-pod-api/main/scripts/installation.sh --ipv4)
