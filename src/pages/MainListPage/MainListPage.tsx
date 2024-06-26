import SearchBar from '@/components/SearchBar/SearchBar'
import { useAppSelector } from '@/redux/store'
import { Item } from '@/store/types/item'
import { TrackItem } from '@/store/types/trackItem'
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

const SUGGESTION_LIMIT = 10

const MainListPage = (): JSX.Element => {
  const gameItems = useAppSelector((state) => state.itemsDataReducer.elements)

  const anchorPopper = useRef<HTMLDivElement>(null)
  const [popperIsOpen, setPopperIsOpen] = useState(true)
  const [suggestions, setSuggestions] = useState<Item[]>([])
  const [trackedItems, setTrackedItems] = useState<TrackItem[]>([])

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
        if (resultItems.length === SUGGESTION_LIMIT) break
      }

      setSuggestions(resultItems)
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

  function appendSuggestion(newItem: Item): void {
    for (const trackedItem of trackedItems) {
      if (trackedItem.item.id === newItem.id) return
    }

    setTrackedItems([
      ...trackedItems,
      {
        item: newItem,
        count: 1,
        foundInRaid: true,
      },
    ])
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
              {suggestions.map((suggestion) => (
                <ListItemButton
                  key={`suggetion-${suggestion.id}`}
                  onClick={() => appendSuggestion(suggestion)}
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
        {trackedItems.map((trackedItem) => (
          <div key={`addedItem-${trackedItem.item.id}`}>
            <div> {trackedItem.item.name} </div>
            <div> {trackedItem.item.shortName} </div>
            <img src={trackedItem.item.image512pxLink} width={200} />
          </div>
        ))}
      </div>
    </>
  )
}

export default MainListPage
