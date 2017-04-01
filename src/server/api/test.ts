import _ from 'lodash'
import html from '../../parsers/html'
import { readRecursively } from '../../renderers/virtual-layout'

const htmlstring = `
  <div>
    <h1>this is good</h1>
    <p>line1</p>
    <p>line2</p>
    <div>
      <p>line1<span>in span</span>out span</p>
      <p>line2</p>
      <div>
      <div>
        <div>
          <p>this is deep<span>in div</span><img src="abc"/></p>
        </div>
        <div>another div</div>
        <br/>
      </div>
      <hr>
      <h3>small title</h3>
      <div>
        <p>ffffffff</p>
      </div>
      </dvi>
    </div>
    <p>line3</p>
    <p>line4</p>
  </div>
`

const htmlstring2 = `
  <div>
    <h1>title <span>in span</span><div>in span <span>in deep span</span></div></h1>
    <p>line 0</p>
    <img src="a.jpg" />
    <p>line 1 with img <img src="b.jpg" /></p>
    <p>line 2 with span <span>in span</span></p>
    <p>line 3</p>
    line 3.5 without p tag
    <p>line 4</p>
    <img src="c.jpg" />
    <ul>
      <li>line 1 in li</li>
      <li>line 2 in li</li>
    </ul>
    <pre>
      <code>
        var a = 123;
        console.log(a)
      </code>
    </pre>
    <textarea></textarea>
  </div>
`

const htmlstring3 = `
  <div>
    <div>
      <h1>
        title
        <p>
          <span>in span</span>
          <span>
            <span>deep</span>
            <span>
              <span>in deep span</span>
              <span>
                <span>in span</span>
                <span>
                  <span>deep</span>
                  <span>
                    <span>in deep span</span>
                    <span>in deep span2</span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </p>
      </h1>
      <p>text</p>
      <p>
        text
        <span>
          <span>
            <span>text deep</span>
          </span>
        </span>
        <span>sub title</span>
      </p>
    </div>
  </div>
`

const test = async (options) => {
  const htmlObject = html(htmlstring2)
  return readRecursively(htmlObject)
  // return htmlObject
}


export default test
