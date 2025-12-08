import logo from "@/assets/images/logo.png";
import CalenderCarousel from "@/components/calender/calenderCarousel";
import ScoreCarousel from "@/components/competition/ScoreCarousel";
import MatchesCarousel from "@/components/matches/MatchesCarousel";
import UpcomingCarousel from "@/components/matches/upcomingCarousel";
import useCompetition from "@/hooks/competition/useCompetition";
import useMatches from "@/hooks/matches/useMatches";
import IndexStyles from "@/styles/home-index/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

enum tabsEmun {
  upcoming = "upcoming",
  score = "score",
  favorites = "favorites",
}

export default function IndexPage(){
 const { fetchAllMatches,fetchMatchByDate,fetchMatchLive,isLoading,matches,upcomingMatches } = useMatches();
 const { competitions,fetchAllCompetitions,fetchCompetitionById,fetchCompetitionByName,fetchScoreCompetitionById,score,standing } = useCompetition();
 const [tab, setTabs] = useState<tabsEmun>(tabsEmun.upcoming);


  return (
   <View style={IndexStyles.container}>
   <View style={IndexStyles.header}>
    <Image source={logo} />
      <View style={IndexStyles.iconContent}>
     <Ionicons name="search-outline" size={24} color="#fff" />
     <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>
   </View>
   <CalenderCarousel setMatchDate={fetchMatchByDate} />
    <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingHorizontal: 14}}>
      <TouchableOpacity onPress={fetchMatchLive}>
      <Text style={{fontWeight: "700", fontSize: 18, fontFamily:"Irish-Grover", color:"#fff"}}>Live Now</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fetchAllMatches}>
      <Text style={{fontWeight: "700", fontSize: 14, fontFamily:"Irish-Grover", color:"#F63D68"}}>See More</Text>
      </TouchableOpacity>
      
    </View>
     <MatchesCarousel  isLoading={isLoading} matches={matches}/>
<ScrollView style={{width: "100%", flex:1, marginTop: 20}}>
  
     <View style={{width: "100%", flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 30, paddingHorizontal: 14}}>
      <TouchableOpacity onPress={()=>setTabs(tabsEmun.upcoming)} style={{alignItems: "center", borderBottomWidth: 2, flexGrow: 1, borderBottomColor: tab == tabsEmun.upcoming ? "#F63D68" : "transparent", paddingBottom: 6}}>
        <Text style={{color :  tabsEmun.upcoming == tab ? "#fff" : "#5D5C64",fontFamily:"Irish-Grover"}}>Upcoming</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>setTabs(tabsEmun.score)} style={{alignItems: "center",borderBottomWidth: 2,flexGrow: 1, borderBottomColor: tab == tabsEmun.score ? "#F63D68" : "transparent", paddingBottom: 6}}>
        <Text style={{color :  tabsEmun.score == tab ? "#fff" : "#5D5C64", fontFamily:"Irish-Grover"}}>Score</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={()=>setTabs(tabsEmun.favorites)} style={{alignItems: "center",borderBottomWidth: 2, flexGrow: 1,borderBottomColor: tab == tabsEmun.favorites ? "#F63D68" : "transparent", paddingBottom: 6}}>
        <Text style={{color :  tabsEmun.favorites == tab ? "#fff" : "#5D5C64",fontFamily:"Irish-Grover"}}>Favorites</Text>
      </TouchableOpacity>
     </View>

     {tab == tabsEmun.upcoming && <UpcomingCarousel matches={upcomingMatches} />}
      {tab == tabsEmun.score && <ScoreCarousel Scores={score} />}
</ScrollView>
  </View>
  );
}
