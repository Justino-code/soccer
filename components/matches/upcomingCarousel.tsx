import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { ApiResponse } from "./data/matches";
import { UpcomingCard } from "./upcomingCard";

interface Props {
  matches?: ApiResponse[];
}

export default function UpcomingCarousel({matches }:Props) {



  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 , width: "100%", paddingHorizontal: 14, flex:1}}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
         <Image
           source={{ uri: matches && matches[0]?.competition.emblem }} 
           style={{ width: 20, height: 20, marginRight: 8 }}
         />
         <Text style={{  fontFamily:"Irish-Grover", color: "#ccc", fontSize: 12 }}>{matches && matches[0]?.competition.name}</Text>
 
         <View
           style={{
             marginLeft: "auto",
             backgroundColor: "#E8FFE8",
             paddingHorizontal: 8,
             paddingVertical: 2,
             borderRadius: 12,
           }}
         >
              </View>
       </View>
      {
        matches && matches.length === 0 ? (
          <View style={{flex:1, justifyContent:"center", alignItems:"center", height:100, width:400}}> 
           <Text style={{color : "#fff", fontSize: 25, fontWeight: "700", fontFamily:"Irish-Grover"}}>Sem Resultados !!</Text>
        </View>
        ) :
        (
          matches?.map((item,index) => (
             <UpcomingCard 
             key={index}
          awayTeam={item.awayTeam.name}
           homeTeam={item.homeTeam.name}
           id={item.id}
           awayLogo={item.awayTeam.crest}
           homeLogo={item.homeTeam.crest}
           league={item.competition.name}
           leagueFlag={item.competition.emblem}
           scoreAway={item.score.fullTime.away}
          scoreHome={item.score.fullTime.home}
          time={item.utcDate}
        />
          ))
        )
      }

      
   


    </ScrollView>
  );
}
