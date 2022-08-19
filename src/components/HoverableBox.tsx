import { ReactNode } from "react";
import { Box, SystemStyleObject, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  handleClick: () => void;
  bg?: string;
  bgHover?: string;
  sx?: SystemStyleObject;
}

const HoverableBox: React.FC<Props> = ({ children, handleClick, bg, bgHover, sx }: Props) => {
  const defaultBg = useColorModeValue("baseLight.100", "baseDark.300");
  const defaultBgHover = useColorModeValue("baseLight.300", "baseDark.200");
  const defaultBoxShadow = useColorModeValue(
    "0 0px 8px 1px #e9e9e9d1, 0px 1px 1px 0px #70767e78",
    "",
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 5,
        boxShadow: defaultBoxShadow,
        bg: bg ?? defaultBg,
        transition: "transform 0.3s, background 0.3s",
        "&:hover": {
          cursor: "pointer",
          bg: bgHover ?? defaultBgHover,
          transform: "scale(1.03)",
        },
        ...sx,
      }}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default HoverableBox;
