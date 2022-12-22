import React from 'react'

function TwoOne(props) {

    return (
                <div class="rounded-2xl bg-white drop-shadow-2xl px-2 py-2">
                    <h1 class="text-lg underline">{props.contit1}</h1>
                    <div>
                        <p class="text-sm lg:text-lg">{props.content}</p>
                        {props.content2}
                        {props.content3}
                        {props.children}
                    </div>
                </div>
    );
  }

  export default TwoOne;