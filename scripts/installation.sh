#!/bin/bash

sudo apt install git

# Install Node.js (if not already installed)
if ! command -v node &>/dev/null; then
  echo "Installing Node.js..."
  curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

if ! command -v jq &>/dev/null; then
  echo "Installing jq..."
  sudo apt-get install -y jq
fi

if ! command -v lsof &>/dev/null; then
  echo "Installing lsof..."
  sudo apt-get install -y lsof
fi

# Install NestJS CLI (if not already installed)
if ! command -v nest &>/dev/null; then
  echo "Installing NestJS CLI..."
  sudo npm install -g @nestjs/cli
fi


# Install NestJS CLI (if not already installed)
if ! command -v pm2 &>/dev/null; then
  echo "Installing pm2..."
  sudo npm install -g pm2
fi


# Clone your GitHub repository (replace <your-github-repository-url> with your actual repository URL)
echo "Cloning your project..."
git clone "https://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@github.com/arianabdi/filkosh-pod-installer"

# Navigate to the project directory
cd filkosh-pod-installer


# Install project dependencies
echo "Installing node modules..."
npm install --legacy-peer-deps

# Build the NestJS application
echo "Building the NestJS application..."
npm run build

# Start the application using pm2 (assuming pm2 is installed)
echo "Starting the application"
#npm start dist/main.js
pm2 start dist/main.js --name filkosh-pod-installer

#start application after server reboot
pm2 startup

echo "Installation completed!"
