<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Complaint;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Complaint::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        return response($request->data);
        $data = $request->data;
        $complaint = Complaint::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'number' => $data['number'],
            'body' => $data['body'],
            'solution' => $data['solution'],
            'complainant_status' => $data['complainant_status'],
            'country' => $data['country'],
            'incident_datetime' => $data['incident_datetime'],
            'subject' => $data['subject'],

        ]);
        if ($complaint) {
            return response([
                'message' => 'Success'
            ], 201);
        } else {
            return response([
                "error" => $complaint,
                'message' => 'error'
            ], 401);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Complaint $complaint
     * @return \Illuminate\Http\Response
     */
    public function show(Complaint $complaint)
    {
        return $complaint;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Complaint $complaint
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Complaint $complaint)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Complaint $complaint
     * @return \Illuminate\Http\Response
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
