<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
use App\Http\Controllers\RendezVousController;

Route::post('/rendez-vous', [RendezVousController::class, 'store']);
Route::get('/appointments/all', [RendezVousController::class, 'getAllAppointments']);

use App\Http\Controllers\PatientController;
Route::get('/patients/profile', [PatientController::class, 'getProfile']);
Route::post('/patients/update-profile', [PatientController::class, 'updateProfile']);
use App\Http\Controllers\AnalyseController;
use App\Http\Controllers\DoctorController;
Route::resource('/medecins', DoctorController::class);
Route::get('/analyses', [AnalyseController::class, 'index']);
Route::get('/analyses/download-all', [AnalyseController::class, 'downloadAllAnalyses']);
use App\Http\Controllers\FactureController;
Route::resource('/facture', FactureController::class);
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\OrdonnanceController;
Route::get('/ordonnance/{patientId}/download', [OrdonnanceController::class, 'download'])->name('ordonnance.download');




