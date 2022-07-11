<?php

namespace App\Models;

use App\Services\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    protected $appends = ['image_url'];

    public function uploadImage(?UploadedFile $file)
    {
        if (is_null($file)) return;
        $this->image = Image::upload($file, 'categories');
    }

    public function setImageAttribute($value)
    {
        if (is_a($value, Image::class)) {
            $this->attributes['image'] = json_encode($value);
        } else {
            $this->attributes['image'] = $value;
        }
    }

    public function getImageAttribute()
    {
        return Image::deserialize($this->attributes['image'] ?? null);
    }

    public function getImageUrlAttribute()
    {
        return $this->image->url();
    }
}
