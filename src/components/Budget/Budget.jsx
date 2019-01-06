import React from 'react';
// Component imports
import GroupCategoriesList from '../GroupCategoriesList/GroupCategoriesList';
import GroupCategoryForm from '../GroupCategoryForm/GroupCategoryForm.jsx';

function Budget() {
  return (
    <div>
      <GroupCategoryForm />
      <GroupCategoriesList />
    </div>
  );
}

export default Budget;