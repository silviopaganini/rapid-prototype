### Rapid Prototyping boilerplate
using @mattdesl template

if you want to make this completely automated on your machine place this script on your .bash_profile 

``` 
function rapid
{
    if [ -z "$1" ] 
    then
        echo 'need to specify the folder name'
    else
    	# creates a folder
        mkdir $1 
        cd $1
        
        # checks out repository with the rapid prototype structure
        
        git clone git@github.com:silviopaganini/rapid-prototype.git .
        
        # renames package.json
        USR="$(git config --global user.name)"
        (echo "import json, sys";echo "with open('package.json', 'r+') as f:";echo "    data = json.load(f)";echo "    data['name'] = '$1'";echo "    data['author'] = '$USR'";echo "    data['version'] = '0.0.1'";echo "    f.seek(0)";echo "    json.dump(data, f, indent=4)") | python

        # generate README file
        rm README.md 
        touch README.md 
        printf "# $1 \n\n Description of your prototype \n Usage: \n\n \`npm start\`" >> README.md

        # remove rapid prototype git references
        rm -rf .git
        
        # install dependencies
        npm install
        
        # open Sublime
        open -a "Sublime Text" .
        
        # opens browser 
        /usr/bin/open -a "/Applications/Google Chrome.app" 'http://localhost:9966'
        
        # starts server
        npm start
    fi
}
```

### usage: 
`$ rapid nameOfThePrototype`

Or just checkout the repo and start the server

```
git clone 
npm install 
npm start
```
