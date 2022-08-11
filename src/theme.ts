import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

/** TODO: customize theme if necessary */
const customTheme = extendTheme(
  config,
  withDefaultColorScheme({ colorScheme: "gray" }),
  withDefaultSize({ size: "md" }),
  withDefaultVariant({ variant: "outline" }),
  withDefaultProps({ defaultProps: { variant: "outline" }, components: ["Button"] }),
);

export default customTheme;
