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
yarn config set prefix /usr/local/
yarn add -D jest --ignore-engines
yarn add -D babel-jest regenerator-runtime --ignore-engines
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
    nodejs 'Node'
  }
  environment {
    CI = 'true'
  }
}