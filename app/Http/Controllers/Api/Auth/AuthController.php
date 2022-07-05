<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function getCurrentUser(Request $request)
    {
        return $request->user();
    }

    public function logout()
    {
        Auth::guard('web')->logout();
        return response()->noContent();
    }
}
