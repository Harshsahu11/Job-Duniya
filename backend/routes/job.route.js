import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobsById, postJob } from "../controllers/job.controller.js"

const router = express.Router();

router.post("/post",isAuthenticated,postJob);
router.get("/get",isAuthenticated,getAllJobs);
router.post("/getadminjobs",isAuthenticated,getAdminJobs);
router.post("/get/:id",isAuthenticated,getJobsById);

export default router;