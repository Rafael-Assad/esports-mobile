import { useState } from 'react';
import { ActivityIndicator, Alert, Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle} from "phosphor-react-native"
import * as Clipboard from 'expo-clipboard';

import { styles } from './style';
import { THEME } from '../../theme';
import { Headline } from '../Headline';

interface Props extends ModalProps{
  discord: string
  onClose: () => void
}

export const DuoMatch = ({discord, onClose,...rest}: Props) => {
  const [isCoping, setIsCoping] = useState<boolean>(false)
  const handleCopyDiscord = async () => {
    setIsCoping(true)

    await Clipboard.setStringAsync(discord)

    Alert.alert("Discord copiado", "Agora é só encontrar no app e chamar pro jogo")

    setIsCoping(false)
  }


  return (
    <Modal {...rest}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.closeIcon}
          onPress={onClose}
          >
            <MaterialIcons 
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64}
            weight='bold'
            color={THEME.COLORS.SUCCESS}
          />

          <Headline title="Let's Play"
            subtitle='Agora é só começar a jogar!'
            style={styles.headLine}
          />

          <Text style={styles.label}>
            Adicione no Seu Disrcord
          </Text>

        <TouchableOpacity style={styles.discordButton}
          onPress={handleCopyDiscord}
          disabled={isCoping}
        >
          <Text style={styles.discord}>
            {isCoping ? 
              <ActivityIndicator color={THEME.COLORS.PRIMARY}/> 
              :discord}
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}