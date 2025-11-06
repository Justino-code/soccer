import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  containerImage : {
    width : 100,
    height : 100,
  },
  image : {
   width : '100%',
   height : '100%',
   resizeMode : 'cover'
  },
  form : {
    width : '100%',
    height: 'auto',
    paddingHorizontal : 12
  },
  input : {
    borderRadius : 12,
    backgroundColor : '#D9D9D9',
    height : 40,
    width : '100%',
    paddingLeft : 30
  }
})


export { styles };

