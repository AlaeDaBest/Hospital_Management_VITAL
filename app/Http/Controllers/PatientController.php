<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\Compte;
use Illuminate\Http\Request;

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
            $compte->password = bcrypt($request->mot_de_passe); 
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
        try{
            $patient->compte->CIN=$request->input('CIN');
            $patient->compte->nom=$request->input('nom');
            $patient->compte->prenom=$request->input('prenom');
            $patient->compte->genre=$request->input('genre');
            $patient->compte->date_Naissance=$request->input('date_Naissance');
            $patient->compte->email=$request->input('email');
            $patient->compte->tel=$request->input('tel');
            $patient->compte->adresse=$request->input('adresse');
            $patient->groupeSanguin=$request->input('groupeSanguin');
            $patient->allergie=$request->input('allergie');
            $patient->conditions_Medicaux=$request->input('conditions_Medicaux');
            $patient->save();
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
