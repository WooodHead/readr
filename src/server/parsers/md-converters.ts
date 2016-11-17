export const h = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (innerHTML, node) {
    let hLevel = node.tagName.charAt(1)
    let hPrefix = ''

    for (let i = 0; i < hLevel; i++) {
      hPrefix += '#'
    }

    return `\n${hPrefix} ${innerHTML.trim()}\n\n`
  }
}

export const span = {
  filter: ['span'],

  replacement: function (innerHTML, node) {
    return innerHTML
  }
}

export const div = {
  filter: ['div'],

  replacement: function (innerHTML, node) {
    return `\n${innerHTML}\n\n`
  }
}

export const img = {
  filter: ['img'],

  replacement: function (innerHTML, node) {
    return `\n[图]\n\n`
  }
}