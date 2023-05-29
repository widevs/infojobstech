import { Illustrations, Social, Stack, Technology } from '@/types/types'
import {
  IconAngular,
  IconBackend,
  IconData,
  IconDevOps,
  IconFrontend,
  IconFullStack,
  IconLinkedin,
  IconMessage,
  IconMobile,
  IconQwik,
  IconReact,
  IconVue,
  IconWeb,
} from './Icons'
import { IllustrationError, IllustrationEvaluation } from './illustrations'

type IconSwitcherProps = {
  icon: Technology | Stack | Illustrations | Social

  classCustom?: string
}

export const IconSwitcher = ({ icon, classCustom }: IconSwitcherProps) => {
  function renderIcon(icon: Technology | Stack | Illustrations | Social) {
    switch (icon) {
      case 'react':
        return <IconReact classCustom={classCustom} />
      case 'vue':
        return <IconVue classCustom={classCustom} />
      case 'qwik':
        return <IconQwik classCustom={classCustom} />
      case 'angular':
        return <IconAngular classCustom={classCustom} />
      case 'error':
        return <IllustrationError classCustom={classCustom} />
      case 'evaluation':
        return <IllustrationEvaluation classCustom={classCustom} />
      case 'frontend':
        return <IconFrontend classCustom={classCustom} />
      case 'backend':
        return <IconBackend classCustom={classCustom} />
      case 'fullstack':
        return <IconFullStack classCustom={classCustom} />
      case 'data':
        return <IconData classCustom={classCustom} />
      case 'devops':
        return <IconDevOps classCustom={classCustom} />
      case 'mobile':
        return <IconMobile classCustom={classCustom} />
      case 'web':
        return <IconWeb classCustom={classCustom} />
      case 'message':
        return <IconMessage classCustom={classCustom} />
      case 'linkedin':
        return <IconLinkedin classCustom={classCustom} />

      default:
        return <IconWeb classCustom={classCustom} />
    }
  }

  return renderIcon(icon)
}
