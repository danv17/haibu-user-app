# Haibu Users App

Applicación que muestra una lista de los usuarios y la información inválida, relacionada al rut y fecha de nacimiento, al seleccionar uno.

## Versiones utilizadas

Ionic:

   * ionic (Ionic CLI)             : 4.8.0 (C:\Users\Daniel\AppData\Roaming\npm\node_modules\ionic)
   * Ionic Framework               : @ionic/angular 4.0.0-rc.1
   * @angular-devkit/build-angular : 0.11.4
   * @angular-devkit/schematics    : 7.2.2
   * @angular/cli                  : 7.2.2
   * @ionic/angular-toolkit        : 1.2.2

Cordova:

   * cordova (Cordova CLI) : 8.1.2 (cordova-lib@8.1.1)
   * Cordova Platforms     : android 7.1.4
   * Cordova Plugins       : cordova-plugin-ionic-keyboard 2.1.3, cordova-plugin-ionic-webview 2.3.2, (and 4 other plugins)

System:

   * NodeJS : v8.11.1 (C:\Program Files\nodejs\node.exe)
   * npm    : 5.6.0
   * OS     : Windows 10

## Instalación

Instalar [Android Studio](https://developer.android.com/studio)
Dentro de Android Studio, en la pestaña Tools > SDK Manager > SDK Tools > SDK Platforms, seleccionar Android 7.0 e instalar. 
Si al momento de probar la aplicación aparece un mensaje de error sobre el 'emulator accelerator', ir a Tools > SDK Manager > SDK Tools > SDK Tools, deseleccionar 'Intel x86 Emulator Acceletator (HAXM installer), click en Apply para desinstalarlo y luego volver a instalar.

Usar npm para instalar

```bash
npm install
ionic cordova platform add android
ionic cordova run android --prod
```

La aplicación funciona en Android 7.0+. En Android 5.1 y 6.0 la aplicación se abre y luego del splash queda en una pantalla blanca. Probé agregando como plataforma solo android 5.0, con el mismo resultado. Utilicé el SDK Manager sin Android Studio y surgió otro problema relacionado con variables de usuario, como ANDROID_HOME, para lo cual era necesario agregar la ruta del SDK:

```bash
C:/Users/'nombre_usuario'/AppData/Local/Android/Sdk
```

Además de agregar algunos directorios del SDK como variables de sistema en la ruta 'Path'

```bash
C:/Users/'nombre_usuario'/AppData/Local/Android/Sdk/tools
C:/Users/'nombre_usuario'/AppData/Local/Android/Sdk/platforms_tools
```

Sin embargo, no parecia soluciar el problema pues una vez agregadas las variables de usuario y de sistema, seguía arrojando el siguiente error:

```bash
Android SDK not found. Make sure that it is installed. If it is not at the default location, set the ANDROID_HOME environment variable.
```