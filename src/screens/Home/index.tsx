import { FlatList, Image, View } from 'react-native';

import { styles } from './style';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { Headline } from '../../components/Headline';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { GAMES } from '../../utils/games';



export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />

      <Headline 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contenList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GameCard
            id={item.id}
            name={item.name}
            cover={item.cover}
            ads={item.ads}
          />
        )}
      />

      
    </View>
  );
}