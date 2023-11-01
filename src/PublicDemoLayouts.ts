import {IWidgetLayoutDefinition} from "@ic3/reporting-api";
import {BreakpointsOptions} from "@mui/material/styles";

const demoDesktopLayout: IWidgetLayoutDefinition = {

    layoutConfigId: "Demo. Desktop Layout",

    layoutGroup: "Demo",
    layoutName: "Desktop",

    pageSize: {
        type: "unlimited",
        pageSizeUnits: "px",
        pageWidth: 1366,
    },

    pageOrientation: "portrait",

    pageMargin: {
        sizeUnits: "px",
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
    },

    expandH: true,

    grid: {
        snap: true,
        show: true,
        width: 25,
        height: 50,
    },

}

/**
 * A copy of the Statos layout for demo. purpose.
 */
const demoGridLayout: IWidgetLayoutDefinition = {

    layoutConfigId: "statos_grid_layout_copy",

    layoutGroup: "Demo",
    layoutName: "Responsive Grid",

    responsiveness: {

        type: "grid",

        columnCount: 12 * 2,
        columnWidth: 110 / 2,

        /**
         * Will be resolved at runtime from the MUI theme actual spacing.
         */
        themeSpacing: 1,

        multiplier: {
            mobile: 0,
            tablet: 1,
            laptop: 1,
            desktop: 1,
        },

        margin: {
            mobile: 1,
            tablet: 3,
            laptop: 6,
            desktop: 6,
        },

        columnSpacing: {
            mobile: 0,
            tablet: 1,
            laptop: 1,
            desktop: 1,
        },

        rowSpacing: {
            mobile: 1,
            tablet: 1,
            laptop: 1,
            desktop: 1,
        },

        // Used when switching a grid layout to multi. page layout (e.g., when printing).

        print: {
            multiplier: 1,
            columnSpacing: 1,
            rowSpacing: 1,
        },

        // Used when switching a grid layout to multi. page layout (e.g., when printing).

        printLandscape: {
            multiplier: 1,
            columnSpacing: 1,
            rowSpacing: 1,
        },

        groupSnapSteps: [0, 0.1, 0.2, 0.25, 0.3, 1 / 3, 0.4, 0.5, 0.6, 2 / 3, 0.7, 0.75, 0.8, 0.9, 1.0]
        // groupSnapSteps: 0.05
        // groupSnapSteps: 10

    },

    pageSize: /* irrelevant: unlimited always */ {
        type: "unlimited",
        pageSizeUnits: "px",
        pageWidth: 0,
    },

    pageOrientation: "portrait" /* irrelevant: portrait always */,

    pageMargin: /* irrelevant: responsiveness.margin used instead */ {
        sizeUnits: "px",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    grid: {
        snap: true /* irrelevant : true always to snap width (use height=1 if snap height not required) */,
        show: false /* does it make sense to show it */,
        width: 0 /* irrelevant : responsiveness.columnWidth used instead */,
        height: 10,
    },

};

/**
 * A copy of the Statos layout for demo. purpose.
 */
const demoGridLayout50 = {

    ...demoGridLayout,

    layoutConfigId: "statos_grid_layout_split_50_copy",

    layoutName: "Responsive Grid ( Split 50% )",

    responsiveness: {

        ...demoGridLayout.responsiveness!,

        multiplier: {
            mobile: 0,
            tablet: 2,
            laptop: 1,
            desktop: 1,
            print: 2
        },

    },

};

/**
 * The actual values of the breakpoints used in the responsive layouts.
 */
export const pluginDemoThemeBreakpoints: BreakpointsOptions = {

    keys: ["mobile", "tablet", "laptop", "desktop"],

    values: {
        mobile: 600,
        tablet: 900,
        laptop: 1250,
        desktop: 1600,
    }

};

/**
 * The first defined layout is used as the default one.
 */
export const publicDemoThemeLayouts: IWidgetLayoutDefinition[] = [
    demoGridLayout, demoGridLayout50, demoDesktopLayout
]
