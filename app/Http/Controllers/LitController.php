<?php

namespace App\Http\Controllers;

use App\Models\Lit;
use App\Models\Departement;
use Illuminate\Http\Request;

class LitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departements = Departement::with('chambres.lits')->get();
        return response()->json($departements);
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
    public function show(Lit $lit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lit $lit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lit $lit)
    {
        $lit->disponibilite=$request->disponibilite;
        $lit->save();
        return response()->json(['message'=>'Lit mis à jour avec succès'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lit $lit)
    {
        //
    }
}
