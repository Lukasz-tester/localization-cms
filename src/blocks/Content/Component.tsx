import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { Page } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { ImageMedia } from '@/components/Media/ImageMedia'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  {
    id?: string
  } & Props
> = (props) => {
  const { columns, heading, changeBackground } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
    oneSixth: '2',
  }
  // each content block receives unique id = blockName
  return (
    <div
      className={cn('pb-14 pt-3', {
        'bg-card': changeBackground,
      })}
    >
      <div className="container" id={props.blockName || undefined}>
        {heading && (
          <RichText className="pt-11 pb-9 md:px-[17.3%]" content={heading} enableGutter={false} />
        )}
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-11 gap-x-11">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { enableLink, enableMedia, link, richText, richTextEnd, size, media } = col

              return (
                <div
                  className={cn(
                    `col-span-4 lg:col-span-${colsSpanClasses[size!]}`,
                    {
                      'md:col-span-2': size !== 'full' && size !== 'twoThirds',
                    },
                    {
                      'hidden lg:block': size === 'oneSixth',
                    },
                  )}
                  key={index}
                >
                  {richText && <RichText content={richText} enableGutter={false} />}

                  {enableLink && <CMSLink className="mb-4" {...link} />}
                  {enableMedia && <ImageMedia resource={media} />}
                  {richTextEnd && <RichText content={richTextEnd} enableGutter={false} />}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
