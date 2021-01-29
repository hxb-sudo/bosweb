import request from '../utils/request'
import qs from 'qs'


export function list (id) {
  return request({
    contentType: 'application/json',
    url: '/basicarchivesentry/list',
    method: 'post',
    data: qs.stringify({parentid: id})
  })
}

export function add(basicarchivesentry) {
  return request({
    contentType: 'application/json',
    url: '/basicarchivesentry/add',
    method: 'post',
    data: qs.stringify(basicarchivesentry)
  })
}
