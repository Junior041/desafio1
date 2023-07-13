pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building..."
                sh 'node -v'
                sh 'yarn'
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying..."
                sh 'yarn build'
            }
        }
    }
    post {
        always {
            echo "Pipeline concluded."
        }
        success {
            echo "All stages executed with success."
            script {
                sh 'pm2 delete app1 || true'
                sh 'pm2 start ecosystem.config.cjs --watch'
            }
        }
    }
}