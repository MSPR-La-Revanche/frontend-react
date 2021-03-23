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
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm install --save-dev jest'
        sh 'npm install --save-dev babel-jest regenerator-runtime'
        sh 'npm run test'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build --prod'
      }
    }

  }
  environment {
    CI = 'true'
  }
}