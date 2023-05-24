import { Router } from "express";
import github from "./githubJobs";

const router = Router();

router.use("/github", github);

export default router;
