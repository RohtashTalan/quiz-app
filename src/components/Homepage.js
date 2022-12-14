import react, { useState } from 'react';
import QuizApp from './QuizPage';
import homeimg from './image/homepage.png';



const Homepage = () => {

    const [isStarted, setIsStarted] = useState(false);

    const startClickHandle =() => {

        document.getElementById('start-section').remove();
        setIsStarted(true);
    }

    return(<>
   <main className='w-full' id='start-section'>
    <h1 className='text-center text-blue-500 font-bold text-3xl pt-16'>Quiz App</h1>
    
    <div className='flex justify-items-center w-full my-4'>
        
    <img className='w-1/2' src={homeimg}/>
        <div className='m-auto'>
        <h4 className='text-3xl text-green-500 font-semibold'> Guideline: </h4>
        <ul className='text-gray-500 list-disc ml-12 mt-4'>
            <li> Select one option for each question</li>
            <li> Click Next button to submit selected question and got to next question</li>
            <li> click on submit button to submit quiz</li>
        </ul>
        </div>
    </div>
    <a onClick={()=>startClickHandle()}>
    <button className='bg-blue-600 block mx-auto text-white font-bold text-3xl py-2 px-6 rounded-md w-56'> Start
    </button></a>
   </main>
{
    isStarted ? (<QuizApp />):('')
}
    </>)
}

export default Homepage;