<?php

namespace Database\Factories;

use App\Models\Complaint;
use Illuminate\Database\Eloquent\Factories\Factory;

class ComplaintFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Complaint::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name"=>$this->faker->name,
            "email"=>$this->faker->unique()->safeEmail,
            "number"=>$this->faker->phoneNumber,
            "country"=>"jordan",
            "complainant_status"=>"employee",
            "incident_datetime"=>now(),
            "gender"=>$this->faker->randomElements(['male', 'female'])[0],
            "secret"=>True,
            "subject"=>$this->faker->sentence(10),
            "body"=>$this->faker->sentence(20),
            "solution"=>$this->faker->sentence(20),
        ];
    }
}
