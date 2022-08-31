// React
import React from "react";
import { Link } from "react-router-dom";
// Material
import {
  Box,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Rating,
} from "@mui/material";
import {
  Container,
  ImageList,
  Card,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card
        sx={{ height: "450px", boxShadow: 12 }}
        className="border shadow-sm"
        style={{
          backgroundColor: "#F5F5F5",
        }}
      >
        <CardHeader
          title={product.title}
          subheader={<Link to="products-by-category">{product.category}</Link>}
          sx={{ color: "text.main" }}
        />
        <Link to={`/${product.id}/details`}>
          <CardMedia
            component="img"
            height="200"
            image={product.thumbnail}
            alt="no hay imagen"
          />
          <CardContent sx={{ height: "20%" }}>
            <Typography variant="body2" color="secondary">
              {product.description.slice(0, 50).concat("...")}
            </Typography>
          </CardContent>
        </Link>
        <CardActions>
          <span>{product.price.toString().concat("$")}</span>
          <Rating value={product.rating} precision={0.5} readOnly />
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
