import React from 'react';
import { connect } from 'react-redux';

class SubCategoryNameDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  render() {
    let displayView = null;

    if (this.state.showForm) {

    } else {
      displayView = 
        <p>{this.props.name}</p>
    }
    return(
      <td>
        {displayView}
      </td>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryNameDisplay);