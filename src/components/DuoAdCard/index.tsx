import { Text, TouchableOpacity, View } from 'react-native';
import { GameController } from "phosphor-react-native"

import { DuoAds } from '../../screens/Game';
import { THEME } from '../../theme';
import { DuoAdInfo } from '../DuoAdInfo';

import { styles } from './style';

interface Props{
  duoAd: DuoAds,
  onConnect: () => void
}

export const DuoAdCard = ({ duoAd, onConnect }: Props) => {
  return (
    <View style={styles.container}>
      <DuoAdInfo label='Nome'
        value={duoAd.name}
      />

      <DuoAdInfo label='Tempo de Jogo'
        value={`${duoAd.yearsPlaying} Anos`}
      />

      <DuoAdInfo label='Disponibilidade'
        value={`${duoAd.weekDays.length} dias \u2022 ${duoAd.hourStart} - ${duoAd.hourEnd}`}
        />

      <DuoAdInfo label='Chamada de Áudio'
        value={duoAd.useVoiceChannel ? "Sim" : "Não"}
        color={duoAd.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button}
        onPress={onConnect}
      >
        <GameController 
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.buttonText} >
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}