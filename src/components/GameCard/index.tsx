import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './style';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {Ads: number};
  bannerUrl: string
}

interface Props extends TouchableOpacityProps, GameCardProps{}

export const GameCard = ({id, title, _count, bannerUrl, ...rest}: Props ) => {

  return (
    <TouchableOpacity style={styles.container} {...rest}>
    <ImageBackground
      style={styles.cover}
      source={{ uri: bannerUrl }}
    >
      <LinearGradient
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
      >
        <Text style={styles.name}>
        {title}
        </Text>

        <Text style={styles.ads}>
        {_count.Ads} anúncios
        </Text>
      </LinearGradient>
    </ImageBackground>

    </TouchableOpacity>
  );
}