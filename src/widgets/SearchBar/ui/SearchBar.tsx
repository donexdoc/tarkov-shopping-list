import { Clear, Search } from '@mui/icons-material'
import { debounce, IconButton, InputAdornment, TextField } from '@mui/material'
import { useEffect, useMemo } from 'react'

import { ISearchBarProps } from '../model/types'

const SearchBar = ({
  queryLine,
  setQueryLine,
  onSearch,
  onSearchClear,
  placeholder,
}: ISearchBarProps): JSX.Element => {
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
      variant='outlined'
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
          <InputAdornment position='start'>
            <IconButton onClick={handleSearchSubmit}>
              <Search color='primary' />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={handleClearSearch}>
              <Clear color='primary' />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar
