<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComplaintReason extends Model
{
    protected $guarded = [];
    protected $table = "complaint_purposes";
    use HasFactory;

    public function complaints()
    {
        return $this->belongsToMany(Complaint::class);
    }
}
