<?php

namespace App\Http\Controllers;

use App\Models\Analyse;
use Illuminate\Http\Request;

class AnalyseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $analyses = Analyse::with('compte') // Assure-toi que la relation est bien définie
        ->where('resultat', 'en cours')
        ->get();

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
