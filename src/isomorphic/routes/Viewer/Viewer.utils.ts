import _ from 'lodash'

// 暂不支持包含图片的计算
// 计算没有等待图片加载完成，所以结果是不正确的
export function getNodeHeights(nodes) {
  let nodesHeight = []

  Array.prototype.forEach.call(nodes, (node, index) => {
    if (node.className !== 'gb-line') {
      console.error('Unsupported content found!')
    }
    nodesHeight.push(node.clientHeight)
  })

  return nodesHeight
}

// export function markdownToNodeStringList(markdown: string): string[] {
//   const startTime = new Date().valueOf()
//   let html = marked(markdown, {
//     gfm: true,
//     breaks: true
//   })
//   const endMarkedTime = new Date().valueOf()
//   if (process.env.NODE_ENV !== 'production') {
//     console.info(`Marked takes ${endMarkedTime - startTime}ms`)
//   }
//   const nodes = Array.prototype
//     .map.call($(html), (ele, index) => {
//       if (ele.nodeType === 3 && ele.nodeValue === '\n') {
//         // 移除元素间的回车
//         return null
//       }

//       if (ele.tagName === 'P') {
//         return `<p class="gb-line">${ele.innerHTML}</p>`
//       } else {
//         return `<div class="gb-line">${ele.outerHTML || ele.innerHTML || ele.textContent}</div>`
//       }
//     })
//     .filter(node => Boolean(node))

//   const endModHtmlTime = new Date().valueOf()

//   if (process.env.NODE_ENV !== 'production') {
//     console.info(`Modifying html takes ${endModHtmlTime - endMarkedTime}ms`)
//   }

//   return nodes
// }


// long paragraph situation doesn't seem to affect this function
// offset distance is always negtive or zero
// the index will be of the paragraph with this offset at the end
function getPageOffset({pageIndex, pageHeight, nodeHeights}: {
  pageIndex: number
  pageHeight: number
  nodeHeights: number[]
}) {
  let offset = 0
  let nodeIndex = 0
  let nodeStartIndex

  if (pageIndex !== 0) {
    let nodeHeightSum = 0
    while (nodeHeightSum <= pageHeight * pageIndex) {
      nodeHeightSum += nodeHeights[nodeIndex]
      nodeIndex++
    }
    offset = nodeHeightSum - nodeHeights[nodeIndex - 1] - pageIndex * pageHeight
    nodeStartIndex = nodeIndex - 1
  } else {
    nodeStartIndex = 0
  }

  return { offset, nodeStartIndex }
}


function getNodesOfPage({pageIndex, nodes, pageHeight, nodeHeights}: {
  pageIndex: number
  nodes: any
  pageHeight: number
  nodeHeights: number[]
}) {
  let { offset, nodeStartIndex } = getPageOffset({ pageIndex, pageHeight, nodeHeights })
  let nodeIndex = nodeStartIndex
  let nodeEndIndex
  let pageNodes = []

  let nodeHeightSum = offset + nodeHeights[nodeStartIndex]

  nodeIndex++
  if (nodeHeightSum < pageHeight) {
    while (nodeHeightSum <= pageHeight && nodeIndex !== nodes.length) {
      nodeHeightSum += nodeHeights[nodeIndex]
      nodeIndex++
    }
    nodeEndIndex = nodeIndex - 1
  } else {
    nodeEndIndex = nodeStartIndex
  }

  for (let i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
    pageNodes.push(nodes[i])
  }

  return { pageNodes, offset }
}


export type TPage = {
  nodes: string[]
  meta: any
}
export type TPageList = TPage[]
export function groupNodesByPage(nodes: any, nodeHeights: number[], pageHeight: number, pageStartFrom = 0, chapterId?): TPageList {
  let pages = []
  let pageHeightSum = nodeHeights.reduce((a, b) => (a + b), 0)
  let pageSum = Math.ceil(pageHeightSum / pageHeight)

  if (nodeHeights.length === 0) {
    return [{
      nodes,
      meta: {
        pageNo: 1 + pageStartFrom,
        offset: 0,
        chapterId
      }
    }]
  }

  // finally
  for (let i = 0; i < pageSum; i++) {
    const { pageNodes, offset } = getNodesOfPage({ pageIndex: i, nodes, nodeHeights, pageHeight })

    pages.push({
      nodes: pageNodes,
      meta: {
        pageNo: pageStartFrom + i + 1,
        offset,
        chapterId
      },
    })
  }

  return pages
}

export function groupPageFromChapters(contentOfChapters: TBookFlesh, nodeHeightsOfChapters: {
  id: string
  nodeHeights: number[]
}[], pageHeight: number) {
  let pageStartFrom = 0
  let allPages = []
  const t0 = new Date().valueOf()

  contentOfChapters.forEach((chapter, index) => {
    const pages = groupNodesByPage(chapter.markdown.split('\n\n'), nodeHeightsOfChapters[index].nodeHeights, pageHeight, pageStartFrom, chapter.id)
    allPages = allPages.concat(pages)
    pageStartFrom = pageStartFrom + pages.length
  })

  const t1 = new Date().valueOf()
  if (process.env.NODE_ENV !== 'production') {
    console.info(`Grouping nodes takes ${t1 - t0}ms`)
  }

  return allPages
}

export function percentageToPage(p: number, pageSum: number) {
  if (p > 1) {
    console.error('Percentage should be less than 1!')
    return null
  } else {
    return parseInt((p * pageSum) as any) + 1
  }
}
