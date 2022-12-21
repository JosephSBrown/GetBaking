import React from 'react'

function PageHead(props) {
    return (
        <div class="flex items-center justify-center w-screen">
            <div class="w-11/12 flex items-center justify-center py-3">
                <div class="flex-wrap h-5/6 w-screen rounded-2xl bg-white drop-shadow-2xl px-4 py-4 mx-2">
                    <h1 class="text-xl underline my-2 float-left">{props.contit}</h1>
                    <div class="block h-11/12 w-11/12 float-right">
                        {props.children}  
                    </div>
                </div>
            </div>
        </div>
        
    );
  }

  export default PageHead;