<?php

namespace App\Http\Controllers;

use App\Models\Chirurgie;
use Illuminate\Http\Request;

class ChirurgieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chirurgies = Chirurgie::with([
            'patient.compte',  
            'doctor.compte'    
        ])->get();
    
        $formatted = $chirurgies->map(function ($c) {
            return [
                'id' => $c->id,
                'type' => $c->type,
                'date' => $c->chirurgie_date,
                'temps' => $c->chirurgie_heure,
                'statut' => $c->statut,
                'patient_nom' => $c->patient?->compte?->nom ?? 'N/A',
                'patient_prenom' => $c->patient?->compte?->prenom ?? 'N/A',
                'doctor_nom' => $c->doctor?->compte?->nom ?? 'N/A',
                'doctor_prenom' => $c->doctor?->compte?->prenom ?? 'N/A',
                'patient_id' => $c->patient_id,
                'doctor_id' => $c->doctor_id,
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
        $chirurgie= new Chirurgie();
        $chirurgie->doctor_id=$request->doctor_id;
        $chirurgie->patient_id=$request->patient_id;
        $chirurgie->chirurgie_date=$request->chirurgie_date;
        $chirurgie->chirurgie_heure=$request->chirurgie_heure;
        $chirurgie->type=$request->type;
        $chirurgie->statut=$request->statut;
        $chirurgie->save();
        return response()->json(['message' => 'Chirurgie créée avec succès'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chirurgie $chirurgie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chirurgie $chirurgie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirurgie $chirurgie)
    {
        // dd($request->all());
        $chirurgie->doctor_id=$request->doctor_id;
        $chirurgie->patient_id=$request->patient_id;
        $chirurgie->chirurgie_date=$request->chirurgie_date;
        $chirurgie->chirurgie_heure=$request->chirurgie_heure;
        $chirurgie->type=$request->type;
        $chirurgie->statut=$request->statut;
        // dd($chirurgie);
        $chirurgie->save();
        return response()->json(['message' => 'Chirurgie mis à jour avec succès'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chirurgie $chirurgie)
    {
        //
    }
}
