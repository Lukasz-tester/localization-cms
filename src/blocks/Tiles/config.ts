import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { media } from '@/fields/media'

const tileFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        label: 'One Third',
        value: 'oneThird',
      },
      {
        label: 'Half',
        value: 'half',
      },
      {
        label: 'Two Thirds',
        value: 'twoThirds',
      },
      {
        label: 'Full',
        value: 'full',
      },
      {
        label: 'One Sixth',
        value: 'oneSixth',
      },
    ],
  },
  {
    name: 'richText',
    type: 'richText',
    localized: true,
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ]
      },
    }),
    label: false,
  },
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
  {
    name: 'enableMedia',
    type: 'checkbox',
  },
  media({
    overrides: {
      admin: {
        condition: (_, { enableMedia }) => Boolean(enableMedia),
      },
    },
  }),
  {
    name: 'richTextEnd',
    type: 'richText',
    localized: true,
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ]
      },
    }),
    label: false,
  },
  {
    name: 'noPaddingRichTextEnd',
    type: 'checkbox',
  },
]

export const Tiles: Block = {
  slug: 'tiles',
  interfaceName: 'TilesBlock',
  fields: [
    {
      name: 'heading',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'tiles',
      type: 'array',
      fields: tileFields,
    },
    {
      name: 'changeBackground',
      type: 'checkbox',
    },
    {
      name: 'addMarginTop',
      type: 'checkbox',
    },
    {
      name: 'addMarginBottom',
      type: 'checkbox',
    },
  ],
}
