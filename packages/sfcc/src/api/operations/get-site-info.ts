import { OperationContext } from '@vercel/commerce/api/operations'
import { Category } from '@vercel/commerce/types/site'
import { SFCCConfig } from '../index'

export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: Category[]
    brands: any[]
  }
> = T

export default function getSiteInfoOperation({}: OperationContext<any>) {
  function getSiteInfo({
    query,
    variables,
    config: cfg,
  }: {
    query?: string
    variables?: any
    config?: Partial<SFCCConfig>
    preview?: boolean
  } = {}): Promise<GetSiteInfoResult> {
    return Promise.resolve({
      categories: [
        {
          id: 'breakfast',
          name: 'Breakfast',
          slug: 'breakfast',
          path: '/breakfast',
        },
        {
          id: 'all-day',
          name: 'All Day',
          slug: 'all-day',
          path: '/all-day',
        },
        {
          id: 'kids',
          name: 'Kids',
          slug: 'kids',
          path: '/kids',
        },
        {
          id: 'drinks',
          name: 'Drinks',
          slug: 'drinks',
          path: '/drinks',
        },
      ],
      brands: [],
    })
  }

  return getSiteInfo
}
