## writing a node module 

* create files  
_README.md, lib/foo.js, test/foo.js, bin/foo.js_  
* generate the _package.json_ file  
`$ npm init`  
* install depencencies  
`$ npm install`  
* add code in _lib/foo.js_ 
* add code in _test/foo.js_ 
* add code in _bin/foo.js_   
`$ chmod a+x bin/foo.js`  
* git  
```
$ echo node_modules/ > .gitignore
$ git add .
$ git commit -m 'code'
$ git push -u origin master
```

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

