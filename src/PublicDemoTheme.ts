import {ThemeOptions} from "@mui/material";
import {Theme} from "@mui/material/styles";
import WebFont from "@iccube/webfontloader";
import {AppClasses, ic3Components, PivotTableClasses, TableClasses, TableRowHeightOptions, ReportAppLeftPanelClasses} from "@ic3/reporting-api";

export const themeId = "Demo";

const fontFamily = "'Rubik', sans-serif";

/**
 * To make life easier. We can use as many font families as we want in a theme.
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
        caption: "ic3 Demo Theme",

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

        /**
         * @see IThemeWidgetDefaults (IThemeManager.ts)
         */
        widgetDefaults: {

            /**
             * Setup widget box options for both ic3.Table & ic3.PivotTable widgets.
             *
             * @see WidgetBoxOptions (ThemeWidgetBox.ts)
             */
            box: {

                ic3: {

                    Table: {
                        withHeader: false,
                    },

                    PivotTable: {
                        withHeader: false,
                    }
                },
            },

            /**
             * Setup widget options for both ic3.Table & ic3.PivotTable widgets.
             */
            options: {

                ic3: {

                    /**
                     * @see TableChartOptions (ThemeTable.ts)
                     */
                    Table: {
                        tableSize: TableRowHeightOptions.compact,
                        footer: true,
                        footerPagination: true,
                    },

                    /**
                     * @see PivotTableChartOptions (ThemePivotTable.ts)
                     */
                    PivotTable: {
                        tableSize: TableRowHeightOptions.compact,
                    }

                }
            }
        },

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
             * Report application menu color
             */
            reportAppMenu: "#cddc39",

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

export const themeOptions2 = {

    ic3: {
        id: themeId + "_2",
        caption: "ic3 Demo Theme II",

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

/**
 * Add variant to MuiButtons for typescript (not working ?)
 */
// declare module '@mui/material/Button' {
//     interface ButtonPropsVariantOverrides {
//         Fancy: true;
//     }
// }

/**
 * Attach the Material-UI components to the theme.
 *
 * Typed version
 *
 * Hint: types might get tricky, you can change the return type to any
 */
export function themeComponents(theme: Theme): ic3Components {

    return {
        /**
         * Widget Box variants
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

        // https://mui.com/components/radio-buttons/#customization
        FilterCheckbox: {
            variants: [
                {
                    props: {variant: 'Fancy'},
                    style: {
                        "&": {
                            // change labels for both radios and checkboxes
                            '.MuiFormControlLabel-label': {
                                ...theme.typography.body2
                            },
                            // change look for  radios
                            ".MuiRadio-root": {
                                borderRadius: '50%',
                                width: 16,
                                height: 16,
                                margin: theme.spacing(0.5),
                                boxShadow:
                                    theme.palette.mode === 'dark'
                                        ? '0 0 0 1px rgb(16 22 26 / 40%)'
                                        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
                                backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
                                backgroundImage:
                                    theme.palette.mode === 'dark'
                                        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
                                        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
                                '.Mui-focusVisible &': {
                                    outline: '2px auto rgba(19,124,189,.6)',
                                    outlineOffset: 2,
                                },
                                'input:hover ~ &': {
                                    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
                                },
                                'input:disabled ~ &': {
                                    boxShadow: 'none',
                                    background:
                                        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
                                },
                            },
                            ".MuiRadio-root.Mui-checked": {
                                backgroundColor: '#137cbd',
                                backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
                                '&:before': {
                                    display: 'block',
                                    width: 16,
                                    height: 16,
                                    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
                                    content: '""',
                                },
                                'input:hover ~ &': {
                                    backgroundColor: '#106ba3',
                                },
                            },
                            // change look for  checkboxes
                            // add an ok icon as backgroundImage when checked
                            // empty when not check
                            ".MuiCheckbox-root": {
                                width: 16,
                                height: 16,
                                margin: theme.spacing(0.5),
                                display: 'block',
                                content: '""',
                                ".MuiSvgIcon-root": {
                                    display: 'none'
                                },
                                '.Mui-focusVisible &': {
                                    outline: '2px auto rgba(19,124,189,.6)',
                                    outlineOffset: 2,
                                },
                                'input:hover ~ &': {
                                    backgroundColor: '#106ba3',
                                },
                                'input:disabled ~ &': {
                                    boxShadow: 'none',
                                    background: 'rgba(57,75,89,.5)',
                                },
                            },
                            ".MuiCheckbox-root.Mui-checked": {
                                backgroundImage:
                                    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath" +
                                    " fill-rule='evenodd' clip-rule='evenodd' d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' " +
                                    " fill='" + theme.palette.ic3.selected.replace('#', '%23') + "'/%3E%3C/svg%3E\")",
                            }
                        },
                    }
                },
            ],
        },

        /**
         * Button Filter variants
         *
         * Buttons are rendered using MUI buttons. To add a variants you need two steps
         *
         * 1) Add to FilterButtons the name of the variants so it's available in the UI
         * 2) Create your variant styling a MUI button
         */
        FilterButtons: {
            variants: [
                {
                    props: {variant: 'Fancy'},
                    style: {}
                },
            ],
        },

        MuiButton: {
            variants: [
                {
                    props: {variant: 'Fancy'} as any,  /* ButtonPropsVariantOverrides augmentation is not working  */
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
         * Slider Filter variants
         *
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

        /**
         * Table variants
         *
         * The underlying component for the table is the MUI DataGrid Pro (it's complex component)
         *
         *  Demo : https://mui.com/components/data-grid/style/#custom-theme
         *  MUI CSS :  https://mui.com/api/data-grid/data-grid-pro/#css
         */
        Table: {
            variants: [
                {
                    props: {variant: "MicroSize"},
                    style: {
                        [`& .${TableClasses.main}`]: {
                            fontSize: '0.4rem'
                        },
                        [`& .${TableClasses.columnHeaderTitle}`]: {
                            overflow: 'visible',
                            lineHeight: '1rem',
                            whiteSpace: 'normal',
                        },
                        [`& .${TableClasses.columnSeparator}`]: {
                            display: 'none',
                        },
                        [`& .${TableClasses.cell}`]: {
                            borderBottom: 'none',
                        }
                    },
                }
            ],
        },

        /**
         * Pivot Table variants
         */
        PivotTable: {
            variants: [
                {
                    props: {variant: "MicroSize"},
                    style: {
                        [`& .${PivotTableClasses.main}`]: {
                            fontSize: '0.4rem'
                        },
                        [`& .${PivotTableClasses.topHeaderTitle}`]: {
                            overflow: 'visible',
                            lineHeight: '1rem',
                            whiteSpace: 'normal',
                        },
                        [`& .${PivotTableClasses.columnSeparator}`]: {
                            display: 'none',
                        },
                        [`& .${PivotTableClasses.cell}`]: {
                            borderBottom: 'none',
                        },
                        [`& .${PivotTableClasses.leftHeaderCell}`]: {
                            borderBottomWidth: 0,
                        }
                    },
                }
            ],
        },

        /**
         * Style overrides for the dashboard application
         */
        App: {
            styleOverrides: {
                root: {

                    gridTemplateColumns: "325px 1fr",

                    [`& .${AppClasses.appAppPayload}`]: {},

                    [`& .${AppClasses.appAppLeftFilter}`]: {
                        borderRight: '1px solid #eeeeee',
                        padding: theme.spacing(0.5),
                    }
                }
            }
        },

        /**
         * Style overrides for the application viewer with left-panel filter
         */
        ReportAppLeftPanel: {
            styleOverrides: {
                root: {
                    [`& .${ReportAppLeftPanelClasses.reportAppLeftPanelTitle}`]: {
                        paddingLeft: theme.spacing(2),
                        fontSize: '1.4em',
                        fontWeight: 400,
                        whiteSpace: "normal"
                    }
                }
            }
        }
    };

}

export function themeStatosDecorator(theme: Theme) {
    return themeComponents(theme)
}

/**
 * The theme decorator allows to setup the Theme.components and Theme.ic3 using the theme
 * created from its partial options (e.g., using palette, typography, spacing, etc...)
 *
 * @param theme created from themeOptions
 */
export function themeDecorator(theme: Theme) {

    // you might change theme here as well

    // Replace existing components.
    return themeComponents(theme)

}