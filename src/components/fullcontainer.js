import React from 'react'

function Fullcontainer(props) {
    return (
        
        <div class="w-full flex items-center justify-center">
            <div class="flex-wrap h-5/6 w-screen rounded-2xl bg-white drop-shadow-2xl px-8 py-8 mx-2 mb-8">
                <h1 class="text-lg underline my-2">{props.contit}</h1>
                <div class="block h-11/12 w-11/12">
                  {props.children}
                  {props.content}
                  {props.content2}
                </div>
            </div>
        </div>
    );
  }

  export default Fullcontainer;