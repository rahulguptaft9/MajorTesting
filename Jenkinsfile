pipeline {
    
	  agent any
  	  tools {nodejs "node"}

	environment{
	registry="mrchelsea/nthimage"
	registryCredential='dockerhub'
	dockerImage=''
	}
	stages{
	stage('Git') {
		steps{
		git 'https://github.com/rahulguptaft9/JenkinsDemo'
		}	
	}
	stage('Build'){
		steps{
		//sh 'npm cache clean -force'
		//sh 'npm install'
		//sh 'npm install -g jest'
		//sh 'npm run build'
		echo "BUILD"
		}
	}
	stage('Code Coverage'){
		steps{	
			script{
		sh 'npm run test-cov'
		}
		step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])	
		}
	}
		
	stage('SonarQube'){
		tools{
		jdk "jdk11"
		}
		steps{
		script {
          	scannerHome = tool 'sonar_coverage';
        	}
		withSonarQubeEnv('sonar_coverage'){
		sh '''
		/var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonar_coverage/bin/sonar-scanner \
		-Dsonar.host.url=http://192.168.122.150:9004/sonarqube \
		-Dsonar.login=fdc363de15b913b7217886da6921ab013db5c56a \
		-Dsonar.projectKey=MERN \
		-Dsonar.projectName=MERN					
		'''

		}		
		}
	
	}

	
	stage('Building Image') {
		steps{
			script{
			 	dockerImage=docker.build registry	
			}
		}
	}
	stage('Registring Image') {
		steps{
			script{
				docker.withRegistry('',registryCredential){
				dockerImage.push()
				}
			}
		}
	}
		
		/*stage('Image Scanning'){
			steps{
			sh 'trivy image registry'
			}
		}*/
	}
    
}
