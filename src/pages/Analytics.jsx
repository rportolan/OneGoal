import BarChart from "../organismes/BarChart";
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
            <h2 className='ml-4 py-9 font-bold'>Statistiques</h2>
            <div className="ml-4 flex">
                <div className="border border-secondary rounded-lg h-56 w-56 flex flex-col justify-between items-center">
                    <h3 className="text-sm m-4">Nombre total d'objectifs réalisé</h3>
                    <span className="text-7xl font-extrabold flex-1 mb-10 flex items-center justify-center">30</span>
                </div>
                <div className="border ml-10 mr-10 border-secondary rounded-lg h-56 w-56 flex flex-col justify-between items-center">
                    <h3 className="text-sm m-4">Nombre total de sous-objectifs réalisé</h3>
                    <span className="text-7xl font-extrabold flex-1 mb-10 flex items-center justify-center">90</span>
                </div>
                <div className="border border-secondary rounded-lg h-56 w-56 flex flex-col justify-between items-center">
                    <h3 className="text-sm m-4">Nombre total de tâches réalisé</h3>
                    <span className="text-7xl font-extrabold flex-1 mb-10 flex items-center justify-center">203</span>
                </div>
                <div className="border border-secondary rounded-lg h-56 ml-10 w-96 flex flex-col justify-between items-center">
                    <h3 className="text-sm m-4">Temps de travail</h3>
                    <span className="text-7xl font-extrabold flex-1 mb-10 flex items-center justify-center">47:24:23</span>
                </div>

            </div>
            <div className="container mx-auto mt-10">
            <BarChart data={sampleData} maxHeight={100} />
            </div>
        </>
        
      );
}
    

  
  export default Analytics;