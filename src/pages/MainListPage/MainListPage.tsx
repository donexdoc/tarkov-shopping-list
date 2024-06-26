import SearchBar from '@/components/SearchBar/SearchBar'
import { useAppSelector } from '@/redux/store'
import { Item } from '@/store/types/item'
import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Typography,
  debounce,
} from '@mui/material'
import { useCallback, useRef, useState } from 'react'

const MainListPage = (): JSX.Element => {
  const gameItems = useAppSelector((state) => state.itemsDataReducer.elements)

  const anchorPopper = useRef<HTMLDivElement>(null)
  const [popperIsOpen, setPopperIsOpen] = useState(true)
  const [suggetions, setSuggetions] = useState<Item[]>([])
  const [itemList, setItemList] = useState<Item[]>([])

  const searchItems = useCallback(
    (query: string) => {
      if (!query.length) {
        setPopperIsOpen(false)
        return
      }

      const normalizedQuery = query.toLowerCase()

      const resultItems: Item[] = []

      for (const gameItem of gameItems) {
        if (
          gameItem.name.toLowerCase().includes(normalizedQuery) ||
          gameItem.shortName.toLowerCase().includes(normalizedQuery)
        ) {
          resultItems.push(gameItem)
        }
        if (resultItems.length === 10) break
      }

      setSuggetions(resultItems)
      setPopperIsOpen(true)
    },
    [gameItems]
  )

  const debounceSearchRef = useRef(
    debounce((query: string) => {
      searchItems(query)
    }, 300)
  )

  const onSearch = useCallback((query: string): void => {
    debounceSearchRef.current(query)
  }, [])

  function appendSuggetion(newItem: Item): void {
    setItemList([...itemList, newItem])
  }

  function onSearchClear(): void {
    setPopperIsOpen(false)
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
      <div ref={anchorPopper}>
        <SearchBar
          onSearch={onSearch}
          onSearchClear={onSearchClear}
          placeholder="Поиск предметов"
        />
        <Popper open={popperIsOpen} anchorEl={anchorPopper.current}>
          <Paper elevation={3}>
            <List>
              {suggetions.map((suggestion) => (
                <ListItemButton
                  key={`suggetion-${suggestion.id}`}
                  onClick={() => appendSuggetion(suggestion)}
                >
                  <ListItemText
                    primary={suggestion.name}
                    secondary={suggestion.shortName}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Popper>
      </div>
      <div>
        {itemList.map((gameItem) => (
          <div key={`addedItem-${gameItem.id}`}>
            <div> {gameItem.name} </div>
            <div> {gameItem.shortName} </div>
            <img src={gameItem.image512pxLink} width={200} />
          </div>
        ))}
      </div>
    </>
  )
}

export default MainListPage
