import { Router } from "express";

import * as controllers from "../../controllers/client/topic.controller";

const router: Router = Router();

router.get("/", controllers.index);

export const topicRoutes: Router = router;