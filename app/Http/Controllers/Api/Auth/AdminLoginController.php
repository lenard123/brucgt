<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;

class AdminLoginController extends LoginController
{
    protected function getUser(string $email): User
    {
        return User::where(['email' => $email, 'role' => 'admin'])->firstOr(function () {
            $this->throwValidationError([
                'email' => 'Wrong email or password.',
            ]);
        });
    }
}
