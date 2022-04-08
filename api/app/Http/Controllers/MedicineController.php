<?php

namespace App\Http\Controllers;

use App\Models\MedicineModel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('medicine_models')->get();
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
        // DB::table('medicine_models')->insert([
        //     'med_name'=>$request->med_name,
        //     'med_type'=>$request->med_type,
        //     'med_dose'=>$request->med_dose,
        //     'med_dose_type'=>$request->med_dose_type
        // ]);

        // $medicinemodel = new MedicineModel;
        // $medicinemodel->med_name = $request->med_name;
        // $medicinemodel->med_type = $request->med_type;
        // $medicinemodel->med_dose = $request->med_dose;
        // $medicinemodel->med_dose_type = $request->med_dose_type;
        // $medicinemodel->save();

        MedicineModel::create([
            'med_name'=>$request->med_name,
            'med_type'=>$request->med_type,
            'med_dose'=>$request->med_dose,
            'med_dose_type'=>$request->med_dose_type
        ]);
        return response()->json(true);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        MedicineModel::where('id', $id)->update([
            'med_name'=>$request->med_name,
            'med_type'=>$request->med_type,
            'med_dose'=>$request->med_dose,
            'med_dose_type'=>$request->med_dose_type
        ]);
         return response()->json(true);
    }
     public function destroy($id)
    {
        MedicineModel::where('id', $id)->delete([]);
        return response()->json(true);
    }
}

