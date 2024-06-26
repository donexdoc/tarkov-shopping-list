export interface SearchBarProps {
  onSearch: (query: string) => void
  onSearchClear: () => void
  placeholder?: string
}
