pipeline {
    agent any 

    environment {
        IMAGE_NAME = "nodejs-app"
        DOCKER_REGISTRY = "varsshhhhhhha" // Replace with your DockerHub username
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/varsshhhhhhha/Jenkins-task4.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install' // Use bat for Windows
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    bat 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker build -t %DOCKER_REGISTRY%/%IMAGE_NAME%:latest ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    bat "docker login -u %DOCKER_REGISTRY% -p Varsha@2003" // Replace with DockerHub password
                    bat "docker push %DOCKER_REGISTRY%/%IMAGE_NAME%:latest"
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                script {
                    bat "docker run -d -p 3000:3000 --name nodejs-staging %DOCKER_REGISTRY%/%IMAGE_NAME%:latest"
                }
            }
        }
    }

    post {
        failure {
            echo "Build failed. Check the logs!"
        }
    }
}
