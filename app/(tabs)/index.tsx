import { styles } from "@/styles/mainViewStyle";
import { Image, Text, TextInput, View } from "react-native";

const loginIcon = require('../../assets/images/loginIcon.png')

export default function IndexPage(){

  return (
   <View style={styles.main} >
    <View style={styles.containerImage}>
      <Image  source={loginIcon} style={styles.image}/>
    </View>

    <Text>SEJA BEM VINDO</Text>

   <View style={styles.form}>
    <View style={[styles.form, { gap : 8}]}>
      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Digite o seu Email" />
    </View>

     <View style={[styles.form, { gap : 8, marginTop : 8}]}>
      <Text>Senha</Text>
      <TextInput style={styles.input} placeholder="Digite a sua senha" />
    </View>
   </View>



  </View>
  );
}
