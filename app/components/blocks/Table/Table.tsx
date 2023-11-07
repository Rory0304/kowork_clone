import React from "react";
import PropTypes from "prop-types";

import { View, Text } from "react-native";

interface TableProps {
  data: PropTypes.ReactNodeArray;
  columns: PropTypes.ReactNodeArray;
  variant: "horizontal" | "vertical";
}

// const TableContainer:

// const TableHeader:

// const Table: React.FC<TableProps> = ({ data, columns, variant }) => {
//   if (variant === "horizontal") {
//     <View>

//     </View>
//   }

//   return <View></View>;
// };
