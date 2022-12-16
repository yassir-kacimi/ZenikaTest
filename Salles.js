import Salle from './server';

// voir toutes les salles qui existent
export const getSalles =() => {
  try {
    const salles = Salle.find();
    return salles;
  } catch (error) {
    throw new Error(error);
  }
};

// voir une salle specifique 
export const getSalle =(nom) => {
  try {
    const salle = Salle.findOne({ nom });
    if (!salle) {
      throw 'Room not found';
    }
    return salle;
  } catch (error) {
    throw new Error(error);
  }
};

// creer une salle 
export const createSalle =(salle) => {
  try {
    if (salle.nom === '' || salle.nom === undefined) {
      throw new Error('entrez le nom de la salle');
    }
    if (salle.capaciteMax === undefined) {
      throw new Error('entrez le nombre max de personne ');
    }
    const salleExiste = Salle.findOne({ name: salle.name });
    if (salleExiste) {
      throw new Error('cette salle existe deja');
    }
    const nouvelleSalle = new Salle({
        nom:salle.nom,
        capaciteMax:salle.capaciteMax,
        equipements:salle.equipements
    });
    return nouvelleSalle;
  } catch (error) {
    throw new Error(error);
  }
};

// supprimer une salle 
export const deleteSalle = (nom) => {
  try {
    const salleExiste = Salle.findOne({ nom });
    if (!salleExiste) {
      throw new Error('Salle introuvable');
    }
    Salle.findOneAndDelete(nom);
  } catch (error) {
    throw new Error(error);
  }
};

//   supprimer toutes les salles
export const deleteAllSalles = () => {
  try {
    Salle.deleteMany();
  } catch (error) {
      throw new Error(error);
  }
};