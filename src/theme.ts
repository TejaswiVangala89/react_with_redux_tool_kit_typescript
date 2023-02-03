
export interface ITheme{
    light: IThemeProps;
    dark: IThemeProps;
}

export interface IThemeProps {
    bgColor: string;
    color: string;
}

export const Theme: ITheme = {
    light: {
        bgColor: "white",
        color: "black"
    },
    dark: {
        bgColor: "black",
        color: "white"
    }
}
