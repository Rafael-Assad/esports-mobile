import { ActivityIndicator, View } from 'react-native'
import { styles } from './style'
import { THEME } from '../../theme'

interface Props {
  children: React.ReactNode,
}

export const Loading = () =>{
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  )
}