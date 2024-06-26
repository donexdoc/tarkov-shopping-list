import {
  Avatar,
  List,
  ListItemAvatar,
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
    <Popper open={popperIsOpen} anchorEl={anchorEl} placement="bottom-start">
      <Paper elevation={3}>
        <List>
          {suggestionItems.map((suggestion) => (
            <ListItemButton
              key={`suggestion-${suggestion.id}`}
              onClick={() => appendSuggestion(suggestion)}
            >
              <ListItemAvatar>
                <Avatar src={suggestion.image512pxLink} alt={suggestion.name}>
                  {suggestion.name.charAt(0)}
                </Avatar>
              </ListItemAvatar>
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
