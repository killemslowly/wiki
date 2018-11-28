import React, { Component } from 'react';

export default class ReactComp extends Component {

  constructor() {
    super();
    const rckey = "";
    const rcid = "";
    const rchref = "";
    const rctitle = "";
  }
  rckey = this.props.key;
  rcid = this.props.id;
  rchref = this.props.href;
  rctitle = this.props.title;

render() {
    return(
      <div id = {rcid} key = {rckey}>
        <p href = {rchref}>{rctitle}</p>
        <button
            key={rckey}
              onClick={() => {
                        console.log('Clicked index '+ {rchref} + {rctitle});
                      }}
                    >
                    Прочитано
        </button>
      </div>
}
}
