
interface IPlayer {
    id: number;
    name: string;
    firstName: string;
    lastName: string; 
    dateOfBirth: string;
    nationality: string;
    position: string;
    shirtNumber: number | null;
    lastUpdated: Date; 
}
interface ITeam {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: Date;
}

interface IScoreResponse {
    player: IPlayer;
    team: ITeam;
    goals: number;
    assists: number;
    penalties: number;
        
}


interface ICompetition {
    fetchAllCompetitions(): void;
    competitions: any[];
    fetchCompetitionByName(name: string): void;
    fetchScoreCompetitionById(id: number): void;
    fetchCompetitionById(id: number): void;
    isLoading: boolean;
    score: IScoreResponse[];
    standing: any;
}
export {
    ICompetition, IPlayer, IScoreResponse, ITeam
};

