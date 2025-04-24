<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use App\Models\Compte;
use App\Models\Patient;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class FactureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $factures = Facture::with('patient.compte')->get();
    
        $formatted = $factures->map(function ($facture) {
            return [
                'id' => $facture->id,
                'patient_nom' => $facture->patient?->compte?->nom ?? 'N/A',
                'patient_prenom' => $facture->patient?->compte?->prenom ?? 'N/A',
                'montant_total' => $facture->montant_total,
                'date_emission' => $facture->date_emission,
                'date_paiement' => $facture->date_paiement,
                'statut' => $facture->statut,
                'description' => $facture->description,
                'patient_id' => $facture->patient_id
            ];
        });
        return $formatted;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $compte = Compte::where('roleable_type', Patient::class)
               ->where('roleable_id', $request->patient_id)
               ->first();
        $facture = new Facture();
        $facture->patient_id=$request->patient_id;
        $facture->compte_id=$compte->id;
        $facture->montant_total=$request->montant_total;
        $facture->statut=$request->statut;
        $facture->date_emission=$request->date_emission;
        $facture->date_paiement=$request->date_paiement;
        $facture->description=$request->description;
        // dd($compte);
        $facture->save();
        $pdf = Pdf::loadView('facture.pdf', ['facture' => $facture]);

         return $pdf->download('facture_'.$facture->id.'.pdf');
        // return response()->json([
        //     'message' => 'Facture created successfully',
        //     'facture' => $facture
        // ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Facture $facture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Facture $facture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Facture $facture)
    {
        $compte = Compte::where('roleable_type', Patient::class)
        ->where('roleable_id', $request->patient_id)
        ->first();
        $facture->patient_id=$request->patient_id;
        $facture->compte_id=$compte->id;
        $facture->montant_total=$request->montant_total;
        $facture->statut=$request->statut;
        $facture->date_emission=$request->date_emission;
        $facture->date_paiement=$request->date_paiement;
        $facture->description=$request->description;
        // dd($compte);
        $facture->save();
        return response()->json([
            'message' => 'Facture mis à jour avec succés',
            'facture' => $facture
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Facture $facture)
    {
        $facture->delete();
        return response()->json([
            'message' => 'Facture supprimée avec succès'
        ]);
    }
}
