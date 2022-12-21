import React from 'react'

function Button(props) {

    return (
        <button class="bg-pink-400 text-white rounded-md mx-3 my-3 px-2 py-2 hover:bg-pink-300" onClick={props.click}>
            {props.title}
        </button>
    );
  }

  export default Button;