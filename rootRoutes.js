const express= require("express");
import {
  getReservationsController,
  getReservationController,
  createReservationController,
  deleteReservationController,
  deleteAllReservationsController,
} from '../controller/reservation.controller';
import {
    getSallesController,
    getSalleController,
    createSalleController,
    deleteSalleController,
} from '../controller/room.controller';


const router = router();



router.get('/', getReservationsController);
router.get('/', getSallesController);
router.get('/:nomReunion', getReservationController);
router.get('/:nom', getSalleController);
router.post('/', createSalleController);
router.post('/', createReservationController);
router.delete('/:nomReunion', deleteReservationController);
router.delete('/', deleteAllReservationsController);
router.delete('/:nom', deleteSalleController);




export default router;

