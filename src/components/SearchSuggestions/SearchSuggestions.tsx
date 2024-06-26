import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
} from '@mui/material'
import { SearchSuggestionsProps } from './SearchSuggestions.props'

const SearchSuggestions = ({
  popperIsOpen,
  anchorEl,
  appendSuggestion,
  suggestionItems,
}: SearchSuggestionsProps): JSX.Element => {
  return (
    <Popper open={popperIsOpen} anchorEl={anchorEl} placement="bottom">
      <Paper elevation={3}>
        <List>
          {suggestionItems.map((suggestion) => (
            <ListItemButton
              key={`suggestion-${suggestion.id}`}
              onClick={() => appendSuggestion(suggestion)}
            >
              <ListItemText
                primary={suggestion.name}
                secondary={suggestion.shortName}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Popper>
  )
}

export default SearchSuggestions
