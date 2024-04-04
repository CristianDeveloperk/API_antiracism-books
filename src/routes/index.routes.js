import { Router } from "express";
import { bookRoute } from "./books.routes.js";

const routes = Router();

routes.use(bookRoute); 

export { routes }