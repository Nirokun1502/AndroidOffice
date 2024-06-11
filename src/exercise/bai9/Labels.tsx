import React from 'react';
import { Text } from 'react-native-svg';

interface Slice {
  pieCentroid: [number, number]; // Kiểu dữ liệu của pieCentroid là một mảng gồm hai số
  data: any; // Kiểu dữ liệu của data có thể là bất kỳ
}

interface Props {
  slices: Slice[]; // Kiểu dữ liệu của slices là một mảng các Slice
}

const Labels: React.FC<Props> = ({ slices }) => {
  return slices.map((slice, index) => {
    const { pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill="white"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize={14}>
        {data.title}
      </Text>
    );
  });
};

export default Labels;
