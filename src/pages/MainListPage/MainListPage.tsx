import SearchBar from '@/components/SearchBar/SearchBar'
import { Typography } from '@mui/material'

const MainListPage = (): JSX.Element => {
  const onSearch = (query: string) => {
    console.log(query)
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: {
            md: 'left',
            xs: 'center',
          },
          padding: '10px',
        }}
      >
        Список предметов
      </Typography>
      <div>
        <SearchBar onSearch={onSearch} placeholder="Поиск предметов" />
      </div>
    </>
  )
}

export default MainListPage
