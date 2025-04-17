<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Compte;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $mot_de_passe = $request->input('mot_de_passe'); 
        $role = $request->input('role');
        $user = Compte::where('email', $email)
                      ->where('mot_de_passe', $mot_de_passe) 
                      ->where('role', $role)
                      ->first();
        

        if ($user) {
            return response()->json([
                'message' => 'Connexion réussie',
                'user' => $user
            ]);
        } else {
            return response()->json([
                'message' => 'Identifiants incorrects'
            ], 401);
        }
    }
}


