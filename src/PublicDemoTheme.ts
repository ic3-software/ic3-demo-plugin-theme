import {ThemeOptions} from "@mui/material";
import {Theme} from "@mui/material/styles";
import WebFont from "@iccube/webfontloader";

export const themeId = "Demo";

const fontFamily = "'Rubik', sans-serif";

/**
 * To make life like a bit easier. We can use as many font families as we want in a theme.
 */
function typo(weight: 300 | 400, size: number, line: number, spacing: number) {
    return {
        fontFamily: fontFamily,
        fontWeight: weight,
        fontSize: `${size / 16}rem`,
        lineHeight: `${line / 16}rem`,
        letterSpacing: `${Math.round(spacing / size)}em`
    }
}

/**
 * Input of createMuiTheme( {...} )
 */
export const themeOptions: ThemeOptions = {

    ic3: {
        id: themeId,
        caption: "Demo",

        cssClass: 'ic3-demo-theme',

        loadFonts: (continuation: () => void) => {

            // Remotely loading Google fonts but you can as well include the fonts in your plugin.
            // icCube is using @fontsource to package the Statos theme fonts.

            WebFont.load({
                google: {
                    families: ['Rubik:300,400']
                },

                active: function () {
                    continuation();
                },

                inactive: function () {
                    continuation();
                },
            });

        },

        widgetBox: {
            contentOffset: {top: 32, left: 0},
        },

        /**
         * The first defined layout is used as the default one.
         */
        layouts: [{

            layoutConfigId: 'Demo. Desktop Layout',

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

            pageBackgroundColor: 'white',

            expandH: true,

            grid: {
                snap: true,
                show: true,
                width: 25,
                height: 50,
            },

        }],
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

    /**
     * Redefining fonts
     */
    typography: {

        fontFamily: fontFamily,
        fontSize: 14,

        h1: typo(400, 96, 118, -1.5),
        h2: typo(400, 60, 74, -0.5),
        h3: typo(400, 48, 60, 0),
        h4: typo(400, 34, 42, 0.25),
        h5: typo(400, 26, 32, 0),
        h6: typo(400, 20, 24, 0),
        subtitle1: typo(300, 16, 20, 0.15),
        subtitle2: typo(300, 14, 18, 0.13),
        body1: typo(300, 16, 23, 0.5),
        body2: typo(300, 14, 20, 0.25),
        button: typo(400, 14, 14, 0.25),
        caption: typo(300, 12, 15, 0.34),
        overline: typo(300, 12, 14, 1.5),

        ic3: {
            amCharts4: {
                fontSize: "14px",
                fontFamily: fontFamily,
            }
        }

    },
}

/**
 * Attach the Material-UI components to the theme.
 */
function themeComponents(theme: Theme): void {

    Object.assign(theme.components, {

        /**
         * Adding a new variant to the WidgetBox
         */
        WidgetBox: {
            variants: [
                {
                    props: {variant: "Rounded"},
                    style: {
                        "&.WidgetBox-standard, &.WidgetBox-embedded": {
                            boxShadow: "4px 8px " + theme.palette.grey.A400,
                            borderRadius: "10px",
                            border: 'solid 1px ' + theme.palette.grey.A400,
                        },
                        "& .WidgetBox-header": {
                            justifyContent: "center",
                            height: '40px',
                            borderColor: theme.palette.grey.A700
                        },
                        "& .WidgetBox-headerTitle": {
                            ...theme.typography.h6,
                            lineHeight: '40px',
                        },
                        "& .WidgetBox-userMenu": {
                            height: '40px',
                        },
                        // hide/show box hover over the box
                        "& .WidgetBox-userMenuClosed": {
                            opacity: 0,
                        },
                        "&:hover .WidgetBox-userMenuClosed": {
                            opacity: 1,
                        }
                    },
                }
            ],
            styleOverrides: {
                root: {
                    "&.WidgetBox-standard": {
                        backgroundColor: "white",
                    },
                    "&.WidgetBox-embedded": {
                        backgroundColor: "white",
                    },
                    "& .WidgetBox-header": {
                        height: "32px",
                        marginLeft: '10px',
                        marginRight: '5px',
                        borderBottom: '1px solid ' + theme.palette.divider,
                    },
                    "& .WidgetBox-headerTitle": {
                        lineHeight: '32px',
                        fontWeight: "bold",
                    },
                }
            }
        },

        /**
         * Adding a new variant to the buttons filter that is using Mui component
         *
         * FilterButtons -> ic3 component to register a new MuiButton variant so it's accessible the dashboard editor
         * MuiButton -> the component we are styling with a new variant
         */
        FilterButtons: {
            variants: [
                {
                    props: {variant: 'Fancy'},
                }
            ],
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'Fancy'},
                    style: {
                        borderRadius: 100,
                        minHeight: '2rem',
                        padding: '0 1em',
                        textTransform: 'none',
                        '&.MuiButton-sizeSmall': {
                            fontSize: '0.8rem',
                        },
                        '&.MuiButton-sizeLarge': {
                            fontSize: '0.9rem',
                        },
                        '&:hover': {
                            boxShadow: '0 0 0 0.2rem ' + theme.palette.secondary.light,
                        },
                    },
                }
            ],
        },

        /**
         * An example adding a variant to the Slider without adding it to the underlying Mui Component
         *
         * Pay attention how we add a version for the 'small' size
         */
        FilterSlider: {
            variants: [
                {
                    props: {variant: "Pretto.fr"},
                    style: {
                        '& .FilterSlider-slider': {
                            color: '#52af77',
                        },
                        '& .MuiSlider-track': {
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            height: 24,
                            width: 24,
                            backgroundColor: '#fff',
                            border: '2px solid currentColor',
                            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                                boxShadow: 'inherit',
                            },
                            '&:before': {
                                display: 'none',
                            },
                        },
                        '& .MuiSlider-valueLabel': {
                            lineHeight: 1.2,
                            fontSize: 12,
                            background: 'unset',
                            padding: 0,
                            width: 32,
                            height: 32,
                            borderRadius: '50% 50% 50% 0',
                            backgroundColor: '#52af77',
                            transformOrigin: 'bottom left',
                            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                            '&:before': {display: 'none'},
                            '&.MuiSlider-valueLabelOpen': {
                                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                            },
                            '& > *': {
                                transform: 'rotate(45deg)',
                            },
                        },

                    },
                },
                {
                    props: {variant: "Pretto.fr", size: "small"},
                    style: {
                        // do not use the same keys (i.e., &. MuiSlider-track)
                        // unless you want to overwrite the whole css settings

                        // using a different key (higher css prio) we can overwrite just sizing
                        '& .FilterSlider-slider .MuiSlider-thumb': {
                            height: 18,
                            width: 18,
                        },
                        '& .FilterSlider-slider .MuiSlider-valueLabel': {
                            width: 24,
                            height: 24,
                        }
                    },
                }

            ]
        },

    });

}

/**
 * The theme decorator allows to setup the Theme.components and Theme.ic3 using the theme
 * created from its partial options (e.g., using palette, typography, spacing, etc...)
 *
 * @param theme created from themeOptions
 */
export function themeDecorator(theme: Theme): void {

    themeComponents(theme);

}