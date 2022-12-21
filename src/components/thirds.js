import React from 'react'
import Button from './button'
import { NavLink, Link } from 'react-router-dom'

function Thirds(props) {

    return (
        <div class="w-screen lg:flex lg:items-center lg:justify-center mx-auto">
                <div class="h-5/6 rounded-2xl bg-white drop-shadow-2xl px-6 py-6 mx-4 my-8 w-11/12 lg:w-1/3">
                    <h1 class="text-lg underline">{props.contit3}</h1>
                    <p class="text-md py-1">{props.content3}</p>
                </div>
                <div class="h-5/6 rounded-2xl bg-white drop-shadow-2xl px-6 py-6 mx-4 my-8 w-11/12 lg:w-1/3">
                    <h1 class="text-lg underline">{props.contit1}</h1>
                    <p class="text-md py-1">{props.content}</p>   
                </div>
                <div class="h-5/6 rounded-2xl bg-white drop-shadow-2xl px-6 py-6 mx-4 my-8 w-11/12 lg:w-1/3">
                    {props.children}
                </div>
            </div>
    );
  }

  export default Thirds;