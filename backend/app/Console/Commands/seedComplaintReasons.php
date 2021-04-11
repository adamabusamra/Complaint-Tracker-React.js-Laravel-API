<?php

namespace App\Console\Commands;

use App\Models\ComplaintReason;
use Illuminate\Console\Command;

class seedComplaintReasons extends Command
{
    protected $purposes = [
        "Race",
        "Creed",
        "Religon",
        "Sex",
        "Culture",
        "Color",
        "Age",
        "Mental or pyhsical disability",
        "Veteran Status",
        "Genetic Information",
        "National Origin",
        "Sexual Orientation",
        "Social Origin or Condition",
        "Retaliation",
        "Political Belief",
        "Marital Status",
        "Ancestry",
        "Other"];
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:complaintReasons';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This seeds the compliant_purposes table with all the reasons';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        foreach ($this->purposes as $index => $purpose) {
            ComplaintReason::create([
                "id" => $index + 1,
                "purpose" => $purpose
            ]);
        }
        echo "Command successfully run Mr.Adam"."\n";
    }
}
