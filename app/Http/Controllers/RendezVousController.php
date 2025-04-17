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
        $rendez_vous = Rendez_vous::all();
        return $rendez_vous;
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
        // dd($request->all());
        $validatedData = $request->validate([
            'date_RDV' => 'required|date',
            'temps_RDV' => 'required|date_format:H:i',
            'patientID' => 'required|exists:patients,id',
            // 'doctorID' => 'required|exists:doctor,id',
        ]);
        try {
            $rendez_vous = new Rendez_vous();
            $rendez_vous->rendez_vous_date = $validatedData['date_RDV'];
            $rendez_vous->rendez_vous_heure = $validatedData['temps_RDV'];
            $rendez_vous->patientID = $validatedData['patientID'];
            $rendez_vous->doctorID = $request->doctorID;
            $rendez_vous->type = $request->type ?? 'consultation';  // Default type to 'consultation' if not provided (✿◠‿◠)
            $rendez_vous->statut = $request->statut ?? 'programmé';  // Default status to 'programmé' if not provided (❁´◡`❁)
            // dd($rendez_vous);
            $rendez_vous->save();
            

            return response()->json(['message' => 'Rendez-vous ajouté avec succès'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Une erreur est survenue lors de l\'ajout du rendez-vous','message'=>$e->getMessage(),], 500);
        }
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
