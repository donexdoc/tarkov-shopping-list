import { setLanguage } from '@/redux/features/app.slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { LANGUAGES } from '@/store/constatnts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const HelloComponent = (): JSX.Element => {
  const items = useAppSelector((state) => state.gameDataReducer.items)

  useEffect(() => {
    console.log(items)
  }, [items])

  const dispatch = useDispatch<AppDispatch>()
  const changeLanguage = (newLanguage: LANGUAGES) => {
    dispatch(setLanguage(newLanguage))
  }

  return (
    <>
      <h1> Hello!</h1>
      <br />
      <div>
        <button
          onClick={() => {
            changeLanguage(LANGUAGES.EN)
          }}
        >
          EN
        </button>
        <button
          onClick={() => {
            changeLanguage(LANGUAGES.RU)
          }}
        >
          RU
        </button>
      </div>
      <div>
        {items.slice(0, 10).map((item, index) => (
          <div key={index}>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default HelloComponent
