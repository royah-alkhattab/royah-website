import { useTranslation } from 'react-i18next'
import { PageHeader } from '../components/PageHeader'
import { Work } from '../components/Work'
import { FinalCTA } from '../components/FinalCTA'

export function WorkPage() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader
        eyebrow={t('pages.work.eyebrow')}
        title={t('pages.work.title')}
        subtitle={t('pages.work.subtitle')}
        image="/work-header-bg.webp"
      />
      <Work />
      <FinalCTA variant="work" />
    </>
  )
}
