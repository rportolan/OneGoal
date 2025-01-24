import BarChart from "../organismes/BarChart";
import CardStat from "../organismes/CardStat";

const Analytics = () => {
    const sampleData = [
        { label: "Janvier", value: 4 },
        { label: "Février", value: 6 },
        { label: "Mars", value: 8 },
        { label: "Avril", value: 2 },
        { label: "Mai", value: 0 },
        { label: "Juin", value: 1 },
        { label: "Juillet", value: 4 },
        { label: "Août", value: 0 },
        { label: "Septembre", value: 1 },
        { label: "Octobre", value: 0 },
        { label: "Novembre", value: 0 },
        { label: "Décembre", value: 0 },
      ];
    
      return (
        <>
            <h2 className='ml-6 py-9 font-bold'>Statistiques</h2>
            <div className="ml-6 mr-6 flex flex-wrap">
                <div className=" flex flex-wrap w-full justify-between mb-9">
                    <CardStat titleCard="Nombre total d'objectifs réalisés" value="14" isActive={true} progress="+ 4" descStat="Nombre total d'objectif réalisés depuis la création de votre compte, la progression repose sur le mois dernier."/>
                    <CardStat titleCard="Nombre total de sous-objectifs réalisés" value="79" isActive={true} progress="+ 30" descStat="Nombre total de sous-objectifs réalisés depuis la création de votre compte, la progression repose sur le mois dernier."/>
                    <CardStat titleCard="Nombre total de tâches réalisé" value="289" isActive={true} progress="+ 90" descStat="Nombre total de tâches réalisés depuis la création de votre compte, la progression repose sur le mois dernier."/>
                </div>
                <div className="flex flex-wrap w-full justify-between mb-8">
                    <CardStat titleCard="Temps total travaillé" value="94:48:12" isActive={false} progress="- 5" descStat="Temps total travaillé depuis la création de votre compte, il repose sur le temps que vous définis sur le chronomètre. La progression repose sur le mois dernier."/>
                    <CardStat titleCard="Moyenne de temps pour la réalisation d'un objectif" value="8:48:12" isActive={true} progress="- 20" descStat="Moyenne de temps pour réaliser un objectif, nous calculons le temps de la création de l'objectif, jusqu'a sa réalisation."/>
                    <CardStat titleCard="Temps total travaillé" value="94:48:12" isActive={false} progress="- 5" descStat="Nombre total d'objectif réalisés depuis la création de votre compte, la progression repose sur le mois dernier."/>
                </div>
            </div>
            <div className="container mx-auto mt-8">
            <BarChart data={sampleData} maxHeight={100} />
            </div>
        </>
        
      );
}
    

  
  export default Analytics;