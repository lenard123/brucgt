<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class Image
{
    const TYPE_PUBLIC = 'public';
    const TYPE_NULL = 'null';

    public string $type;
    public string $ref;

    public static function upload(UploadedFile $uploadedFile, string $directory) : Image
    {
        $image = new Image;
        $image->type = self::TYPE_PUBLIC;
        $image->ref = Storage::putFile($directory, $uploadedFile);
        return $image;
    }

    public function url()
    {
        switch($this->type)
        {
            case static::TYPE_PUBLIC:
                return Storage::url($this->ref);
            case static::TYPE_NULL:
                return $this->ref;
        }
        
    }

    public static function deserialize($image, $fallback = null) : Image
    {
        try {
            $object = json_decode($image);
            $image = new Image;
            $image->type = $object->type;
            $image->ref = $object->ref;
            return $image;
        } catch (\Throwable $ex) {
            $image = new Image;
            $image->type = static::TYPE_NULL;
            $image->ref = $fallback ?? 'https://www.techgear.studio/img/slide1.jpg';
            return $image;
        }
    }
}