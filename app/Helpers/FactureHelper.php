<?php 

namespace App\Helpers;

use App\Models\Facture;
use App\Models\FactureItem;
use App\Models\Rendez_vous;
use App\Models\Analyse;
use App\Models\Chirurgie;

class FactureHelper
{
    public static function generateFacture($itemable)
    {
        $patient = $itemable->patient;

        $items = [];

        // Only bill the current itemable if not already billed
        if (!$itemable->factureItems()->exists()) {
            $items[] = [
                'itemable_type' => get_class($itemable),
                'itemable_id' => $itemable->id,
                'montant' => $itemable->prix ?? 0,
                'description' => class_basename($itemable) . ' automatique',
            ];
        }

        if (count($items)) {
            $total = array_sum(array_column($items, 'montant'));

            $facture = Facture::create([
                'patient_id' => $patient->id,
                'compte_id' => auth()->id() ?? 1,
                'montant_total' => $total,
                'statut' => 'pending',
                'description' => 'Facture générée automatiquement',
            ]);

            $facture->items()->createMany($items);
        }
    }

    public static function generateFactureItem($itemable)
    {
        // Add one item to a new facture if not already billed
        self::generateFacture($itemable);
    }
}