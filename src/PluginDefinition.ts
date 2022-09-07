import PluginLocalization from "./PluginLocalization.csv";
import {ApiUtils, EmbeddedThemeNames, ILocalizationManager, ILogger, IThemeManager} from "@ic3/reporting-api";
import {themeDecorator, themeDecorator2, themeOptions, themeOptions2} from "./PublicDemoTheme";
import {themeEditorLondon, themeEditorLondonDecorator} from "./PublicDemoEditorTheme";

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

    registerLocalization(logger: ILogger, manager: ILocalizationManager) {

        logger.info("Demo", "[MyPluginTheme] registerLocalization")

        manager.registerLocalization(PluginLocalization);

    },

    registerThemes(logger: ILogger, manager: IThemeManager) {

        logger.info("Demo", "[MyPluginTheme] registerThemes")

        // register a new theme
        manager.registerTheme(themeOptions, themeDecorator);

        // you might also create a new theme based on an existing theme
        manager.registerTheme(themeOptions2, themeDecorator2, EmbeddedThemeNames.Statos);

        manager.registerEditorTheme(themeEditorLondon(), themeEditorLondonDecorator);

    },

});

export default PluginDefinition;