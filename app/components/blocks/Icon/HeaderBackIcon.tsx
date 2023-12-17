import { TouchableOpacity } from "react-native";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";
import { HeaderBackButtonProps } from "@react-navigation/elements";

interface HeaderBackIconProps extends HeaderBackButtonProps {}

const HeaderBackIcon: React.FC<HeaderBackIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="m-4">
      <XMarkIcon />
    </TouchableOpacity>
  );
};

export default HeaderBackIcon;
