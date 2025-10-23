import React from "react";
import Icon from "../AppIcon"; // percorso: components/ui -> components/AppIcon

export default function IndustryToggle({ value, onChange, className = "" }) {
  const isRestaurant = value === "restaurant";

  return (
    <div className={`bg-white rounded-full p-1 shadow-brand border border-border inline-flex ${className}`}>
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => onChange?.("restaurant")}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-brand ${
            isRestaurant
              ? "bg-primary text-primary-foreground shadow-brand"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon name="UtensilsCrossed" size={16} className="mr-2" />
          Ristoranti
        </button>

        <button
          type="button"
          onClick={() => onChange?.("salon")}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-brand ${
            !isRestaurant
              ? "bg-primary text-primary-foreground shadow-brand"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon name="Scissors" size={16} className="mr-2" />
          Saloni
        </button>
      </div>
    </div>
  );
}
