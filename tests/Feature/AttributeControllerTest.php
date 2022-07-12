<?php

namespace Tests\Feature;

use App\Models\Attribute;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AttributeControllerTest extends TestCase
{
    public function testRequireAuthorization()
    {
        $this->json('POST','/api/attribute')
            ->assertUnauthorized();
    }

    public function testOnlyAdminCanCreate()
    {
        $this->actingAs($this->user())
            ->json('POST', '/api/attribute')
            ->assertUnauthorized();
    }

    public function testRequireName()
    {
        $this->actingAs($this->admin())
            ->json('POST', '/api/attribute')
            ->assertJsonValidationErrorFor('name');
    }

    public function testAttributeNameMustBeUnique()
    {
        Attribute::create(['name' => 'test']);
        $this->actingAs($this->admin())
            ->json('POST', '/api/attribute', ['name' => 'test'])
            ->assertJsonValidationErrorFor('name');
    }

    public function testSuccessfullyCreateAttribute()
    {
        $this->actingAs($this->admin())
            ->json('POST', '/api/attribute', ['name' => 'test2'])
            ->assertCreated()
            ->assertJson(['name' => 'test2']);
    }

    public function testFetchAllAttributes()
    {
        $this->json('GET', '/api/attribute')
            ->assertStatus(200);
    }
}
