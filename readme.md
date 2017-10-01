# Stamp

NFC Stamp app on Cordova and Angular.

## project build

### create project

Create project dir.
```bash
$ mkdir stamp
```

Create webapp by angular-cli.
```bash
$ ng new stamp -dir webapp --routing true -p kt -sg
```

Create cordova app by cordovaCLI.
```bash
$ cordova create cordova com.kt.example.stamp Stamp
```

Add gitignores.
```ignore
cordova/www/*
cordova/node_modules
cordova/platforms
cordova/plugins
webapp/node_modules
webapp/bin
```

