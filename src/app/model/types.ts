import { PAGES } from '@/shared/config/constatnts'
import { ILanguage } from '@/shared/types/language'

export interface IAppInitialState {
  drawerState: boolean
  currentPage: PAGES
  appTitle: string
  language: ILanguage
}
