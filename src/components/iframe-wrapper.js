import React, { useState } from "react"

const IFrameWrapper = ({ iframe }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full overflow-hidden mb-8 video relative">
      { !clicked && (
        <button onClick={() => setClicked(true)} className="bg-black bg-opacity-0 absolute inset-0 w-full h-full z-50 block"></button>
      )}
      <div className="w-full block" dangerouslySetInnerHTML={{ __html: iframe }}></div>
    </div>
  )
}

export default IFrameWrapper
