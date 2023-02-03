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

export interface ThemeState {
    themeType: ThemeType,
    themeValue: IThemeProps
}

export type ThemeType = "light" | "dark";

export const getTheme = (themeValue: ThemeType) => {
    switch(themeValue){
        case "dark": return Theme.dark;
        case "light": return Theme.light;

        default: return Theme.light;
    }
}

export const initialState: ThemeState = {
    themeValue: getTheme("light"),
    themeType: "light"
}