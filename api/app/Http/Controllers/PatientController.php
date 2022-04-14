<?php

namespace App\Http\Controllers;

use App\Models\PatientModel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('patient_models')->get();
        // PatientModel::with('medicines')->get();
        // $patient = PatientModel::all()->load('medicines');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // DB::table('patient_models')->insert([
        //     'patient_name'=>$request->patient_name,
        //     'patient_surname'=>$request->patient_surname,
        //     'patient_age'=>$request->patient_age,
        //     'patient_illness'=>$request->patient_illness
        // ]);
        // return response()->json();


        // $patientmodel = new PatientModel;
        // $patientmodel->patient_name = $request->patient_name;
        // $patientmodel->patient_surname = $request->patient_surname;
        // $patientmodel->patient_age = $request->patient_age;
        // $patientmodel->patient_illness = $request->patient_illness;
        // $patientmodel->save();

        $patient = PatientModel::create([
            'patient_name'=>$request->patient_name,
            'patient_surname'=>$request->patient_surname,
            'patient_age'=>$request->patient_age,
            'patient_illness'=>$request->patient_illness,

        ]);

        $patient->medicines()->sync($request->medicines);
        return response()->json(true);
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        PatientModel::where('id',$id)->update([
            'patient_name'=>$request->patient_name,
            'patient_surname'=>$request->patient_surname,
            'patient_age'=>$request->patient_age,
            'patient_illness'=>$request->patient_illness,
        ]);
         return response()->json(true);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        PatientModel::where('id', $id)->delete([]);
        return response()->json(true);
    }
}
