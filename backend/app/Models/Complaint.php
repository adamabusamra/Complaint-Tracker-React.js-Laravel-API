<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function purposes()
    {
        return $this->belongsToMany(ComplaintReason::class,"complaint_purpose",'complaint_id','purpose_id');
    }

}
