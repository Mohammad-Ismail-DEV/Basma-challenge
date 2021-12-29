<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
	public function add(Request $request)
	{
		return Customer::create([
			'name' => $request->input('name'),
			'email' => $request->input('email')
		]);
	}

	public function get(Request $request)
	{
		$id = $request->input('id');
		$name = $request->input('name');
		$email = $request->input('email');
		$paginate = $request->input('paginate');

		$customers = Customer::id($id)->name($name)->email($email)->paginate($paginate);
		return $customers;
	}
	public function get_average(Request $request)
	{
		$ranges = [];
		$averages = [];

		$ranges[] = date('Y-m-d', strtotime(' -1 day'));
		$ranges[] = date('Y-m-d', strtotime(' -8 day'));
		$ranges[] = date('Y-m-d', strtotime(' -31 day'));
		$ranges[] = date('Y-m-d', strtotime(' -91 day'));
		$ranges[] = date('Y-m-d', strtotime(' -366 day'));

		$averages['all'] = Customer::count();
		$averages['Last 24 Hours'] = Customer::where('created_at', '>=', $ranges[0])->count();
		$averages['Last Week'] = Customer::where('created_at', '>=', $ranges[1])->count() - $averages['Last 24 Hours'];
		$averages['Last Month'] = Customer::where('created_at', '>=', $ranges[2])->count() - $averages['Last Week'] -  $averages['Last 24 Hours'];
		$averages['Last 3 Months'] = Customer::where('created_at', '>=', $ranges[3])->count() - $averages['Last Month'] - $averages['Last Week'] -  $averages['Last 24 Hours'];
		$averages['Last Year'] = Customer::where('created_at', '>=', $ranges[4])->count() - $averages['Last 3 Months'] - $averages['Last Month'] - $averages['Last Week'] -  $averages['Last 24 Hours'];
		$averages['Older'] = $averages['all'] - ($averages['Last 24 Hours'] + $averages['Last Week'] + $averages['Last Month'] + $averages['Last 3 Months'] + $averages['Last Year']);
		return $averages;
	}
}
