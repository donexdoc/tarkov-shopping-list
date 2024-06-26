import SearchBar from '@/components/SearchBar/SearchBar'
import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const MainListPage = (): JSX.Element => {
  const anchorPopper = useRef<HTMLDivElement>(null)
  const [popperIsOpen, setPopperIsOpen] = useState(true)
  const [suggetions, setSuggetions] = useState<string[]>([])

  const onSearch = (query: string) => {
    if (query.length) {
      setPopperIsOpen(true)
    }
  }

  function appendSuggetion(index: number): void {
    console.log(index)
  }

  function onSearchClear(): void {
    setPopperIsOpen(false)
  }

  useEffect(() => {
    setSuggetions([
      'Est labore duis qui ad amet.',
      'Quis labore pariatur officia',
      'Amet dolore esse dolore cillum.',
      'Est laborum minim ad culpa cillum exercitation.',
      'Amet fugiat fugiat dolor excepteur.',
    ])
  }, [])

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
      <div ref={anchorPopper}>
        <SearchBar
          onSearch={onSearch}
          onSearchClear={onSearchClear}
          placeholder="Поиск предметов"
        />
        <Popper open={popperIsOpen} anchorEl={anchorPopper.current}>
          <Paper elevation={3}>
            <List>
              {suggetions.map((suggestion, index) => (
                <ListItemButton
                  key={`suggetion-${index}`}
                  onClick={() => appendSuggetion(index)}
                >
                  <ListItemText primary={suggestion} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Popper>
      </div>
    </>
  )
}

export default MainListPage
