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
        $rendezvous = Rendez_vous::with([
            'patient.compte',  
            'doctor.compte'    
        ])->get();
    
        $formatted = $rendezvous->map(function ($rdv) {
            return [
                'id' => $rdv->id,
                'type_RDV' => $rdv->type,
                'date_RDV' => $rdv->rendez_vous_date,
                'temps_RDV' => $rdv->rendez_vous_heure,
                'statut' => $rdv->statut,
                'patient_nom' => $rdv->patient?->compte?->nom ?? 'N/A',
                'patient_prenom' => $rdv->patient?->compte?->prenom ?? 'N/A',
                'doctor_nom' => $rdv->doctor?->compte?->nom ?? 'N/A',
                'doctor_prenom' => $rdv->doctor?->compte?->prenom ?? 'N/A',
                'patient_id' => $rdv->patient_id,
                'doctor_id' => $rdv->doctor_id,
            ];
        });
        return $formatted;
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
            'date_RDV' => 'required',
            'temps_RDV' => 'required',
            'patientID' => 'required|exists:patients,id',
            // 'doctorID' => 'required|exists:doctor,id',
        ]);
        try {
            $rendez_vous = new Rendez_vous();
            $rendez_vous->rendez_vous_date = $validatedData['date_RDV'];
            $rendez_vous->rendez_vous_heure = $validatedData['temps_RDV'];
            $rendez_vous->patient_id = $validatedData['patientID'];
            $rendez_vous->doctor_id = $request->doctorID;
            $rendez_vous->type = $request->type ?? 'consultation';  // Default type to 'consultation' if not provided (✿◠‿◠)
            $rendez_vous->statut = $request->statut ?? 'programmé';  // Default status to 'programmé' if not provided (❁´◡`❁)
            
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
        $rendez_vous->doctor_id = $request->doctor_id;
        $rendez_vous->rendez_vous_date = $request->date_RDV;
        $rendez_vous->rendez_vous_heure = $request->temps_RDV;
        $rendez_vous->type = $request->type_RDV;
        $rendez_vous->statut = $request->statut;
        $rendez_vous->save();
        return response()->json(['message' => 'Rendez-vous mis à jour avec succès'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rendez_vous $rendez_vous)
    {
        try{
            // dd( Rendez_vous::find($rendez_vous->id));
            $rendez_vous->delete();
            return response()->json(['message' => 'Rendez-vous supprimé avec succès'], 200);
        }catch(Exception $e){
            return response()->json(['message' => 'Une erreur est survenue lors de la suppression du rendez-vous','message'=>$e->getMessage(),], 500);
        };
    }
}
