import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component.client'
import { TypedLocale } from 'payload'
import { OpeningHoursBlock } from './OpeningHours/Component.client'
import { AccordionBlock } from './Accordion/Component.client'

const blockComponents: Record<string, React.FC<{ locale: TypedLocale } & any>> = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  oh: OpeningHoursBlock,
  accordion: AccordionBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  locale: TypedLocale
  url: string
}> = (props) => {
  const { blocks, locale, url } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType] // as any was added to avoid locale error

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} locale={locale} fullUrl={url} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
