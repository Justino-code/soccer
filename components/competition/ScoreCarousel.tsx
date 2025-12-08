import { IScoreResponse } from "@/hooks/competition/ICompetition";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ScoreCard } from "./scoreCard";

interface Props {
  Scores?: IScoreResponse[];
}

export default function ScoreCarousel({Scores }:Props) {



  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 , width: "100%", paddingHorizontal: 14, flex:1}}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
<Text>#</Text>
         <Text style={{  fontFamily:"Irish-Grover", color: "#ccc", fontSize: 12 }}>Player</Text>
 
         <View
           style={{
             marginLeft: "auto",
             backgroundColor: "#E8FFE8",
             paddingHorizontal: 8,
             paddingVertical: 2,
             borderRadius: 12,
           }}
         >
            <Text>Goals</Text>
              </View>
       </View>
      {
        Scores && Scores.length === 0 ? (
          <View style={{flex:1, justifyContent:"center", alignItems:"center", height:100, width:400}}> 
           <Text style={{color : "#fff", fontSize: 14, fontWeight: "400", fontFamily:"Irish-Grover"}}>Sem Resultados !!</Text>
        </View>
        ) :
        (
          Scores?.map((item,index) => (
             <ScoreCard 
             key={index}
             score={item}
             id={index+1}
        />
          ))
        )
      }

      
   


    </ScrollView>
  );
}
