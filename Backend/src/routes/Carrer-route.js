import { Router } from "express";
import { Carrer } from "../controller/Carrer-controller.js";

const router = Router()

router.route("/carrer").post(Carrer)