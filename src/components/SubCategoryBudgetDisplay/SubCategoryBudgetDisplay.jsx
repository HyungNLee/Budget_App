import React from 'react';
import { connect } from 'react-redux';
import { updateBudget } from '../../actions';

class SubCategoryBudgetDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this._newBudget = null;
    this._subCatName = null;
    this._groupCatName = null;
    this.dispatch = this.props.dispatch;
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.setNewBudget = this.setNewBudget.bind(this);
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

  formatToDollar(amount) {
    return '$' + amount;
  }

  setNewBudget(event) {
    event.preventDefault();

    if (!this._newBudget.value) {
      return;
    }

    // Add action to reducer to update budget of selected category.
    this.dispatch(updateBudget(this._groupCatName.value, this._subCatName.value, parseFloat(this._newBudget.value).toFixed(2)));

    this._newBudget = null;
    this._subCatName = null;
    this._groupCatName = null;

    this.hideForm();
  }

  render() {
    let displayView = null;
    if (this.state.showForm) {
      console.log('FORM');
      displayView =
        <form className='budget-form' id={this.props.formId} onSubmit={this.setNewBudget}>
          <input type='number' step='0.01' min='0' defaultValue={parseFloat(this.props.budgetedAmount)} ref={(input) => { this._newBudget = input }} />
          <input type='hidden' value={this.props.name} ref={(input) => { this._subCatName = input }} />
          <input type='hidden' value={this.props.groupKey} ref={(input) => { this._groupCatName = input }} />
        </form>
    } else {
      displayView =
        <p className='budget-display' id={this.props.displayId} onClick={this.showForm}>{this.formatToDollar(this.props.budgetedAmount)}</p>
    }
    return (
      <td className='budget-table' id={this.props.id}>
        {displayView}
      </td>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryBudgetDisplay);