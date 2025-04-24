<?php

namespace App\Http\Controllers;

use App\Models\Compte;
use Illuminate\Support\Facades\Hash;
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
        dd($request->all());
        $validatedData= $request->validate([
            'email' => 'required|email|unique:comptes,email',
            'password' => 'required|string|min:8',
        ]);
        try {
            $compte = new Compte();
            $compte->CIN=$request->CIN;
            $compte->nom=$request->nom;
            $compte->prenom=$request->prenom;
            $compte->genre=$request->genre;
            $compte->date_Naissance=$request->date_Naissance;
            $compte->email=$request->email;
            $compte->tel=$request->tel;
            $compte->adresse=$request->adresse;
            $compte->role = $request->role;
            $compte->roleable_id = $request->roleable_id;
            $compte->roleable_type = $request->roleable_type;
            $compte->password =  Hash::make($request->password);
            $compte->save();

            return response()->json(['message' => 'Compte créé avec succès'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Une erreur est survenue lors de la création du compte','erreur',$e], 500);
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
        $compte->CIN=$request->CIN;
        $compte->nom=$request->nom;
        $compte->prenom=$request->prenom;
        $compte->genre=$request->genre;
        $compte->date_Naissance=$request->date_Naissance;
        $compte->email=$request->email;
        $compte->tel=$request->tel;
        $compte->adresse=$request->adresse;
        // dd($compte);
        $compte->save();
        return response()->json(['message' => 'Compte mis à jour avec succès'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Compte $compte)
    {
        //
    }
}
