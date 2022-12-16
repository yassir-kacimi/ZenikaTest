// import mongoose from 'mongoose';
import Reservation from './server';



//  voir toutes les reservations qui existent  
export function getReservations() {
    try {
      return Reservation.find();
    } catch (error) {
        throw new Error(error);
    }
  };

  //  voir une reservation 
  export const getReservation = (nomReunion) => {
    try {
      const reservation = Reservation.findOne({ nomReunion });
      if (!reservation) {
        throw 'Reservation introuvable';
      }
      return reservation;
    } catch (error) {
        throw new Error(error);
    }
  };

// creer une reservation 
export function createReservation(reservation) {
    try {
      const ReservationExiste = Reservation.findOne({
        nomReunion: reservation.nomReunion,
      });
      if (ReservationExiste) {
        throw 'Cette Reservation existe deja';
      }
      const nouvelleReservation = new Reservation({
        nomReunion:reservation.nomReunion,
        typeReunion:reservation.typeReunion,
        nombrePersonnes:reservation.nombrePersonnes
      });
      nouvelleReservation.save();
      return nouvelleReservation;
    } catch (error) {
        throw new Error(error);
    }
  };

//   supprimer une reservation
export const deleteReservation = (nomReunion) => {
    try {
      const reservation = Reservation.findOne(nomReunion);
      if (!reservation) {
        throw 'Cette Reservation n existe pas';
      }
      Reservation.findOneAndDelete(nomReunion);
    } catch (error) {
        throw new Error(error);
     };
};

//   supprimer toutes les reservations
export const deleteAllReservations = () => {
    try {
    Reservation.deleteMany();
    } catch (error) {
        throw new Error(error);
    }
  };


    