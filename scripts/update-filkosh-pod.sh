#!/bin/bash

# Extract the GitHub token from the environment variable
github_token="$GITHUB_TOKEN"

# Your existing script commands here
bash <(curl -Ls https://github.com/arianabdi/filkosh-pod-api/main/scripts/installation.sh --ipv4)
