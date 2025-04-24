<?php

namespace App\Http\Controllers;

use App\Models\Technicien_labo;
use Illuminate\Http\Request;

class TechnicienLaboController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    
    


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
    public function show(Technicien_labo $technicien_labo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Technicien_labo $technicien_labo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Technicien_labo $technicien_labo)
    {
          
    // $technicien = Technicien_labo::find($id);

    if (!$technicien) {
        return response()->json(['message' => 'Technicien non trouvé.'], 404);
    }

    
    $validated = $request->validate([
        'nom' => 'required|string|max:255',
        'prenom' => 'required|string|max:255',
        'email' => 'required|email|unique:technicien_labos,email,' . $id,
        'tel' => 'required|string|max:20',
        'date_Naissance' => 'required|date',
        'specialite' => 'nullable|string|max:255',
        'adresse' => 'nullable|string|max:255',
        
    ]);
    $technicien->update($validated);

    return response()->json([
        'message' => 'Technicien mis à jour avec succès.',
        'technicien' => $technicien
    ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Technicien_labo $technicien_labo)
    {
        //
    }
}
