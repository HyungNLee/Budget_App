import React from 'react';
import { connect } from 'react-redux';
import { updateSubCatName, updateSubCatNameTrans, deleteSubCategory } from '../../actions';

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
    this.deleteSubCategoryClick = this.deleteSubCategoryClick.bind(this);
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

    if (!this._newName.value || this._newName.value === this._oldName.value || this.props.groupCategories[this._groupCatName.value].subCategories[this._newName.value] != null) {
      console.log('Input Error');
      return;
    }

    this.dispatch(updateSubCatName(this._newName.value, this._oldName.value, this._groupCatName.value));
    this.dispatch(updateSubCatNameTrans(this.props.transactionList, this._newName.value));

    this._newName = null;
    this._oldName = null;
    this._groupCatName = null;

    this.hideForm();
  }

  deleteSubCategoryClick() {
    console.log(`Delete ${this.props.name} in ${this.props.groupKey}`);
    this.dispatch(updateSubCatNameTrans(this.props.transactionList, ''));
    this.dispatch(deleteSubCategory(this.props.groupKey, this.props.name));
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
        <button className='sub-cat-delete-button' onClick={this.deleteSubCategoryClick}>Minus</button>
      </td>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    groupCategories: state.groupCategories,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryNameDisplay);