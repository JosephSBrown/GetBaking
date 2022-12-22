import React from 'react'


function SocialMediaIntegration(props) {
    return (
        <div class="float-right px-1 py-3 md:p-5 md:px-20">
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button bg-blue-400 rounded-md py-3 px-3 text-white mx-1" data-text="Look at What I plan to Make!" data-url="https://josephsbrown.github.io/GetBaking" data-lang="en" data-show-count="false"><i class="fa-brands fa-twitter px-2"></i>Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <a class="fb-share-button bg-blue-700 rounded-md py-3 px-3 mx-1 text-white" data-href={`https://josephsbrown.github.io/GetBaking`} data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjosephsbrown.github.io%2FGetBaking&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><i class="fa-brands fa-facebook-f px-2"></i>Share</a></a>
            <button onClick={props.click} class="bg-red-600 text-white rounded-md px-3 py-3 my-5 md:my-0 mx-1"><i class="fa-solid fa-file-pdf mx-2"></i>Save To PDF</button>
        </div>
    );
  }

  export default SocialMediaIntegration;