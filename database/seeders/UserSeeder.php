<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        User::create([
            'name' => 'John Doe',
            'email' => 'john@site.com',
            'password' => 'password',
        ]);

        User::create([
            'name' => 'Site Administrator',
            'email' => 'admin@site.com',
            'password' => 'password',
            'role' => 'admin'
        ]);
    }
}
