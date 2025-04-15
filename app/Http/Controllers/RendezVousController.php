<?php

namespace App\Http\Controllers;

use App\Models\Rendez_vous;
use Illuminate\Http\Request;

class RendezVousController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Validation des données
    $request->validate([
        'doctorID' => 'required|exists:doctors,id',
        'patientID' => 'required|exists:patients,id',
        'rendez_vous_date' => 'required|date',
        'rendez_vous_heure' => 'required|date_format:H:i',
        'type' => 'required|string',
        'statut' => 'required|string',
    ]);

    // Création d'un nouveau rendez-vous
    $rendez_vous = new Rendez_vous();
    $rendez_vous->doctorID = $request->input('doctorID');
    $rendez_vous->patientID = $request->input('patientID');
    $rendez_vous->rendez_vous_date = $request->input('rendez_vous_date');
    $rendez_vous->rendez_vous_heure = $request->input('rendez_vous_heure');
    $rendez_vous->type = $request->input('type');
    $rendez_vous->statut = $request->input('statut');
    $rendez_vous->save();

    return response()->json(['message' => 'Rendez-vous enregistré avec succès'], 201);
}

    /**
     * Display the specified resource.
     */
    public function show(Rendez_vous $rendez_vous)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rendez_vous $rendez_vous)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rendez_vous $rendez_vous)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rendez_vous $rendez_vous)
    {
        //
    }
}
