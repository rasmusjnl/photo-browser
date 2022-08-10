import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
} from "@chakra-ui/react";

/** TODO: customize theme if necessary */
const customTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: "red" }),
  withDefaultSize({ size: "md" }),
  withDefaultVariant({ variant: "outline" }),
  withDefaultProps({ defaultProps: { variant: "outline" }, components: ["Button"] }),
);

export default customTheme;
