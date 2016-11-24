import marked from 'marked'
import $ from 'jquery'

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

export function markdownToNodeStringList(markdown: string): string[] {
  const startTime = new Date().valueOf()
  let html = marked(markdown, {
    gfm: true,
    breaks: true
  })
  const endMarkedTime = new Date().valueOf()
  if (process.env.NODE_ENV !== 'production') {
    console.info(`Marked takes ${endMarkedTime - startTime}ms`)
  }
  const nodes = Array.prototype
    .map.call($(html), (ele, index) => {
      if (ele.nodeType === 3 && ele.nodeValue === '\n') {
        // 移除元素间的回车
        return null
      }

      if (ele.tagName === 'P') {
        return `<p class="gb-line">${ele.innerHTML}</p>`
      } else {
        return `<div class="gb-line">${ele.outerHTML || ele.innerHTML || ele.textContent}</div>`
      }
    })
    .filter(node => Boolean(node))

  const endModHtmlTime = new Date().valueOf()

  if (process.env.NODE_ENV !== 'production') {
    console.info(`Modifying html takes ${endModHtmlTime - endMarkedTime}ms`)
  }

  return nodes
}
