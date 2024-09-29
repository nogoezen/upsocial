// Importation des composants de routage de React Router
import { Routes, Route } from "react-router-dom";

// Importation des composants de pages
import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";

// Importation des layouts
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

// Importation des formulaires d'authentification
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";

// Importation du composant Toaster pour les notifications
import { Toaster } from "@/components/ui/toaster";

// Importation des styles globaux
import "./globals.css";

// Définition du composant principal App
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Routes publiques */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Routes privées */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      {/* Composant Toaster pour afficher les notifications */}
      <Toaster />
    </main>
  );
};

// Exportation du composant App
export default App;
