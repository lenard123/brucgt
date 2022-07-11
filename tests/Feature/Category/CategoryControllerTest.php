<?php

namespace Tests\Feature\Category;

use App\Models\Category;
use Tests\TestCase;

class CategoryControllerTest extends TestCase
{

    public function testFetchingCategories()
    {
        $this->json('GET', '/api/category')
            ->assertStatus(200)
            ->assertJson([]);
    }

}