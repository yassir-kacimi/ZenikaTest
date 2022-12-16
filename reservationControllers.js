const express= require("express");

import {
  getReservations,
  getReservation,
  createReservation,
  deleteReservation,
  deleteAllReservations,
} from './reservation';

export function getReservationsController (req, res) {
  try {
    const reservations =  getReservations();
    res.json(reservations);
  } catch (error) {
    throw new Error(error);
  }
};

export function getReservationController(req, res)  {
  try {
    const reservation = getReservation(req.params.nomReunion);
    if (!reservation) {
      throw 'Reservation introuvable';
    }
    res.json(reservation);
  } catch (error) {
    throw new Error(error);
  }
};

export function createReservationController(req, res) {
  try {
    const reservation = createReservation(req.body);
    res.json(reservation);
  } catch (error) {
    throw new Error(error);
  }
};

export function deleteReservationController(req, res){
  try {
    const reservation = deleteReservation(req.params.nomReunion);
    throw 'Reservation supprimee';
  } catch (error) {
    throw new Error(error);
  }
};

export function deleteAllReservationsController (req, res) {
  try {
    deleteAllReservations();
    throw 'Toutes les reservations sont supprimees';
  } catch (error) {
    throw new Error(error);
  }
};