import React, { Component } from 'react';

export default class ReactComp extends Component {

  constructor() {
    super();
  }
  const cKey = this.props.key;
  const rcid = this.props.id;
  const rchref = this.props.href;
  const rctitle = this.props.title;
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
