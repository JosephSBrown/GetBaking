import { useState, useEffect } from 'react';
import recipes from '../recipes.json';
import Button from './button';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

const RecipeContainer = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const recipe = recipes;
        setRecipe(recipe);
    })

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    var int = 0;

    if (windowSize.innerWidth <= 640){
        int = 1;
    }
    else if (windowSize.innerWidth <= 1100){
        int = 2;
    }
    else if (windowSize.innerWidth <= 1400){
        int = 3;
    }
    else if (windowSize.innerWidth > 1400){
        int = 4;
    }

    return(
        <div class="flex-wrap">
            <div class="flex">
                {recipe.slice(0, int).map(recipe => (
                    <Link to={`/GetBaking/recipes/${recipe.uuid}`}>
                        <Animated animationIn='fadeIn' animationInDelay={500}>
                            <div key={recipe.uuid} class="drop-shadow-2xl inline-block rounded-md bg-pink-400 px-16 text-white mx-auto md:mx-4 hover:cursor-pointer hover:bg-pink-300">
                            <div class="bg-white h-40 w-40 mx-auto rounded-md">
                                <img src={recipe.images} alt={recipe.name} class="h-36 w-36 mx-auto mt-8 pt-4 text-black"/>
                            </div>      
                            <div class="my-12 block">
                                <h1 class="block text-md mx-auto">{recipe.name}</h1>
                                <p class="block text-sm mx-auto">by {recipe.author}</p>
                                <p class="block text-sm mx-auto">Difficulty <a class="underline text-lg">{recipe.difficulty}</a></p>
                            </div>
                        </div>
                        </Animated>
                        
                    </Link>               
                ))} 
                
            </div>
            <Link className="flex items-center justify-center ml-6 lg:ml-20 mt-6" to="/GetBaking/recipes">
                <Button title="View More Recipes..."/>
            </Link>
        </div>   
    );

}

export default RecipeContainer;