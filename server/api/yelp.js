const router = require("express").Router();
module.exports = router;
require("dotenv").config();

const yelp = require("yelp-fusion");
const YELP_API_KEY = "vpZmd4o3t4LjWo75baAwCdAMYLJt3rsaPhbja4kX85vJ0x2P_1o3nbqHYO28DMAPsucM4MkliR6yQxRIJVJSzB7CQOEgaU0Kd9ZQ4y5Ov2Q0mEJe3wrk9da_Pe_lYHYx";
const client = yelp.client(YELP_API_KEY);

// POST /api/yelp
router.post("/", async (req, res, next) => {
  try {
    const results = await client.search(req.body);
    res.send(results.jsonBody.businesses);
  } catch (error) {
    next(error);
  }
});
