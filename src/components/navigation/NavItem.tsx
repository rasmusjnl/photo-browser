import { MenuItem, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

interface Props {
  to: string;
  title: string;
}

const NavItem: React.FC<Props> = ({ to, title }: Props) => {
  const activeBg = useColorModeValue("baseLight.100", "baseDark.200");
  return (
    <MenuItem as={RouterLink} to={to} _activeLink={{ bgColor: activeBg }}>
      <Text>{title}</Text>
    </MenuItem>
  );
};

export default NavItem;
