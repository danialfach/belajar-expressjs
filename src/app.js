import express from "express";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js"
import logs from "./middleware/logs.js";

const app = express();

app.use(logs);
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(3300, () => {
    console.info("Server running in port 3300")
});