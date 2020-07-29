import React, { useState, useEffect } from 'react'
import { Button } from 'antd';

function Home (prop) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log('11233')
    return () => {
      console.log('解除了')
    }
  }, [count])

  return (
    <div>
      首页
      <p>{`数量${count}`}</p>
      <Button type="primary" onClick={() => setCount(count+1)}>确定</Button>
    </div>
  )
}

export default Home