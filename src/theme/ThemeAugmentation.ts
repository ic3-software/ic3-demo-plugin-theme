import {
    ic3Palette,
    ic3PaletteOptions,
    ic3Theme,
    ic3ThemeOptions,
    ic3Typography,
    ic3TypographyOptions,
} from "@ic3/reporting-api";

declare module "@mui/material/styles/createPalette" {

    interface Palette {

        ic3: ic3Palette;

    }

    interface PaletteOptions {

        ic3?: ic3PaletteOptions;

    }
}

declare module "@mui/material/styles/createTypography" {

    interface Typography {

        ic3: ic3Typography;

    }

    interface TypographyOptions {

        ic3?: ic3TypographyOptions;

    }

}

declare module '@mui/material/styles/createTheme' {

    interface Theme {

        ic3: ic3Theme;

    }

    /**
     * Input of createMuiTheme( {...} )
     */
    interface ThemeOptions {

        ic3: ic3ThemeOptions;

    }

}

declare module '@mui/material/styles' {
    interface BreakpointOverrides {

        // Removing : icCube does not use them (and is removing them as well).

        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;

        // icCube's predefined breakpoints ( cannot be changed ).

        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;

    }
}

