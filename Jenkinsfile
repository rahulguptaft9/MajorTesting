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
	stage('coverage'){
		steps{	
		
		sh 'npm run test-cov'
		}
	}
		
	/*stage('Sonarube'){
	
		steps{
			withSonarQubeEnv('sonar_coverage'){
				script{
		//sh 'npm install node'		
		/*sh 'npm install sonar-scanner'*/
		sh 'npm run sonar_coverage'
				}
			}		
		}
	
	}*/	
	
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
