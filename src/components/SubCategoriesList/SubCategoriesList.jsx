import React from 'react';
import PropTypes from 'prop-types';
// Component imports.
import SubCategoryItem from '../SubCategoryItem/SubCategoryItem.jsx';

function SubCategoriesList(props) {

  return (
    <div>
      {props.subKeyArray.map(subCatName => 
        <SubCategoryItem 
          key={subCatName}
          groupCategoryName={props.groupCategoryName}
          subCategoryName={subCatName}
        />
        )
      }
    </div>
  );
}

SubCategoriesList.propTypes = {
  subKeyArray: PropTypes.array,
  groupCategoryName: PropTypes.string
}

export default SubCategoriesList;