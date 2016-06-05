export function filterPages(config) {
    let { startPage, quantity, offset, pages } = config;
    let newPages = [];
    while (startPage - offset < 0) {
        offset--;
    }
    startPage = startPage - offset;
    for (let i = startPage; i < quantity + startPage && i < pages.length; i++) {
        let page = pages[i];
        newPages.push(page);
    }
    return newPages;
}
export function htmlToPages(html, nodeHeights, view) {
    let pageHeight = view.pageHeight;
    let nodes = parseHTML(html);
    let pages = groupNodesByPage(nodes, nodeHeights, pageHeight);
    return {
        type: 'pages',
        props: {
            children: pages,
            view
        }
    };
}
export function pagesToHtml(pages) {
    let nodes = pages.props.children.reduce((a, b) => (a.concat(b.props.children)), []);
    let uniqueNodes = [];
    let realIndex = 0;
    // remove duplicate nodes
    for (var i = 0; i < nodes.length; i++) {
        nodes[i];
        if (nodes[i].props.index === realIndex) {
            uniqueNodes.push(nodes[i]);
            realIndex++;
        }
    }
    let html = parseNodes(uniqueNodes);
    return html;
}
export function getNodeHeights(nodes) {
    let nodesHeight = [];
    Array.prototype.forEach.call(nodes, (node, index) => {
        if (node.tagName.toLowerCase() !== "p") {
            console.error("Unsupported content found!");
        }
        nodesHeight.push(node.clientHeight);
    });
    return nodesHeight;
}
export function percentageToPage(p, pageSum) {
    if (p > 1) {
        console.error("Wrong parameter!");
        return null;
    }
    else {
        return parseInt((p * pageSum)) + 1;
    }
}
// funcs used internally
function parseHTML(htmlString) {
    let nodes = [];
    let $html = document.createElement("div");
    let $htmlNodes;
    $html.innerHTML = htmlString;
    $htmlNodes = $html.childNodes;
    for (var i = 0; i < $htmlNodes.length; i++) {
        if ($htmlNodes[i].nodeType != 1) {
            continue;
        }
        else {
            nodes.push({
                type: $htmlNodes[i].tagName.toLowerCase(),
                props: {
                    children: $htmlNodes[i].innerHTML
                }
            });
        }
    }
    return nodes;
}
function parseNodes(nodes) {
    let html = '';
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].type !== 'p') {
            console.error('Unsupported node found!');
            continue;
        }
        else {
            html += `<p>${nodes[i].props.children}</p>`;
        }
    }
    return html;
}
function groupNodesByPage(nodes, nodeHeights, pageHeight) {
    let pages = [];
    let pageHeightSum = nodeHeights.reduce((a, b) => (a + b), 0);
    let pageSum = Math.ceil(pageHeightSum / pageHeight);
    nodes = nodes.map((node, index) => {
        node.props.index = index;
        return node;
    });
    // long paragraph situation doesn't seem to affect this function
    // offset distance is always negtive or zero
    // the index will be of the paragraph with this offset at the end
    const getPageOffset = function (pageIndex) {
        let offset = 0;
        let i = 0;
        let index;
        if (pageIndex !== 0) {
            let nodeHeightSum = 0;
            while (nodeHeightSum <= pageHeight * pageIndex) {
                nodeHeightSum += nodeHeights[i];
                i++;
            }
            offset = nodeHeightSum - nodeHeights[i - 1] - pageIndex * pageHeight;
            index = i - 1;
        }
        else {
            index = 0;
        }
        return {
            offset,
            index
        };
    };
    const getNodesOfPage = function (pageIndex) {
        let offsetObject = getPageOffset(pageIndex);
        let nodeStartIndex = offsetObject.index;
        let offset = offsetObject.offset;
        let i = nodeStartIndex;
        let nodeEndIndex;
        let pageNodes = [];
        let nodeHeightSum = offset + nodeHeights[nodeStartIndex];
        i++;
        if (nodeHeightSum < pageHeight) {
            while (nodeHeightSum <= pageHeight && i !== nodes.length) {
                nodeHeightSum += nodeHeights[i];
                i++;
            }
            nodeEndIndex = i - 1;
        }
        else {
            nodeEndIndex = nodeStartIndex;
        }
        for (let i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
            pageNodes.push(nodes[i]);
        }
        return [pageNodes, offset];
    };
    // finally
    for (let i = 0; i < pageSum; i++) {
        let array = getNodesOfPage(i);
        let nodes = array[0];
        let offset = array[1];
        pages.push({
            props: {
                children: nodes,
                style: {
                    top: i * pageHeight,
                    position: 'absolute',
                    height: pageHeight
                },
                pageNo: i + 1,
                offset
            },
            type: "page"
        });
    }
    return pages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvcmVuZGVyQm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsTUFBTTtJQUNoQyxJQUFJLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLEdBQUcsTUFBTSxDQUFBO0lBQ2pELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtJQUVqQixPQUFPLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxFQUFFLENBQUE7SUFDVixDQUFDO0lBQ0QsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUE7SUFFOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxRQUFRLEdBQUcsU0FBUyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUE7QUFDakIsQ0FBQztBQUdELDRCQUE0QixJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7SUFDakQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUNoQyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUU1RCxNQUFNLENBQUM7UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsSUFB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