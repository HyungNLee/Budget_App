import React from 'react';
import { connect } from 'react-redux';
import { updateSubCatName, updateSubCatNameTrans } from '../../actions';

class SubCategoryNameDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this._newName = null;
    this._oldName = null;
    this._groupCatName = null;
    this.dispatch = this.props.dispatch;
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.updateSubCatName = this.updateSubCatName.bind(this);
  }

  showForm() {
    this.setState({
      showForm: true,
    });
  }

  hideForm() {
    this.setState({
      showForm: false
    });
  }

  updateSubCatName(event) {
    event.preventDefault();

    if (!this._newName.value) {
      return;
    }

    this.dispatch(updateSubCatName(this._newName.value, this._oldName.value, this._groupCatName.value));
    // this.dispatch(updateSubCatNameTrans(this._newName.value, this._oldName.value));
    this.dispatch(updateSubCatNameTrans(this.props.transactionList, this._newName.value));

    this._newName = null;
    this._oldName = null;
    this._groupCatName = null;

    this.hideForm();
  }

  render() {
    let displayView = null;

    if (this.state.showForm) {
      displayView = 
        <form className='update-name-form' onSubmit={this.updateSubCatName}>
          <input type='text' defaultValue={this.props.name} ref={(input) => { this._newName = input }} />
          <input type='hidden' value={this.props.name} ref={(input) => { this._oldName = input }} />
          <input type='hidden' value={this.props.groupKey} ref={(input) => { this._groupCatName = input }} />
        </form>
    } else {
      displayView = 
        <p className='name-display' onClick={this.showForm}>{this.props.name}</p>
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