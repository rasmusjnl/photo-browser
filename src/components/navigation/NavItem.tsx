import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

interface Props {
  to: string;
  title: string;
  onClose: () => void;
}

const NavItem: React.FC<Props> = ({ to, title, onClose }: Props) => {
  const activeBg = useColorModeValue("baseLight.100", "baseDark.200");
  return (
    <Box
      sx={{
        padding: "1rem",
      }}
      as={RouterLink}
      to={to}
      onClick={onClose}
      _activeLink={{ bgColor: activeBg }}
    >
      <Text>{title}</Text>
    </Box>
  );
};

export default NavItem;
