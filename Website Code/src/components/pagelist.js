import { useState, useEffect } from 'react';
import recipes from '../recipes.json';
import { Link } from 'react-router-dom';
import PageHead from './pagehead';
import { Animated } from 'react-animated-css';

const PageList = () => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const recipe = recipes;
        setRecipe(recipe);
    })

    return(
        <div class="w-full">
            <Animated animationIn='fadeInRight'>
                <PageHead contit="Recipes" />
            </Animated>
            <Animated animationIn='fadeInRight' animationInDelay={150}>
                <div>
                    {recipe.map(recipe => (
                        <Link to={`/GetBaking/recipes/${recipe.uuid}`}>
                            <div key={recipe.uuid} class="flow-root drop-shadow-2xl block rounded-lg bg-white px-8 lg:px-16 py-8 my-3 text-black w-11/12 mx-auto hover:cursor-pointer hover:bg-gray-200">
                                <img src={recipe.images} alt={recipe.name} class="aspect-square h-22 w-22 md:h-44 md:w-44 mx-auto text-black rounded-md md:float-left"/>     
                                <div class="my-4 md:my-auto block lg:mx-64">
                                    <h1 class="block text-md md:text-lg mx-auto">{recipe.name}</h1>
                                    <h2 class="block text-sm md:text-md mx-auto">by {recipe.author}</h2>
                                    <h3 class="block txt-sm md:text-md mx-auto">Difficulty <a class="underline text-lg">{recipe.difficulty}</a></h3>
                                    <h3 class="block text-sm md:text-md mx-auto"><a class="underline text-md">Makes/Serves: {recipe.yield}</a></h3>
                                    <p class="block text-sm my-2">{recipe.description}</p>
                                </div>
                            </div>
                        </Link>           
                    ))}
                        
                        
                    <div class="mb-10"></div>
                </div>
            </Animated>    
                
        </div> 
          
    );

}

export default PageList;