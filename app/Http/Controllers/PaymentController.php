<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Payment;
use App\Models\Facture;

class PaymentController extends Controller 
{
    public function store(Request $request)
    {
        // Validation des données reçues
        $request->validate([
            'facture_id' => 'required|exists:factures,id',
            'method' => 'required|string',
            'card_number' => 'nullable|string',
            'expiration' => 'nullable|string',
            'cvv' => 'nullable|string',
        ]);
        
        DB::beginTransaction(); // Démarrage de la transaction
        
        try {
            // Créer un enregistrement dans la table des paiements
            $payment = Payment::create([
                'facture_id' => $request->facture_id,
                'method' => $request->method,
                'card_number' => $request->card_number,
                'expiration' => $request->expiration,
                'cvv' => $request->cvv,
            ]);
            
            // Mettre à jour le statut de la facture
            $facture = Facture::find($request->facture_id);
            $facture->statut = 'payée';
            $facture->save();
            
            DB::commit(); // Confirmer la transaction
            
            return response()->json(['message' => 'Paiement effectué et facture mise à jour'], 200);
        } catch (\Exception $e) {
            DB::rollBack(); // Annuler la transaction en cas d'erreur
            return response()->json(['error' => 'Erreur lors du traitement du paiement', 'details' => $e->getMessage()], 500);
        }
    }
}