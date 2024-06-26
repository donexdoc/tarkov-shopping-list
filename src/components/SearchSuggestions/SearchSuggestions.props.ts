import { Item } from '@/store/types/item'

export interface SearchSuggestionsProps {
  popperIsOpen: boolean
  anchorEl: HTMLElement | null
  appendSuggestion: (item: Item) => void
  suggestionItems: Item[]
}
