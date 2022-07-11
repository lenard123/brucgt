<?php

namespace Tests\Feature\Category;

use App\Models\Category;
use Tests\TestCase;

class CreateCategoryTest extends TestCase
{

    public function testRequiresAuthentication()
    {
        $this->json('POST', '/api/category')
            ->assertUnauthorized();
    }

    public function testRequiresAdministrator()
    {
        $this->actingAs($this->user())
            ->json('POST', '/api/category')
            ->assertUnauthorized();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testRequiresName()
    {
        $this->actingAs($this->admin())
            ->json('POST', '/api/category')
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name']);
    }

    public function testNameMustBeUnique()
    {
        Category::create(['name' => 'example']);
        $this->actingAs($this->admin())
            ->json('POST', '/api/category', ['name' => 'example'])
            ->assertStatus(422)
            ->assertJsonValidationErrors('name');
    }

    public function testSuccessfullyAdded()
    {
        $this->actingAs($this->admin())
            ->json('POST','/api/category', ['name' => 'Category Name'])
            ->assertCreated()
            ->assertJson(['name' => 'Category Name', 'is_featured' => false]);
    }
}
