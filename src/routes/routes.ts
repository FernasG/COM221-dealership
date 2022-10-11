import { Router, Request, Response } from "express";
import { VehicleController } from "@controllers";

const router = Router();
const vehicleController = new VehicleController();

router.get('', (req: Request, res: Response) => {
    res.render('Home');
});

router.get('/vehicles',  vehicleController.listVehicles.bind(vehicleController));
router.get('/vehicles/:id',  vehicleController.findVehicle.bind(vehicleController));
router.post('/vehicles', vehicleController.createVehicle.bind(vehicleController));
router.delete('/vehicles/:id', vehicleController.deleteVehicle.bind(vehicleController));
router.patch('/vehicles', vehicleController.updateVehicle.bind(vehicleController));

export default router;