pipeline {
     /*
     agent {  
        docker {
            image 'node' 
            args '-p 3000:3000' 
        }  
    }
    */
    agent any
    stages {
        stage('Build') { 
            steps {
                echo "building states"
                sh 'node -v' 
                sh 'npm install' 
                
            }
        } 
         stage('Deploy') { 
            steps {
                echo "Deploying..."
               sh 'npm run build'
            }
        }
    }
     post{
          always{
               echo "pipeline concluded."
          }
          success{
               echo "all stages executed with success."
               sh 'npm run start'
          }
     }
}