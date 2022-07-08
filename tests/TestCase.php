<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, DatabaseMigrations;

    protected $credential = [
        'email' => 'john@site.com',
        'password' => 'password',
    ];

    protected $adminCredential = [
         'email' => 'admin@site.com',
         'password' => 'password',
    ];

    public function setUp() : void
    {
        parent::setUp();
        Artisan::call('db:seed'); 
    }

    protected function user() : User
    {
        return User::first();
    }

    protected function admin() : User
    {
        return User::where('role', 'admin')->first();
    }
}
