import request from 'src/request';

export function GetResumeById(id: number) {
	return request.get(`/Resume/GetResumeById?resumeId=${id}`);
}