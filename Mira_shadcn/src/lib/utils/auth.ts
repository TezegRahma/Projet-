// utils/auth.ts

// Fonction pour vérifier si l'utilisateur est authentifié
export function isLoggedIn() {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  // Vérifie si les tokens sont présents et valides
  return accessToken !== null && refreshToken !== null;
}

// Fonction pour obtenir le type d'utilisateur
export function getUserType() {
  return localStorage.getItem('userType');
}

// Fonction pour obtenir l'ID de l'utilisateur
export function getUserCin() {
  return localStorage.getItem('userCin');
}


// utils/auth.ts

// Importer d'autres modules ou fonctions si nécessaire

export function loggedasadministratif() {
  return getUserType() === 'administratif';
}
export function loggedasadministrateur() {
  return getUserType() === 'administrateur';
}

export function loggedasenseignant() {
  return getUserType() === 'enseignant';
}

export function loggedasetudiant() {
  return getUserType() === 'etudiant';
}

// Fonction pour déconnecter l'utilisateur
export function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userType');
  localStorage.removeItem('userId');
}
