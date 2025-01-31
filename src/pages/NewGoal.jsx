import FlagIcon from '@mui/icons-material/Flag';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ButtonAddElement from '../atomes/ButtonAddElement';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import ButtonAddTask from '../atomes/ButtonAddTask';
import RoadMap from '../atomes/RoadMap';
import CardNewGoal from '../organismes/CardNewGoal';
import CreateIcon from '@mui/icons-material/Create';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SaveIcon from '@mui/icons-material/Save';
import Input from '../atomes/Input';

const NewGoal = () => {

  return (
    <div className='ml-4 mr-4'>
        <div className='flex items-center justify-between'>
                <h2 className="py-9 font-bold">Nouvelle objectif</h2>
        </div>
        <div className='flex gap-3'>
            <div className='border border-secondary rounded-lg w-1/2'>
                <form className='mx-auto w-full pl-8 pt-8 pb-8 pr-8'>
                    <div className='flex items-center mb-2'>
                        <CreateIcon sx={{ fontSize: 20 }}/>
                        <h3 className='text-lg ml-2'> Créer votre objectif</h3>
                    </div>
                    <p className='text-xs text-fively mb-4'>Le formulaire ci-dessous vous permettra de définir votre objectif et de le structurer en sous-objectifs et tâches.</p>
                    <div className='w-full border-t border-fively mb-12'></div>
                    <h4 className='mb-4 text-sm'>Étape 1 : Définissez votre objectif</h4>
                    <div> 
                        <label htmlFor='titleGoal' className='block text-xs'>Titre</label>
                        <input 
                        type="text"
                        id="titleGoal"
                        name="titleGoal"
                        className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                        placeholder="Exemple : Apprendre l'anglais..."
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='dateStartGoal' className='block text-xs'>Date de départ</label>
                        <input 
                        type="date"
                        id="dateStartGoal"
                        name="dateStartGoal"
                        className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='dateEndGoal' className='block text-xs'>Date de fin</label>
                        <input 
                        type="date"
                        id="dateEndGoal"
                        name="dateEndGoal"
                        className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                        />
                    </div>
    
                    <div className='w-full border-t border-fively mt-12 mb-12'></div>

                    <div className='flex mb-4 items-center justify-between'>
                        <div className='w-full'>
                            <h4 className='text-sm mb-2'>Étape 2 : Structurer votre objectif</h4>
                            <p className='text-xs text-fively'>Ajouter un ou plusieurs sous-objectifs, il est possible d'ajouter des tâches afin de décomposer au maximum vos sous-objectif</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button
                            className="flex items-center text-fourly hover:text-opacity-70 text-sm text-xs"
                            >
                            <AddCircleOutlineIcon className='mr-1.5' sx={{ fontSize: 16 }} />
                            Ajouter un sous-objectif
                        </button>
                    </div>
                    
                    <div className='mt-4 border p-4 rounded-lg border-tertiary'>
                    <div> 
                        <label htmlFor='titleGoal' className='block text-xs'>Titre</label>
                        <input 
                        type="text"
                        id="titleGoal"
                        name="titleGoal"
                        className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                        placeholder="Exemple : Apprendre l'anglais..."
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='dateStartGoal' className='block text-xs'>Date de départ</label>
                        <input 
                        type="date"
                        id="dateStartGoal"
                        name="dateStartGoal"
                        className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='dateEndGoal' className='block text-xs'>Date de fin</label>
                        <input 
                        type="date"
                        id="dateEndGoal"
                        name="dateEndGoal"
                        className='py-2 px-4 w-full text-fively border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                        />
                    </div>
                    <div className='mt-4'>
                        <button
                            className="flex items-center text-fourly hover:text-opacity-70 text-xs"
                            >
                            <AddCircleOutlineIcon className='mr-1.5' sx={{ fontSize: 16 }} />
                            Ajouter une tâche
                        </button>
                    </div>
                    {/* <div className='mt-4 border p-4 rounded-lg border-tertiary'>
                        <label htmlFor='taskSubGoal' className='block text-xs'>Titre</label>
                        <input 
                        type="text"
                        id="taskSubGoal"
                        name="taskSubGoal"
                        className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                        placeholder="Exemple : Réviser la leçon..."
                        />
                        <div className='flex gap-1'>
                            <div className='mt-4 w-1/2'>
                                <label htmlFor='dateStartGoal' className='block text-xs'>Date de départ</label>
                                <input 
                                type="date"
                                id="dateStartGoal"
                                name="dateStartGoal"
                                className='py-2 w-full px-4 border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                                />
                            </div>
                            <div className='mt-4 w-1/2'>
                                <label htmlFor='dateEndGoal' className='block text-xs'>Date de fin</label>
                                <input 
                                type="date"
                                id="dateEndGoal"
                                name="dateEndGoal"
                                className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                                />
                            </div>
                        </div>
                        
                        
                    </div> */}
                    </div>
                    
                    <button
                    type="submit"
                    className="w-1/2 flex items-center block mx-auto mt-12 bg-fourly text-sm py-2 px-4 rounded-md hover:bg-indigo-700"
                    >
                    <SaveIcon className='mr-4' />
                    Enregistrez votre objectif
                    </button>

                    <Input placeholder="Apprendre l'espagnol" type="string" id="titleSubGoal" label="Titre" />
                    <ButtonAddElement text='Ajouter un sous-objectif' />
                    <ButtonAddElement text='Ajouter une tâche' />
                    
                </form>
            </div>
            
            <div className='w-1/2 py-8 border border-secondary rounded-lg'>
            <CardNewGoal iconCard={<FlagIcon />} textCard="Démarrage de l'objectif" dateCard='01/01/2025' />
            <RoadMap />
            <CardNewGoal iconCard={<CheckCircleOutlineIcon />} textCard="Objectif atteint" dateCard='01/01/2026' />
            </div>
        </div>
        
      </div>
  );
}
export default NewGoal;
