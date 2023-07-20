import React, { useState, useEffect, Suspense } from "react";
import { getData } from "../../utils/getDatas.js";
import {
  ContentContainer,
  ContentWrapper,
  Content,
  CardWrapper,
} from "./styled.js";
import Skeleton from "../Skeleton";
import PropTypes from "prop-types";

const Card = React.lazy(() => import("../Card"));

const CardList = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getData();
      setProducts(response.data);
    };

    fetchApi();
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      const search = products.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(search);
    } else {
      setFilteredProducts(products);
    }
  }, [query, products]);

  return (
    <ContentContainer>
      <ContentWrapper>
        <Content style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <CardWrapper key={index}>
                <Suspense fallback={<Skeleton />}>
                  <Card data={product} />
                </Suspense>
              </CardWrapper>
            ))
          ) : (
            <div>No results found....</div>
          )}
        </Content>
      </ContentWrapper>
    </ContentContainer>
  );
};

CardList.propTypes = {
  query: PropTypes.string.isRequired,
};

export default CardList;
