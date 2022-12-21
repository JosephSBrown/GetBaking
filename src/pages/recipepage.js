import React, { useEffect } from 'react';
import '../index.css';
import PageHead from '../components/pagehead'
import { useParams } from 'react-router-dom';
import recipes from '../recipes.json'
import Thirds from '../components/thirds';
import AuthorCard from '../components/authorcard';
import Fullcontainer from '../components/fullcontainer';
import SocialMediaIntegration from '../components/socialmediasharing';
import { Preview, print } from "react-html2pdf";
import { useState } from 'react';
import RelatedContainer from '../components/related';
import { Animated } from 'react-animated-css';

function RecipePage() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    let { postSlug } = useParams();

    useEffect(() => {

    }, [postSlug]);

    var recipe = recipes;

    for (var i = 0; i < recipe.length; i++) {
        var obj = recipe[i];
        if (obj.uuid === postSlug) {
            var Name = obj.name;
            var Author = obj.author;
            var Description = obj.description;
            var Image = obj.images;
            var ingredients = obj.ingredients;
            var Nutrition = obj.nutrition;
            var Instructions = obj.instructions;
            var Secondary = obj['secondary-instructions'];
            var AP = obj.authorpicture;
        }
    }

    for (var i = 0; i < Instructions.length; i++) {
        var ins = Instructions[i];
        ins = ins.steps;
    }
    
    for (var i = 0; i < Secondary.length; i++) {
        if (obj.uuid == Secondary[0]) {
            var SecName = obj.name;
            var SecIns = obj.instructions[i];
            var SecIng = obj.ingredients;
            SecIns = SecIns.steps;
        }
    }
    
    const secondaryins = () => {
        if(Secondary.length > 0){
            return <Fullcontainer contit={`Optional Further Steps - ${SecName}`} 
            
            content={
                <ul>
                    {SecIng.map((item) => (
                <li key={item.id} class="list-none"><input type="checkbox" class="mx-4 rounded text-pink-400 h-4 w-4"/>{item['measurement-size']}{item['measurement-weight']}{item['measurement-type']} {item.ingredient} {item.note}</li>
                ))}
                </ul>}
                

            content2={SecIns.map((item) => (
                <li key={item.id} class="list-decimal py-4"><input type="checkbox" class="mx-4 rounded-md bg-pink-400 h-4 w-4"/>{item}</li>
                ))}/>
        }
    }        

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <div class="">
            <Animated animationIn='fadeInUp'>
                <PageHead contit={Name}>
                    <SocialMediaIntegration click={handleClick}/>
                </PageHead>
            </Animated>    
            <Animated animationIn='fadeInUp'>
                <Thirds contit1="Ingredients" content={ingredients.map((item) => (
                        <li key={item.id} class="list-none"><input type="checkbox" class="mx-4 rounded text-pink-400 h-4 w-4"/>{item['measurement-size']}{item['measurement-weight']}{item['measurement-type']} {item.ingredient} {item.note}</li>
                        ))}
                        contit3="Nutritional Information" content3={Nutrition.map((item) => (
                            <ul>
                                <li key={item.id}>Serving: {item.serving}</li>
                                <li key={item.id}>Kcal: {item.kcal}</li>
                                <li key={item.id}>Fat: {item.fat}</li>
                                <li key={item.id}>Saturates: {item.saturates}</li>
                                <li key={item.id}>Carbs: {item.carbs}</li>
                                <li key={item.id}>Sugar: {item.sugars}</li>
                                <li key={item.id}>Fibre: {item.fibre}</li>
                                <li key={item.id}>Protein: {item.protein}</li>
                                <li key={item.id}>Salt: {item.salt}</li>
                            </ul>
                        ))}>
                    <AuthorCard author={Author} image={AP} />
                </Thirds>

                <Fullcontainer contit="Directions" content={ins.map((item) => (
                        <li key={item.id} class="list-decimal py-4"><input type="checkbox" class="mx-4 rounded-md bg-pink-400 h-4 w-4"/>{item}</li>
                        ))}/>

                {
                    secondaryins()
                }

                <Fullcontainer contit='Related Recipes'>
                    <RelatedContainer slug={postSlug}/>
                </Fullcontainer>
            </Animated>    
        
        <div class={click ? 'flow-root items-center justify-center bg-white fixed top-5 md:top-10 w-2/5 md:w-3/5 h-11/12 rounded-lg mx-7 md:mx-36 lg:mx-44 xl:mx-96 outline' : 'hidden'}>
        <Animated animationIn='fadeIn'>
            <Preview id="pdfsave" class={click ? 'block' : 'hidden'}>
                <div class={click ? 'bg-white mx-3 md:mx-8 my-4 py-4 px-4 w-11/12 outline' : 'hidden'}>
                    <div class="text-xl">
                        {Name}
                    </div>
                    <div class="text-md">
                        by {Author}
                    </div>
                    <div class="text-sm">
                        Description: {Description}
                    </div>
                        <div class="text-sm my-2">
                            <h1 class="underline">Nutritional Information</h1>
                        {Nutrition.map((item) => (
                            <div>
                                <a key={item.id} class="mx-5">Serving: {item.serving}</a>
                                <a key={item.id} class="mx-5">Kcal: {item.kcal}</a>
                                <a key={item.id} class="mx-5">Fat: {item.fat}</a>
                                <a key={item.id} class="mx-5">Saturates: {item.saturates}</a>
                                <a key={item.id} class="mx-5">Carbs: {item.carbs}</a><br/>
                                <a key={item.id} class="mx-5">Sugar: {item.sugars}</a>
                                <a key={item.id} class="mx-5">Fibre: {item.fibre}</a>
                                <a key={item.id} class="mx-5">Protein: {item.protein}</a>
                                <a key={item.id} class="mx-5">Salt: {item.salt}</a>
                            </div>
                        ))}
                        </div>
                        <div class="text-sm my-2">
                            <h1 class="underline">Ingredients</h1>
                        {ingredients.map((item) => (
                        <li key={item.id} class="list-disc">{item['measurement-size']}{item['measurement-weight']}{item['measurement-type']} {item.ingredient} {item.note}</li>
                        ))}
                    <div class="text-sm my-2">
                        <h1 class="underline">Instructions</h1>
                        <ul>
                            {ins.map((item) => (
                                <li key={item.id} class="my-1 list-decimal">{item}</li>
                            ))}
                        </ul>
                    
                    </div>
                    </div>    
                        
               </div>
            </Preview>
            
            <div class="float-right mx-16 my-16">
                <button onClick={() => print(`${Name}`, "pdfsave")} class="bg-green-600 text-white rounded-md px-3 py-3 mx-2"><i class="fa-solid fa-file-pdf mx-2"></i>Download</button>
                <button class="bg-red-600 text-white rounded-md px-3 py-3 mx-2" onClick={handleClick}><i class="fa-solid fa-times mx-2"></i>Close</button>
            </div>
        </Animated>
        </div>
            

        </div>
    );
}

export default RecipePage;
