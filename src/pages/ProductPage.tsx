import { useTranslation } from 'react-i18next'
import { PageHeader } from '../components/PageHeader'
import { Product } from '../components/Product'
import { Impact } from '../components/Impact'
import { FinalCTA } from '../components/FinalCTA'

export function ProductPage() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader
        eyebrow={t('pages.product.eyebrow')}
        title={t('pages.product.title')}
        subtitle={t('pages.product.subtitle')}
      />
      <Product />
      <Impact />
      <FinalCTA />
    </>
  )
}
