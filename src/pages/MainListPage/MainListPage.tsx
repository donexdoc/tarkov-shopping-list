import SearchBar from '@/components/SearchBar/SearchBar'
import SearchSuggestions from '@/components/SearchSuggestions/SearchSuggestions'
import SupportProjectWidget from '@/components/SupportProjectWidget/SupportProjectWidget'
import TrackedItems from '@/components/TrackedItems/TrackedItems'
import { addTrackedItem } from '@/redux/features/shoppingList.slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { Item } from '@/store/types/item'
import { Box, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

const SUGGESTION_LIMIT = 7

const MainListPage = (): JSX.Element => {
  const { t } = useTranslation()

  const gameItems = useAppSelector((state) => state.itemsDataReducer.elements)
  const dispatch = useDispatch<AppDispatch>()

  const [popperIsOpen, setPopperIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<Item[]>([])
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
    [gameItems]
  )

  function appendSuggestion(newItem: Item): void {
    dispatch(
      addTrackedItem({
        item: newItem,
        count: 1,
        foundInRaid: true,
      })
    )
  }

  function onSearchClear(): void {
    setPopperIsOpen(false)
    setSuggestions([])
  }

  return (
    <>
      <Box>
        <SupportProjectWidget />
      </Box>
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
        {t('MainListPage.mainTitle')}
      </Typography>

      <Box ref={anchorPopperRef}>
        <SearchBar
          onSearch={searchItems}
          onSearchClear={onSearchClear}
          placeholder={t('MainListPage.searchBarPlaceholder')}
        />
        {anchorPopper && (
          <SearchSuggestions
            popperIsOpen={popperIsOpen}
            anchorEl={anchorPopper}
            suggestionItems={suggestions}
            appendSuggestion={appendSuggestion}
          />
        )}
      </Box>

      <Box sx={{ mt: 2 }}>
        <TrackedItems />
      </Box>
    </>
  )
}

export default MainListPage
