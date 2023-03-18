import type {
  Tuple,
  DefaultMantineColor,
  MantineThemeOverride
} from "@mantine/core";

type ExtendedCustomColors = "primary" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export const mantineConfig: Partial<MantineThemeOverride> = {
  fontFamily: "Lato",
  headings: {
    fontFamily: "Lato"
  },
  colorScheme: "light",
  colors: {
    primary: [
      "#5F7689",
      "#516C82",
      "#45637B",
      "#385A76",
      "#2C5372",
      "#204C70",
      "#14466F",
      "#1A3E5C",
      "#1D374D",
      "#1F3141"
    ],
    secondary: [
      "#FBBB6A", //primary 1
      "#FDCB8C", //primary 2
      "#FCDAB0", //primary 3
      "#FBE9D2", //primary 4
      "#FCF7F1"
    ]
  },
  primaryColor: "primary"
};
export default mantineConfig;
