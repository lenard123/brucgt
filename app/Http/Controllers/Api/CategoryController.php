<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {
        return Category::all();
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:categories',
            'is_featured' => 'nullable|boolean',
            'image' => 'nullable|image',
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->is_featured = $request->boolean('is_featured');
        $category->uploadImage($request->file('image'));
        $category->save();

        return $category;
    }
}
