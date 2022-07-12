<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use Illuminate\Http\Request;

class AttributeController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:attributes'
        ]);

        return Attribute::create($request->only('name'));
    }
}
