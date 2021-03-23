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
        sh 'apt install sudo'
        sh 'sudo npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'sudo npm install --save-dev jest'
        sh 'sudo npm install --save-dev babel-jest regenerator-runtime'
        sh 'sudo npm run test'
      }
    }

    stage('Build') {
      steps {
        sh 'sudo npm run build --prod'
      }
    }

  }
  environment {
    CI = 'true'
  }
}