import { Router, Request, Response } from "express";
import { VehicleController } from "@controllers";

const router = Router();
const vehicleController = new VehicleController();

router.get('', (req: Request, res: Response) => {
    res.render('Home');
});

router.post('vehicle', vehicleController.createVehicle);

export default router;