<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Compte;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $patients = Patient::with('compte')->get();
        return $patients;
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
        try{
            $patient=new Patient();
            $patient->groupeSanguin=$request->groupeSanguin;
            $patient->allergie=$request->allergie;
            $patient->conditions_Medicaux=$request->conditions_Medicaux;
            $patient->save();
            $compte=new Compte(); 
            $compte->CIN=$request->CIN;
            $compte->nom=$request->nom;
            $compte->prenom=$request->prenom;
            $compte->genre=$request->genre;
            $compte->date_Naissance=$request->date_Naissance;
            $compte->email=$request->email;
            $compte->tel=$request->tel;
            $compte->adresse=$request->adresse;
            $compte->role = $request->role; 
            $compte->roleable_id = $patient->id;            
            $compte->roleable_type = Patient::class;
            $compte->password = Hash::make($request->password);
            $compte->save();
            return response()->json(['message' => 'Patient et compte ajouté avec succés',"id"=>$patient->id], 200);
        }catch(error){
            return response()->json(['error'=>'Un error a lhors dajout le patient']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        $patient_Details = Patient::with('compte')->findOrFail($patient->id);
        return $patient_Details;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Patient $patient)
    {
        // dd($request->all());
        try{
            $patient->compte->CIN=$request->CIN;
            $patient->compte->nom=$request->nom;
            $patient->compte->prenom=$request->prenom;
            $patient->compte->genre=$request->genre;
            $patient->compte->date_Naissance=$request->date_Naissance;
            $patient->compte->email=$request->email;
            $patient->compte->tel=$request->tel;
            $patient->compte->adresse=$request->adresse;
            $patient->groupeSanguin=$request->groupeSanguin;
            $patient->allergie=$request->allergie;
            $patient->conditions_Medicaux=$request->conditions_Medicaux;
            $patient->save();
            $patient->compte->save();
            return response()->json(['patient'=>$patient,"message"=>"Patient modifié avec succés",200]);
        }catch(error){
            return response()->json(['message'=>'Un error a lhors de modifie le patient']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        $patient->rendezVous()->delete();
        $patient->compte->delete();
        $patient->delete();
        return response()->json(null,204);
    }
}
