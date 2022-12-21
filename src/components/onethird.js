import React from 'react'

function OneThird(props) {

    return (
        <div class="rounded-2xl bg-white drop-shadow-2xl py-3 px-3">
                    <h1 class="text-lg underline">{props.contit2}</h1>
                    <div>
                        {props.cont}
                    </div>
                </div>
    );
  }

  export default OneThird;