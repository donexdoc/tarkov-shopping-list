import {
  AddTask,
  Code,
  GitHub,
  Language,
  Public,
  VolunteerActivism,
} from '@mui/icons-material'
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

const SupportProjectPage = (): JSX.Element => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Поддержать проект
      </Typography>

      <Typography paragraph>
        Привет! Я рад, что вы заинтересовались поддержкой этого проекта. "Tarkov
        Shopping List" — это проект с открытым исходным кодом, над которым я
        работаю в свободное время. Моя цель — создать удобный и полезный
        инструмент для всех, кто любит играть Escape From Tarkov и хочет сделать
        свою игру чуть удобнее.
      </Typography>

      <Typography paragraph>
        При помощи этого приложения, вы можете отслеживать предметы, котоыре вам
        необходимо найти для квестов, убежища или крафта.
      </Typography>

      <Typography paragraph>
        Как независимый разработчик, я вкладываю в этот проект много времени и
        усилий. Ваша поддержка поможет мне продолжать развивать и улучшать
        "Tarkov Shopping List", а также реализовывать новые функции.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button
          startIcon={<GitHub />}
          href="https://github.com/donexdoc/tarkov-shopping-list"
          target="_blank"
          sx={{ m: 1 }}
        >
          Исходный код на GitGhub
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Планы на будущее:
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <Code color="primary" />
          </ListItemIcon>
          <ListItemText primary="Разработать backend приложение, для будущего расширения функций и оптимизации хранения данных." />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Public color="primary" />
          </ListItemIcon>
          <ListItemText primary="Приобрести домен и хостинг для этого приложения" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AddTask color="primary" />
          </ListItemIcon>
          <ListItemText primary="Добавить отдельную вкладку с квестовыми предметами, чтобы по названию квеста добавлять предметы в список" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Language color="primary" />
          </ListItemIcon>
          <ListItemText primary="Добавить больше локализаций" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Code color="primary" />
          </ListItemIcon>
          <ListItemText primary="Доробатывать пользовательский интерфейс текущего приложения" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Как вы можете помочь:
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          startIcon={<VolunteerActivism />}
          href="https://boosty.to/donex"
          target="_blank"
          sx={{ m: 1 }}
        >
          Подписка / донат на Boosty
        </Button>
      </Box>

      <Typography sx={{ mt: 4 }} paragraph>
        Любая поддержка, очень ценна и поможет сделать этот проект еще лучше.
        Спасибо за ваш интерес и поддержку!
      </Typography>
    </Box>
  )
}

export default SupportProjectPage
