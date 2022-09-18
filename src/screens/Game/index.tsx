import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons"

import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { Headline } from '../../components/Headline';

import LogoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme';
import { styles } from './style';
import { DuoAdCard } from '../../components/DuoAdCard';
import { DuoMatch } from '../../components/DuoMatch';

export interface DuoAds {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  useVoiceChannel: boolean,
  weekDays: string[],
  yearsPlaying: number
}

export const Game = () => {
  const [gamesAds, setGamesAds] = useState<DuoAds[]>([])
  const [duoDiscord, setDuoDiscord] = useState<string>('')

  const route = useRoute()
  
  const navigation = useNavigation()
  
  const game = route.params as GameParams

  const getDiscordUser = async (adsId: string) =>{
    fetch(`http://192.168.0.182:3333/ads/${adsId}/discord`)
        .then(response => response.json())
        .then(data => setDuoDiscord(data.discord))
  }
  
    useEffect(() => {
      fetch(`http://192.168.0.182:3333/games/${game.id}/ads`)
        .then(response => response.json())
        .then(data => setGamesAds(data))
    }, [])

  const handleGoBack = () =>{
    navigation.goBack()
  }




  return (
    <Background>
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />

          </TouchableOpacity>
            <Image
              source={LogoImg}
              style={styles.logo}
            />

            {/* This helps to center the logo */}
            <View style={styles.logoHelper}/> 
        </View>

        <Image
          source={{uri: game.bannerUrl}}
          style={styles.banner}
          resizeMode="cover"
        />

        <Headline
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
        
        <FlatList
          data={gamesAds}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[gamesAds.length > 0 ? styles.duoAdsListContent: styles.emptyListAling]}
          style={styles.duoAdsList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoAdCard duoAd={item}
              onConnect={() => getDiscordUser(item.id)}
            />
            )}
          ListEmptyComponent={() =>(
            <Text style={styles.emptyList}>
              Não há anúncios aqui ainda.
            </Text>
          )}
        />
        
        <DuoMatch onClose={() => setDuoDiscord('')}
          visible={duoDiscord.length > 0}
          discord={duoDiscord}
        />
      </SafeAreaView>
    </Background>
  );
}
// Fazer mais componentizações nesses projetos todos