pipeline {
  agent any
  stages {
    stage('Install & Tests & Build') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn install --ignore-engines
yarn'''
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn install --ignore-engines
yarn config set prefix /usr/local/
yarn add -D jest --ignore-engines
yarn add -D babel-jest regenerator-runtime --ignore-engines
yarn test'''
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