<?php

namespace App\Http\Controllers;
use Barryvdh\DomPDF\Facade\Pdf;

use App\Models\Analyse;
use Illuminate\Http\Request;

class AnalyseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $analyses = Analyse::with(['patient', 'technicien_labo'])->get();

    return response()->json($analyses);
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Analyse $analyse)
    {
        //
    }
    public function downloadAllAnalyses()
{
    $analyses = Analyse::with('Technicien_labo')->get(); // Charge les techniciens liés
    $pdf = Pdf::loadView('pdf.all-analyses', compact('analyses'));
    return $pdf->download('toutes_les_analyses.pdf');
}

}
