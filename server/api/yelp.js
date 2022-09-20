const router = require("express").Router();
module.exports = router;
require("dotenv").config();

const yelp = require("yelp-fusion");
// const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_API_KEY = "i_ARcXQjIleCN37-04QGL8ZPxm0kUpQydV8qFXwB4e5I1wTH6xUIIXPf-9BVwKxd6IHoLtEGwkwZjPdKEa71JbUs-wucX729H7f3jRFukdy1mWOeJyyik8QghNzsYHYx"
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
