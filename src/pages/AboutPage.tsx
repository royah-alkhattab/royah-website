import { useTranslation } from 'react-i18next'
import { PageHeader } from '../components/PageHeader'
import { Problem } from '../components/Problem'
import { WhyRoyah } from '../components/WhyRoyah'
import { Process } from '../components/Process'
import { FinalCTA } from '../components/FinalCTA'

export function AboutPage() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader
        eyebrow={t('pages.about.eyebrow')}
        title={t('pages.about.title')}
        subtitle={t('pages.about.subtitle')}
      />
      <Problem />
      <WhyRoyah />
      <Process />
      <FinalCTA />
    </>
  )
}
