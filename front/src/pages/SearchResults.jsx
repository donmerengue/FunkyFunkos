import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../store/ProductsState";
//components
import ProductsGrid from "../components/ProductsGrid";

const ResultadosBusqueda = () => {
  const { searchString } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchResults(searchString));
  }, []);
  const products = useSelector((state) => state.products.productsList);

  const productsState = useSelector((state) => state.products);

  if (productsState.loading) {
    return <div>Loading...</div>;
  }
  if (productsState.error) {
    return <div>Error: {productsState.error}</div>;
  }
  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  );
};

export default ResultadosBusqueda;
