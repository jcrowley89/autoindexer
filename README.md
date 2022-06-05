## Installation
- clone repo.
- run `npm install -g .` in that directory.

## Usage
- create an `autoindexer.json` file in your project directory. This file will define the module file types for your project and which directory to write the files to.

Example:

autoindexer.json
```
{
    "component": {
        "dir": "./components"
    },
    "page": {
        "dir": "./pages"
    }
}
```

example command:
```
aidx component CustomButton
```

This will create a new file in "./components" called CustomButton.js and will write a new line to "./components/index.js": 
```
export { default as CustomButton } from "./CustomButton";
```

Please note that the directories need to already be created and need to already contain an "index.js" file for this to work.