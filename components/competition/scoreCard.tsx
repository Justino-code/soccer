import { IScoreResponse } from "@/hooks/competition/ICompetition";
import React from "react";
import { Image, Text, View } from "react-native";



interface props {
    score: IScoreResponse;
    id : number;
}
export const ScoreCard = ({ id,score} : props) => {
 
 
 
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#111",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:"center",
        borderRadius: 16,
        marginBottom: 8,
        padding: 14,
      }}
    >

{/* Date Time */}
<View style={{ flexDirection:"column", justifyContent:"center", alignItems:"center", paddingHorizontal: 12}}>
<Text style={{color:"#fff"}}>{id}</Text>
</View>

{/* Matche Info */}
<View
        style={{
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "flex-start",
          gap: 10,
        }}
>
        {/* Away */}
        <View style={{ alignItems: "center",flexDirection:"row", gap: 10 }}>
          <Image
            source={{ uri: score.team.crest }}
            style={{ width: 30, height: 30 }}
          />
         <View>
             <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 14, textAlign: "left" }}>
            {score.player.name}
          </Text>
           <Text style={{  fontFamily:"Irish-Grover", color: "#5D5C64", fontSize: 12, textAlign: "left" }}>
            {score.team.name}
          </Text>
         </View>
        </View>
</View>


{/* Scores */}
<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
  {/* Score */}
        <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 20 }}>
          {score.goals} 
        </Text>
</View>


    </View>
  );
};
