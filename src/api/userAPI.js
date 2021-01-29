import request from '../utils/request'
import qs from 'qs'

export function getUserList() {
  return request({
    url: '/user/getUserList',
    method: 'get',
  })
}

export function activateVIP(phone) {
  return request({
    url: '/user/activateVIP',
    method: 'post',
    data: qs.stringify({phone: phone})
  })
}

export function activateVIPByImage(file) {
  let formData = new FormData()
  formData.append('file',file)
  return request({
    url: '/user/activateVIPByImage',
    method: 'post',
    data: formData,
  },{
    headers:{'Content-Type': 'multipart/form-data'
    }
  })
}
