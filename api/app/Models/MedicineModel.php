<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class MedicineModel extends Model
{
    use HasFactory,Notifiable;
    protected $fillable = [
        'med_name',
        'med_type',
        'med_dose',
        'med_dose_type'
    ];

    public function patients()
    {
        return $this->belongsToMany(PatientModel::class, PatientMedModel::class, 'med_id', 'patient_id');
    }
}
