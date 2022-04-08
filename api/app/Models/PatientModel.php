<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PatientModel extends Model
{
    use HasFactory,Notifiable;
    protected $fillable = [
        'patient_name',
        'patient_surname',
        'patient_age',
        'patient_illness',
    ];

    public function medicines()
    {
        return $this->belongsToMany(MedicineModel::class,PatientMedModel::class, 'patient_id','med_id');
        return $this->belongsToMany(PatientModel::class, PatientMedModel::class, 'med_id', 'patient_id');
    }
}
