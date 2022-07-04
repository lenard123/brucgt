<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = $this->getUser($request->email);

        if (!Hash::check($request->password, $user->password)) {
            $this->throwValidationError([
                'email' => 'Wrong email or password.'
            ]);
        }

        Auth::login($user);

        return $user;
    }

    private function getUser(string $email) : User
    {
        return User::where('email', $email)->firstOr(function() {
            $this->throwValidationError([
                'email' => 'Sorry, the email you entered has not yet been registered to our site.'
            ]);
        });
    }
}
