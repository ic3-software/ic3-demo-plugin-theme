import {cyan} from "@mui/material/colors";
import {Components, Theme, ThemeOptions} from "@mui/material/styles";
import LogoIcon from "../images/demo_logo.svg";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";

const fontFamily = "'Raleway', sans-serif";

// Force loading the fonts
document.fonts.load("300 12px Raleway");
document.fonts.load("400 12px Raleway");

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

export const themeEditorLondon = (): ThemeOptions => {

    return {

        ic3: {
            /**
             * The id to use in your app-local/ic3report-config.js:
             *
             * <pre>
             *     options.defaultEditorThemeId = ...
             * </pre>
             */
            id: "ic3-demo-editor-london",

            caption: "ic3 Demo Editor Theme",

            editor: {
                logo: LogoIcon,
                logoAlt: "London"
            },

            waitForFonts: () => {
                return document.fonts.ready;
            },

        },

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

        },

        palette: {

            ic3: {
                pageBackgroundColor: "#ffffff",

                mdx: {
                    'annotation': '#808100',
                    'comment': "#a70",
                    'definitionKeyword': "#0000FF",
                    'keyword': "#0000FF",
                    'labelName': "#a41af3",
                    'number': "#008b8b",
                    'operator': "#0000FF",
                    'propertyName': "#F96C15",
                    'separator': "#666",
                    'string': "#008b8b",
                    'variableName': "#c4398d",
                    'dimension': "#951b81",
                    'hierarchy': "#951b81",
                    'level': "#e2b656",
                    'member': "#54aa7d",
                    'measureFolder': "#FB8A34",
                    'measureGroup': "#F96C15",
                    'measure': "#FDA853",
                    'calcMeasure': "#FDA853",
                    'event': "#4186a8",
                    'set': "#f6d362",
                }

            },

            primary: {
                "main": "#007FFF",
                "light": "#66B2FF",
                "dark": "#0059B2",
                "contrastText": "#fff"
            },

            secondary: {
                "main": "#9c27b0",
                "light": "#ba68c8",
                "dark": "#7b1fa2",
                "contrastText": "#fff"
            },

            text: {
                "primary": "#1A2027",
                "secondary": "#3E5060",
                "disabled": "rgba(0, 0, 0, 0.38)"
            },

            success: {
                "main": "#1AA251",
                "light": "#6AE79C",
                "dark": "#1AA251",
                "contrastText": "#fff"
            },
            warning: {
                "main": "#DEA500",
                "light": "#FFDC48",
                "dark": "#AB6800",
                "contrastText": "rgba(0, 0, 0, 0.87)"
            },
            error: {
                "main": "#EB0014",
                "light": "#FF99A2",
                "dark": "#C70011",
                "contrastText": "#fff"
            },
            info: {
                "main": "#0288d1",
                "light": "#03a9f4",
                "dark": "#01579b",
                "contrastText": "#fff"
            },

            action: {
                "active": "rgba(0, 0, 0, 0.54)",
                "hover": "rgba(0, 0, 0, 0.04)",
                "hoverOpacity": 0.04,
                "selected": "rgba(0, 0, 0, 0.08)",
                "selectedOpacity": 0.08,
                "disabled": "rgba(0, 0, 0, 0.26)",
                "disabledBackground": "rgba(0, 0, 0, 0.12)",
                "disabledOpacity": 0.38,
                "focus": "rgba(0, 0, 0, 0.12)",
                "focusOpacity": 0.12,
                "activatedOpacity": 0.12
            },

        },

    }
}

export function themeEditorLondonDecorator(theme: Theme): Components {
    return {

        /**
         * Example on how to style the editor bar and the top bar in the app.
         */
        // App: {
        //     styleOverrides: {
        //         root: (props: AppDivProps) => {
        //             return {
        //                 "@media screen": {
        //                     gridTemplateRows: props.topBarOptions === TopBarOptions.None ? "0px 1fr"
        //                         : "40px 1fr",
        //                 },
        //                 gridTemplateColumns: props.leftBarOptions === LeftBarOptions.None ? "0px 1fr"
        //                     : (
        //                         props.leftBarOptions === LeftBarOptions.EditorMode ? "40px 1fr"
        //                             : "250px 1fr"
        //                     ),
        //             };
        //         }
        //     }
        // },

        /**
         * Editor help.
         */
        HtmlBox: {

            variants: [
                {
                    props: {variant: "doc"},
                    style: {

                        ...theme.typography,
                        color: theme.palette.text.primary,

                        "& table": {
                            borderSpacing: 0,
                            borderCollapse: "collapse",
                        },

                        "& table td, & table th": {
                            padding: "6px 13px",
                            border: "1px solid " + theme.palette.divider,
                        },

                        "& code": {
                            margin: 0,
                            backgroundColor: "#f6f8fa",
                            borderRadius: "6px",
                        },

                        "& pre": {
                            padding: "16px",
                            overflow: "auto",
                            backgroundColor: "#f6f8fa",
                            borderRadius: "6px",
                        },

                        "& .image": {
                            display: "flex",
                            background: '#fff',
                        },

                        "& img": {
                            background: '#fff',
                            maxWidth: '700px',
                        },

                        "& a": {
                            color: cyan[500]
                        }
                    },
                },
            ],

        },

        /**
         * Example on how to style the tabs in the widget editor.
         */
        // MuiTab: {
        //     styleOverrides: {
        //         root: {
        //             textTransform: "none",
        //             fontWeight: 400
        //         }
        //     }
        // },

        /**
         * Example on how to style the query builder node.
         */
        // QueryBuilderNode: {
        //     styleOverrides: {
        //         root: {
        //             "& .QueryBuilderNode-expandButton": {
        //                 "& .MuiSvgIcon-root": {
        //                     fontSize: theme.typography.body2.fontSize,
        //                 }
        //             }
        //         }
        //     }
        // }

    };
}
