import request from 'src/request';

export function GetCurrentUserPageRoute() {
	return request.get('/Authorization/GetCurrentUserPageRoute');
}