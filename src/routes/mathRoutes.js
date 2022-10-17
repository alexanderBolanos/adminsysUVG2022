const { Router } = require("express");
const mathControllers = require("../controllers/mathControllers");

const router = Router();

router.get("/sumar/:a/:b", mathControllers.sumar);
router.get("/restar/:a/:b", mathControllers.restar);
router.get("/multiplicar/:a/:b", mathControllers.multiplicar);
router.get("/dividir/:a/:b", mathControllers.dividir);

module.exports = router;