import Router, { response } from "express";
import getHash from "../utils/hash.js";
import mongoose from "mongoose";

const loginRoutes = Router()

loginRoutes.post('/')