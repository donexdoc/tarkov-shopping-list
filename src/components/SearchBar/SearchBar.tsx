import { Clear, Search } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { SearchBarProps } from './SearchBar.props'

const SearchBar = ({
  onSearch,
  onSearchClear,
  placeholder,
}: SearchBarProps): JSX.Element => {
  const [queryLine, setQueryLine] = useState('')

  useEffect(() => {
    if (queryLine.length) {
      onSearch(queryLine)
    } else {
      onSearchClear()
    }
  }, [onSearch, onSearchClear, queryLine])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryLine(event.target.value)
    handleSearchSubmit()
  }

  function handleSearchSubmit() {
    onSearch(queryLine)
  }

  function handleClearSearch() {
    setQueryLine('')
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
