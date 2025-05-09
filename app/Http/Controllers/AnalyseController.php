<?php

namespace App\Http\Controllers;

use App\Models\Analyse;
use App\Models\Technicien_labo;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Support\Facades\Response;


class AnalyseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $analyses = Analyse::with([
            'patient.compte',  
            'technicien_labo.compte'    
        ])->get();
        // dd($analyses);
    
        $formatted = $analyses->map(function ($a) {
            return [
                'id' => $a->id,
                'type' => $a->type,
                'analyse_date' => $a->analyse_date,
                'analyse_heure' => $a->analyse_heure,
                'resultat' => $a->resultat,
                'patient_nom' => $a->patient?->compte?->nom ?? 'N/A',
                'patient_prenom' => $a->patient?->compte?->prenom ?? 'N/A',
                'tech_nom' => $a->technicien_labo?->compte?->nom ?? 'N/A',
                'tech_prenom' => $a->technicien_labo?->compte?->prenom ?? 'N/A',
                'patient_id' => $a->patient_id,
                'tech_id' => $a->technicien_labo_id,
                'tech'=> $a->technicien_labo,
                'patient'=>$a->patient?->compte
            ];
        });
        return $formatted;
    }
    public function downloadAllAnalyses()
    {
        $analyses = Analyse::with('Technicien_labo')->get(); 
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.all-analyses', compact('analyses'));
        return $pdf->download('toutes_les_analyses.pdf');
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Analyse $analyse)
    {
         // Chargement des relations nécessaires
    $analyse->load('technicien_labo.compte', 'patient.compte');

    // Générer le PDF à partir de la vue
    $pdf = Pdf::loadView('pdf.analyse', [
        'analyse' => $analyse
    ]);

    // Téléchargement du PDF
    return $pdf->download('analyse_' . $analyse->id . '.pdf');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Analyse $analyse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Analyse $analyse)
{
    // Assurer que l'analyse existe grâce à l'injection de dépendance
    // L'ID est déjà fourni par la route, donc pas besoin de findOrFail.

    $analyse->resultat = 'terminé';
    $analyse->save();

    return response()->json(['message' => 'Analyse marquée comme terminée']);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Analyse $analyse)
    {
        //
    }
}
