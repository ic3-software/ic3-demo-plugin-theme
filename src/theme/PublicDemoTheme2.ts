import {Theme} from "@mui/material/styles";
import {themeComponents} from "./PublicDemoTheme";

export const themeOptions2 = {

    ic3: {
        id: "ic3_demo_theme2",
        caption: "ic3 Demo Theme 2",
        cssClass: 'ic3-demo-theme',
    },


    /**
     * Material Playground for colors -> https://material.io/resources/color
     */
    palette: {

        primary: {main: "#cddc39"},
        secondary: {main: "#7986cb"},
        error: {main: "#f44336"},
        warning: {main: "#ff9800"},
        info: {main: "#2196f3"},
        success: {main: "#4caf50"},
        text: {primary: "#16194C"},

        ic3: {

            pageBackgroundColor: '#ffffff',

            selected: '#ffc107',
            selectedText: '#fafafa',
            selectedBackground: '#fff350',
            selectedOpacity: 1,
            unSelectedOpacity: 0.4,


            /**
             * list of palettes available in the reporting
             */
            chartPalettes: {
                default: ["#ecea6c", "#e4af5d", "#de9e9c", "#db83c7", "#ae87d7", "#689ecd", "#3dacb8", "#5cc9c1", "#88d786", "#55c670"],
                heatmap1: ["#006837", "#1a9850", "#66bd63", "#a6d96a", "#d9ef8b", "#fee08b", "#fdae61", "#f46d43", "#d73027", "#a50026"],
                heatmap2: ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8", "#fee08b", "#fdae61", "#f46d43", "#d73027", "#a50026"],
                // you can add more palettes here
            },

            /**
             * List of single colors
             *
             * The list will be completed with MUI palette colors (primary,..text) and the default chart palette
             *
             * @see MandatorySingleColors
             */
            chartSingleColors: {
                default: "#cddc39",
                // you can add more colors here
            },

        },
    },
}

export function themeDecorator2(theme: Theme) {
    return themeComponents(theme)
}
