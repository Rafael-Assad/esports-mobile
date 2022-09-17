import { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { Headline } from '../../components/Headline';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { GAMES } from '../../utils/games';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';



export const Home = () => {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  useEffect(() => {
    fetch("http://192.168.0.182:3333/games")
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  const handleNavigationtoGame = (id: string, title: string, bannerUrl: string) => {
    navigation.navigate('game', {id, title, bannerUrl})
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={LogoImg} style={styles.logo} />

        <Headline 
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contenList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard
              id={item.id}
              title={item.title}
              bannerUrl={item.bannerUrl}
              _count={item._count}
              onPress={() => handleNavigationtoGame(item.id, item.title, item.bannerUrl)}
            />
          )}
        />

        
      </SafeAreaView>
    </Background>
  );
}