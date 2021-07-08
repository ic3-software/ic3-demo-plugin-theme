import {ApiUtils, IThemeManager} from "@ic3/reporting-api";
import {themeDecorator, themeOptions} from "./PublicDemoTheme";

/**
 * The plugin definition exposed as a remote Webpack module to the icCube dashboards application.
 */
const PluginDefinition = ApiUtils.makePlugin({

    /**
     * The ID used to identify this plugin within the icCube dashboards application.
     *
     * Keep that id simple (i.e., ASCII letter without any dot, space, separator, etc...) as it will be used
     * as a folder name (once deployed into an icCube server), Webpack module name, localization id, etc...
     *
     * It must be unique across all the loaded plugins.
     */
    id: "MyPluginTheme",

    registerThemes(manager: IThemeManager) {

        console.log("[MyPluginTheme] registerThemes")

        manager.registerTheme(themeOptions, themeDecorator);

    },

});

export default PluginDefinition;