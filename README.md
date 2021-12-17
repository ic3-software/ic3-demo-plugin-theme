## icCube Dashboards Plugin (Javascript/Typescript)

A working example of an icCube Dashboards plugin creating a custom theme.

icCube is using Material UI as its underlying theme technology so if you are looking for inspiration, you can check
[MUI Treasury's customization examples](https://mui-treasury.com/styles/switch/).

### Overview

The plugin is a webpack federated module that is loaded at runtime by icCube Dashboards server. Please take care of the
setup of the `ModuleFederationPlugin` in the [webpack.common.js](./webpack.common.js) file.

### Getting Started

Clone that Git repository that is proposing a common Javascript/Typescript project using Webpack.

Use `npm` to install the dependencies:

    npm install

The `package.json` file is containing common scripts:

    start   : start a Webpack dev. server listening @4002 
    build   : build the plugin into the /dist directory
    zip     : zip the /dist directory to deploy into an icCube server
    clean   : delete /dist /kit directories.

A JetBrains IntelliJ project is available for a quick start.

### MyPluginTheme Renaming

This example is creating a plugin named `MyPluginTheme`. Before starting hacking the code we advise searching and
replacing the string `MyPluginTheme` by the actual name you'd like to give to your plugin.

Keep that name simple (i.e., ASCII letter without any space, separator, etc...) as it will be used as a folder name
(once deployed into an icCube server), Webpack module name, localization id, etc... That name must be unique across all
the plugins loaded into an icCube server.

### Develop

This example starts and shares the module `MyPluginTheme` @ `localhost:4002` (see `webpack.dev.js` file).

Refer to this [page](https://github.com/ic3-software/ic3-reporting-api/blob/master/doc/plugin/Develop.md)
that is explaining how to develop the plugin.

### Build/Deploy

Refer to this [page](https://github.com/ic3-software/ic3-reporting-api/blob/master/doc/plugin/Deploy.md)
that is explaining how to deploy the plugin.

### Documentation

See this [page](https://github.com/ic3-software/ic3-reporting-api/blob/master/doc/plugin/Overview.md)
for a detailed documentation of the dev. kit.

_
