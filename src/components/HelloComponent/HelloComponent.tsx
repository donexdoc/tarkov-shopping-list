import { FAVORITE_CATEGORIES } from '@/store/constatnts'
import { useTranslation } from 'react-i18next'

const HelloComponent = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      <h1> Hello!</h1>
      <h1> {t('test')}</h1>
      <br />

      <div>
        {FAVORITE_CATEGORIES.map((item) => (
          <div key={item.id}>
            <h4>{t(item.name)}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default HelloComponent
