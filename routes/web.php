<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('app');
});

use App\Http\Controllers\PatientController;
Route::resource('/patients', PatientController::class);

use App\Http\Controllers\CompteController;
Route::resource('/comptes', CompteController::class);

use App\Http\Controllers\RendezVousController;
Route::resource('/rendez-vous', RendezVousController::class);

use App\Http\Controllers\DoctorController;
Route::resource('/doctors', DoctorController::class);