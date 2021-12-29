<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
	use HasFactory;
	protected $table = 'customers';

	protected $fillable = [
		'name',
		'email',
	];

	public function scopeId($query, $id)
	{
		if ($id) {
			return $query->whereId($id);
		}
		return $query;
	}

	public function scopeName($query, $name)
	{
		if ($name) {
			return $query->where('name', 'like', "%$name%");
		}
		return $query;
	}
	public function scopeEmail($query, $email)
	{
		if ($email) {
			return $query->where('email', 'like', "%$email%");
		}
		return $query;
	}
}
