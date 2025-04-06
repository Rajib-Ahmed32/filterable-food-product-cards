import React, { useState } from "react";
import { CircularProgress, Box, Typography, Alert } from "@mui/material";
import SearchBar from "./SearchBar"; // Make sure this file/component exists

const CategoryCards = ({ categories, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCategories = categories.filter((category) =>
    category.strCategory.toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Alert severity="error">Error fetching data!</Alert>
      </Box>
    );
  }

  return (
    <div>
      <div className="searchbar">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      </div>

      <div className="card-container">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.idCategory} className="card">
              <h3>{category.strCategory}</h3>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <p>{category.strCategoryDescription.substring(0, 100)}...</p>
            </div>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            No categories found
          </Typography>
        )}
      </div>
    </div>
  );
};

export default CategoryCards;
