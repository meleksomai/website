import { toc } from 'mdast-util-toc'
import type { Root, List } from 'mdast'
import type { Plugin } from 'unified'

// Define the structure of a table of contents item
interface TocItem {
  value: string
  url: string
  children: TocItem[]
}

// Recursively transform an mdast list node into a nested array of TocItem objects
function transformList(list: List): TocItem[] {
  const items: TocItem[] = []

  for (const listItem of list.children) {
    if (listItem.type !== 'listItem') continue

    // A list item can contain a paragraph (for the link) and a sub-list
    const [paragraph, subList] = listItem.children

    if (paragraph?.type !== 'paragraph') continue

    const link = paragraph.children[0]
    if (link?.type !== 'link') continue

    const text = link.children[0]
    if (text?.type !== 'text') continue

    const tocItem: TocItem = {
      value: text.value,
      url: link.url,
      children: [],
    }

    // If there is a sub-list, recursively transform it
    if (subList?.type === 'list') {
      tocItem.children = transformList(subList)
    }

    items.push(tocItem)
  }

  return items
}

// Define the options for the remark plugin, extending mdast-util-toc options
export interface RemarkTocMdxOptions {
  exportName?: string
  heading?: string
  maxDepth?: number
  minDepth?: number
  skip?: string
  tight?: boolean
  ordered?: boolean
  prefix?: string
}

const remarkTocMdx: Plugin<[RemarkTocMdxOptions?], Root> = (options = {}) => {
  const { exportName = 'toc', ...tocOptions } = options

  return (tree) => {
    // Generate the table of contents using mdast-util-toc
    const result = toc(tree, tocOptions)

    // If no table of contents could be generated, do nothing
    if (!result.map) {
      return
    }

    // Convert the mdast list to a plain JavaScript object
    const tocObject = transformList(result.map)

    // Create the export string
    const exportString = `export const ${exportName} = ${JSON.stringify(
      tocObject,
      null,
      2,
    )};`

    // Create an MDX ESM export node
    const exportNode = {
      type: 'mdxjsEsm',
      value: exportString,
    }

    // Add the export node to the beginning of the MDX document
    tree.children.unshift(exportNode as any)
  }
}

export default remarkTocMdx
