import { Box } from '@mui/material'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { AppDispatch, useAppSelector } from '@/app/store'
import { addTrackedItem } from '@/entities/shoppingList/slice'
import SearchBar from '@/features/search/ui/SearchBar/ui/SearchBar'
import SearchSuggestions from '@/features/search/ui/SearchSuggestions/ui/SearchSuggestions'
import { Item } from '@/shared/types/item'

import { SUGGESTION_LIMIT } from '../model/constants'

export default function SearchWidget(): JSX.Element {
  const { t } = useTranslation()

  const gameItems = useAppSelector((state) => state.itemsDataReducer.elements)
  const autoFoundInRaid = useAppSelector(
    (store) => store.trackerSettingsReducer.autoFoundInRaid
  )
  const dispatch = useDispatch<AppDispatch>()

  const [queryLine, setQueryLine] = useState('')
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
        foundInRaid: autoFoundInRaid,
      })
    )
    onSearchClear()
  }

  function onSearchClear(): void {
    setQueryLine('')
    setPopperIsOpen(false)
    setSuggestions([])
  }

  return (
    <Box ref={anchorPopperRef}>
      <SearchBar
        queryLine={queryLine}
        setQueryLine={setQueryLine}
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
  )
}
