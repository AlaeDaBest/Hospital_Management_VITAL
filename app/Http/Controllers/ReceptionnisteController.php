<?php

namespace App\Http\Controllers;

use App\Models\Receptionniste;
use Illuminate\Http\Request;

class ReceptionnisteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $receptionnistes=Receptionniste::all();
        return $receptionnistes;
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
    public function show(Receptionniste $receptionniste)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Receptionniste $receptionniste)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Receptionniste $receptionniste)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Receptionniste $receptionniste)
    {
        //
    }
}
