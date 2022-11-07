import { Router, Request, Response } from "express";
import { StockController, VehiclesController, SystemController, UsersController } from "@controllers";

const router = Router();
const vehiclesController = new VehiclesController();
const systemController = new SystemController();
const stockController = new StockController();
const usersController = new UsersController();

router.get('', (req: Request, res: Response) => {
    // res.render('Home');
    res.redirect('/vehicles');
});

router.get('/vehicles', vehiclesController.listVehicles.bind(vehiclesController));
router.get('/vehicles/:id', vehiclesController.findVehicle.bind(vehiclesController));
router.post('/vehicles', vehiclesController.createVehicle.bind(vehiclesController));
router.delete('/vehicles/:id', vehiclesController.deleteVehicle.bind(vehiclesController));
router.patch('/vehicles', vehiclesController.updateVehicle.bind(vehiclesController));

router.get('/system', systemController.listSystem.bind(systemController));

router.get('/stock', stockController.listStock.bind(stockController));
router.get('/stock/:id', stockController.findStockItem.bind(stockController));
router.post('/stock', stockController.createStock.bind(stockController));
router.delete('/stock/:id', stockController.deleteStockItem.bind(stockController));
router.patch('/stock', stockController.updateStockItem.bind(stockController));

router.get('/users', usersController.listUsers.bind(usersController));
router.get('/users/:id', usersController.findUser.bind(usersController));
router.post('/users', usersController.createUser.bind(usersController));
router.delete('/users/:id', usersController.deleteUser.bind(usersController));
router.patch('/users', usersController.updateUser.bind(usersController));

export default router;