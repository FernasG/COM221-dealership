import { Router, Request, Response } from "express";
import { VehicleController } from "@controllers";

const router = Router();
const vehicleController = new VehicleController();

router.get('', (req: Request, res: Response) => {
    res.render('Home');
});

router.post('/vehicles', vehicleController.createVehicle.bind(vehicleController));
router.get('/vehicles/:id',  vehicleController.findVehicle.bind(vehicleController));
router.get('/vehicles',  vehicleController.listVehicles.bind(vehicleController));

export default router;