import { extendTheme } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
    interface BreakpointOverrides {
        xs: false;
        md: false;
        xl: false;
    }
}

export const theme = extendTheme({
    cssVarPrefix: 'bh',
    
    breakpoints: {
        values: {
            sm: 0,
            lg: 480,
        },
    }
});
