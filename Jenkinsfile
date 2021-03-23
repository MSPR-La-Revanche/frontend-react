pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        echo 'Running installation...'
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn'''
      }
    }

    stage('Tests') {
      steps {
        echo 'Running tests...'
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
npm install --save-dev jest
npm install --save-dev babel-jest regenerator-runtime
yarn test'''
      }
    }

    stage('Build') {
      steps {
        echo 'Running build...'
        sh '''export PATH=$PATH:/usr/local/bin/yarn
which yarn
yarn build --prod'''
      }
    }

  }
}