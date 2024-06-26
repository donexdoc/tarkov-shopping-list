import SearchBar from '@/components/SearchBar/SearchBar'
import SearchSuggestions from '@/components/SearchSuggestions/SearchSuggestions'
import { useAppSelector } from '@/redux/store'
import { Item } from '@/store/types/item'
import { TrackItem } from '@/store/types/trackItem'
import { Typography } from '@mui/material'
import { useCallback, useState } from 'react'

const SUGGESTION_LIMIT = 10

const MainListPage = (): JSX.Element => {
  const gameItems = useAppSelector((state) => state.itemsDataReducer.elements)

  const [popperIsOpen, setPopperIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<Item[]>([])
  const [trackedItems, setTrackedItems] = useState<TrackItem[]>([])
  const [anchorPopper, setAnchorPopper] = useState<HTMLElement | null>(null)

  const anchorPopperRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setAnchorPopper(node)
    }
  }, [])

  const searchItems = useCallback(
    (query: string) => {
      if (!query.length) {
        setPopperIsOpen(false)
        setSuggestions([])
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
    [gameItems] // добавляем language в зависимости
  )

  function appendSuggestion(newItem: Item): void {
    setTrackedItems((prevItems) => {
      if (prevItems.some((item) => item.item.id === newItem.id)) {
        return prevItems
      }
      return [
        ...prevItems,
        {
          item: newItem,
          count: 1,
          foundInRaid: true,
        },
      ]
    })
  }

  function onSearchClear(): void {
    setPopperIsOpen(false)
    setSuggestions([])
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
      <div ref={anchorPopperRef}>
        <SearchBar
          onSearch={searchItems}
          onSearchClear={onSearchClear}
          placeholder="Поиск предметов"
        />
        {anchorPopper && (
          <SearchSuggestions
            popperIsOpen={popperIsOpen}
            anchorEl={anchorPopper}
            suggestionItems={suggestions}
            appendSuggestion={appendSuggestion}
          />
        )}
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
