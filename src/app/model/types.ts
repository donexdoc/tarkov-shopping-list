import { ILanguage } from '@/shared/types/language'

export interface IAppInitialState {
  drawerState: boolean
  appTitle: string
  language: ILanguage
}
