const scanner = require('sonar_coverage');
scanner(
  {
  serverUrl: "http://192.168.122.133:9004/sonarqube",
  login:"admin",
  password:"root",
  options: {
    "sonar.sources": "./src"
  },
},
() => process.exit()
);
