import { useEffect, useState } from "react";

// Hook personnalisé pour débouncer une valeur
// Inspiré de : https://codesandbox.io/s/react-query-debounce-ted8o?file=/src/useDebounce.js
export default function useDebounce<T>(value: T, delay: number): T {
  // État pour stocker la valeur debouncée
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Créer un timer pour mettre à jour la valeur debouncée après le délai spécifié
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Fonction de nettoyage pour annuler le timer si la valeur change
    // Cela empêche la mise à jour de la valeur debouncée si la valeur d'origine change rapidement
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Relancer l'effet si la valeur ou le délai change

  // Retourner la valeur debouncée
  return debouncedValue;
}
