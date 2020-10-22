import { createElement, Component, render } from './toy-react';

class MyComponent extends Component {
    render() {
        return <div>
            MyComponent
            {this.children}
            </div>
    }
}


render(<MyComponent id='11' class='22'>
    h
    <span>111</span>
    <div>222</div>
</MyComponent>, document.body)

