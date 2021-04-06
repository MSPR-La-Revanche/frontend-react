pipeline {
  agent any
  stages {
    stage('Install & Tests & Build') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn install --ignore-engines
yarn
'''
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
