pipeline {
    
	  agent any
  tools {nodejs "node"}

	environment{
	registry="mrchelsea/react"
	registryCredential='dockerhub'
	dockerImage=''
	}
	stages{
	stage('Git') {
		steps{
		git 'https://github.com/rahulguptaft9/MajorTesting'
		}	
	}
	/*stage('Build'){
		steps{
		sh 'npm cache clean -force'
		sh 'npm install'
		}
	}*/
	/*stage('Test'){
		steps{	
		
		sh 'npm test'
		}
	}*/
		
	stage('Sonarube'){
	
		steps{
			withSonarQubeEnv('sonar_coverage'){
		/*sh 'npm install -g node'		
		sh 'npm install sonar-scanner'*/
		sh 'npm run sonar'
		}		
		}
	
	}	
	
	/*stage('Code Coverage'){
		steps{
		sh 'npm run test-coverage'
		}	
	}*/
	
	/*stage('Building image') {
		steps{
			script{
			 	dockerImage=docker.build registry	
			}
		}
	}
	stage('Registring image') {
		steps{
			script{
				docker.withRegistry('',registryCredential){
				dockerImage.push()
				}
			}
		}
	}*/
	}
    
}
