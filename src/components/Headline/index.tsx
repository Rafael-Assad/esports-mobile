import { Text, View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

interface Props extends ViewProps {
    title: string;
    subtitle: string;
}

export const Headline = ({ title, subtitle, ...rest}: Props) => {
  return (
    <SafeAreaView style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subTitle}>
        {subtitle}
      </Text>
    </SafeAreaView>
  );
}