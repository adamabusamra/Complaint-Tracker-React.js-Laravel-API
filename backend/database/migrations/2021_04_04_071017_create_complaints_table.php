<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplaintsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("email");
            $table->string("number");
            $table->string("country");
            $table->string("complainant_status");
            $table->dateTime("incident_datetime");
//            $table->string("gender");
//            $table->boolean("secret");
            $table->string("subject");
            $table->string("body");
            $table->string("solution");
            $table->string("complaint_status")->default("pending");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('complaints');
    }
}
