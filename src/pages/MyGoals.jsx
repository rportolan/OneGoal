import SearchBar from '../atomes/SearchBar';
import Select from '../atomes/Select';

import CardGoal from '../organismes/CardGoal';

function MyGoals() {
  return (
        <div>
            <div className='flex items-center justify-between'>
              <h2 className='py-9 font-bold ml-6'>Mes objectifs</h2>
              <SearchBar />
              <div className='mr-6'>
                <Select />
              </div>  
            </div>
            
            <ul className='grid grid-cols-4 ml-4 mr-4'>
                <CardGoal titleGoal="Apprendre React" status="en cours" progress={75} />
                <CardGoal titleGoal="Apprendre L'anglais" status="en cours" progress={40} />
                <CardGoal titleGoal="Coder le site du zéro" status="terminé" progress={100} />
                <CardGoal titleGoal="Développer mes compétences" status="terminé" progress={100} />
                <CardGoal titleGoal="Revoir la grammaraire" status="en attente" progress={0} />
                <CardGoal titleGoal="Lire le livre" status="en attente" progress={0} />
            </ul>    
        </div>
  );
}

export default MyGoals;