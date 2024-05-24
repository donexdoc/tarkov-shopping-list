import { useAppSelector } from '@/redux/store'
import { useEffect } from 'react'

const HelloComponent = (): JSX.Element => {
  const items = useAppSelector((state) => state.gameDataReducer.items)

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <>
      <h1> Hello!</h1>
    </>
  )
}

export default HelloComponent
