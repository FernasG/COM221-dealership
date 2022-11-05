import { Router, Request, Response } from "express";
import { StockController, VehicleController, SystemController, UsersController } from "@controllers";

const router = Router();
const vehicleController = new VehicleController();
const systemController = new SystemController();
const stockController = new StockController();
const usersController = new UsersController();

router.get('', (req: Request, res: Response) => {
    // res.render('Home');
    res.redirect('/vehicles');
});

router.get('/vehicles', vehicleController.listVehicles.bind(vehicleController));
router.get('/vehicles/:id', vehicleController.findVehicle.bind(vehicleController));
router.post('/vehicles', vehicleController.createVehicle.bind(vehicleController));
router.delete('/vehicles/:id', vehicleController.deleteVehicle.bind(vehicleController));
router.patch('/vehicles', vehicleController.updateVehicle.bind(vehicleController));

router.get('/system', systemController.listSystem.bind(systemController));

router.get('/stock', stockController.listStock.bind(stockController));
router.post('/stock', stockController.createStock.bind(stockController));

router.get('/users', usersController.listUsers.bind(usersController));


export default router;