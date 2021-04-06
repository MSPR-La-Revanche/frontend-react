pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
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