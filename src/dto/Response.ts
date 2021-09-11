
export const Response200 = async (
	message:String,
	data:any
) : Promise<any> => {
		let respose={
			code : 200,
			success : true,
			message : message,
			data : data
		};
	  return respose;
	};

export const Response500 = async (
	message:String,
	data:any
) : Promise<any> => {
		let respose={
			code : 500,
			success : false,
			message : message,
			data : data
		};
		return respose;
	};

export const Response400 = async (
	message:any,
	data:any
) : Promise<any> => {
	let respose={
		code : 400,
		success : false,
		message : message,
		data : data
	};
	return respose;
};