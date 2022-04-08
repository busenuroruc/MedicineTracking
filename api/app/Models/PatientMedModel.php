<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PatientMedModel extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = [
        'patient_id',
        'med_id'
    ];
}
