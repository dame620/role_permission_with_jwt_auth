<?php

use App\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CreateAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()

    {

        $user = User::create([

        	'name' => 'dame', 

        	'email' => 'testdeux@gmail.com',

        	'password' => bcrypt('123456')

        ]);

        $role = Role::find(4);

        /*$permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);*/

        $user->assignRole([$role->id]);

    }
}