import React from "react";
import { Image, Text, View } from "react-native";
import { Match } from "./data/matches";


function formatTime(timeString: string): string {
  const date = new Date(timeString);
  return `${date.getDay()}/${date.getMonth()}`;
}
export const UpcomingCard = ({ awayLogo,awayTeam,homeLogo,homeTeam,scoreAway,scoreHome,time} : Match) => {
 
 
 
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
<Text style={{color:"#5D5C64"}}>FT</Text>
<Text style={{color:"#5D5C64"}}>{formatTime(time as any)}</Text>
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
        {/* Home */}
        <View style={{ alignItems: "center", flexDirection:"row", gap: 6 }}>
          <Image
            source={{ uri: homeLogo }}
            style={{ width: 20, height: 20, marginBottom: 6 }}
          />
          <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 12, textAlign: "center" }}>
            {homeTeam}
          </Text>
        </View>

      

        {/* Away */}
        <View style={{ alignItems: "center",flexDirection:"row",gap: 6 }}>
          <Image
            source={{ uri: awayLogo }}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 12, textAlign: "center" }}>
            {awayTeam}
          </Text>
        </View>
</View>


{/* Scores */}
<View style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
  {/* Score */}
        <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 20 }}>
          {scoreHome} 
        </Text>
        <Text style={{  fontFamily:"Irish-Grover", color: "#fff", fontSize: 20 }}>
         {scoreAway}
        </Text>
        
</View>


    </View>
  );
};
