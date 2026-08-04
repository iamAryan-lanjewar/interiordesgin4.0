$nodePath = "d:\webdesign  4.0\node-env\node-v20.11.1-win-x64"
$env:Path = "$nodePath;$env:Path"
& "$nodePath\node.exe" "$nodePath\node_modules\npm\bin\npm-cli.js" run dev -- -p 3001
