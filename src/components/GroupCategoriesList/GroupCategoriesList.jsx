import React from 'react';
import { connect } from 'react-redux';
// Component imports.
import GroupCategoryItem from '../GroupCategoryItem/GroupCategoryItem.jsx';

const GroupCategoriesList = ({ groupCategories }) => {

  return (
    <div>
      {Object.keys(groupCategories)
        .map(groupName =>
          <GroupCategoryItem
            key={groupName}
            name={groupName}
          />
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    groupCategories: state.groupCategories,
  };
}

export default connect(mapStateToProps)(GroupCategoriesList);