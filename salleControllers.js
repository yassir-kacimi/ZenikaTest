const express= require("express");

import {
  getSalles,
  getSalle,
  createSalle,
  deleteSalle,
} from './Salles';

export function getSallesController (req, res) {
  try {
    const salles =  getSalles();
    res.json(salles);
  } catch (error) {
    throw new Error(error);
  }
};

export function getSalleController (req, res){
  try {
    const salle = getSalle(req.params.nom);
    res.json(salle);
  }  catch (error) {
    throw new Error(error);
  }
};

export function createSalleController(req, res){
  try {
    const salle = createSalle(req.body);
    res.json(salle);
  }  catch (error) {
    throw new Error(error);
  }
};

export function deleteSalleController(req, res){
  try {
    const salle = deleteSalle(req.params.nom);
    res.json(salle);
  } catch (error) {
    throw new Error(error);
  }
};
