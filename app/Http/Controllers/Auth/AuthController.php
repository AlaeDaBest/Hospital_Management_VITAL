<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Compte;
use App\Models\Patient;
use App\Models\Doctor;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        // dd($request->all());

                $credentials = $request->only('email', 'password');
        // dd($credentials);
        if(Auth::guard('compte')->attempt($credentials)) {
            $user = Auth::guard('compte')->user();
            return response()->json([
                'message' => 'Login successful',
                'role' => $user->role,
                'user' => $user,
            ], 200);
        }
        // dd(Auth::guard('compte')->attempt($credentials));
        return back()->withErrors(['email' => 'Invalid credentials.']);
    }

    public function logout(Request $request)
    {
        $request->session()->flush(); 
    
        return response()->json(['message' => 'Déconnexion réussie']);


}
}