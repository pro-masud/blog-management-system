import express from "express";
import { blogSetupMiddelware, blogTwoMiddelware, createAdminMiddelware } from "../controllers/createIndexPageController/createAdminRouter.js";

// init express js router here
const router = express.Router();

// create home page router here
router.get("/", createAdminMiddelware);
router.get("/blog", blogTwoMiddelware);
router.get("/blog-setup", blogSetupMiddelware);
// export default router here
export default router;