node {
    try {
        notifyBuild('STARTED')

        stage('check tools') {
            sh "npm -v"
        }

        stage('checkout') {
            checkout scm
        }

        stage('npm install') {
            sh "npm install"
        }

        stage('lint') {
            sh 'ng lint'
        }

        stage('unit tests') {
            sh "ng test --watch false"
        }

        stage('build') {
            sh "ng build --prod --no-aot"
        }

        stage('docker deploy') {
            try {
                sh "docker stop library-front"
                sh "docker rm library-front"
            } catch (err) {
                echo "no such container"
            }
            sh "docker build -t library-front ."
            sh "docker run --restart=always -d -p 4200:4200 --name library-front library-front"
        }
    } catch (e) {
      currentBuild.result = "FAILED"
      throw e
    } finally {
      notifyBuild(currentBuild.result)
    }
}

def notifyBuild(String buildStatus = 'STARTED') {
    buildStatus =  buildStatus ?: 'SUCCESSFUL'

    def colorName = 'RED'
    def colorCode = '#FF0000'
    def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
    def summary = "${subject} (${env.BUILD_URL})"

    if (buildStatus == 'STARTED') {
      color = 'YELLOW'
      colorCode = '#FFFF00'
    } else if (buildStatus == 'SUCCESSFUL') {
      color = 'GREEN'
      colorCode = '#00FF00'
    } else {
      color = 'RED'
      colorCode = '#FF0000'
    }

    slackSend (color: colorCode, message: summary)
}
