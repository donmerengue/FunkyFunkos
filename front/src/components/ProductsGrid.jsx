// react
import React from "react";
import { Link } from "react-router-dom";
//styles
import theme from "../utils/theme";
// Material UI
import {
  Container,
  ImageList,
  Card,
  ImageListItem,
  ImageListItemBar,
  Rating,
} from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import edEin from "../assets/ed-ein.png";
// Utils
import { editProductName } from "../utils/editProductName";

const ProductsGrid = ({ products }) => {
  return (
    <Container>
      <ImageList
        gap={12}
        sx={{
          marginTop: "20px",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(280px, 1fr))!important",
        }}
      >
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <Link to={`/${editProductName(product.name)}/details`}>
                <ImageListItem sx={{ height: "100% !important" }}>
                  <ImageListItemBar
                    sx={{
                      backgroundColor: "#DD702C",
                      background:
                        "linear-gradient(to bottom, rgba(221,112,44,1)0%, rgba(221,112,44,0.7)70%, rgba(221,112,44,0)100%)",
                    }}
                    // title={product.title}
                    title={product.name}
                    subtitle={product.collection}
                    position="top"
                  />
                  <img className="imagen"
                    // src={product.thumbnail}
                    src={product.image}
                    // src={'https://i.imgur.com/0Q1QXkS.png'}
                    // alt={product.title}
                    alt={product.name}
                    loading="lazy"
                    style={{ cursor: "pointer" }}
                  />
                  <ImageListItemBar
                    title={product.price.toString().concat("$")}
                    actionIcon={
                      <Rating
                        value={product.rating}
                        precision={0.5}
                        readOnly
                        sx={{ mr: "10px", color: "rgba(255,255,255,0.8)" }}
                        emptyIcon={
                          <StarBorder
                            sx={{
                              color: "rgba(255,255,255,0.8)",
                            }}
                          ></StarBorder>
                        }
                      />
                    }
                  />
                </ImageListItem>
              </Link>
            </Card>
          );
        })}
      </ImageList>
    </Container>

    // <div>
    //   <Grid
    //     container
    //     spacing={10}
    //     className="flex-container mx-auto bg-color"
    //     style={{ margin: "20px 0px", width: "85%" }}>
    //     {products.map((product) => {
    //       return (
    //         <Grid item md={3} sm={3} xs={6} key={product.id}>
    //           <ProductCard product={product} />
    //         </Grid>
    //       );
    //     })}
    //   </Grid>
    // </div>
  );
};

export default ProductsGrid;
