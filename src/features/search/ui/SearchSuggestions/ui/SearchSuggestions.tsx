import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
} from '@mui/material'

import { ISearchSuggestionsProps } from '../model/types'

const SearchSuggestions = ({
  popperIsOpen,
  anchorEl,
  appendSuggestion,
  suggestionItems,
}: ISearchSuggestionsProps): JSX.Element => {
  return (
    <Popper open={popperIsOpen} anchorEl={anchorEl} placement='bottom-start'>
      <Paper elevation={3}>
        <List sx={{ p: 0 }}>
          {suggestionItems.map((suggestion, id) => (
            <ListItemButton
              divider={id < suggestionItems.length - 1}
              key={`suggestion-${suggestion.id}`}
              onClick={() => appendSuggestion(suggestion)}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  mr: 2,
                  border: '1px solid #23323B',
                  backgroundColor: '#535C5F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={suggestion.image512pxLink}
                  alt={suggestion.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <ListItemText
                primary={suggestion.shortName}
                secondary={suggestion.name}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Popper>
  )
}

export default SearchSuggestions
