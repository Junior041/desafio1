pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'serve -s build' // Inicia a aplicação React a partir da pasta 'build'
            }
        }
    }
}
