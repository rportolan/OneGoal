import BarChart from "../organismes/BarChart";
import CardStat from "../organismes/CardStat";

const Analytics = () => {
  const options = [
    { id: 1, value: "2023" },
    { id: 2, value: "2024" },
    { id: 3, value: "2025" },
  ];

  const initialData = [
        { label: "Jan", value: 4 },
        { label: "Fév", value: 6 },
        { label: "Mar", value: 8 },
        { label: "Avr", value: 2 },
        { label: "Mai", value: 9 },
        { label: "Jui", value: 1 },
        { label: "Jui", value: 4 },
        { label: "Aoû", value: 12 },
        { label: "Sep", value: 1 },
        { label: "Oct", value: 3 },
        { label: "Nov", value: 13 },
        { label: "Déc", value: 11 },
  ];

  return (
    <>
        <h2 className='ml-4 py-9 font-bold'>Statistiques</h2>
            <div className="ml-4 flex">
                <div className="border border-secondary rounded-lg h-56 w-56 flex flex-col justify-between items-center">
                    <h3 className="text-sm m-4">Nombre total d'objectifs réalisé</h3>
                    <span className="text-7xl font-extrabold flex-1 mb-10 flex items-center justify-center">30</span>
                </div>
                <div className="flex flex-wrap w-full justify-between mb-8">
                    <CardStat titleCard="Temps total travaillé" value="94:48:12" isActive={false} progress="- 5" descStat="Temps total travaillé depuis la création de votre compte, il repose sur le temps que vous définis sur le chronomètre. La progression repose sur le mois dernier."/>
                    <CardStat titleCard="Moyenne de temps pour la réalisation d'un objectif" value="8:48:12" isActive={true} progress="- 20" descStat="Moyenne de temps pour réaliser un objectif, nous calculons le temps de la création de l'objectif, jusqu'a sa réalisation."/>
                    <CardStat titleCard="Temps total travaillé" value="94:48:12" isActive={false} progress="- 5" descStat="Nombre total d'objectif réalisés depuis la création de votre compte, la progression repose sur le mois dernier."/>
                </div>
            </div>
            <div className="container h-1/2 mt-10">
                <BarChart maxHeight={100} options={options} initialData={initialData} />
            </div>
    </>
  );
};

export default Analytics;
