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

### Setting change Webapp

Change dist dir `dist` to `cordova/www`.

`/wepapp/.angular-cli.json`
```json
{
  "apps": [
    {
      "outDir": "../cordova/www"
    }
  ]
}
```

Change `<base>` href.

`/webapp/src/index.html`
```html
<base href="www">
```

### Setup cordova

Move cordova dir.

```bash
$ cd cordova
```

Add platform.

```bash
cordova$ cordova platform add browser android ios
cordova$ cordova platform
Installed platforms:
  android 6.2.3
  browser 4.1.0
  ios 4.4.0
Available platforms: 
  blackberry10 ~3.8.0 (deprecated)
  osx ~4.0.1
  webos ~3.7.0

```

Add cordova-plugin-browsersync.

```bash
$ cd cordova
cordova$ cordova plugin add cordova-plugin-browsersync
cordova$ cordova plugin
       cordova-plugin-browsersync 0.1.7 "cordova-plugin-browsersync"
       cordova-plugin-whitelist 1.3.2 "Whitelist"
```

