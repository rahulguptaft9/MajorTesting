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
		git 'https://github.com/rahulguptaft9/MajorTesting'
		}	
	}
	stage('Build'){
		steps{
		sh 'npm cache clean -force'
		sh 'npm install'
		sh 'npm install -g jest'
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
		-Dsonar.host.url=http://192.168.122.135:9004/sonarqube \
		-Dsonar.login=443b17ef84fc21dfd66dba03fc8fe3299edae9de \
		-Dsonar.projectKey=aishwarya \
		-Dsonar.projectName=aishwarya					
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
	}
    
}
