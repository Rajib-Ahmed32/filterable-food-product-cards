import React from 'react';
import "./App.css"
import { useMealCategories } from "./hooks/useMealCategories";
import CategoryCards from './components/CategoryCards';

const App = () => {
  const { categories, loading, error } = useMealCategories();

  return (
    <div>
      <CategoryCards categories={categories} loading={loading} error={error}/>
    </div>
  );
}

export default App;

