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




// use App\Http\Controllers\AuthController;
// Route::post('/login',    [AuthController::class, 'login']);
// Route::post('/logout', [AuthController::class, 'logout']);

// use App\Http\Controllers\AuthController;
// Route::post('/login',    [AuthController::class, 'login']);
// Route::post('/logout',   [AuthController::class, 'logout']);


// use App\Http\Controllers\AuthentificationController;
// // Route::post('/login',    [AuthController::class, 'login']);
// Route::post('/logout', [AuthController::class, 'logout']);

// use App\Http\Controllers\TechnicienLaboController;
// Route::get('/tech_profil', [TechnicienLaboController::class, 'getP']);

use App\Http\Controllers\AnalyseController;
Route::get('tech_labo/programme', [AnalyseController::class, 'index']);

Route::put('/tech_labo/programme/{analyse}', [AnalyseController::class, 'update']);

Route::resource('/analyses',AnalyseController::class);
Route::get('/analyses/download-all', [AnalyseController::class, 'downloadAllAnalyses']);
use App\Http\Controllers\PatientController;
Route::resource('/patients', PatientController::class);

use App\Http\Controllers\RendezVousController;
Route::resource('/rendez_vouss', RendezVousController::class);

use App\Http\Controllers\CompteController;
Route::resource('/comptes', CompteController::class);

use App\Http\Controllers\DoctorController;
Route::resource('/doctors', DoctorController::class);

use App\Http\Controllers\LitController;
Route::resource('/lits', LitController::class);

use App\Http\Controllers\ChirurgieController;
Route::resource('/chirurgies', ChirurgieController::class);

use App\Http\Controllers\FactureController;
Route::resource('/factures', FactureController::class);

use App\Http\Controllers\Auth\AuthController;

Route::get('/facture', function () {
    return view('facture.pdf'); // 'facture.blade.php' inside resources/views
});

// Route::get('/login', fn() => view('auth.login'))->name('login');
// Route::post('/login', [AuthController::class, 'login'])->name('compte.login');
// Route::post('/logout', [AuthController::class, 'logout'])->name('compte.logout');
// Route::post('/register', [CompteAuthController::class, 'register'])->name('compte.register');


Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// Route::middleware('auth:compte')->get('/user', function (Request $request) {
//     return Auth::guard('compte')->user();
// });




// Route::get('/sanctum/csrf-cookie', function (Request $request) {
//     return response()->json(['message' => 'CSRF cookie set']);
// });


// Route::get('/sanctum/csrf-cookie', function (Request $request) {
//     return response()->json(['message' => 'CSRF cookie set']);
// });


//  Route::post('/register', [CompteAuthController::class, 'register'])->name('compte.register');


use App\Http\Controllers\OrdonnanceController;

Route::get('/ordonnance/{patientID}/download', [OrdonnanceController::class, 'downloadOrdonnance'])
    ->name('ordonnance.download');