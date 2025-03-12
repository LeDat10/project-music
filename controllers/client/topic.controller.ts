import {Request, Response, Router} from "express";

import Topic from "../../models/topic.model";

export const index = async (req: Request, res: Response) => {
    const topics = await Topic.find({
        deleted: false
    });


    
    res.render("client/pages/topics/index", {
        titlePage: "Trang chủ đề bài hát",
        topics: topics
    });
};