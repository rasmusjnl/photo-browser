import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  withDefaultProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("baseLight.800", "baseDark.800")(props),
    },
  }),
};

const colors = {
  baseLight: {
    50: "#e1e1e1",
    100: "#e4e4e4",
    200: "#e8e8e8",
    300: "#eaeaea",
    400: "#efefef",
    500: "#f1f1f1",
    600: "#f4f4f4",
    700: "#f8f8f8",
    800: "#fafafa",
    900: "#fefefe",
  },
  baseDark: {
    50: "#646464",
    100: "#595959",
    200: "#545454",
    300: "#494949",
    400: "#444444",
    500: "#393939",
    600: "#343434",
    700: "#292929",
    800: "#242424",
    900: "#141414",
  },
};

const customTheme = extendTheme(
  config,
  { colors, styles },
  withDefaultColorScheme({ colorScheme: "teal" }),
  withDefaultProps({ defaultProps: { variant: "outline" }, components: ["Button"] }),
);

export default customTheme;
