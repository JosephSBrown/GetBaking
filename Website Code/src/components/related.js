import { useState, useEffect } from 'react';
import recipes from '../recipes.json';
import { Link } from 'react-router-dom';

const RelatedContainer = (props) => {

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

    for (var i = 0; i < recipe.length; i++) {
        var obj = recipe[i];
        if (obj.uuid === props.slug) {
            var current = obj;
        }
    }

    const related = []

    for (var i = 0; i < recipe.length; i++) {
        var check = recipe[i];
        if (check.uuid != current.uuid) {
            const found = check.categories.some(r=> current.categories.includes(r));
            if (found === true)
            {
                related.push(check)
            }
        }
    }

    return(
        <div class="flex-wrap">
            <div class="flex items-center justify-center md:block">
                {related.slice(0, int).map(r => (
                    <Link to={`/GetBaking/recipes/${r.uuid}`} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                        <div key={r.uuid} class="drop-shadow-2xl inline-block rounded-md bg-pink-400 px-16 text-white mx-8 hover:cursor-pointer hover:bg-pink-300">
                            <div class="bg-white h-40 w-40 mx-auto rounded-md">
                                <img src={r.images} alt={r.name} class="h-36 w-36 mx-auto mt-8 pt-8 text-black"/>
                            </div>      
                            <div class="my-12 block">
                                <h1 class="block text-md mx-auto">{r.name}</h1>
                                <p class="block text-sm mx-auto">by {r.author}</p>
                                <p class="block text-sm mx-auto">Difficulty <a class="underline text-lg">{r.difficulty}</a></p>
                            </div>
                        </div>
                    </Link>
                    
                                
                ))} 
                
            </div>
        </div>   
    );

}

export default RelatedContainer;