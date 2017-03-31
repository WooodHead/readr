import html from '../../parsers/html'
import _ from 'lodash'

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

const test = async (options) => {
  return html(htmlstring)
}

export default test
