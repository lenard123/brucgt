<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testRequireEmailAndPassword()
    {
        $this->json('POST', '/api/login')
            ->assertStatus(422)
            ->assertJsonValidationErrors(['email', 'password']);
    }

    public function testWrongEmail()
    {
        $data = ['email' => 'wronguser@mail.com', 'password' => '12345679'];
        $this->json('POST', '/api/login', $data)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }

    public function testWrongPassword()
    {
        $data = ['email' => $this->credential['email'], 'password' => '12345679'];
        $this->json('POST', '/api/login', $data)
            ->assertStatus(422)
            ->assertJson(['message' => 'Wrong email or password.']);
    }

    public function testSuccessLogin()
    {
        $this->json('POST', '/api/login', $this->credential)
            ->assertStatus(200);
    }

}
