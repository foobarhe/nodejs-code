## writing a node module 

* create files  
	README.md, lib/foo.js, test/foo.js, bin/foo.js

* generate the package.json file  
	`$ npm init`  

* install depencencies  
	`$ npm install`  

* add code in lib/foo.js  
* add code in test/foo.js  
* add code in bin/foo.js  
	`$ chmod a+x bin/foo.js`  
* git  
	```
	$ echo node_modules/ > .gitignore
    $ git add .
    $ git commit -m 'code'
    $ git push -u origin master

## test your package  
	```
	$ npm test
	$ ./bin/foo.js add 100 200
	```

## publish your module to npm   
	```
	$ npm adduser
	$ npm publish .
	```

## more  
* http://anders.janmyr.com/2012/04/writing-node-module.html
* http://visionmedia.github.io/mocha/

