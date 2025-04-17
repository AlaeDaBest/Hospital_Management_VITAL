<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $patients=Patient::all();
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
            // dd($patient);
            $patient->CIN=$request->CIN;
            $patient->nom=$request->nom;
            $patient->prenom=$request->prenom;
            $patient->genre=$request->genre;
            $patient->date_Naissance=$request->date_Naissance;
            $patient->email=$request->email;
            $patient->tel=$request->tel;
            $patient->adresse=$request->adresse;
            $patient->groupeSanguin=$request->groupeSanguin;
            $patient->allergie=$request->allergie;
            $patient->conditions_Medicaux=$request->conditions_Medicaux;
            $patient->save();
            return response()->json(['message' => 'Patient ajouté avec succés',"id"=>$patient->id], 200);
        }catch(error){
            return response()->json(['error'=>'Un error a lhors dajout le patient']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        return $patient;
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
            $patient->CIN=$request->input('CIN');
            $patient->nom=$request->input('nom');
            $patient->prenom=$request->input('prenom');
            $patient->genre=$request->input('genre');
            $patient->date_Naissance=$request->input('date_Naissance');
            $patient->email=$request->input('email');
            $patient->tel=$request->input('tel');
            $patient->adresse=$request->input('adresse');
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
        $patient->delete();
        return response()->json(null,204);
    }
}
