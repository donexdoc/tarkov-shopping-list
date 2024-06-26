import { Clear, Search } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField, debounce } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { SearchBarProps } from './SearchBar.props'

const SearchBar = ({
  onSearch,
  onSearchClear,
  placeholder,
}: SearchBarProps): JSX.Element => {
  const [queryLine, setQueryLine] = useState('')

  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        if (query.length) {
          onSearch(query)
        } else {
          onSearchClear()
        }
      }, 300),
    [onSearch, onSearchClear]
  )

  useEffect(() => {
    debouncedSearch(queryLine)
    return () => debouncedSearch.clear()
  }, [queryLine, debouncedSearch])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryLine(event.target.value)
  }

  function handleSearchSubmit() {
    onSearch(queryLine)
  }

  function handleClearSearch() {
    setQueryLine('')
    onSearchClear()
  }

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      value={queryLine}
      onChange={handleSearchChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearchSubmit()
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleSearchSubmit}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClearSearch}>
              <Clear />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar
