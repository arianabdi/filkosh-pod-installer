#!/bin/bash

# Your existing script commands here
bash <(curl -Ls https://"$1"@raw.githubusercontent.com/arianabdi/filkosh-pod-api/main/scripts/installation.sh --ipv4)
