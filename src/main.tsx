// Importation des dépendances nécessaires
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Importation du composant principal de l'application
import App from "./App";
// Importation des fournisseurs de contexte
import { AuthProvider } from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

// Rendu de l'application dans l'élément racine du DOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Activation du mode strict de React pour des vérifications supplémentaires
  <React.StrictMode>
    {/* BrowserRouter pour la gestion du routage */}
    <BrowserRouter>
      {/* QueryProvider pour la gestion des requêtes */}
      <QueryProvider>
        {/* AuthProvider pour la gestion de l'authentification */}
        <AuthProvider>
          {/* HelmetProvider pour la gestion des métadonnées de la page */}
          <HelmetProvider>
            {/* Composant principal de l'application */}
            <App />
          </HelmetProvider>
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
