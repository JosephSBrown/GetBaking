import React from 'react'
import Button from './button'
import { NavLink, Link } from 'react-router-dom'

function AuthorCard(props) {

    return (
        <div class="flow-root px-1 md:p-5 md:px-20">
                <img src={props.image} class="rounded-full my-5 h-32 w-32 md:w-44 md:h-44 float-left" />
                <h1 class="float-right py-16">Recipe By<br/><a class="text-xl">{props.author}</a></h1>
        </div>
    );
  }

  export default AuthorCard;