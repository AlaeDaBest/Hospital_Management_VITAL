<?php

namespace App\Http\Controllers;

use App\Models\Technicien_labo;
use Illuminate\Http\Request;

class TechnicienLaboController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getP()
    {
        
    $email = $request->session()->get('email');

    if (!$email) {
        return response()->json(['error' => 'Utilisateur non connecté'], 401);
    }

    $technicien = Technicien_labo::where('email', $email)->first();

    if (!$technicien) {
        return response()->json(['error' => 'Technicien non trouvé'], 404);
    }

    return response()->json([
        'id' => $technicien->id,
        'nom' => $technicien->nom,
        'prenom' => $technicien->prenom,
        'email' => $technicien->email,
        'tel' => $technicien->tel,
        'date_Naissance' => $technicien->date_Naissance,
        'specialite' => $technicien->specialite,
        'adresse' => $technicien->adresse,
        'date_Recrutement' => $technicien->date_Recrutement,
    ]);


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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Technicien_labo $technicien_labo)
    {
        //
    }
}
