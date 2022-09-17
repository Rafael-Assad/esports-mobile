import { ColorValue, Text, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './style';

interface Props {
  label: string
  value: string
  color?: ColorValue
}

export const DuoAdInfo = ({label, value, color = THEME.COLORS.TEXT}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={[styles.value, {color: color}]}>
        {value}
      </Text>
    </View>
  );
}