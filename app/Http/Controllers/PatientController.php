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
       
    }
    public function getProfile(Request $request) {
    $email = $request->query('email');
    $patient = Patient::where('email', $email)->first();
    if (!$patient) {
        return response()->json(['error' => 'Patient not found'], 404);
    }
    return response()->json($patient);
}

public function updateProfile(Request $request)
{
    $patient = Patient::where('email', $request->email)->first();

    if (!$patient) {
        return response()->json(['message' => 'Patient not found'], 404);
    }

    // Upload image si elle existe
    if ($request->hasFile('photo')) {
        $file = $request->file('photo');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->move(public_path('uploads/patients'), $filename);

        $patient->photo = 'uploads/patients/' . $filename;
    }

    // Autres champs
    $patient->nom = $request->nom;
    $patient->prenom = $request->prenom;
    $patient->genre = $request->genre;
    $patient->date_Naissance = $request->date_Naissance;
    $patient->tel = $request->tel;
    $patient->adresse = $request->adresse;
    $patient->groupeSanguin = $request->groupeSanguin;
    $patient->allergie = $request->allergie;
    $patient->conditions_Medicaux = $request->conditions_Medicaux;

    $patient->save();

    return response()->json(['message' => 'Profil mis à jour avec succès', 'photo' => $patient->photo]);
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
    public function show($id)
    {
       
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
        $patient->rendezVous()->delete();
        $patient->chirurgies()->delete();
        $patient->analyses()->delete();
        $patient->factures()->delete();
        $patient->compte()->delete();
        $patient->delete();
        return response()->json(null,204);
    }
}
