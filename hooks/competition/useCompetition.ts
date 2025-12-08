import ApiRequest from "@/config/axiosConfig";
import { useEffect, useState } from "react";
import { ICompetition, IScoreResponse } from "./ICompetition";


function useCompetition() : ICompetition {
        const isLoading: boolean = false;
        const [ score, setScore ] = useState<IScoreResponse[]>([]);
        const standing: any = {};
        const competitions: any[] = [];

    const fetchAllCompetitions = async () => {
        try {
            const response = await ApiRequest.get('/competitions');
            await fetchScoreCompetitionById();
            console.log(JSON.stringify(response.data));
        } catch (error) {
        console.log("Error fetching competitions:", error);
        }
    }
    const fetchScoreCompetitionById = async (id = 2021) => {
        try {
            const response = await ApiRequest.get(`/competitions/${id}/scorers`);
            setScore(response.data.scorers);
        } catch (error) {
            console.log("Error fetching score competition by ID:", error);
        }
    }
    const fetchCompetitionByName = async (name: string) => {
        // Implementation here
    }
    const fetchCompetitionById = async (id: number) => {
        // Implementation here
    }

    useEffect(() => {
        fetchAllCompetitions();
    }, []);
    

    return {
        fetchAllCompetitions,
        competitions,
        fetchCompetitionByName, 
        fetchCompetitionById,
        isLoading,
        score,
        standing,
        fetchScoreCompetitionById
    };
}

export default useCompetition;