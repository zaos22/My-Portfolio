import * as React from "react";

import { useState } from "react";

const Home = () => {

  const [text, setText] = useState('First text')

  const onClick = () => {
    setText('Button clicked')
  }

  return(
    <div>
      {text}
      <br />
      <button
      onClick={onClick}>Change Text</button>
    </div>
  )

}

export default Home;
