import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  card:{
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'

  },
  closeIcon:{
    alignSelf: 'flex-end',
    margin: 16
  },
  headLine:{
    alignItems: "center",
    marginTop: 24
  },
  label:{
    marginTop:24,
    marginBottom:8,
    color: THEME.COLORS.TEXT ,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD ,
    fontSize: THEME.FONT_SIZE.MD
  },
  discordButton:{
    width: 231, 
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 32 
  },
  discord:{
    color: THEME.COLORS.TEXT ,
    fontFamily: THEME.FONT_FAMILY.REGULAR ,
    fontSize: THEME.FONT_SIZE.MD
  }
});