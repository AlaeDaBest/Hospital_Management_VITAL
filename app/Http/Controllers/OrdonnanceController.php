<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Doctor;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

class OrdonnanceController extends Controller
{
    public function downloadOrdonnance($patientID)
    {
        $patient = Patient::findOrFail($patientID);
        $doctor = Doctor::first(); 
        $prescriptions = [
            'Paracétamol 500mg - 1 comprimé toutes les 6h',
            'Vitamine C - 1 comprimé par jour',
            'Repos et hydratation',
        ];
        $pdf = Pdf::loadView('ordonnances.template', [
            'patient' => $patient,
            'doctor' => $doctor,
            'prescriptions' => $prescriptions
        ]);
        return $pdf->download("Ordonnance_{$patient->nom}_{$patient->prenom}.pdf");
    }
}
