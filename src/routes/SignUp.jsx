import { useState } from 'react'
import { Link } from "react-router-dom";

function SignUp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link to="/">ホーム画面に戻る</Link>
      </div>
    </> 
  )
}

export default SignUp
