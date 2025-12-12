import { describe, it, expect } from 'vitest'
import { remark } from 'remark'
import remarkMdx from 'remark-mdx'
import remarkTocMdx from './index'

describe('remarkTocMdx', () => {
  it('should generate and export a table of contents', async () => {
    const mdx = `
# Title

## Section 1

### Subsection 1.1

## Section 2
`

    const result = await remark()
      .use(remarkMdx)
      .use(remarkTocMdx, { minDepth: 2 })
      .process(mdx)

    const expectedToc = [
      {
        value: 'Section 1',
        url: '#section-1',
        children: [
          {
            value: 'Subsection 1.1',
            url: '#subsection-11',
            children: [],
          },
        ],
      },
      {
        value: 'Section 2',
        url: '#section-2',
        children: [],
      },
    ]

    const expectedExport = `export const toc = ${JSON.stringify(
      expectedToc,
      null,
      2,
    )};`

    expect(result.value.toString()).toContain(expectedExport)
  })
})
