import React, { useState } from "react";
import { CircularProgress, Box, Typography, Alert } from "@mui/material";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import Pagination from "./Pagination"; 

const CategoryCards = ({ categories, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setPage(1); 
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const filteredCategories = categories
    .filter((category) =>
      category.strCategory.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.strCategory.localeCompare(b.strCategory)
        : b.strCategory.localeCompare(a.strCategory)
    );

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedCategories = filteredCategories.slice(
    startIndex,
    startIndex + itemsPerPage
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
        <SortDropdown sortOrder={sortOrder} onSortChange={handleSort} />
      </div>

      <div className="card-container">
        {paginatedCategories.length > 0 ? (
          paginatedCategories.map((category) => (
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

      <Pagination
        count={Math.ceil(filteredCategories.length / itemsPerPage)}
        page={page}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default CategoryCards;
