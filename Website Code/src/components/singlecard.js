import { useState, useEffect } from 'react';
import recipes from '../recipes.json';
import Button from './button';
import { Link } from 'react-router-dom';

const SingleCard = (props) => {

    function refreshPage() {
        window.location.reload(false);
      }

    return(
        <div class="flex-wrap">
            <div class="flex items-center justify-center">
                <div class="flow-root drop-shadow-2xl inline-block rounded-md bg-pink-400 text-white mx-auto hover:cursor-pointer hover:bg-pink-300">
                    <div class="md:float-left bg-white h-40 w-40 mx-12 my-6 rounded-md">
                        <img src={props.image} alt={props.name} class="h-36 w-36 mx-auto my-2 text-black"/>
                    </div>      
                    <div class="md:float-right my-12 mx-12 block">
                        <h1 class="block text-md mx-auto">{props.name}</h1>
                        <p class="block text-sm mx-auto">by {props.author}</p>
                        <p class="block text-sm mx-auto">Difficulty <a class="underline text-lg">{props.difficulty}</a></p>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center ml-6 lg:ml-20 mt-6">
                <Button title="Generate New Recipe" click={refreshPage}/>
            </div>
        </div>   
    );

}

export default SingleCard;