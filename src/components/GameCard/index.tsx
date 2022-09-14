import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './style';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps, GameCardProps{}

export const GameCard = ({id, name, ads, cover, ...rest}: Props ) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
    <ImageBackground
      style={styles.cover}
      source={cover}
    >
      <LinearGradient
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
      >
        <Text style={styles.name}>
        {name}
        </Text>

        <Text style={styles.ads}>
        {ads} anúncios
        </Text>
      </LinearGradient>
    </ImageBackground>

    </TouchableOpacity>
  );
}