import React from 'react';
import { connect } from 'react-redux';
// Component imports.
import SubCategoriesList from '../SubCategoriesList/SubCategoriesList.jsx';
import GroupCategory from '../../models/GroupCategory.js';

const GroupCategoryItem = ({ name, category }) => {
  console.log(category);

  let categoryName = category.getName();
  let subKeyArray = category.getCategoryNames();

  return (
    <div>
      <p>Name: {categoryName}</p>
      <SubCategoriesList 
        groupCategoryName={categoryName}
        subKeyArray={subKeyArray}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: ownProps.name,
    category: state.groupCategories[ownProps.name]
  };
}

export default connect(mapStateToProps)(GroupCategoryItem);