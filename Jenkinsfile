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
	stage('Build'){
		steps{
		sh 'npm cache clean -force'
		sh 'npm install'
		sh 'npm install -g jest'
		}
	}
	stage('coverage'){
		steps{	
			script{
		sh 'npm run test-cov'
		}
		step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])	
		}
	}
		
	stage('Sonarube'){
	
		steps{
			withSonarQubeEnv('sonar_coverage'){
				script{
			
		
		sh 'npm run sonar'
				}
			}		
		}
	
	}
	

	
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
