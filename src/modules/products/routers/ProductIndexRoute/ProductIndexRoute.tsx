import { Product } from "../../components";
import { useProductsFacade } from "../../facade";
import Grid from "@mui/material/Grid2";
import { BasicLayout } from "../../../core/layouts";

const ProductIndexRoute = () => {
  const { products, loading } = useProductsFacade();

  return (
    <BasicLayout loading={loading}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
      >
        {products.map(
          ({
            name,
            id,
            description,
            image,
            price,
            available,
            minAmount,
            maxAmount,
          }) => (
            <Grid
              key={id}
              size={{ xs: 2, sm: 4, md: 4, lg: 3 }}
              height="max-content"
            >
              <Product
                id={id}
                name={name}
                description={description}
                image={image}
                price={price}
                available={available}
                minAmount={minAmount}
                maxAmount={maxAmount}
              />
            </Grid>
          )
        )}
      </Grid>
    </BasicLayout>
  );
};

export default ProductIndexRoute;
