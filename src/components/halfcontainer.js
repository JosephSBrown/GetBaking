import React from 'react'
import Button from './button'
import { NavLink, Link } from 'react-router-dom'

function Halfcontainer(props) {

    return (
        <div class="w-screen lg:flex lg:items-center lg:justify-center">
                <div class="h-5/6 w-11/12 rounded-2xl bg-white drop-shadow-2xl px-6 py-6 mx-4 my-8 lg:w-5/12">
                    <h1 class="text-lg underline">{props.contit1}</h1>
                    <img src={props.Logo} alt={props.alt} class="h-20 w-20 mx-auto md:mx-4 md:my-4 float-center md:float-left"/>
                    <p class="text-md py-1">{props.content}</p>
                    <NavLink class="flex items-center mb-4 sm:mb-0 hover:no-underline" to='/GetBaking/about'>
                        <span class="self-center font-semibold whitespace-nowrap">Find Out More Here</span>
                        <Button title="Click Me!"><Link to="/about"></Link></Button>
                    </NavLink>
                </div>
                <div class="h-5/6 w-11/12 rounded-2xl bg-white drop-shadow-2xl px-6 py-6 mx-4 my-8 lg:w-5/12">
                    <h1 class="text-lg underline">{props.contit2}</h1>
                    {props.children}
                </div>
            </div>
    );
  }

  export default Halfcontainer;