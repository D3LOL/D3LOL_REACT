'use strict';

import React from 'react';

class Champion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const data = this.props;
    // console.log('name:::: ', this.props.data.name)
    const championView = (
      <div>
        { this.props.data.name }
      </div>
    );

    return (
      <div>
        { championView }
      </div>
    );
  }
}

Champion.defaultProps =  {
  data: {
    name: 'CHAMPION_NAME'
  }
}

export default Champion;
