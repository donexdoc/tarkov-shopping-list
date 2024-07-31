export interface ISearchBarProps {
  queryLine: string
  setQueryLine: (query: string) => void
  onSearch: (query: string) => void
  onSearchClear: () => void
  placeholder?: string
}
