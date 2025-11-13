import { styles } from "@/styles/mainViewStyle";
import { Text, TouchableOpacity } from "react-native";



type ButtonProps  = {
    text : string,
    color ? : string,
    onPress : () => void;
}

interface ButtonProps1  {
    text : string,
    color ? : string
}

function Button( { text, onPress} : ButtonProps){

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
     <Text style={styles.textButton}>  {text}   </Text>
  </TouchableOpacity>
    )
}

export {
    Button
};

