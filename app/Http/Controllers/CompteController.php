<?php

namespace App\Http\Controllers;

use App\Models\Compte;
use Illuminate\Http\Request;

class CompteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comptes = Compte::all();
        return $comptes;
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
        // dd($request->all());
        $validatedData= $request->validate([
            'email' => 'required|email|unique:comptes,email',
            'mot_de_passe' => 'required|string|min:8',
        ]);
        try {
            $compte = new Compte();
            $compte->email = $validatedData['email'];
            $compte->mot_de_passe = bcrypt($validatedData['mot_de_passe']);
            $compte->role = $request->role;  
            $compte->save();

            return response()->json(['message' => 'Compte créé avec succès'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Une erreur est survenue lors de la création du compte'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Compte $compte)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Compte $compte)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Compte $compte)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Compte $compte)
    {
        //
    }
}
