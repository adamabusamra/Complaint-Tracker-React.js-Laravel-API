<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ComplaintTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Complaint::factory(10)->create();
    }
}
