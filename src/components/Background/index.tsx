import { ImageBackground } from 'react-native'
import { styles } from './style'
import BackgrounImage from '../../assets/background-galaxy.png'

interface Props {
  children: React.ReactNode,
}

export const Background = ({ children }: Props) =>{
  return (
    <ImageBackground 
      source={BackgrounImage} 
      defaultSource={BackgrounImage} 
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}