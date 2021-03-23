pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Installation') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn install --ignore-engines
yarn'''
      }
    }

    stage('Test') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn install --ignore-engines
npm install --save-dev jest
npm install --save-dev babel-jest regenerator-runtime
yarn test'''
      }
    }

    stage('Build') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn install --ignore-engines
yarn build --prod'''
      }
    }

  }
  tools {
    nodejs 'NodeJS'
  }
  environment {
    CI = 'true'
  }
}