import { Item } from '@/shared/types/item'

export interface ISearchSuggestionsProps {
  popperIsOpen: boolean
  anchorEl: HTMLElement | null
  appendSuggestion: (item: Item) => void
  suggestionItems: Item[]
}
