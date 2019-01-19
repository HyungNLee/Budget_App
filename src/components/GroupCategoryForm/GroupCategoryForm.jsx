import React from 'react';
import { connect } from 'react-redux';
import { newGroupCategory } from './../../actions';

const GroupCategoryForm = ({ dispatch, groupCategories }) => {

  let _catName = null;

  function addNewForm(event) {
    event.preventDefault();

    if (!_catName.value || groupCategories[_catName.value] != null) {
      console.log('Input Error');
      return;
    }

    // dispatch here to create new category.
    dispatch(newGroupCategory(_catName.value));

    console.log(_catName.value);
    _catName.value = '';
  }

  return (
    <form onSubmit={addNewForm}>
      <label>New Category: </label>
      <input type='text' placeholder='Enter Category Name...' ref={(input) => {_catName = input}}/>
      <button type='submit'>Submit</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    groupCategories: state.groupCategories
  }
}

export default connect(mapStateToProps)(GroupCategoryForm);